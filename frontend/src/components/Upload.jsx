import React, { useState } from "react";
import { Storage } from "aws-amplify";

import ErrorAlert from "./ErrorAlert";

const Upload = ({ setNewUpload }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  async function onChange(e) {
    const file = e.target.files[0];
    setFile(file);
    console.log(file.name);
  }

  async function upload() {
    if (file) {
      try {
        await Storage.put(file.name, file, {
          level: "public",
          contentType: "text/csv",
        });
        // remove file to reset upload box
        setFile(null);
        // trigger refresh on item list
        setNewUpload(true);
      } catch (error) {
        setError(`Error uploading file: ${error}`);
      }
    }
  }

  return (
    <div>
      <div className="flex flex-row justify-center py-4">
        {file ? (
          <div className="flex flex-row items-center w-full border-2 rounded-md p-4 justify-between">
            <span className="text-md font-medium">{file.name}</span>
            <button
              type="button"
              onClick={upload}
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Upload File
            </button>
          </div>
        ) : (
          <label className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <input type="file" onChange={onChange} hidden="true" />
            Upload CSV
          </label>
        )}
      </div>

      {error ? <ErrorAlert error={error} setError={setError} /> : null}
    </div>
  );
};

export default Upload;
