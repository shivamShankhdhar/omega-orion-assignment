"use client"
import CommentSection from "./components/CommentsSection/commentSection";
import FeatureSection from "./components/Features/features";
import Footer from "./components/footer/footer";
import HeroSection from "./components/HeroSection/heroSection";
import ProductsSection from "./components/Products/productsSection";

export default function Home() {
  return (
    <div className="flex w-full flex-col p-2">
      <HeroSection/>
      <ProductsSection/>
      <FeatureSection/>
      <CommentSection/>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}
