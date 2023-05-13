import puppeteer from "puppeteer";

describe("button's work", () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: true,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test("button should render on page", async () => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector(".popover-button");
  });

  test("button should render on page", async () => {
    await page.goto("http://localhost:3000");
    const button = await page.$(".popover-button");
    await button.click();
    await page.waitForSelector(".popover-tip");
  });

  afterEach(async () => {
    await browser.close();
  });
});
