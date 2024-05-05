"use client";
import React from 'react';

export default function Accordion(props: any) {
    const [isOpen, setIsOpen] = React.useState(false);

    return (

        <div className="flex bg-atslate md:w-640 mx-4 my-2 md:m-2">

            {isOpen ?

                <div className="flex-col bg-atslate mb-3 p-4">
                    <div className='flex'>
                        <div className="font-medium text-xl text-atpurple">{props.title}</div>
                        <div>
                            <button
                                onClick={() => setIsOpen(!isOpen)} className="font-semibold text-2xl pl-16 text-atpurple">
                                {isOpen ? '-' : '+'}
                            </button>
                        </div></div>

                    <p className="font-medium text-lg text-accordtext mt-2">
                        {props.text}
                    </p>

                </div >

                :

                <div className="flex bg-atslate p-4 ">

                    <div className="font-medium text-xl">{props.title}</div>
                    <div>
                        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl pl-16 font-medium">

                            {isOpen ? '-' : '+'}

                        </button></div>

                </div>
            }


        </div >

    );
};

