import React from "react";
import Link from "next/link";
function Hero() {
  return (
    <div className="relative bg-white pt-[50px] pb-[50px] lg:pt-[50px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-5/12">
            <div className="hero-content">
              <h1 className="mb-3 text-4xl font-bold leading-snug text-dark sm:text-[42px] lg:text-[40px] xl:text-[42px]">
                One Stop <br />
                Community Solution <br />
                with Nblik
              </h1>
              <p className="mb-8 max-w-[480px] text-base text-body-color">
                Customizable Community Platform for Corporates,Associations,
                Organisations, NGOs, Creators, College and Society Clubs
              </p>
              <ul className="flex flex-wrap items-center">
                <li>
                  <Link href="/auth/login">
                    <a className="inline-flex items-center justify-center rounded-lg bg-primary py-4 px-6 text-center text-base font-normal text-white hover:bg-opacity-90 sm:px-10 lg:px-8 xl:px-10">
                      Get Started
                    </a>
                  </Link>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="inline-flex items-center justify-center py-4 px-6 text-center text-base font-normal text-body-color hover:text-primary sm:px-10 lg:px-8 xl:px-10"
                  >
                    <span className="mr-2">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="11" cy="11" r="11" fill="#3056D3" />
                        <rect
                          x="6.90906"
                          y="13.3636"
                          width="8.18182"
                          height="1.63636"
                          fill="white"
                        />
                        <rect
                          x="10.1818"
                          y="6"
                          width="1.63636"
                          height="4.09091"
                          fill="white"
                        />
                        <path
                          d="M11 12.5454L13.8343 9.47726H8.16576L11 12.5454Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    <Link href="https://play.google.com/store/apps/details?id=com.nblik.app">
                      <a>Download App</a>
                    </Link>
                  </a>
                </li>
              </ul>
              <div className="clients pt-16">
                <h6 className="mb-2 flex items-center text-xs font-normal text-body-color">
                  Some Of Our Clients
                  <span className="ml-2 inline-block h-[1px] w-8 bg-body-color"></span>
                </h6>
                <div className="flex items-center">
                  <div className="mr-4 w-full py-3">
                    <img src="/assets/brands/ayroui.svg" alt="ayroui" />
                  </div>
                  <div className="mr-4 w-full py-3">
                    <img src="/assets/brands/graygrids.svg" alt="graygrids" />
                  </div>
                  <div className="mr-4 w-full py-3">
                    <img src="/assets/brands/uideck.svg" alt="uideck" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden px-4 lg:block lg:w-1/12"></div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="lg:ml-auto lg:text-right">
              <div className="relative z-10 inline-block pt-11 lg:pt-0">
                <img
                  src="/assets/hero/hero.jpg"
                  alt="hero"
                  className="max-w-full lg:ml-auto"
                />
                <span className="absolute -left-8 -bottom-8 z-[-1]">
                  <svg
                    width="93"
                    height="93"
                    viewBox="0 0 93 93"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
