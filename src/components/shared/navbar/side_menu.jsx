import CloseMenuIcon from "./close_menu_icon";
import SideNavigationItem from "./side_navigation_item";

const SideMenu = () => {
  const navigationItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Services",
      href: "/services",
    },
  ];

  return (
    <div
      id="sideMenu"
      className="fixed top-0 bottom-0 left-0 right-0 z-50 translate-x-full bg-white"
    >
      <CloseMenuIcon />
      <div className="flex flex-col items-center justify-center h-full gap-5">
        {navigationItems.map(({ href, name }, index) => (
          <SideNavigationItem key={index} href={href} name={name} />
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
