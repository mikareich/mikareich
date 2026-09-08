import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("mobile menu traps focus and restores focus and scrolling on Escape", async ({
  page,
}) => {
  const trigger = page.getByRole("button", { name: "Open navigation menu" });
  const dialog = page.getByRole("dialog", { name: "Navigation menu" });

  await trigger.click();
  await expect(dialog).toBeVisible();
  await expect(
    page.getByRole("button", {
      name: "Open navigation menu",
      includeHidden: true,
    }),
  ).toHaveAttribute("aria-expanded", "true");
  await expect(page.locator("body")).toHaveCSS("overflow", "hidden");

  for (let index = 0; index < 8; index++) {
    await page.keyboard.press("Tab");
    await expect
      .poll(() =>
        dialog.evaluate((element) => element.contains(document.activeElement)),
      )
      .toBe(true);
  }
  await page.keyboard.press("Shift+Tab");
  await expect
    .poll(() =>
      dialog.evaluate((element) => element.contains(document.activeElement)),
    )
    .toBe(true);

  await page.keyboard.press("Escape");
  await expect(dialog).toHaveCount(0);
  await expect(trigger).toBeFocused();
  await expect(trigger).toHaveAttribute("aria-expanded", "false");
  await expect(page.locator("body")).not.toHaveCSS("overflow", "hidden");
  await expect(page.locator("body")).toHaveCSS("pointer-events", "auto");
});

test("mobile links close the menu for new and current routes", async ({
  page,
}) => {
  const trigger = page.getByRole("button", { name: "Open navigation menu" });
  const dialog = page.getByRole("dialog", { name: "Navigation menu" });

  await trigger.click();
  await dialog.getByRole("link", { name: "Projects", exact: true }).click();
  await expect(page).toHaveURL(/\/projects$/);
  await expect(dialog).toHaveCount(0);

  await trigger.click();
  const projects = dialog.getByRole("link", { name: "Projects", exact: true });
  await expect(projects).toHaveAttribute("aria-current", "page");
  await projects.click();
  await expect(dialog).toHaveCount(0);
  await expect(page.locator("body")).not.toHaveCSS("overflow", "hidden");
});

test("switching to desktop closes the modal without leaving a scroll lock", async ({
  page,
}) => {
  const trigger = page.getByRole("button", { name: "Open navigation menu" });
  const dialog = page.getByRole("dialog", { name: "Navigation menu" });

  await trigger.click();
  await expect(dialog).toBeVisible();
  await page.setViewportSize({ width: 640, height: 812 });
  await expect(dialog).toHaveCount(0);
  await expect(page.locator("body")).not.toHaveCSS("overflow", "hidden");
  await expect(page.locator("body")).toHaveCSS("pointer-events", "auto");
  await expect(
    page
      .getByRole("navigation", { name: "Primary" })
      .getByRole("link", { name: "Blog", exact: true }),
  ).toBeVisible();

  await page.setViewportSize({ width: 375, height: 812 });
  await expect(trigger).toHaveAttribute("aria-expanded", "false");
  await expect(dialog).toHaveCount(0);
});

test("history navigation closes the overlay and it stays closed on forward", async ({
  page,
}) => {
  const trigger = page.getByRole("button", { name: "Open navigation menu" });
  const dialog = page.getByRole("dialog", { name: "Navigation menu" });

  await trigger.click();
  await dialog.getByRole("link", { name: "Projects", exact: true }).click();
  await expect(page).toHaveURL(/\/projects$/);
  await expect(dialog).toHaveCount(0);
  await trigger.click();
  await expect(dialog).toBeVisible();
  await page.goBack();
  await expect(page).toHaveURL(/\/$/);
  await expect(dialog).toHaveCount(0);
  await page.goForward();
  await expect(page).toHaveURL(/\/projects$/);
  await expect(dialog).toHaveCount(0);
  await expect(page.locator("body")).not.toHaveCSS("overflow", "hidden");
});

test("short viewports and reduced motion support repeated menu toggles", async ({
  page,
}) => {
  await page.setViewportSize({ width: 320, height: 480 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  const trigger = page.getByRole("button", { name: "Open navigation menu" });
  const dialog = page.getByRole("dialog", { name: "Navigation menu" });

  for (let index = 0; index < 3; index++) {
    await trigger.click();
    await expect(dialog).toHaveCSS("animation-duration", "0s");
    await expect(
      dialog.getByRole("link", { name: "Blog", exact: true }),
    ).toBeInViewport();
    await dialog.getByRole("button", { name: "Close navigation menu" }).click();
    await expect(dialog).toHaveCount(0);
    await expect(trigger).toBeFocused();
  }
});

test("portfolio fonts, colors, and navigation fit across the breakpoint", async ({
  page,
}) => {
  await expect(page.locator("body")).toHaveCSS(
    "background-color",
    "rgb(5, 5, 7)",
  );
  await expect(page.locator("body")).toHaveCSS(
    "font-family",
    /Space Mono Fallback/,
  );
  await expect(page.getByRole("heading", { level: 1 })).toHaveCSS(
    "font-family",
    /Fira Code Fallback/,
  );

  for (const width of [320, 375, 639, 640, 768, 1280]) {
    await page.setViewportSize({ width, height: 812 });
    await expect
      .poll(() =>
        page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
      )
      .toBe(true);
    const navigation = page.getByRole("navigation", { name: "Primary" });
    if (width >= 640) {
      await expect(
        navigation.getByRole("link", { name: "About Me", exact: true }),
      ).toBeVisible();
      await expect(
        navigation.getByRole("link", { name: "Blog", exact: true }),
      ).toBeInViewport();
      await expect(
        navigation.getByRole("button", { name: "Open navigation menu" }),
      ).toBeHidden();
    } else {
      await expect(
        navigation.getByRole("button", { name: "Open navigation menu" }),
      ).toBeVisible();
    }
  }
});
