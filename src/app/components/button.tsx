import Link from "next/link";

export default function button(props: any) {
    return (
        <Link href={props.route}><button className="text-sm rounded-md px-5 py-3 text-white bg-btnorange">{props.text}</button></Link>
    )
}