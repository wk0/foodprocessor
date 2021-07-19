import React, { useEffect, useState } from "react";
import Paginated from "../components/Paginated";

const Header = (headers) => {
  // defaults
  if (!headers || headers.length === 0) {
    headers = ["name", "brand", "upc"];
  }
  return (
    <tr className="w-full">
      <th
        scope="col"
        className="w-full px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      >
        {headers[0]}
      </th>
      <th
        scope="col"
        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      >
        {headers[1]}
      </th>
      <th
        scope="col"
        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      >
        {headers[2]}
      </th>
      {/* <th scope="col" className="relative px-6 py-3 w-4">
        <span className="sr-only">Edit</span>
      </th> */}
    </tr>
  );
};

const Row = ({ food, foodIdx }) => {
  return (
    <tr key={foodIdx} className={foodIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {food.name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {food.brand}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        <a
          className="underline hover:text-indigo-600"
          href={`https://www.barcodelookup.com/${food.upc}`}
        >
          {food.upc}
        </a>
      </td>
      {/* <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <a href="#" className="text-indigo-600 hover:text-indigo-900">
          Edit
        </a>
      </td> */}
    </tr>
  );
};

function paginate(array, page_size, page_number) {
  // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
  return array.slice((page_number - 1) * page_size, page_number * page_size);
}

export default function FoodTable({ headers, foods }) {
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [foods]);

  if (foods.length === 0) {
    return null;
  }

  const page_size = 10; // TODO: Can make user changeable
  const pages = Math.ceil(foods.length / page_size);
  const food_page = paginate(foods, page_size, page);

  return (
    <div className="h-screen">
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="table-auto m-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 w-full">{Header(headers)}</thead>
                <tbody>
                  {food_page.map((food, foodIdx) => (
                    <Row food={food} foodIdx={foodIdx} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Paginated page={page} setPage={setPage} pages={pages} />
    </div>
  );
}
