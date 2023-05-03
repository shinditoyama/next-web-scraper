import { useRouter } from "next/router";
import { useRef } from "react";

export default function SearchForm() {
  const router = useRouter();
  const search = useRef<HTMLInputElement | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search.current?.value) return;

    router.push({
      pathname: `/search/${search.current.value.replace(/ /g, "-")}`,
    });

    search.current.value = "";
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-nowrap items-center w-full mb-4">
        <input
          type="text"
          ref={search}
          className="flex-grow appearance-none border border-gray-400 bg-white rounded-md mr-2 py-2 px-3 hover:border-gray-600 focus:outline-none focus:border-gray-600"
          placeholder="Search..."
        />
        <button
          type="submit"
          className="px-4 py-2 border border-transparent bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Buscar
        </button>
      </div>
    </form>
  );
}
