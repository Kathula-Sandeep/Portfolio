// ResumeDownload.jsx

import React from "react";

const ResumeDownload = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <a
        href="/resume.pdf"
        download
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Download My Resume
      </a>
    </div>
  );
};

export default ResumeDownload;
