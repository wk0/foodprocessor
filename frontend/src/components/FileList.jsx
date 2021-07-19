import React, { useState, useEffect } from "react";
import { Storage } from "aws-amplify";
import { CalendarIcon, DatabaseIcon } from "@heroicons/react/solid";

function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

const FileItem = ({ file, id }) => {
  const [link, setLink] = useState();

  useEffect(() => {
    (async () => {
      const downloadLink = await Storage.get(file.key);
      setLink(downloadLink);
    })();
  }, [file]);

  return (
    <li key={id}>
      <a href={link} className="block hover:bg-gray-50">
        <div className="px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-indigo-600 truncate">
              {file.key}
            </p>
            <div className="ml-2 flex-shrink-0 flex">
              <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                Click to Download
              </p>
            </div>
          </div>
          <div className="mt-2 sm:flex sm:justify-between">
            <div className="sm:flex">
              <p className="flex items-center text-sm text-gray-500">
                <DatabaseIcon
                  className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                {formatBytes(file.size)}
              </p>
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
              <CalendarIcon
                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <p>Last Modified: {file.lastModified.toString()}</p>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
};

export default function FileList({ newUpload }) {
  const [files, setFiles] = useState(null);

  // init
  useEffect(() => {
    Storage.list("")
      .then((result) => setFiles(result))
      .catch((err) => console.log(err));
  }, []);

  // on new upload
  useEffect(() => {
    Storage.list("")
      .then((result) => setFiles(result))
      .catch((err) => console.log(err));
  }, [newUpload]);

  console.log(files);

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {files ? (
          files.map((file, idx) => <FileItem file={file} id={idx} />)
        ) : (
          <p className="p-4 text-center">No files found</p>
        )}
      </ul>
    </div>
  );
}
