// EDIT THIS FILE TO COMPLETE ASSIGNMENT QUESTION 1
const { chromium } = require("playwright");

async function saveHackerNewsArticles() {
  // launch browser
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // go to Hacker News
  await page.goto("https://news.ycombinator.com");

  const articles = await page.$$eval(
    "span.titleline > a:first-child",
    (elements) =>
      elements.map((element) => ({
        text: element.textContent,
        href: element.getAttribute("href"),
      }))
  );
  console.warn(articles);
}

(async () => {
  await saveHackerNewsArticles();
})();
