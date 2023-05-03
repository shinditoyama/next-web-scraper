import SearchForm from "@/components/SearchForm";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Next Scraper</title>
        <meta name="description" content="Next Scraper - Mercado Livre" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="flex flex-col items-center justify-center h-[40vh] bg-primary">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold">Next Scraper</h2>
            <h4 className="text-xl font-thin">
              Web scraping com Next.js API Routes e Puppeteer.
            </h4>
          </div>
        </section>
        <section className="container max-w-4xl px-2 mt-5">
          <SearchForm />
        </section>
      </main>
    </>
  );
}
