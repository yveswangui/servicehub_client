import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

const SideNavigationItem = ({ href, name }) => {
  const navigate = useNavigate();
  const navigationClichHandler = () => {
    gsap.to("#sideMenu", {
      duration: 1,
      x: "100%",
      ease: "power3.inOut",
      onComplete: () => {
        navigate(href);
      },
    });
  };

  return (
    <div onClick={navigationClichHandler}>
      <h2 className="text-4xl font-assistant">{name}</h2>
    </div>
  );
};

export default SideNavigationItem;
