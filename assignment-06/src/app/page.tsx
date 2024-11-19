import Achievement from '@/components/Achievements'
import CoursesCategory from '@/components/CoursesCategory'
import Courses from '@/components/Courses'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import React from 'react'
import Team from '@/components/Team'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <CoursesCategory/>
    <Achievement/>
    <Courses/>
    <Team/>
    <Footer/>
    </>
  )
}

export default page