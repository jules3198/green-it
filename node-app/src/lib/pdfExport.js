const puppeteer = require('puppeteer')

/**
 * 
 * @param {string} city 
 * @returns Fichier pdf dans le dossier src/pdf_export
 */
module.exports = async function generatePDF(city) {

  //We start a new browser, without showing UI
  const browser = await puppeteer.launch({ headless: true, slowMo: 50});
  const page = await browser.newPage();
  const url = 'http://localhost:3000/';

  //We load the page, one of my blog post (networkidle0 means we're waiting for the network to stop making new calls for 500ms
  await page.goto(url, {waitUntil: 'networkidle0'});

  await page.focus("input[type=text]")

  // variable Search
  await page.keyboard.type(city)

  await page.click("#root > div > div:nth-child(3) > div:nth-child(2) > ul > li");
  await page.click("#root > div > div:nth-child(3) > div:nth-child(1) > button");

  //Let's generate the pdf and close the browser
  const pdf = await page.pdf({ path: "src/pdf_export/rapport-"+city+".pdf", format: 'A3', landscape: true });
  await browser.close();
  return "src/pdf_export/rapport-"+city+".pdf";
}