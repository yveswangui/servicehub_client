import { Button } from "@/components/ui/button";
import { serviceList } from "@/constants/home_categories";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ServicesList = () => {
  return (
    <div className="px-4 pt-2 pb-12">
      {serviceList.map((section, index) => (
        <ServiceSectionParent key={index} section={section} />
      ))}
    </div>
  );
};

export default ServicesList;

const ServiceSectionParent = ({ section }) => {
  return (
    <div className="py-4">
      <h1 className="text-3xl font-bold text-start font-montserrat">
        {section.title}
      </h1>
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full"
      >
        <CarouselContent>
          {section.items.map(
            (
              {
                amount,
                avatarUrl,
                coverUrl,
                description,
                id,
                providerName,
                serviceName,
                rating,
              },
              index
            ) => (
              <SingleServiceCard
                key={index}
                amount={amount}
                avatarUrl={avatarUrl}
                coverUrl={coverUrl}
                description={description}
                id={id}
                providerName={providerName}
                serviceName={serviceName}
                rating={rating}
              />
            )
          )}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
};

const SingleServiceCard = ({
  providerName,
  serviceName,
  description,
  amount,
  avatarUrl,
  coverUrl,
  id,
  rating,
}) => {
  return (
    <CarouselItem className=" md:basis-1/2 lg:basis-1/4">
      <Link to={`/services/${id}`} className="flex flex-col p-4 shadow-md">
        <div className="overflow-hidden rounded-md h-3/4">
          <img
            src={coverUrl}
            alt="card_title"
            className="object-cover w-full h-full transition-all duration-150 rounded-md aspect-square group-hover:scale-125"
          />
        </div>
        <div className="flex items-center justify-between my-2">
          <div className="flex flex-col items-start">
            <p className="text-lg font-semibold">{serviceName}</p>
            <p className="text-sm">{providerName}</p>
            <ReactStars size={20} value={rating} edit={false} half={true} />
          </div>
          <div className="">
            <img
              className="w-10 h-10 rounded-full"
              src={avatarUrl}
              alt="profile"
            />
          </div>
        </div>
        <div>
          <p className="text-base text-start line-clamp-3">{description}</p>
        </div>
        <div className="flex items-center justify-between my-2">
          <div>
            <p className="">{amount}</p>
          </div>
          <div>
            <Button className="z-20">Book</Button>
          </div>
        </div>
      </Link>
    </CarouselItem>
  );
};
