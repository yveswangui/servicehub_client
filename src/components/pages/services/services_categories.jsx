import { serviceCategories } from "@/constants/home_categories";

const ServicesCategories = () => {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center w-full gap-4 py-4 mx-auto md:gap-10">
        {serviceCategories.map((service, index) => (
          <SingleServiceCategory
            key={index}
            title={service.title}
            Icon={service.Icon}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesCategories;

const SingleServiceCategory = ({ title, Icon }) => {
  return (
    <div className="p-1">
      <div className="flex flex-col items-center cursor-pointer aspect-auto">
        <div>
          <Icon size={20} color="#414141" />
        </div>
        <div>
          <p className="text-sm text-[#414141]">{title}</p>
        </div>
      </div>
    </div>
  );
};
