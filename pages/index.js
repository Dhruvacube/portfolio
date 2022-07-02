import Image from "next/image";
import Head from "next/head";

export default function Home() {
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
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-full w-full"
                  viewBox="0 0 24 24"
                  width={1200}
                  height={1200}
                  src="/profile.png"
                />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg dark:text-white">
                  Dhruva Shaw
                </h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-base dark:text-slate-300">
                  A discord.py bot developer and a full stack web developer
                  using python
                </p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4 dark:text-gray-300">
                Hey there myself, Dhruva Shaw.
                <br /> I am discord.py bot developer and a full stack web
                developer using python. Apart from that I am a robotics
                engineer, I do various different kind electronics and software
                projects. All of the research and code are open sourced, head
                over to my github and see more!
              </p>
              <br />
              <span className="font-medium title-font mt-4 text-gray-900 text-lg dark:text-white">
                🚀 Some Tools That I Use
              </span>
              <hr />
              <br />
              <p>
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original-wordmark.svg"
                  alt="python"
                  width="40"
                  height="40"
                />
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain-wordmark.svg"
                  alt="django"
                  width="40"
                  height="40"
                />
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg"
                  alt="vscode"
                  width="40"
                  height="40"
                />
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/visualstudio/visualstudio-plain.svg"
                  alt="visualstudio"
                  width="40"
                  height="40"
                />
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg"
                  alt="github"
                  width="40"
                  height="40"
                />
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/heroku/heroku-plain.svg"
                  alt="heroku"
                  width="40"
                  height="40"
                />
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg"
                  alt="bootstrap"
                  width="40"
                  height="40"
                />
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                  alt="html5"
                  width="40"
                  height="40"
                />
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                  alt="css3"
                  width="40"
                  height="40"
                />
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="javascript"
                  width="40"
                  height="40"
                />
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sqlalchemy/sqlalchemy-original.svg"
                  alt="sqlalchemy"
                  width="40"
                  height="40"
                />
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                  alt="postgresql"
                  width="40"
                  height="40"
                />
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"
                  alt="mongodb"
                  width="40"
                  height="40"
                />
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                  alt="mysql"
                  width="40"
                  height="40"
                />
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg"
                  alt="redis"
                  width="40"
                  height="40"
                />
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg"
                  alt="oracle"
                  width="40"
                  height="40"
                />
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/filezilla/filezilla-plain.svg"
                  alt="filezilla"
                  width="40"
                  height="40"
                />
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg"
                  alt="pandas"
                  width="40"
                  height="40"
                />
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg"
                  alt="photoshop"
                  width="40"
                  height="40"
                />
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
                  alt="php"
                  width="40"
                  height="40"
                />
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/aftereffects/aftereffects-original.svg"
                  alt="aftereffects"
                  width="40"
                  height="40"
                />
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/premierepro/premierepro-original.svg"
                  alt="premierepro"
                  width="40"
                  height="40"
                />
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg"
                  alt="flask"
                  width="40"
                  height="40"
                />
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/unity/unity-original.svg"
                  alt="unity"
                  width="40"
                  height="40"
                />
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/windows8/windows8-original.svg"
                  alt="windows8"
                  width="40"
                  height="40"
                />
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/matlab/matlab-original.svg"
                  alt="matlab"
                  width="40"
                  height="40"
                />
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg"
                  alt="googlecloud"
                  width="40"
                  height="40"
                />
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg"
                  alt="graphql"
                  width="40"
                  height="40"
                />
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/inkscape/inkscape-plain.svg"
                  alt="inkscape"
                  width="40"
                  height="40"
                />
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-plain.svg"
                  alt="jquery"
                  width="40"
                  height="40"
                />
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jira/jira-plain.svg"
                  alt="jira"
                  width="40"
                  height="40"
                />
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jupyter/jupyter-plain.svg"
                  alt="jupyter"
                  width="40"
                  height="40"
                />
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain.svg"
                  alt="laravel"
                  width="40"
                  height="40"
                />
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/markdown/markdown-original.svg"
                  alt="markdown"
                  width="40"
                  height="40"
                />
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-plain.svg"
                  alt="materialui"
                  width="40"
                  height="40"
                />
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoftsqlserver/microsoftsqlserver-plain.svg"
                  alt="microsoftsqlserver"
                  width="40"
                  height="40"
                />
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/neo4j/neo4j-original.svg"
                  alt="neo4j"
                  width="40"
                  height="40"
                />
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg"
                  alt="numpy"
                  width="40"
                  height="40"
                />
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bash/bash-original.svg"
                  alt="bash"
                  width="40"
                  height="40"
                />
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/atom/atom-original.svg"
                  alt="atom"
                  width="40"
                  height="40"
                />
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/arduino/arduino-plain.svg"
                  alt="arduino"
                  width="40"
                  height="40"
                />
              </p>
              {/* <a className="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
