import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { IoIosArrowDown, IoIosCloudOutline } from "react-icons/io";
import { TiHomeOutline } from "react-icons/ti";
import { IoCodeSlash, IoSettingsOutline, IoCallOutline } from "react-icons/io5";
import { LuBookText, LuLogOut } from "react-icons/lu";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="fixed justify-start h-full">
            <button
                className="fixed top-4 left-4 z-20 md:hidden text-2xl p-2 bg-blue-600 text-white rounded-md"
                onClick={() => setIsOpen(!isOpen)} >
                <FiMenu />
            </button>

            <div className={`fixed inset-y-0 left-0 w-64 p-6 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:block z-10 bg-slate-200`}>
                <h2 className=" text-2xl font-bold ml-5">CodeAnt AI</h2>
                <div className="shadow-sm shadow-black rounded-lg h-8 mt-4 w-44 bg-white">
                    <p className="flex text-lg font-sans ml-8 mt-1  ">UserName<IoIosArrowDown className="mt-2 ml-8" /></p>
                </div>
                <nav className="mt-6">
                    <ul>
                        <li className="flex py-2 text-lg"><TiHomeOutline className="w-6 h-5 mr-3 mt-1"/>Repositories</li>
                        <li className="flex py-2 text-lg"><IoCodeSlash className="w-6 h-5 mr-3 mt-1"/>AI Code Review</li>
                        <li className="flex py-2 text-lg"><IoIosCloudOutline className="w-6 h-5 mr-3 mt-1"/>Cloud Security</li>
                        <li className="flex py-2 text-lg"><LuBookText className="w-6 h-5 mr-3 mt-1"/>How to use</li>
                        <li className="flex py-2 text-lg"><IoSettingsOutline className="w-6 h-5 mr-3 mt-1"/>Settings</li>
                    </ul>
                </nav>
                <nav className="mt-72">
                    <ul>
                    <li className=" flex text-lg"><IoCallOutline className="w-6 h-5 mr-3 mt-1"/>Support</li>
                    <li className="flex py-3 text-lg"><LuLogOut className="w-6 h-5 mr-3 mt-1"/><Link to="/">Log out</Link></li>
                    </ul>
                </nav>
            </div>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

        </div>
    );
}

export default Sidebar;
