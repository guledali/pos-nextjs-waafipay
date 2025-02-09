import { test, expect } from "@playwright/test";
import { PRODUCTS } from "~lib/mock";
import { getLocator } from "../testHelpers";

const firstProduct = PRODUCTS[0];
const lastProduct = PRODUCTS[PRODUCTS.length - 1];

/**
 * Testing - appliation entry (app/page.tsx)
 * The POS Shop - should display products,
 *
 */
test.describe("Products Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should find products in the product page", async ({ page }) => {
    await expect(page.getByText("Our Menu")).toBeVisible();
  });

  test("should display all product cards", async ({ page }) => {
    const productItems = await page
      .locator('[data-testid="product-item"]')
      .all();

    // Assert that there are at least 6 products
    expect(productItems.length).toBeGreaterThanOrEqual(PRODUCTS.length); // atleast 6 hardcoded products;
  });

  test("should display first product card", async ({ page }) => {
    const productItem = getLocator(
      page,
      '[data-testid="product-item"]',
      "first"
    );

    await expect(productItem).toContainText(firstProduct.name);
    await expect(productItem).toContainText(
      `$${firstProduct.price.toFixed(2)}`
    );
    await expect(productItem).toContainText(firstProduct.description);
    await expect(productItem).toContainText(firstProduct.category);
  });

  test("should display last product card", async ({ page }) => {
    const productItem = getLocator(
      page,
      '[data-testid="product-item"]',
      "last"
    );

    await expect(productItem).toContainText(lastProduct.name);
    await expect(productItem).toContainText(`$${lastProduct.price.toFixed(2)}`);
    await expect(productItem).toContainText(lastProduct.description);
    await expect(productItem).toContainText(lastProduct.category);
  });
});
