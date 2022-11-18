import React, { useState, Fragment } from "react";
import styles from "../styles/faqs.module.css";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${
          id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    );
  }

export const Faqs = () => {
    const [open, setOpen] = useState(1);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      <section className="pt-20 px-3 align-middle">
        <div className="max-w-screen-sm mx-auto px-2 py-1">
          <div className={`flex md:flex-row flex-col items-center justify-center align-center text-center`}>
            <div className={`flex-col w-full`}>
              <h2 className={`${styles.border_bottom} block pb-5`}>
                {" "}
                Frequently asked questions (FAQ){" "}
              </h2>
              <p className="py-5">
                IG Reel Downloader FAQ aims to provide information on frequently asked questions or concerns. Contact us through email if you can&apos;t find your answer.
              </p>
            </div>
          </div>

          <div className={`flex md:flex-row flex-col items-center justify-center align-center text-center`}>
            <div className={`flex-col w-full`}>
                <Fragment>
                    <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                        <AccordionHeader onClick={() => handleOpen(1)} className={`${styles.title_bar}`}>
                            What is an Ig Reel Downloader?
                        </AccordionHeader>
                        <AccordionBody className={`${styles.body_text}`}>
                            Smartrr IG Reel Downloader is a powerful online tool that lets you download Instagram photos, videos, and IGTV videos. It crashes less often than other mobile apps, and it doesn&apos;t require you to choose which kind of media content you need to download.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                        <AccordionHeader onClick={() => handleOpen(2)} className={`${styles.title_bar}`}>
                            What type of file formats does Instagram support for downloading?
                        </AccordionHeader>
                        <AccordionBody className={`${styles.body_text}`}>
                            Ig reel download is the most convenient format for downloading pictures, especially when you want to download bunches of jpg files. You can use a professional Ig reel downloader to help you. The most popular file format for videos is mp4 these days. It still gives you high quality and small video file size.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                        <AccordionHeader onClick={() => handleOpen(3)} className={`${styles.title_bar}`}>
                            What devices are compatible with the IG Reel Downloader?
                        </AccordionHeader>
                        <AccordionBody className={`${styles.body_text}`}>
                            IG Reel Downloader lets you download any video from Instagram. It is compatible with any device with an installed browser. You can use IG Reel Downloader from a mobile phone, tablet, notebook, laptop, or PC.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                        <AccordionHeader onClick={() => handleOpen(4)} className={`${styles.title_bar}`}>
                            How many videos can I download?
                        </AccordionHeader>
                        <AccordionBody className={`${styles.body_text}`}>
                            With our number one Ig reel downloader, you can download as many videos as possible.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
                        <AccordionHeader onClick={() => handleOpen(5)} className={`${styles.title_bar}`}>
                            Is it possible to save content other than video on this site?
                        </AccordionHeader>
                        <AccordionBody className={`${styles.body_text}`}>
                            IG Reel Downloader is the only application to download photos, videos, and IGTV from Instagram. It supports downloading content from all pages.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
                        <AccordionHeader onClick={() => handleOpen(6)} className={`${styles.title_bar}`}>
                            What is the best way to download Instagram photos and videos online?
                        </AccordionHeader>
                        <AccordionBody className={`${styles.body_text}`}>
                            Download a picture or video from Instagram fast and easy. You can download a post by pasting the URL into our tool, pressing Start, and clicking Download.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
                        <AccordionHeader onClick={() => handleOpen(7)} className={`${styles.title_bar}`}>
                            Can I Download Photos & Videos from Any User?
                        </AccordionHeader>
                        <AccordionBody className={`${styles.body_text}`}>
                            With IG Reel Downloader, you can download public videos from Instagram. Yes! But only from public accounts. We respect the user&apos;s privacy/copyright. Downloading private videos through IG Reel Downloader is not available and will not be. Our team is working on a browser extension that allows you to download personal Instagram posts directly from your desktop easily.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 8} icon={<Icon id={8} open={open} />}>
                        <AccordionHeader onClick={() => handleOpen(8)} className={`${styles.title_bar}`}>
                            What is the highest quality of images and videos I can download?
                        </AccordionHeader>
                        <AccordionBody className={`${styles.body_text}`}>
                            Go to the IG reel downloader and select either a photo or video you want to save. The images and videos quality depend on the original uploaded image, but usually, the highest image resolution is 1080 x 1350 pixels, which is the limit of Instagram. As for the video, it is the HD (720p) in most cases.
                        </AccordionBody>
                    </Accordion>
                </Fragment>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
