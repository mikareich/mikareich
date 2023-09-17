"use client";

import { routes } from "@/utils/routes";
import Link from "./Link";
import NavBar from "./NavBar";
import Container from "./Container";
import { useContext } from "react";
import { Context } from "./ContextProvider";

export default function Menu() {
  const { menuOpen } = useContext(Context)!;
  return (
    menuOpen && (
      <div
        className={`md:hidden w-full h-full bg-raisin-black-200 bg-opacity-80 backdrop-blur fixed left-0 top-0`}
      >
        <Container className="flex flex-col">
          <NavBar />
          <ol className="text-lg my-auto mt-[100px] text-center text-raisin-black-100">
            {routes.map(({ name, href }, index) => (
              <li key={name} className="mb-[20px]">
                <span className="text-primary">
                  {
                    // make index two digits
                    index.toLocaleString("en-US", {
                      minimumIntegerDigits: 2,
                      useGrouping: false,
                    })
                  }
                </span>
                <Link href={href}>{name}</Link>
              </li>
            ))}
          </ol>
        </Container>
      </div>
    )
  );
}
