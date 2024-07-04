import { talentAtYourFingerTips } from "@/constants/home_categories";

const TalentAtYourFingerTips = () => {
  return (
    <div className="mx-4 my-4 md:my-20">
      <h1 className="text-4xl md:text-5xl text-start">
        A network of skilled service providers,
        <br /> ready to tackle any task.
      </h1>

      <div className="grid grid-cols-1 gap-10 my-8 md:my-20 md:grid-cols-3">
        {talentAtYourFingerTips.map((talent, index) => (
          <SingleFingerTipTalent
            key={index}
            title={talent.title}
            description={talent.description}
            Icon={talent.icon}
          />
        ))}
      </div>
    </div>
  );
};

const SingleFingerTipTalent = ({ title, description, Icon }) => {
  return (
    <div>
      <div className="mb-3 md:mb-4">
        <Icon size={40} strokeWidth={1} />
      </div>
      <h2 className="mb-3 text-xl font-semibold md:mb-6 text-start font-montserrat">
        {title}
      </h2>
      <p className="text-lg text-start font-roboto">{description}</p>
    </div>
  );
};

export default TalentAtYourFingerTips;
