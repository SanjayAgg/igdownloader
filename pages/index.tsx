import Head from 'next/head'
import Image from 'next/image'
import { About } from '../components/About'
import { BannerSearch } from '../components/BannerSearch'
import { Faqs } from '../components/Faqs'
import { Features } from '../components/Features'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { HowItWorks } from '../components/HowItWorks'
import { SeoBox } from '../components/SeoBox'

export default function Home() {
  return (
    <>
      <Header />
      <BannerSearch />
      <About />
      <HowItWorks />
      <Features />
      <Faqs />
      <Footer />
      <SeoBox />
    </>
  )
}
