import Image from "next/image";

export default function footer() {
    return (
        <div className='flex flex-col bg-atpurple px-4 py-4 md:px-12 md:py-10 text-white'>
            <div className="flex flex-col md:flex-row">
                <div className="flex-auto md:mr-10 md:ml-10">
                    <Image src="/logo.png" alt="Logo" width={238.89} height={25} />
                    <div className="w-full md:w-448">
                        <p className="text-sm font-lato mt-2">Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
                    </div>
                </div>
                <div className="flex-initial md:w-1/4 md:pl-12 mt-6 md:mt-0">
                    <h2 className="font-semibold mb-1">Our Technologies</h2>
                    <ul className="text-sm">
                        <li className="mb-1">ReactJS</li>
                        <li className="mb-1">Gatsby</li>
                        <li className="mb-1">NextJS</li>
                        <li className="mb-1">NodeJS</li>
                    </ul>
                </div>
                <div className="flex-initial md:w-1/4 md:pl-12 mt-6 md:mt-0">
                    <h2 className="font-semibold mb-1">Our Services</h2>
                    <ul className="text-sm">
                        <li className="mb-1">Social Media Marketing</li>
                        <li className="mb-1">Web & Mobile App Development</li>
                        <li className="mb-1">Data & Analytics</li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <p className="text-sm mt-6 border-t-2 md:w-1/2 text-center p-2">Privacy Policy | Terms and Conditions</p>
            </div>
        </div >
    )
}