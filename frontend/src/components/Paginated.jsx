import React from "react";
import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/solid";

export default function Paginated({ pages, page, setPage }) {
  return (
    <nav className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
      <div className="-mt-px w-0 flex-1 flex">
        <span
          onClick={() => setPage(1)}
          className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
        >
          <ChevronDoubleLeftIcon
            className="mr-3 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          <span className="invisible sm:visible">Start</span>
        </span>
      </div>
      <div className="-mt-px w-0 flex-1 flex">
        <span
          onClick={() => setPage(page - 1)}
          className={
            page === 1
              ? "hidden"
              : "border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
          }
        >
          <ArrowNarrowLeftIcon
            className="mr-3 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          <span className="invisible sm:visible">Previous</span>
        </span>
      </div>
      <span className="border-indigo-500 text-indigo-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
        Page {page}
      </span>
      <div className="-mt-px w-0 flex-1 flex justify-end">
        <div
          onClick={() => setPage(page + 1)}
          className={
            page === pages
              ? "hidden"
              : "border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
          }
        >
          <span className="invisible sm:visible">Next</span>
          <ArrowNarrowRightIcon
            className=" ml-3 h-5 w-5 text-gray-400  "
            aria-hidden="true"
          />
        </div>
      </div>
      <div className="-mt-px w-0 flex-1 flex justify-end">
        <span
          onClick={() => setPage(pages)}
          className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
        >
          <span className="invisible sm:visible">End</span>
          <ChevronDoubleRightIcon
            className="mr-3 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </span>
      </div>
    </nav>
  );
}
