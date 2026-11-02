import { EnvelopeClosedIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import { useId } from "react";
import { Button } from "~/components/form/button";
import { Input } from "~/components/form/input";
import { Label } from "~/components/form/label";
import { HeroSection } from "~/components/layout/hero-section";
import { LIST } from "~/styles/list.css";
import { TYPOGRAPHY } from "~/styles/typography.css";

export default function SandboxPage() {
  const emailId = useId();

  return (
    <main>
      <HeroSection>
        <HeroSection.Title>Hey, I'm Mika</HeroSection.Title>
        <HeroSection.Subtitle>
          Student & programming enthusiast
        </HeroSection.Subtitle>
        <HeroSection.Background
          src="/images/layered-steps.svg"
          alt="Layered Steps"
        />
        <HeroSection.Tags>{["this", "that"]}</HeroSection.Tags>
        <HeroSection.Timestamp dateTime={new Date().toString()}>
          {new Date().toLocaleDateString("de")}
        </HeroSection.Timestamp>
      </HeroSection>

      <section>
        <h2 className={TYPOGRAPHY.HEADING_2}>Heading 2</h2>

        <p className={TYPOGRAPHY.BODY}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
          dolorum quis saepe delectus asperiores iusto quidem cum impedit non
          cumque magnam porro minus enim quod voluptates, tenetur natus
          accusamus ipsum!
        </p>

        <p className={TYPOGRAPHY.BODY}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
          dolorum quis saepe delectus asperiores iusto quidem cum impedit non
          cumque magnam porro minus enim quod voluptates, tenetur natus
          accusamus ipsum!
        </p>
      </section>

      <section>
        <h2 className={TYPOGRAPHY.HEADING_2}>Heading 2</h2>

        <p className={TYPOGRAPHY.BODY}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
          dolorum quis saepe delectus asperiores iusto quidem cum impedit non
          cumque magnam porro minus enim quod voluptates, tenetur natus
          accusamus ipsum!
        </p>

        <ol className={LIST.ORDERED}>
          <li className={LIST.ITEM}>Item</li>
          <li className={LIST.ITEM}>Item</li>
          <li className={LIST.ITEM}>Item</li>
          <li className={LIST.ITEM}>Item</li>
          <li className={LIST.ITEM}>Item</li>
          <li className={LIST.ITEM}>Item</li>
          <li className={LIST.ITEM}>Item</li>
          <li className={LIST.ITEM}>Item</li>
          <li className={LIST.ITEM}>Item</li>
          <li className={LIST.ITEM}>Item</li>
          <li className={LIST.ITEM}>Item</li>
        </ol>

        <ol className={LIST.UNORDERED}>
          <li className={LIST.ITEM}>Item</li>
          <li className={LIST.ITEM}>Item</li>
          <li className={LIST.ITEM}>Item</li>
          <li className={LIST.ITEM}>Item</li>
          <li className={LIST.ITEM}>Item</li>
          <li className={LIST.ITEM}>Item</li>
          <li className={LIST.ITEM}>Item</li>
          <li className={LIST.ITEM}>Item</li>
          <li className={LIST.ITEM}>Item</li>
          <li className={LIST.ITEM}>Item</li>
          <li className={LIST.ITEM}>Item</li>
        </ol>
      </section>

      <form>
        <h1 className={TYPOGRAPHY.HEADING_1}>Contact Form</h1>

        <p className={TYPOGRAPHY.BODY}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, omnis
          tempore accusamus nihil libero modi quia quaerat, id voluptates,
          veritatis tempora vitae ad repudiandae doloremque nulla corporis
          laborum officia numquam!
        </p>

        <br />

        <div>
          <Label title="E-Mail Address" htmlFor={emailId}>
            <p className={TYPOGRAPHY.SMALL}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>

            <Input
              prefixIcon={<EnvelopeClosedIcon />}
              id={emailId}
              name="email"
              className="w-full!"
            />
          </Label>

          <Button
            mode="filled"
            className="self-end"
            prefixIcon={<ExternalLinkIcon />}
          >
            Submit
          </Button>
        </div>
      </form>
    </main>
  );
}
