import { BlogPreview } from "@/app/components/home/BlogPreview";
import { Contact } from "@/app/components/home/Contact";
import { Courses } from "@/app/components/home/Courses";
import { CTA } from "@/app/components/home/CTA";
import { Footer } from "@/app/components/home/Footer";
import { Founder } from "@/app/components/home/Founder";
import { FreePractice } from "@/app/components/home/FreePractice";
import { Hero } from "@/app/components/home/Hero";
import { Testimonials } from "@/app/components/home/Testimonials";
import { WhyChooseUs } from "@/app/components/home/WhyChooseUs";

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
