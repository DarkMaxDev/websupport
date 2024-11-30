import { dataContact } from "@/data";
import Title from "./shared/title";
import Link from "next/link";


export default function contact() {
<link rel="icon" href="/icon?<generated>" type="image/png" sizes="32x32" />
    return (

        <div className="p-0 md:px-20 md:py-0 max-w-2xl mx-auto" id="contact">
            <main className="pb-40">
            </main> 
            <Title title="Contacta conmigo" subtitle="Ponte en contacto conmigo 👋" />
 
            <div className="grid grid-cols-1 md:grid-cols-1 md:gap-8 mt-8">
                <div>
                    {dataContact.map((data) => (
                        <div key={data.id}
                            className="flex flex-col items-center dark:bg-slate-800 rounded-lg mb-5 p-3"
                        >
                            {data.icon}
                            <p>{data.title}</p>
                            <p>{data.subtitle}</p>
                            <Link href={data.link} target="_blank">
                                Enviar mensaje
                            </Link>
                        </div>
                    ))}
                </div>

            </div>
        </div>
);
}