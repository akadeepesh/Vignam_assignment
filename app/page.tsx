"use client"
import "./card2.css"
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
      <div className="min-h-screen px-[60px] bg-[#f9f8f6]">

        {/* Section 1 */}
        <Section1 />

        {/*Section 2 */}
        <Section2 />

        {/* Section 3  Cards */}
        <Section3 />

        {/* Section 4  */}
        <Section4 />

        {/* Section 5 - Parallax  */}
        <Section5 />

        {/* Footer  */}
        <Footer />

      </div>
    </>

  )
}












