import React from "react";
import BookSection from "./BookSection";
import ChooseUsSection from "./ChooseUsSection";
import CustomerSection from "./CustomerSection";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ReviewsSection from "./ReviewsSection";
import ServiceSection from "./ServiceSection";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ServiceSection />
      <BookSection />
      <ChooseUsSection />
      <CustomerSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
};

export default Home;
