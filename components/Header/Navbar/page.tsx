"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggler from "./theme-toggler";
// import menuData from "./menu-items";

const Header = () => {
    // Navbar toggle
    const [navbarOpen, setNavbarOpen] = useState(false);
    const navbarToggleHandler = () => {
        setNavbarOpen(!navbarOpen);
    };

    // Sticky Navbar
    const [sticky, setSticky] = useState(false);
    const handleStickyNavbar = () => {
        if (window.scrollY >= 80) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleStickyNavbar);
    });

    // submenu handler
    const [openIndex, setOpenIndex] = useState(-1);
    //   const handleSubmenu = (index) => {
    //     if (openIndex === index) {
    //       setOpenIndex(-1);
    //     } else {
    //       setOpenIndex(index);
    //     }
    //   };

    return (
        <>
            <header
                className={`header top-0 left-0 z-40 flex w-full items-center bg-transparent  ${sticky
                        ? "!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20"
                        : "relative"
                    }`}
            >
                <div className="w-full flex items-center justify-between">
                    <div className="w-60 max-w-full px-4 xl:mr-12">
                        <Link
                            href="/"
                            className={`header-logo block w-full ${sticky ? "py-5 lg:py-2" : "py-8"
                                } `}
                        >
                            <Image
                                src="/images/logo.png"
                                alt="logo"
                                width={140}
                                height={30}
                                className="w-full dark:hidden"
                            />
                            <Image
                                src="/images/logo.png"
                                alt="logo"
                                width={140}
                                height={30}
                                className="hidden w-full dark:block"
                            />
                        </Link>
                    </div>
                    <div className="flex w-full items-center justify-end px-4">
                        <div className="flex items-center justify-end pr-16 lg:pr-0">
                            <Link
                                href="/signin"
                                className="hidden py-3 px-7 text-base font-bold text-dark hover:opacity-70 dark:text-white md:block"
                            >
                                Sign In
                            </Link>
                            <Link
                                href="/signup"
                                className="ease-in-up hidden rounded-md bg-primary py-3 px-8 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9"
                            >
                                Sign Up
                            </Link>
                            <div>
                                <ThemeToggler />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
