import { Button } from "@/components/ui/button";
import ReactStars from "react-rating-stars-component";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const SingleServiceLanding = ({ service }) => {
  return (
    <div className="px-4 mx-auto md:w-1/2">
      <div className="py-6 md:py-20">
        <div className="flex items-center gap-4 mb-4">
          <Link to="/services" className="">
            <ArrowLeft size={30} />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-start">
              {service.serviceName}
            </h1>
          </div>
        </div>
        <div className="">
          <img
            src={service.coverUrl}
            className="object-cover w-full h-full rounded-lg"
            alt="service_cover"
          />
        </div>
        <div className="text-start">
          <div className="flex items-center justify-between gap-10 my-5">
            <div>
              <p className="text-xl font-bold">{service.providerName}</p>
              <ReactStars
                size={20}
                value={service.rating}
                edit={false}
                half={true}
              />
            </div>
            <img
              src={service.avatarUrl}
              alt="avatar"
              className="w-20 h-20 rounded-full"
            />
          </div>
          <p>{service.description}</p>
          <div className="flex items-center justify-between my-4">
            <p className="text-3xl">{service.amount}</p>
            <Button>Book Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleServiceLanding;
