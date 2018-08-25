var puppeteer = require("puppeteer");

var MovieJson = async movies => {
  var list = [];
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1680, height: 918 });
  await page.goto("http://www.omdbapi.com/");

  movies.map(async movie => {
    await page.type("#t", "");
    await page.click(".col-lg-12 > .bs-component > #search-by-title-form > div > #t");
    await page.type("#t", `${movie}`);
    await page.click(".col-lg-12 > .bs-component > #search-by-title-form > div > #search-by-title-button");
    console.log("Loading data...");
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Fetching movie data");
    const innerText = await page.evaluate(() => document.querySelector(".alert.alert-success").textContent);
    console.log(`Result for: ${movie}`);
    list.push(innerText);
  });

  return list;

  await browser.close();
};

var movies = ["Deadpool", "The Dark Knight", "The Shawshank Redemption", "Guardians of the Galaxy", "The Godfather", "Inception"];

MovieJson(movies);
