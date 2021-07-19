import React from "react";

import { useLocation, Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavigationItem = ({ item }) => {
  const location = useLocation();

  return (
    <Link
      to={item.to}
      className={classNames(
        item.to === location.pathname
          ? "bg-gray-900 text-white"
          : "text-gray-300 hover:bg-gray-700 hover:text-white",
        "group flex items-center px-2 py-2 text-base font-medium rounded-md"
      )}
    >
      <item.icon
        className={classNames(
          item.to === location.pathname
            ? "text-gray-300"
            : "text-gray-400 group-hover:text-gray-300",
          "mr-4 flex-shrink-0 h-6 w-6"
        )}
        aria-hidden="true"
      />
      {item.name}
    </Link>
  );
};

export default NavigationItem;
