

import './App.css'
import { Hero } from './app/sections/hero'
import { FallingCaps } from './app/sections/falling-caps'
import { HorizontalMarquee } from './app/sections/horizontal-marquee'
import { LabIntro } from './app/sections/lab-cylinder/intro'
import { LabCylinder } from './app/sections/lab-cylinder'
import { LastParallax } from './app/sections/last-parallax'
import { Footer } from './app/sections/footer'

function App() {


  return (
    <>
      <Hero />
      <FallingCaps />
      <HorizontalMarquee />
      <LabIntro />

      <LabCylinder />
      <LastParallax />
      <Footer />
    </>
  )
}

export default App
