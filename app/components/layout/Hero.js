import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
    return(
        <section className="hero">
            <div className="py-40">
                <h1 className="text-4xl font-semibold">
                    World is better <br />
                    with &nbsp;
                    <span className="text-primary">
                        Pizza Haven
                    </span>
                </h1>
                <p className="my-6 text-gray-500 text-sm">
                    Where Every Slice is a Slice of Heaven
                </p>
                <div className="flex gap-4 text-sm">
                    <button className="bg-primary uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full">
                        Order now
                        <Right />
                     </button>
                    <button className="flex gap-2 py-2 text-gray-600 font-semibold">
                        Learn more
                        <Right />
                    </button>
                </div>
            </div>
            <div className="relative">
                <Image src={'/pizza.png'} layout={'fill'} objectFit={'contain'} alt={'pizza'} />
            </div>
        </section>
    );
}