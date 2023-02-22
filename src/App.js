import "./App.css";
import BookSection from "./components/BookSection";
import ChooseUsSection from "./components/ChooseUsSection";
import CustomerSection from "./components/CustomerSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ReviewsSection from "./components/ReviewsSection";
import ServiceSection from "./components/ServiceSection";

function App() {
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
}

export default App;
