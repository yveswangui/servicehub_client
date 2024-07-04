import { cva } from "class-variance-authority";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "flex flex-col justify-between w-48 h-56 p-3 rounded-md group cursor-pointer",
  {
    variants: {
      color: {
        default: "bg-green-900",
        orange: "bg-orange-800",
        pink: "bg-pink-800",
        yellow: "bg-yellow-700",
        blue: "bg-blue-800",
        violet: "bg-violet-800",
      },
    },
    defaultVariants: {
      color: "default",
    },
  }
);
const hoverCardVariants = cva("", {
  variants: {
    color: {
      default: "bg-green-900",
      orange: "bg-orange-800",
      pink: "bg-pink-800",
      yellow: "bg-yellow-700",
      blue: "bg-blue-800",
      violet: "bg-violet-800",
    },
  },
  defaultVariants: {
    color: "default",
  },
});

const PopularServiceCard = ({ title, image, color, hoverContent }) => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <div className={cn(cardVariants({ color }))}>
          <h2 className="mb-2 text-xl font-bold text-white font-roboto text-start">
            {title}
          </h2>
          <div className="overflow-hidden rounded-md h-3/4">
            <img
              src={image}
              alt="transport"
              className="object-cover w-full h-full transition-all duration-150 rounded-md group-hover:scale-125"
            />
          </div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className={cn(hoverCardVariants({ color }))}>
        <p className="text-white font-montserrat">{hoverContent}</p>
      </HoverCardContent>
    </HoverCard>
  );
};

export default PopularServiceCard;
