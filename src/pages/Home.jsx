import React from 'react'
import HeroSection from '../components/HeroSection'
import InfiniteCarousel from '../components/InfiniteCarousel'
import SkinStorySection from '../components/SkinStorySection'
import FeatureProducts from '../components/FeatureProducts'
import Testimonials from '../components/Testimonials'
import SkinQuiz from '../components/SkinQuiz'
import GlowPromo from '../components/GlowPromo'
import { ToastContainer, toast } from 'react-toastify';
import Contact from '../components/Contact'

const Home = () => {
  return (
     <>
      <ToastContainer />
      <HeroSection />
      <InfiniteCarousel />
      <SkinStorySection />
      <FeatureProducts />
      <Testimonials />
      <SkinQuiz />
      <Contact />
      <GlowPromo />
     </>
  )
}

export default Home