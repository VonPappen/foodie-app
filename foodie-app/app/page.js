import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Slideshow from "@/components/images/Slideshow";

export default function Home() {
    return (
        <section className="w-full h-screen flex items-center justify-center mx-auto max-w-5xl p-4 ">
            <header className="flex items-center rounded-xl justify-center p-20 bg-white/50  gap-20">
                <div className="w-full h-full flex justify-center items-center">
                    <Slideshow />
                </div>
                <div className="w-full h-full justify-center items-start flex flex-col gap-6">
                    <h1 className="lg:text-4xl md:text-4xl font-bold text-slate-800 ">
                        Finally.
                        <br />
                        A Place For
                        <br />
                        Food Enthusiasts.
                    </h1>
                    <p className="text-lg text-slate-700">
                        Join our community of food lovers and share your
                        culinary adventures with the world.
                    </p>
                    <div className="flex gap-4 items-center">
                        <button>
                            <Link
                                href={"/meals"}
                                className="flex items-center gap-2 bg-gradient-to-r from-sky-600 to-blue-600
                                text-white font-semibold px-4 py-2 rounded-lg shadow-md shadow-black/20 hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
                            >
                                Explore Meals
                            </Link>
                        </button>
                        <Link
                            href="/community"
                            className="text-sky-600 font-semibold flex items-center gap-2"
                        >
                            Join our Community
                            <ArrowRight className="h-4 w-4 align-bottom" />
                        </Link>
                    </div>
                </div>
            </header>
        </section>
    );
}
