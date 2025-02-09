import { Page, Locator } from "@playwright/test";

type LocatorPosition = "first" | "last";

/**
 * Retrieves elements using Playwright's locator API.
 * Specify "first" or "last" to select elements.
 *
 */
export function getLocator(
  page: Page,
  selector: string,
  position: LocatorPosition
): Locator {
  const baseLocator = page.locator(selector);

  switch (position) {
    case "first":
      return baseLocator.first();
    case "last":
      return baseLocator.last();
  }
}
