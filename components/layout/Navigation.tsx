import Link from "next/link";

export default function PNavigation(){
    return (
        <div className=" ">
        <ul className="grid grid-cols-12 justify-end mt-8 text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px]">
            <li className="col-span-1 col-start-10"><Link href="/tours">TOURS</Link></li>
            <li className="col-span-1"><Link href="/resa">INFO</Link></li>
            <li className="col-span-1">LOREM</li>
        </ul>
        </div>
    );
}