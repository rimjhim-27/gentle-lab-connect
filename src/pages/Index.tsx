
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BookingForm from "@/components/BookingForm";
import ReportAccess from "@/components/ReportAccess";
import Testimonials from "@/components/Testimonials";
import ContactInfo from "@/components/ContactInfo";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "The LABs Pathology Lab";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <BookingForm />
      <ReportAccess />
      <Testimonials />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default Index;
