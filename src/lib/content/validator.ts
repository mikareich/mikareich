import type { VFile } from "vfile";

/** Helper class to assert that vfile signature extends given shape. */
export class Validator<Shape extends VFile> {
  private predicates = [] as ((file: VFile) => boolean)[];

  has<NextShape extends VFile>(
    predicate: (file: VFile) => file is NextShape,
  ): Validator<Shape & NextShape> {
    const builder = new Validator<Shape & NextShape>();
    builder.predicates = [...this.predicates, predicate];

    return builder;
  }

  verify(file: VFile): file is Shape {
    for (const predicate of this.predicates) {
      if (!predicate(file)) {
        console.warn(`Predicate ${predicate.name} failed on file.`);
        return false;
      }
    }
    return true;
  }
}
