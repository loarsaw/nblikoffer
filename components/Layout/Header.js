import React, { useState } from "react";
import Link from "next/link";
function Header() {
  const [navbarCollapse, setNavbarCollapse] = useState(false);
  return (
    <header className="flex w-full items-center bg-white">
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <a href="javascript:void(0)" className="block w-full py-5">
              <img
                src="/assets/logo/logo.svg"
                alt="logo"
                className="w-full "
                height={10}
                width={10}
              />
            </a>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                //   @click="navbarOpen = !navbarOpen"
                //   :className="navbarOpen && 'navbarTogglerActive' "

                className={
                  "absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden" +
                  (navbarCollapse ? " " : " navbarTogglerActive")
                }
                onClick={() => setNavbarCollapse(!navbarCollapse)}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
              </button>
              <nav
                //   :className="!navbarOpen && 'hidden' "
                id="navbarCollapse"
                className={
                  "absolute right-4 z-40 top-full w-full max-w-[250px] rounded-lg bg-white py-5 px-6 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none" +
                  (navbarCollapse ? " hidden" : "")
                }
              >
                <ul className="block lg:flex">
                  <li>
                    <Link href="/">
                      <a className="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-12 lg:inline-flex">
                        Home
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a className="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-12 lg:inline-flex">
                        Contact
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <a
                        href="about"
                        className="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-12 lg:inline-flex"
                      >
                        About
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <Link href="/auth/login">
                <a className="py-3 px-7 text-base font-medium text-dark hover:text-primary">
                  Login
                </a>
              </Link>
              <Link href="/auth/signup">
                <a className="rounded-lg bg-primary py-3 px-7 text-base font-medium text-white hover:bg-opacity-90">
                  Sign Up
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
