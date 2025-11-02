import getData from "@/lib/getData";
import { PostProps } from "@/types";

import NewsPost from "@/components/NewsPost";

export default async function Home() {
  const data = await getData();
  
  // get random news article type
  // source: googled
  console.log(data);
  if (data !== null){

    const top_news = data["top_news"][Math.floor(Math.random() * data["top_news"].length)]["news"];
    console.log(top_news);

    return (
        // <div className="flex flex-col items-center min-h-screen">
        //     <h1 className="text-4xl m-4">News Navigator</h1>
        //     <div className="flex flex-col items-center flex-grow w-5/6">
        //         <div className="grid grid-cols-1 grid-cols-4 gap-6 w-full">

        //         {top_news.map(p => (
        //             <NewsPost key={p.id} post={p}/>
        //         ))}
        //     </div>
        //     </div>
        //     <footer>
        //         Sourced from:
        //         <br />
        //         <a href="https://worldnewsapi.com/">World News API</a>
        //     </footer>
        // </div>
        <div className="flex flex-col items-center flex-grow w-6/7">
            <div className="grid grid-cols-4 gap-6 w-full">

                {top_news.map((p: PostProps) => (
                    <NewsPost key={p.id} post={p}/>
                ))}
            </div>
        </div>
    );
} else {
    return (
        <>
            <h1 className="text-4xl m-4">Had an issue fetching the data!</h1>
        </>
    );
}
}
