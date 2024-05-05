'use client';
import Image from "next/image"
import Link from "next/link";
import React from "react"


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    return (
        <div className="flex bg-atpurple h-16 align-middle items-center px-8 py-5">
            <div className="flex-1">
                <Image src="/logo.png" alt="Logo" width={238.89} height={25} />
            </div>
            <div>
                <ul className=" hidden sm:flex text-sm">
                    <li className="mr-5 text-white">HOME</li>
                    <li className="mr-5 text-white">SERVICES</li>
                    <li className="mr-5 text-white">ABOUT US</li>
                    <li className="mr-5 text-white">CONTACT US</li>
                    <li className="mr-5 text-white">CAREERS</li>
                </ul>
            </div>

            {isMenuOpen ?

                <div className="fixed inset-0 z-50 h-full w-full bg-white">
                    <div className="flex">

                        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
                            <nav className="bg-white text-black p-4 FONT-SEMIBOLD">
                                <ul>
                                    <li className="text-lg mb-5"><Link href="#home">HOME</Link></li>
                                    <li className="text-lg mb-5"><Link href="#about">SERVICES</Link></li>
                                    <li className="text-lg mb-5"><Link href="#services">ABOUT US</Link></li>
                                    <li className="text-lg mb-5"><Link href="#contact">CONTACT US</Link></li>
                                    <li className="text-lg mb-5"><Link href="#contact">CAREERS</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="pl-50">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="absolute top-0 right-0 m-4 md:hidden text-xl font-bold">
                                {isMenuOpen ? 'X' : 'Menu'}
                            </button></div>
                    </div>

                </div> :

                <div className="sm:hidden pt-2">
                    <Image src="/image.png" alt="Menu" width={31} height={24} onClick={() => setIsMenuOpen(!isMenuOpen)} />

                </div>}
        </div>
    )
}

