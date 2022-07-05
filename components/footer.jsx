import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import React, { useState } from "react";
import * as fs from "fs";

const Footer = (props) => {
  const [data, setdata] = useState(props.return_data);
  return (
    <footer className="text-gray-600 body-font dark:text-white">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 dark:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Dhruva Shaw</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 dark:text-white">
          © 2020 —
          <Link href="https://twitter.com/DhruvaShaw">
            <a
              className="text-gray-600 ml-1 dark:text-white"
              rel="noopener noreferrer"
              target="_blank"
            >
              @DhruvaShaw
            </a>
          </Link>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-500 dark:text-gray-400">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
};

export async function getStaticProps() {
  let data = await fs.promises.readFile("public/data/socials.json", "utf-8");
  const return_data = JSON.parse(data).socials;
  return { props: { return_data } };
}

export default Footer;
