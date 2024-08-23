import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders";

export default function HomeMenu() {
    return(
        <section>
            <div className="absolute left-0 right-0">
                <div className="absolute -left-28 -top-[70px] text-left -z-10">
                    <Image src={'/pizza-product.png'} width={250} height={250} alt={'sallad'} />
                </div>
                <div className="absolute -top-[100px] -right-28 -z-0">
                    <Image src={'/pizza-product.png'} width={250} height={250} alt={'sallad'} />
                </div>
            </div>
            <div className="text-center mb-4">
                <SectionHeaders 
                    subHeader={'check out'}
                    mainHeader={'Menu'} />
            </div>
            <div className="grid grid-cols-3 gap-4">
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
            </div>
        </section>
    )
}