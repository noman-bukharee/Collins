"use client";

import React, { useRef } from "react";
import Image from "next/image";
import styled from "styled-components";
import { FaRocket, FaWallet } from "react-icons/fa";
import hover3d from "../../app/utils/hover";
import { TypeAnimation } from 'react-type-animation';

function Banner() {
    const hero = useRef<HTMLDivElement>(null);

    const hoverHero = hover3d(hero, {
        x: 30,
        y: -40,
        z: 30,
    });

    const imageHover = hover3d(hero, {
        x: 20,
        y: -5,
        z: 11,
    });

    return (
        <div ref={hero}>
            <div className="font pt-16 pb-80 sm:pt-24 sm:pb-20 lg:pt-10 lg:pb-48">
                <div className=" px-10 flex items-center flex-col md:flex-row justify-around">
                    <div className="w-full md:max-w-3xl">
                        <h1 className="">
                            <p className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Where Beautiful</p>
                            <div className="font text-2xl font-bold text-sky-500 my-2">
                                <TypeAnimation
                                    sequence={[
                                        // Same substring at the start will only be typed out once, initially
                                        'SELF HELP',
                                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                                        'CHILDREN',
                                        1000,
                                        'BUSINESS',
                                        1000
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    style={{ fontSize: '1em', display: 'inline-block' }}
                                    repeat={Infinity}
                                />
                                |Books
                                are Made
                            </div>
                        </h1>
                        <p className="font mt-4 text-md dark:text-white text-gray-500">
                            This year, our new summer collection will shelter you from the harsh elements of a world that doesn't
                            care if you live or die.
                        </p>


                        <a
                            href="#"
                            className="my-3 inline-block rounded-md border border-transparent bg-sky-500 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
                        >
                            purchase Now
                        </a>
                    </div>
                    <div className="w-full md:max-w-3xl">
                        <div
                            className="flex justify-center"
                            style={{
                                transform: hoverHero.transform,
                            }}
                        >
                            <div className="flex items-center space-x-6 lg:space-x-8">
                                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                    <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                        <Image
                                            src="/images/banner/b1.jpg"
                                            alt=""
                                            className="h-full w-full object-cover object-center"
                                            width={600}
                                            height={600}
                                            style={{
                                                transform: hoverHero.transform,
                                            }}
                                        />
                                    </div>
                                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                                        <Image
                                            src="/images/banner/b2.jpg"
                                            alt=""
                                            className="h-full w-full object-cover object-center"
                                            width={600}
                                            height={600}
                                            style={{
                                                transform: imageHover.transform,
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                                        <Image
                                            src="/images/banner/b3.jpg"
                                            alt=""
                                            className="h-full w-full object-cover object-center"
                                            width={600}
                                            height={600}
                                            style={{
                                                transform: imageHover.transform,
                                            }}
                                        />
                                    </div>
                                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                                        <Image
                                            src="/images/banner/b4.jpg"
                                            alt=""
                                            className="h-full w-full object-cover object-center"
                                            width={600}
                                            height={600}
                                            style={{
                                                transform: imageHover.transform,
                                            }}
                                        />
                                    </div>
                                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                                        <Image
                                            src="/images/banner/b5.jpg"
                                            alt=""
                                            className="h-full w-full object-cover object-center"
                                            width={600}
                                            height={600}
                                            style={{
                                                transform: imageHover.transform,
                                            }}
                                        />
                                    </div>
                                </div>
                                {/* <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                                        <Image
                                            src="/images/banner/b6.jpg"
                                            alt=""
                                            className="h-full w-full object-cover object-center"
                                            width={600}
                                            height={600}
                                            style={{
                                                transform: imageHover.transform,
                                            }}
                                        />
                                    </div>
                                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                                        <Image
                                            src="/images/banner/b7.jpg"
                                            alt=""
                                            className="h-full w-full object-cover object-center"
                                            width={600}
                                            height={600}
                                            style={{
                                                transform: imageHover.transform,
                                            }}
                                        />
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Banner;