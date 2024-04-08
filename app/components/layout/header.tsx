'use client';

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import Menu from "./menu";
import useUserStore from "@/store/user.store";
import { PlusCircleIcon } from "@heroicons/react/16/solid";

const routes = [
    { path: '/', name: 'Home' },
    { path: '/vessel/add-vessel', name: 'Generate Prediction Report', icon: <PlusCircleIcon className="w-6 h-6" />, auth: true },
]

const Header: React.FC = () => {
    const user = useUserStore((state) => state.user);

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`bg-${scrollY > 50 ? 'gray-800' : 'transparent'} shadow fixed z-20 w-full h-30 transition-colors duration-300`}>
            <div className="mx-auto py-2 px-4 sm:px-6 lg:px-16 flex justify-between">
                <div className="t-50">
                    <Image src="https://i.ibb.co/4s9ZHc2/Vessel-87-logo-white.png" alt="Food" width={200} height={200} />
                </div>

                <nav className="py-6">
                    <ul className="flex text-white font-bold">
                        {routes.map((r, i) => {
                            if (!r.auth) {
                                return (
                                    <li className="pl-5" key={i}>
                                        <Link href={r.path} className="flex transform transition duration-300 hover:scale-105 hover:font-bold">
                                            {r.name}
                                            <span className="ml-2 text-gray-700 text-white">{r.icon ? r.icon : null}</span>
                                        </Link>
                                    </li>
                                );
                            }
                        })}
                        {
                            routes.map((r, i) => {
                                if (r.auth && user?.id) {
                                    return (
                                        <li className="pl-5" key={i}>
                                            <Link href={r.path} className="flex transform transition duration-300 hover:scale-105 hover:font-bold">
                                                {r.name}
                                                <span className="ml-2 text-gray-700 text-white">{r.icon ? r.icon : null}</span>
                                            </Link>
                                        </li>
                                    );
                                }
                            })
                        }
                    </ul>
                </nav>

                <div className="py-6">
                    <Menu />
                </div>
            </div>
        </header>
    );
}
export default Header;