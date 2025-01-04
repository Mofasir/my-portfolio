import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="py-4 xl:py-8 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Faikar<span className="text-accent ml-1">.</span>
                    </h1>
                </Link>

                {/* desktop nav & hire me button*/}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="mailto:misteralfikri@gmail.com?subject=We’re%20Interested%20in%20Your%20Profile%20for%20[Job%20Title]&body=Hello.">
                        <Button className="">Hire Me</Button>
                    </Link>
                </div>

                {/* mobile nav */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>

            </div>
        </header>
    );
};

export default Header;