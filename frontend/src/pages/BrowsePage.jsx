import React, { useState } from "react";

import FoodTable from "../components/FoodTable";
import FileSelector from "../components/FileSelector";

import Page from "../components/Page";

const BrowsePage = () => {
  const [csv, setCsv] = useState({ headers: [], data: [] });

  return (
    <Page title="Browse">
      <div className="pb-4">
        <FileSelector setCsv={setCsv} />
      </div>
      <FoodTable headers={["Name", "Brand", "UPC"]} foods={csv?.data} />
    </Page>
  );
};

export default BrowsePage;
