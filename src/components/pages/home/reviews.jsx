import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { reviewsContent } from "@/constants/home_categories";

const ReviewsSection = () => {
  return (
    <div className="px-3 my-8 md:my-20" id="reviews_section">
      <h1 className="text-3xl md:text-5xl text-start">
        What are people saying about us?
      </h1>
      <div className="my-2 md:my-14">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {reviewsContent.map((review, index) => (
              <ReviewCaroselItem
                key={index}
                content={review.content}
                reviewerName={review.reviewerName}
                image={review.imageUrl}
              />
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default ReviewsSection;

const ReviewCaroselItem = ({ reviewerName, content, image }) => {
  return (
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
      <div className="p-1">
        <div className="flex items-center gap-4 p-3 md:p-6 aspect-auto">
          <img src={image} className="w-24 h-24 rounded-full" />
          <div className="flex flex-col">
            <p className="text-2xl font-semibold text-start">{reviewerName}</p>
            <p className="text-base text-start">{content}</p>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
};
