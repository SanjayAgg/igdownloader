import Image from "next/image";
import React from "react";
import styles from "../styles/feature.module.css";

export const Features = () => {
  return (
    <>
      <section className="pt-20 px-3 align-middle">
        <div className="max-w-screen-xl mx-auto px-2 py-1">
          <div
            className={`flex md:flex-row flex-col items-center justify-center align-center text-center mb-10`}
          >
            <div className={`flex-col w-full`}>
              <h2 className={`${styles.border_bottom} block pb-5`}>
                {" "}
                IG Reel Downloader features{" "}
              </h2>
              {/* <p className="py-5">To download photos or videos from Instagram, you need to follow these three easy steps. See their description below. </p> */}
            </div>
          </div>

          <div
            className={`flex md:flex-row flex-col items-center mb-8 ${styles.boxshadow}`}
          >
            <div className="flex-col md:w-2/5 w-full">
              <Image
                src="4.jpg"
                alt="Samplrr BTL"
                width={600}
                height={600}
                loading="lazy"
              />
            </div>
            <div className="flex-col md:w-3/5 w-full p-8">
              <h3 className="mb-3">Photos Downloader</h3>
              <p>
                It is an excellent tool for saving images from Instagram posts
                using the IG reel downloader that smatrr provides. You can
                download Instagram pictures both individually and in bulk.
              </p>
            </div>
          </div>

          <div
            className={`flex md:flex-row flex-col items-center mb-8 ${styles.boxshadow}`}
          >
            <div className="flex-col md:w-3/5 w-full p-8">
              <h3 className="mb-3">Videos Downloader</h3>
              <p>
                You can download IG videos with IG Reel Downloader for any
                purpose. Videos can be downloaded individually or in multiples
                using IG Reel Downloader.
              </p>
            </div>
            <div className="flex-col md:w-2/5 w-full">
            <Image
                src="5.jpg"
                alt="Samplrr BTL"
                width={600}
                height={600}
                loading="lazy"
              />
            </div>
          </div>

          <div
            className={`flex md:flex-row flex-col items-center mb-8 ${styles.boxshadow}`}
          >
            <div className="flex-col md:w-2/5 w-full">
            <Image
                src="6.jpg"
                alt="Samplrr BTL"
                width={600}
                height={600}
                loading="lazy"
              />
            </div>
            <div className="flex-col md:w-3/5 w-full p-8">
              <h3 className="mb-3">IGTV Downloader</h3>
              <p>
                Download IGTV videos to your device if you can&apos;t watch them now.
                You can return to watching them later, even if the IGTV gets
                deleted.
              </p>
            </div>
          </div>

          <div
            className={`flex md:flex-row flex-col items-center mb-8 ${styles.boxshadow}`}
          >
            <div className="flex-col md:w-3/5 w-full p-8">
              <h3 className="mb-3">Reel Downloader</h3>
              <p>
                A new video format known as the reel is based on the same
                principle as TikTok. IG Reel Downloader allows you to download
                Instagram REEL videos. Our Ig reel downloader can help you to
                save your favourite Reels videos.
              </p>
            </div>
            <div className="flex-col md:w-2/5 w-full">
            <Image
                src="7.jpg"
                alt="Samplrr BTL"
                width={600}
                height={600}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
