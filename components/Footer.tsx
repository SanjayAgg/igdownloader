import Link from "next/link";
import React from "react";
import Image from "next/image";
// import logo from "../public/logo.png";


export const Footer = () => {
  return (
    <>
      <section className="pt-6 px-3 align-middle bg-blue-50 mt-16">
        <div className="max-w-screen-xl mx-auto px-2 py-1">
          <footer>
            <div className="grid grid-cols-1 gap-8 py-8 px-6 md:grid-cols-2">
              <div>
                <h4 className="pb-4 border-b-2">Top Categories</h4>
                <div className="grid grid-cols-2 gap-8 pt-5 md:grid-cols-2">
                  <div>
                    <ul>
                      <li className="mb-4">
                        <Link
                          href="https://www.smartrr.me/cold-emailing/"
                          target="_blank"
                        >
                          Cold Emailing
                        </Link>
                      </li>
                      <li className="mb-4">
                        <Link
                          href="https://www.smartrr.me/project-management/"
                          target="_blank"
                        >
                          Project Management
                        </Link>
                      </li>
                      <li className="mb-4">
                        <Link
                          href="https://www.smartrr.me/email-finder/"
                          target="_blank"
                        >
                          Email Finder
                        </Link>
                      </li>
                      <li className="mb-4">
                        <Link href="https://www.smartrr.me/crm/" target="_blank">
                          CRM
                        </Link>
                      </li>
                      <li className="mb-4">
                        <Link
                          href="https://www.smartrr.me/keyword-finder/"
                          target="_blank"
                        >
                          Keyword Finder
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li className="mb-4">
                        <Link
                          href="https://www.smartrr.me/email-verifier/"
                          target="_blank"
                        >
                          Email Verifier
                        </Link>
                      </li>
                      <li className="mb-4">
                        <Link
                          href="https://www.smartrr.me/content-generator/"
                          target="_blank"
                        >
                          Content Generator
                        </Link>
                      </li>
                      <li className="mb-4">
                        <Link
                          href="https://www.smartrr.me/landing-page-conversions/"
                          target="_blank"
                        >
                          Landing Page &amp; Conversion
                        </Link>
                      </li>
                      <li className="mb-4">
                        <Link
                          href="https://www.smartrr.me/email-finder/"
                          target="_blank"
                        >
                          Keyword Finder
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="pb-4 border-b-2">Top Products</h4>
                <div className="grid grid-cols-2 gap-8 pt-5 md:grid-cols-2">
                  <div>
                    <ul>
                      <li className="mb-4">
                        <Link
                          href="https://www.smartrr.me/product/clickup/"
                          target="_blank"
                        >
                          Clickup
                        </Link>
                      </li>
                      <li className="mb-4">
                        <Link
                          href="https://www.smartrr.me/product/apptivo/"
                          target="_blank"
                        >
                          Apptivo
                        </Link>
                      </li>
                      <li className="mb-4">
                        <Link
                          href="https://www.smartrr.me/product/wrike/"
                          target="_blank"
                        >
                          Wrike
                        </Link>
                      </li>
                      <li className="mb-4">
                        <Link
                          href="https://www.smartrr.me/product/woodpecker/"
                          target="_blank"
                        >
                          Woodpecker
                        </Link>
                      </li>
                      <li className="mb-4">
                        <Link
                          href="https://www.smartrr.me/product/trello/"
                          target="_blank"
                        >
                          Trello
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li className="mb-4">
                        <Link
                          href="https://www.smartrr.me/product/jira/"
                          target="_blank"
                        >
                          Jira
                        </Link>
                      </li>
                      <li className="mb-4">
                        <Link
                          href="https://www.smartrr.me/product/klenty/"
                          target="_blank"
                        >
                          Klenty
                        </Link>
                      </li>
                      <li className="mb-4">
                        <Link
                          href="https://www.smartrr.me/product/kwfinder/"
                          target="_blank"
                        >
                          KWfinder
                        </Link>
                      </li>
                      <li className="mb-4">
                        <Link
                          href="https://www.smartrr.me/product/mailshake/"
                          target="_blank"
                        >
                          Mailshake
                        </Link>
                      </li>
                      <li className="mb-4">
                        <Link
                          href="https://www.smartrr.me/product/pipedrive/"
                          target="_blank"
                        >
                          Pipedrive
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-6 px-4 md:flex md:items-center md:justify-between">
                <div className="text-center block w-full">
                    <Image
                    src="logo.png"
                    alt="Samplrr BTL"
                    width={220}
                    height={36}
                    loading="lazy"
                    className="mx-auto mb-5"
                    />
                <span className="text-sm text-center block w-full sm:text-center">
                    Copyright © 2022. All rights reserved | Design and Developed by <Link href="https://voxturr.com">Voxturr</Link> - 2022
                </span>
                </div>
                
              
            </div>
          </footer>
        </div>
      </section>
    </>
  );
};
