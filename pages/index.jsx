// import type { NextPage } from 'next'
import Image from "next/image";
// import type { NextPageContext } from 'next';
// import type {IncomingMessage} from 'http';
import Head from "next/head";
import React, { useState } from "react";
import * as fs from "fs";

const Home = (props) => {
  const [data, setdata] = useState(props.return_data);
  return (
    <section className="text-gray-600 body-font">
      <Head>
        <title>Dhruva Shaw</title>
      </Head>
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-64 overflow-hidden">
            <Image
              alt="content"
              className="object-cover object-center h-full w-full"
              width={1200}
              height={500}
              src="/bg.png"
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <Image
                  alt="profile image"
                  className="h-full w-full"
                  width={1200}
                  height={1200}
                  src="/profile.png"
                />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-5xl dark:text-white">
                  Dhruva Shaw
                </h2>
                {/* skipcq: JS-0415 */}{" "}
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-base dark:text-slate-300">
                  A discord.py bot &amp; full-stack developer on python myself a
                  Robotics &amp; Automation Engg undergrad student
                </p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4 dark:text-gray-300">
                Warm greetings from Dhruva Shaw
                <br />
                Myself a natural discord.py bot developer and a full stack
                developer using python. A Robotics Engineering undergrad
                student, my passion is with Electronics Automation and software
                projects related to the automation while using in-built AI.
                Writeups and researches related to my projects are open-sourced
                and available for all towards a positive contribution. Head over
                to my github for a detailed insight.
              </p>
              <span className="font-medium title-font mt-4 text-gray-900 text-lg dark:text-white">
                Tools Handled &amp; In-Use by me :
              </span>
              <hr />
              <br />
              <p>
                {data.map((item) => {
                  return (
                    <Image
                      key={item.name}
                      src={
                        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/" +
                        item.rel_path +
                        ".svg"
                      }
                      alt={item.name}
                      title={item.name}
                      width="40"
                      height="40"
                    />
                  );
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export async function getStaticProps({ req }) {
  let data = await fs.promises.readFile("public/data/tech_stack.json", "utf-8");
  const return_data = JSON.parse(data).tech_stacks;
  return { props: { return_data } };
}

export default Home;