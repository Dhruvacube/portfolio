import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import { useRouter } from "next/router";
import { resume } from "../public/data/socials";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const { pathname } = useRouter();
  const blog_url = "https://blogs.dhruvashaw.in/";
  return (
    <nav className="shadow-lg dark:shadow-none rounded-lg dark:rounded-none">
      <Script src="/js/toggler.js" />
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  href="/"
                  className={classNames(
                    pathname == "/"
                      ? "bg-gray-900 text-white"
                      : "text-gray-800 hover:bg-gray-700 hover:text-white",
                    "px-3 py-2 rounded-md text-sm font-medium dark:text-white",
                  )}
                  aria-current="page"
                >
                  Home
                </Link>

                <Link
                  href={resume}
                  className="text-gray-800 dark:text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Resume
                </Link>

                <Link
                  href="/projects"
                  className={classNames(
                    pathname == "/projects"
                      ? "bg-gray-900 text-white"
                      : "text-gray-800 hover:bg-gray-700 hover:text-white",
                    "px-3 py-2 rounded-md text-sm font-medium dark:text-white",
                  )}
                >
                  Projects
                </Link>

                <Link
                  href={blog_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 dark:text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Blogs
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              id="theme-toggle"
              type="button"
              className="text-black dark:text-white dark:hover:text-black hover:text-black hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
            >
              <svg
                id="theme-toggle-dark-icon"
                className="hidden w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
              <svg
                id="theme-toggle-light-icon"
                className="hidden w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="ml-3 relative">
              <div>
                <button
                  type="button"
                  className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <Image
                    className="h-8 w-8 rounded-full"
                    src="/profile.png"
                    alt="My profile logo"
                    width={50}
                    height={50}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 dark:text-white text-black">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium"
            aria-current="page"
          >
            Home
          </Link>
          <hr />
          <Link
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium"
          >
            Resume
          </Link>
          <hr />
          <Link
            href="/projects"
            className="block px-3 py-2 rounded-md text-base font-medium"
          >
            Projects
          </Link>
          <hr />
          <Link
            href={blog_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-2 rounded-md text-base font-medium"
          >
            Blogs
          </Link>
          <hr />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
