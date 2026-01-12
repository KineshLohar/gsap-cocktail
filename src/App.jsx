import gsap from "gsap"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import { ScrollTrigger, SplitText } from "gsap/all"


gsap.registerPlugin(ScrollTrigger, SplitText)

function App() {
  return (
    <div className="h-[100vh]">
      <Navbar />
      <Hero />
      {/* <div className="h-[100vh]" /> */}
    </div>
  )
}

export default App
