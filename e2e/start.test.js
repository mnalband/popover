import puppeteer from "puppeteer";

describe("Page start", () => {
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

  test("test", async () => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector("body");
  });

  afterAll(async () => {
    await browser.close();
  });
});
