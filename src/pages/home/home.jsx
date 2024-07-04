import NavBar from "@/components/shared/navbar/navbar";
import HomeLanding from "@/components/pages/home/landing";
import SearchAndCategories from "@/components/pages/home/search_and_categories";
import PopularServices from "@/components/pages/home/popular_services";
import TalentAtYourFingerTips from "@/components/pages/home/talent_at_your_fingertips";
import ReviewsSection from "@/components/pages/home/reviews";
import BuildTrust from "@/components/pages/home/build_trust";
import Footer from "@/components/shared/footer/footer";

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <div className="max-w-screen-xl mx-auto">
        <div className="max-w-screen-md mx-auto ">
          <HomeLanding />
          <SearchAndCategories />
        </div>
        <PopularServices />
        <TalentAtYourFingerTips />
        <BuildTrust />
        <ReviewsSection />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
