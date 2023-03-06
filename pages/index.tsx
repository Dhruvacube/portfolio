import Image from "next/image";
import Head from "next/head";
import { Fragment } from "react";
import { Transition } from "@headlessui/react";
import { get_item, get_element } from "../components/footer";
import TechStacks from "../components/tech_stacks";
import Link from "next/link";
import { useAmp } from "next/amp";

export const config = { amp: "hybrid" };

const Home = () => {
  const isAmp = useAmp();
  return (
    <section className="text-gray-600 body-font shadow-lg dark:shadow-none rounded-b-lg dark:rounded-none">
      <Head>
        <title>Dhruva Shaw</title>
      </Head>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        show
      >
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
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8  ">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 ">
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
                  {/* skipcq: JS-0415 */}
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
                  <p className="text-base dark:text-slate-300">
                    A discord.py bot &amp; full-stack developer on python myself
                    a Robotics &amp; Automation Engg undergrad student
                  </p>
                </div>
                <div className="text-left">
                  <Link
                    href={get_item("github").url}
                    target="_blank"
                    className="relative hover:bg-gray-300 bg-gray-200 rounded px-4 py-2 inline-flex items-center justify-center mb-2 mt-2 mr-2 overflow-hidden text-lg font-medium text-gray-900"
                  >
                    {get_element(get_item("github"), "text-xl", false)}{" "}
                    &nbsp;GitHub <i className="bx bx-link-external" />
                  </Link>
                  <Link
                    href={get_item("linkedin").url}
                    target="_blank"
                    className="relative hover:bg-gray-300 bg-gray-200 rounded px-4 py-2 inline-flex items-center justify-center mb-2 mt-2 mr-2 overflow-hidden text-lg font-medium text-gray-900"
                  >
                    {get_element(get_item("linkedin"), "text-xl", false)}{" "}
                    &nbsp;LinkedIn <i className="bx bx-link-external" />
                  </Link>
                  <a
                    id="resume"
                    href="#"
                    className="relative hover:bg-gray-300 bg-gray-200 rounded px-4 py-2 inline-flex items-center justify-center mb-2 mt-2 mr-2 overflow-hidden text-lg font-medium text-gray-900"
                  >
                    <i className="bx bx-notepad" /> &nbsp;Full Resume
                  </a>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left  ">
                <p className="leading-relaxed text-lg mb-4 dark:text-gray-300">
                  Warm greetings from Dhruva Shaw
                  <br />
                  Myself a natural discord.py bot developer and a full stack
                  developer using python. A Robotics Engineering undergrad
                  student, my passion is with Electronics Automation and
                  software projects related to the automation while using
                  in-built AI. Writeups and researches related to my projects
                  are open-sourced and available for all towards a positive
                  contribution. Head over to my github for a detailed insight.
                </p>
                <TechStacks />
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </section>
  );
};

export default Home;
