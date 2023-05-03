import ProductCard from "@/components/ProductCard";
import SearchForm from "@/components/SearchForm";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

interface Props {
  data: IProduct[];
}

export default function Query({ data }: Props) {
  const router = useRouter();
  const { query } = router.query;

  return (
    <>
      <Head>
        <title>{query} | Next Scraper</title>
        <meta name="description" content="Next Scraper - Mercado Livre" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="flex flex-col items-center justify-center h-[40vh] bg-primary">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold">Next Scraper</h2>
            <h4 className="text-xl font-thin">
              Você buscou por: <span className="font-bold">{query}</span>
            </h4>
          </div>
        </section>

        <section className="container max-w-4xl px-2 mt-5">
          <SearchForm />

          {data.map((item, i) => (
            <ProductCard key={i} data={item} />
          ))}
          {data.length === 0 && (
            <div className="text-center">
              <p className="font-semibold">
                Lamentamos, nenhum produto encontrado com: {query}.
              </p>
              <p className="font-normal">
                Tente novamente com outro termo para busca...
              </p>
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context.query;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/product/${query}`
  );
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};
