const API_KEY = process.env.API_KEY;
import { data } from "@/mock";

export default async function getData(useMock: boolean = false){

    
    if (useMock){
        return data;
    }

    try {
        const response = await fetch("https://api.worldnewsapi.com/top-news?source-country=us&language=en", {
                method: 'GET', 
                headers: {
                    'x-api-key': API_KEY
                }
            }
        );
        
        if (!response.ok) {
            return null;
        }
        const jsono = await response.json();
        console.log(jsono);
        if (jsono['top_news'].length == 0){
            return null;
        }
        return jsono;
    } catch (error) {
        return null
    }
}