import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoImg from "assets/logo.png";

const navItems = [
    {
        name: "Foodies Community",
        href: "/community",
    },
    {
        name: "Browse Meals",
        href: "/meals",
    },
];

export default function MainHeader() {
    return (
        <header className=" text-slate-700 w-full fixed shadow-lg bg-white z-10">
            <div className="mx-auto max-w-6xl w-full flex justify-between items-center p-4">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center">
                        <Image
                            src={LogoImg}
                            alt="Logo"
                            width={30}
                            height={30}
                            className="rounded-full"
                            priority
                        />
                        <h1 className="text-2xl font-bold ml-2 tracking-wider">
                            NEXT FOODIE
                        </h1>
                    </Link>
                </div>
                <nav>
                    <ul className="flex gap-6">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className=" font-semibold  hover:underline underline-offset-4 decoration-2 transition-all duration-300"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
