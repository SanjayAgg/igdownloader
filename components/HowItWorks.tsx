import React from "react";
import styles from "../styles/howit.module.css";
import Image from "next/image";

export const HowItWorks = () => {
  return (
    <>
      <section className="pt-20 px-3 align-middle">
        <div className="max-w-screen-xl mx-auto px-2 py-1">
          <div
            className={`flex md:flex-row flex-col items-center justify-center align-center text-center`}
          >
            <div className={`flex-col w-full`}>
              <h2 className={`${styles.border_bottom} block pb-5`}>
                {" "}
                How to download from Instagram?{" "}
              </h2>
              <p className="py-5">
                To download photos or videos from Instagram, you need to follow
                these three easy steps. See their description below.{" "}
              </p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-top justify-center text-center gap-5">
            <div className="flex-col md:w-4/12 w-full">
              <div className={`${styles.boxshadow}`}>
                <Image
                  src="1.jpeg"
                  alt="Samplrr BTL"
                  width={600}
                  height={600}
                  loading="lazy"
                />
                <div className="p-5">
                  <h3 className={`${styles.border_bottom} pb-3`}>
                    Copy the URL
                  </h3>
                  <p className="pt-4">
                    Open Instagram application or website, copy the URL of the
                    photo, video, carousel or IGTV.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-col md:w-4/12 w-full">
              <div className={`${styles.boxshadow}`}>
                <Image
                  src="2.webp"
                  alt="Samplrr BTL"
                  width={600}
                  height={600}
                  loading="lazy"
                />
                <div className="p-5">
                  <h3 className={`${styles.border_bottom} pb-3`}>
                    Paste the link
                  </h3>
                  <p className="pt-4">
                    Go back to IG Reel Downloader, paste the link into the field
                    and hit enter.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-col md:w-4/12 w-full">
              <div className={`${styles.boxshadow}`}>
                <Image
                  src="3.jpg"
                  alt="Samplrr BTL"
                  width={600}
                  height={600}
                  loading="lazy"
                />
                <div className="p-5">
                  <h3 className={`${styles.border_bottom} pb-3`}>Download</h3>
                  <p className="pt-4">
                    Quickly you will get the results with several quality
                    options, download what fits your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
