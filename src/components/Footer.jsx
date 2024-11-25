import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-[#01A981]">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <p className="mt-4 text-sm text-gray-100 lg:mt-0 text-left">
              <strong>MIT License</strong><br />
              Copyright (c) 2024 Premwiss S.<br />
              Licensed under the MIT License.<br />
              <a href="/license" className="text-gray-100 hover:text-white">
                View full license
              </a>
            </p>
            <div className="flex justify-center text-white font-medium sm:justify-start">
              Courtesy of Software Team (R&D), PANASONIC AUTOMOTIVE SYSTEM ASIA PACIFIC
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
