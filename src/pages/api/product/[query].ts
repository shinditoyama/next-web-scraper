import { load } from "cheerio";
import type { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";

const baseUrl = "https://www.kabum.com.br";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query } = req.query;
  const url = `${baseUrl}/busca/${query}`;

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const html = await page.content();
    const $ = load(html);

    const list: IProduct[] = [];

    $(".productCard").each((i, el) => {
      const title = $(".nameCard", el).text();
      const price = $(".priceCard", el).text();
      const links = baseUrl + $("a", el).attr("href");
      const image = $("img", el).attr("src");

      list.push({ title, price, links, image });
    });

    await browser.close();
    res.status(200).json(list);
  } catch (err) {
    const { message } = err as Error;
    return res.status(500).send(message);
  }
}
