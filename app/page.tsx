// If your folder is lowercase 'home', make sure the imports look exactly like this:
import Stats from "@/components/home/Stats";
import BlogPreview from "@/components/home/BlogPreview";
import Contact from "@/components/home/Contact";
import Courses from "@/components/home/Courses";
import CTA from "@/components/home/CTA";
import Footer from "@/components/home/Footer";
import Founder from "@/components/home/Founder";
import FreePractice from "@/components/home/FreePractice";
import Hero from "@/components/home/Hero";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <div className="bg-[#F8FAFC] text-[#1F2937]">
      <Hero />
      <WhyChooseUs />
      <Courses />
      <Founder />
      <Testimonials />
      <FreePractice />
      <BlogPreview />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}
