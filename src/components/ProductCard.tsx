import Image from "next/image";
import Link from "next/link";

interface Props {
  data: IProduct;
}

export default function ProductCard({ data }: Props) {
  return (
    <article className="border border-gray-400 overflow-hidden hover:border-gray-600 bg-white shadow hover:shadow-2xl rounded mb-5">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4">
          <Image
            className="mx-auto"
            src={data.image!}
            alt={data.title}
            width={180}
            height={180}
          />
        </div>
        <div className="md:w-3/4 flex flex-col justify-between p-4">
          <div className="text-justify space-y-2">
            <p className="font-semibold">{data.title}</p>
            <p className="text-gray-500 text-xl font-bold">{data.price}</p>
          </div>
          <div>
            <Link
              href={data.links}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-serif hover:text-blue-600"
            >
              Acessar Link →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
