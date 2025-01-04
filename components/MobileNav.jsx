"use client";

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const links = [
    {
        name: 'home',
        path: '/',
    },
    {
        name: 'contact',
        path: '/contact',
    },
]

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* Menambahkan SheetTitle untuk aksesibilitas */}
                <VisuallyHidden>
                    <SheetTitle>Mobile Navigation</SheetTitle>
                </VisuallyHidden>
                {/* logo */}
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            Faikar<span className="text-accent ml-1">.</span>
                        </h1>
                    </Link>
                </div>
                {/* nav */}
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => {
                        return (
                            <Link
                                href={link.path}
                                key={index}
                                className={`${link.path === pathname &&
                                    "text-accent border-b-2 border-accent"
                                    } text-xl capitalize hover:text-accent transition-all`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                    <Link href="mailto:misteralfikri@gmail.com?subject=We’re%20Interested%20in%20Your%20Profile%20for%20[Job%20Title]&body=Hello.">
                        <Button className="">Hire Me</Button>
                    </Link>
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav