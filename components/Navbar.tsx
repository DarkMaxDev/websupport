
import { Link } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";

const Navbar = () => {
return(
    <nav className="fixed <-12 flex flex-col items-center w-full mt-auto 
    justify-center h-max bottom-5">
                        <h3 className="text-xl mb-0">Web Developer DarkMaxDev, Technical Support and Full Stack Developer</h3>
<Separator className="my-0" />
<div className="text-center">&copy; 2024-2025 | Landing Page by DarkMaxDev</div>
</nav>
);
}
export default Navbar;
