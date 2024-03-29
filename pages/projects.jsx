import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import InfiniteScroll from "react-infinite-scroll-component";
import { ThreeDots } from "react-loader-spinner";
import Link from "next/link";
import Script from "next/script";
import { useAmp } from "next/amp";

export const config = { amp: false };

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export default function Projects({ data }) {
  const isAmp = useAmp();
  const [count, setCount] = useState(6);
  const [projects, setProjects] = useState(data.slice(0, count));
  const [hasMore, setHasMore] = useState(true);
  const getMorePost = async () => {
    const projects_new = data.slice(count, count + 6);
    if (projects_new.length === 0) {
      setHasMore(false);
    }
    setCount(count + 6);
    setProjects((projects) => [...projects, ...projects_new]);
  };
  return (
    <>
      <Head>
        <title>Projects | Dhruva Shaw</title>
      </Head>
      <Script id="show-banner">
        {`var aax_size='728x90';
        var aax_pubname = 'dhruvashaw-21';
        var aax_src='302';`}
      </Script>
      <Script src="https://c.amazon-adsystem.com/aax2/assoc.js" />
      <InfiniteScroll
        dataLength={projects.length}
        next={getMorePost}
        hasMore={hasMore}
        loader={
          <center className="mx-20 px-20 center ">
            <ThreeDots
              height="100"
              width="100"
              color="black"
              ariaLabel="loading"
            />
          </center>
        }
      >
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {projects.map((data) => (
                <div className="p-4 md:w-1/3 shadow-lg" key={data.id}>
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <Image
                      alt="project opengraph image"
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      width={721}
                      height={401}
                      src={
                        "https://opengraph.githubassets.com/" +
                        data.node_id +
                        "/" +
                        data.owner.login +
                        "/" +
                        data.name
                      }
                    />
                    <div className="p-6">
                      <Link href={data.html_url} target="_blank">
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3 dark:text-white">
                          {data.full_name}
                        </h1>
                      </Link>
                      <p className="leading-relaxed mb-3 dark:text-gray-300">
                        {data.description}
                      </p>
                      <div className="flex items-center flex-wrap">
                        <Link
                          href={data.html_url}
                          target="_blank"
                          className="text-indigo-500 dark:text-indigo-200 border-solid	border-2 border-sky-500 dark:border-gray-300 p-2 rounded inline-flex items-center md:mb-2 lg:mb-0"
                        >
                          Check it out
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14" />
                            <path d="M12 5l7 7-7 7" />
                          </svg>
                        </Link>
                        <span className="text-black dark:text-gray-300 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                          <svg
                            className="w-4 h-4 mr-1"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                          <Link
                            href={data.html_url + "/watchers"}
                            target="_blank"
                          >
                            {data.watchers_count}
                          </Link>
                        </span>
                        <span className="text-black dark:text-gray-300 inline-flex items-center leading-none text-sm">
                          <Link
                            href={data.html_url + "/stargazers"}
                            target="_blank"
                          >
                            <i className="bx bx-star w-4 h-4" />
                            {data.stargazers_count}
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </InfiniteScroll>
    </>
  );
}

export const getStaticProps = async () => {
  const repo_username = ["Dhruvacube", "The-4th-Hokage"];
  var data = [];
  for (var i = 0; i < repo_username.length; i++) {
    data = data.concat(
      await (
        await fetch(
          "https://api.github.com/users/" + repo_username[i] + "/repos",
          {
            method: "GET",
            headers: {
              "X-GitHub-Api-Version": "2022-11-28",
              Accept: "application/vnd.github+json",
              Authorization: process.env.GITHUB_TOKEN,
            },
          },
        )
      ).json(),
    );
  }
  shuffle(data);
  return {
    props: { data },
  };
};
