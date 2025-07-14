import Link from "next/link";
import { Button } from "./ui/button";


const Header = () => {
    return <header className="py-8 text-white xl:py-12">
        <div className="container mx-auto">
            {/* Logo */}
            <Link href="/">
                <h1 className="text-4xl font-semibold">
                    Rodin<span className="text-accent">.</span>
                </h1>
            </Link>
            {/* desktop nav */}
        
        </div>
    </header>
};
export default Header;