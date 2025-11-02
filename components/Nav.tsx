import Link from "next/link";

export default function Nav(){
    return (
        <nav className="flex flex-row items-center w-1/3">
            <Link href="/" className="mx-auto border rounded-md p-2 m-2">Carousel View</Link>
            <Link href="/gallery" className="mx-auto border rounded-m p-2 m-2">Gallery View</Link>
        </nav>
    )
}