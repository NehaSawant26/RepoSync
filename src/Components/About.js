import React from 'react';
import { MdWifiFind } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa6";

const About = () => {
    return (
        <>
            <div className=" w-2/5 hidden md:block justify-end items-center mt-56 ">
                <div className=" flex justify-center items-center  ml-52">
                    <div className="w-auto h-40 p-6 bg-white shadow-sm shadow-black rounded-2xl  ">
                        <p className="flex items-center justify-center text-2xl font-bold mb-5">AI to Detect & Autofix Bad Code </p>
                        <div className="flex items-center justify-center">
                            <div className="w-44  mr-3">
                                <p className="ml-12 font-bold text-2xl"> 30+ </p>
                                <p className="text-lg">Language Support</p>
                            </div>
                            <div className="w-32 mr-3">
                                <p className="ml-6 font-bold text-2xl" > 10k+ </p>
                                <p className="text-lg">Developers</p>
                            </div>
                            <div className="w-32 mr-1 ">
                                <p className="ml-6 font-bold text-2xl" > 100k+ </p>
                                <p className="text-lg">Hours Saved</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-72 flex h-40 shadow-sm shadow-black rounded-2xl translate-x-8 mt-2 ml-96 ">
                    <div className="mr-3">
                        <MdWifiFind className="w-14 h-12 text-indigo-500 mb-5 ml-8 mt-3" />
                        <p className="ml-4 text-lg" >Issues Fixed</p>
                        <p className="ml-6 font-bold text-3xl" > 500k+ </p>
                    </div>
                    <div className="ml-10">
                        <p className="flex ml-10 mt-6 text-indigo-700"><FaArrowUp className="mr-1 mt-1" />14%</p>
                        <p className=" ml-8 ">This week</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About




