import { Button } from "@/components/ui/button";
import type { PostProps } from "@/types";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function NewsPost({ post }: { post: PostProps }){
    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <img src={post.image} alt="News company logo" className="h-48 w-96 object-scale-down"/>
            </CardHeader>
            <CardContent>
                <CardDescription>{post.text.slice(0, 250)+ "..."}</CardDescription>
            </CardContent>
            <CardFooter>
                <a href={post.url} target="_blank" className="w-full">
                    <Button type="submit" className="w-full">View Article</Button>
                </a>
            </CardFooter>
        </Card>
    )
}