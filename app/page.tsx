import getData from "@/lib/getData";
import { PostProps } from "@/types";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import NewsPost from "@/components/NewsPost";

export default async function Home() {
  const data = await getData();
  
  // get random news article type
  // source: googled
  if (data !== null){
    const top_news = data["top_news"][Math.floor(Math.random() * data["top_news"].length)]["news"];
    // console.log(top_news);

    return (
          <div className="flex flex-col items-center flex-grow">
            <Carousel className="w-full max-w-sm">
              <CarouselContent>
                {top_news.map((p: PostProps) => (
                  <CarouselItem key={p.id}>
                    <NewsPost key={p.id} post={p}/>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
    )
  } else {
    return (
      <>
        <h1 className="text-4xl m-4">Had an issue fetching the data!</h1>
      </>
    )
  }
}
