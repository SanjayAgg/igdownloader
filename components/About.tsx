import Image from 'next/image';
import React from 'react';
import styles from '../styles/about.module.css';
// import aboutimg from '../public/about.jpg';

export const About = () => {
  return (
    <>
        <section className="pt-20 px-3 align-middle">
          <div className="max-w-screen-xl mx-auto px-2 py-1">
            <div className={`flex md:flex-row flex-col items-center ${styles.boxshadow}`}>
              <div className="flex-col md:w-2/5 w-full">
                <Image
                  src="about.jpg"
                  alt="Samplrr BTL"
                  width={600}
                  height={600}
                  loading="lazy"
                />
              </div>
              <div className="flex-col md:w-3/5 w-full p-8">
                <h2 className='mb-4'>Download Instagram Videos and Photos</h2>
                <p>IG Reel Downloader is an online web tool to help you with downloading Instagram Photos, Videos and IGTV videos. IG Reel Downloader is designed to be easy to use on any device, such as, mobile, tablet or computer.</p>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
