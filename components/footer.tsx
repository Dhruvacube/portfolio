import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import Socials from "../public/data/socials"

type Item = {
  "name": string,
  "file_icon_name": string,
  "boxicons": boolean,
  "devicons": boolean,
  "url": string
}
function get_element(item: Item) {
  if (item.boxicons) {return <i className={'bx bxl-'+item.file_icon_name + ' text-3xl'} key={item.name} title={item.name} ></i>}
  if (item.devicons) {return <i className={'devicon-'+item.file_icon_name+ ' text-3xl'} key={item.name} title={item.name}></i>}
  // return <Image src={"/svg/"+item.file_icon_name} width={20} height={20} key={item.name} title={item.name}/>
}

const Footer = () => {
  const data = Socials;
  return (
    <footer className="text-gray-600 body-font dark:text-white">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 dark:text-white">
          <Image className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" src="/profile.png" width={50} height={50} />
          <span className="ml-3 text-xl">Dhruva Shaw</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 dark:text-white">
          © <span id="yearid"><Script strategy="worker">{`span = document.getElementById("yearid");txt = document.createTextNode(new Date().getFullYear());span.appendChild(txt);`}</Script></span> —
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
          {data.map((item) => {
            return (
              <Link href={item.url}>
              <a className="text-gray-500 dark:text-gray-400" target="_blank">
                {get_element(item)}
              </a>
              </Link>
            )
            })}
          
        </span>
      </div>
    </footer>
  );
};

export default Footer;
