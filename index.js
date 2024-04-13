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
    "span.titleline > a:first-child", //select first child <a>  of <span> with class name 'titleline'
    // callback function which recieves an array of selected elements as an argument
    (elements) =>
      //iterate over the selected elements and return another array of objects
      elements.map((element) => ({
        text: element.textContent, // select text content from the element
        href: element.getAttribute("href"), // select href attribute value from the element
      }))
  );

  console.warn(articles);
}

(async () => {
  await saveHackerNewsArticles();
})();
