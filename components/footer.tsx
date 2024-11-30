import Link from "next/link";

export default function Footer(){
    return (
        
        <nav>
        <footer className="p-4 max-w-7xl mx-auto">
            <div className="md:flex md:justify-between">
                <div className="text-4xl font-bold my-1 md:my-1 item-align">
                <Link href='#page'>TakeOver</Link>
                </div>
                <div className="px-1 flex justify-between md:gap-8 items-center">
                    <Link href="#contact">Contacto</Link>
                </div>
            </div>
        </footer>
        </nav>
);
}
