import ServicesCategories from "@/components/pages/services/services_categories";
import ServicesList from "@/components/pages/services/services_list";
import ServicesSearch from "@/components/pages/services/services_search";
import Footer from "@/components/shared/footer/footer";
import NavBar from "@/components/shared/navbar/navbar";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <NavBar />
      <div className="max-w-screen-xl mx-auto">
        <div className="mt-[90px]">
          <ServicesSearch />
          <ServicesCategories />
          <ServicesList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
