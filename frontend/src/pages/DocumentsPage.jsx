import React, { useState } from "react";
import Page from "../components/Page";
import FileList from "../components/FileList";
import Upload from "../components/Upload";

const DocumentsPage = () => {
  const [newUpload, setNewUpload] = useState(false);

  return (
    <Page title="Documents">
      <Upload setNewUpload={setNewUpload} />
      <FileList newUpload={newUpload} />
    </Page>
  );
};

export default DocumentsPage;
