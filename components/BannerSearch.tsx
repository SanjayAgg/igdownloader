import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/home_banner.module.css";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { usePostMutation } from "../pages/api/api";
import useDownloader from "react-use-downloader";
// import ig_icon from '../public/ig_icon.webp';

import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

const slitePopup: Variants = {
  end: {
    y: 15,
    opacity: 0,
  },
  start: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "linear",
    },
  },
};

export const BannerSearch = () => {
  let i = 0;

  const [isReset, toggleReset] = useState<boolean>(false);

  const [isText, setIsText] = useState<any>();
  const [isImage, setIsImage] = useState<any>();
  const [isVideo, setIsVideo] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [instadownload] = usePostMutation();

  const Images: String[] = [];

  async function handleChange(e) {
    setIsImage(null);
    setIsVideo(null);
    setIsText(null);
    setIsLoading(true);
    e.preventDefault();

    const inurl = e.target["instaurl"].value;

    // console.log("URL", inurl);

    try {
      const { data } = await instadownload({
        variables: {
          url: inurl,
        },
      });
      if (data) {
        // console.log("Data", data);
        setIsText(data?.post?.text);
        if (data?.post?.img.length > 1) {
          for (i; i < data?.post.img.length; i++) {
            Images.push(data?.post.img[i]);
            setIsImage(Images);
          }
        }
        if (data?.post.video !== "false") {
          setIsVideo(data?.post.video);
          // console.log("video", isVideo);
        }
        setIsLoading(false);
      }
    } catch (e) {
      // console.log("Error", e);
      NotificationManager.error(
        "Please provide a valid url of instagram post",
        "Error",
        500000
      );
      setIsLoading(false);
    }
  }

  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

  return (
    <>
      <section className={`pb-28 pt-36 px-3 align-middle ${styles.mainbanner}`}>
        <form className={styles.form} onSubmit={handleChange}>
          <h2>Paste instagram url</h2>
          <div className={styles.form_container}>
            <input
              id="instaurl"
              type="url"
              required={true}
              autoComplete="off"
              placeholder="e.g. https://www.instagram.com/p/CNIKAmJAiLa/"
            />
            <button type="submit" className={styles.banner_button}>
              Download
            </button>
            <AnimatePresence>
              {isReset && (
                <motion.button
                  variants={slitePopup}
                  initial="end"
                  animate="start"
                  exit="end"
                  type="reset"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </form>
        <p className={styles.mt20}>Download Photos, Videos, IGTV & carousel</p>

        {isLoading && (
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center">
              <div role="status">
                <svg
                  className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-white"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        )}

        {/*Video Post */}
        {/* condition to check if video is present or not */}
        {isVideo != null && (
          <>
            <div className="max-w-screen-xl mx-auto">
              <div className="block max-w-xs mx-auto mt-4">
                <div className={`${styles.card}`}>
                  <div className="flex flex-row text-left p-3">
                    <Image
                      src={"ig_icon.webp"}
                      alt="Instagram"
                      width={20}
                      height={20}
                    />{" "}
                    <span className="text-black font-semibold text-sm ml-1">
                      Instagram
                    </span>
                  </div>
                  <div className="video">
                    <video controls>
                      <source src={isVideo} type="video/mp4" />
                    </video>
                  </div>
                  <div className={`text-sm ${styles.card_text}`}>{isText}</div>
                  <button
                    className={`${styles.btn} block m-auto`}
                    onClick={() => download(isVideo, "insta video.mp4")}
                  >
                    Download MP4
                  </button>
                  {isInProgress && (
                    <>
                      <progress id="file" value={percentage} max="100" />
                      {error}
                    </>
                  )}
                </div>
              </div>
            </div>
          </>
        )}

        {/*Image crousel */}

        {isImage ? (
          <>
            <div className="max-w-screen-xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">
                {isImage.map((item, index) => (
                  <div className={`${styles.card}`} key={index}>
                    <div className="flex flex-row text-left p-3">
                      <Image
                        src={"ig_icon.webp"}
                        alt="Instagram"
                        width={20}
                        height={20}
                      />{" "}
                      <span className="text-black font-semibold text-sm ml-1">
                        Instagram
                      </span>
                    </div>
                    <div className="image">
                      <Image
                        src={item}
                        alt="Instagram"
                        width={600}
                        height={400}
                      />
                    </div>
                    <div className={`text-sm ${styles.card_text}`}>
                      {isText}
                    </div>
                    <button
                      key={index}
                      className={`${styles.btn} block m-auto`}
                      onClick={() => download(item, `insta post ${index}.png`)}
                    >
                      Download Image
                    </button>
                    {/* show progress bar of button clicked only */}
                    {/* {isInProgress && (
                    <>
                      <progress id="file" value={percentage} max="100" />
                      {error}
                    </>
                  )}  */}
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : null}
      </section>
      <NotificationContainer />
    </>
  );
};
