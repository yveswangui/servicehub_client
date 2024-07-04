import { popularServices } from "@/constants/home_categories";
import PopularServiceCard from "./popular_service_card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const PopularServices = () => {
  return (
    <div className="mx-4 my-10" id="services_section">
      <div className="flex items-center justify-between">
        <h1 className="text-xl md:text-4xl">PopularServices</h1>
        <Button variant="link" asChild>
          <Link to="/services" className="text-xl md:text-base">
            {" "}
            See all
          </Link>
        </Button>
      </div>
      <div className="hidden gap-5 my-3 md:flex md:my-14">
        {popularServices.map((service, index) => (
          <PopularServiceCard
            key={index}
            title={service.name}
            image={service.imageSrc}
            color={service.bgColor}
            hoverContent={service.hoverContent}
          />
        ))}
      </div>
      <PopularServicesSm />
    </div>
  );
};

const PopularServicesSm = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: false,
      }}
      className="w-full md:hidden"
    >
      <CarouselContent>
        {popularServices.map((service, index) => (
          <>
            <CarouselItem className="mr-4 basis-1/2">
              <PopularServiceCard
                key={index}
                title={service.name}
                image={service.imageSrc}
                color={service.bgColor}
                hoverContent={service.hoverContent}
              />
            </CarouselItem>
          </>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default PopularServices;
