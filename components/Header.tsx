import { Transition } from "@headlessui/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// import logo from "../public/logo.png";
import styles from '../styles/header.module.css';
export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div>
      <nav className="bg-neutral-100 p-1 mt-0 fixed w-full z-10 pin-t shadow-md">
        <div className="max-w-screen-xl mx-auto px-2 py-1">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center w-full">
              <div className="flex-shrink-0">
                <Image
                  src="logo.png"
                  alt="Samplrr BTL"
                  width={220}
                  height={36}
                  loading="lazy"
                />
              </div>
              <div className="hidden md:block w-full">
                <div className="flex space-x-4 w-full justify-end items-center">
                  <Link href="https://www.smartrr.me/" className="text-black px-3 rounded-md text-sm font-medium">
                        Home
                  </Link>

                  <Link href="https://www.smartrr.me/posts/" className="text-black px-3 rounded-md text-sm font-medium">
                        Blog
                  </Link>
                  <Link href="https://www.smartrr.me/ebook/" className={`${styles.btn} ${styles.btn_bg} text-black px-3 rounded-md text-sm font-medium`}>Free Ebooks</Link>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-primary inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link href="https://www.smartrr.me/" className="hover:bg-green-100 text-black px-3 py-2 rounded-md text-sm font-medium block">
                      Home
                </Link>

                <Link href="https://www.smartrr.me/posts/" className="hover:bg-green-100 text-black px-3 py-2 mb-4 rounded-md text-sm font-medium block">
                      Blog
                </Link>

                <Link href="https://www.smartrr.me/ebook/" className={`${styles.btn} ${styles.btn_bg} text-black px-3 rounded-md text-sm font-medium inline-block`}>Free Ebooks</Link>

              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  </>
  )
}
