

import ParticlesBackground from "@/components/ParticlesBackground";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer'
import Hero from "@/components/Hero"
import SkillAndTools from "@/components/SkillAndTools"
import TimeLine from "@/components/TimeLine";
import Projects from "@/components/Projects"
import Technologies from "@/components/Technologies"
import About from "@/components/About";



export default function Home() {
  return (
    <div >
      <Navbar />
      <ParticlesBackground />
      <Hero/>
      <SkillAndTools/>
      <div className="max-w-[1400px]  mx-auto  bg-gradient-to-b from-[#000] to-[#100c08]  pt-8">
        <TimeLine />
        <Projects />
        <Technologies />
        <About />
        <Footer />
      </div>

    </div>
  );
}
