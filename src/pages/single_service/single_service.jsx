import SingleServiceLanding from "@/components/pages/single_service/single_service_landing";
import Footer from "@/components/shared/footer/footer";
import NavBar from "@/components/shared/navbar/navbar";
import { serviceList } from "@/constants/home_categories";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ClimbingBoxLoader } from "react-spinners";

const SingleService = () => {
  const slug = useParams().serviceId;
  const [service, setservice] = useState();
  const [loading, setLoading] = useState(true);

  const getSingleService = async (serviceId) => {
    const service = serviceList.find((ser) =>
      ser.items.some((item) => item.id === serviceId)
    );
    return service.items.find((item) => item.id === serviceId);
  };
  useEffect(() => {
    window.scrollTo({ top: 10, behavior: "smooth" });
  }, []);

  useEffect(() => {
    getSingleService(slug)
      .then((serv) => {
        setservice(serv);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [slug]);

  return (
    <div>
      <NavBar />
      <div className="max-w-screen-xl mx-auto">
        <div className="mt-[90px]">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <ClimbingBoxLoader color="black" size={30} />
            </div>
          ) : service ? (
            <>
              <SingleServiceLanding service={service} />
            </>
          ) : (
            <div className="flex items-center justify-center">
              <h1 className="my-20 text-2xl font-bold font-montserrat">
                Service not found
              </h1>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleService;
