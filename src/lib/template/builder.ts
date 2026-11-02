import {
  type ComponentProps,
  createElement,
  type ElementType,
  type ReactNode,
} from "react";

type TemplateComponent<
  BaseType extends ElementType,
  Props extends object = ComponentProps<BaseType>,
> = TemplateBuilder<BaseType, Props> & ((props: Props) => ReactNode);

type GuardFn<Props extends object> = (props: Props) => Props;

class TemplateBuilder<
  BaseType extends ElementType,
  Props extends object = ComponentProps<BaseType>,
> extends Function {
  private guards: GuardFn<Props>[] = [];

  constructor(
    protected readonly Base: BaseType,
    protected readonly fallbackProps: Partial<Props> = {},
  ) {
    super();

    this.Base = Base;

    // Wrap base component and extend it with this class
    const Component = this.generate.bind(this);
    Object.assign(Component, this);
    Object.setPrototypeOf(Component, new.target.prototype);

    // biome-ignore lint/correctness/noConstructorReturn: We manipulate the return val of a ComponentType
    return Component as TemplateComponent<BaseType, Props>;
  }

  with<Property extends keyof Props>(
    property: Property,
    guard: (props: Props) => Props[Property],
  ) {
    this.guards.push((props) => {
      props[property] = guard(props);
      return props;
    });

    return this;
  }

  /** Removes a property from the element before it is created */
  without<Property extends keyof Props>(property: Property) {
    this.guards.push((props) => {
      delete props[property];
      return props;
    });

    return this;
  }

  subcomponent<Name extends string, Subcomponent extends ElementType>(
    name: Name,
    component: Subcomponent,
  ): this & Record<Name, Subcomponent> {
    if (name in this) {
      throw new Error(`Cannot overwrite existing template property "${name}".`);
    }

    return Object.assign(this, { [name]: component }) as this &
      Record<Name, Subcomponent>;
  }

  private generate(props: Props): ReactNode {
    let modifiedProps = { ...props };

    for (const property in this.fallbackProps) {
      const fallback = this.fallbackProps[property];
      if (fallback !== undefined) modifiedProps[property] ??= fallback;
    }

    // aggregate properties with guard fns and fallback values
    modifiedProps = this.guards.reduce((acc, guard) => {
      return guard(acc);
    }, modifiedProps);

    return createElement(this.Base, modifiedProps);
  }
}

/**
 * Extension of the `TemplateBuilder` as factory.
 * This allows for at most one call of .props on the building chain.
 */
class TemplateBuilderWithNoProps<
  BaseType extends ElementType,
  Props extends object = ComponentProps<BaseType>,
> extends TemplateBuilder<BaseType, Props> {
  props<NewProps extends object>(fallbackProps?: Partial<NewProps>) {
    return new TemplateBuilder<BaseType, NewProps>(
      this.Base,
      fallbackProps,
    ) as unknown as TemplateComponent<BaseType, NewProps>;
  }
}

/**
 * Templates a base element to manipulate properties and add subcomponents.
 *
 * The template on the element allows for a properties type, property manipulation
 * and subcomponents. It creates a new element on the base element with aggregated
 * values.
 *
 * @param Base The base element to template
 * @returns The templated component
 *
 * @example
 *
 * ```ts
 * const Button = (
 * template("Button")
 * // Overwrites ComponentProps<"Button"> and provides { a: 1 } as fallback
 * .props<{ a?: number, b: number }>({ a: 1 })
 * // Manipulate props.b right before calling the base element
 * .with("b", (allProps) => allProps.b + 2 )
 * )
 * ```
 */
export function template<BaseType extends ElementType>(Base: BaseType) {
  return new TemplateBuilderWithNoProps<BaseType>(
    Base,
  ) as unknown as TemplateBuilderWithNoProps<BaseType> &
    TemplateComponent<BaseType, ComponentProps<BaseType>>;
}
