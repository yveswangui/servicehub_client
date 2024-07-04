import { howTrustIsBuilt } from "@/constants/home_categories";
import { GlobeLock } from "lucide-react";

const BuildTrust = () => {
  return (
    <div className="relative w-full px-5 py-5 overflow-hidden bg-green-900 md:rounded-lg md:py-14">
      <GlobeLock
        className="absolute hidden text-orange-500 md:flex md:-right-10 md:top-0 -bottom-40"
        size={500}
      />
      <h1 className="text-5xl font-bold text-white md:text-6xl text-start">
        How <span className="text-orange-500">Trust</span> <br />
        is <span className="text-orange-500">Built</span>
      </h1>
      <p className="mt-3 text-xl text-white text-start">
        We provide solutions to problems that clients and service providers
        face.
        <br />
        Some of the solutions provided include:
      </p>
      <ul className="mt-5 ml-4">
        {howTrustIsBuilt.map((trust, index) => (
          <TrustItem
            key={index}
            Icon={trust.icon}
            description={trust.description}
          />
        ))}
      </ul>
    </div>
  );
};

export default BuildTrust;

const TrustItem = ({ Icon, description }) => {
  return (
    <li className="flex items-center gap-4 my-4">
      <div>
        <Icon size={40} color="white" />
      </div>
      <p className="text-white font-roboto text-start">{description}</p>
    </li>
  );
};
