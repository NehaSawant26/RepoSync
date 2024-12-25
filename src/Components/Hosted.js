import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { LuKeyRound } from "react-icons/lu";
import About from './About'

const Hosted = () => {

    return (
        <>
            <About />
            <div className="container mt-44">
                <div className="w-4/5 flex justify-end items-center  mr-40">
                    <div className="w-full max-w-sm p-6 bg-white shadow-sm shadow-black">
                        <p className="flex items-center justify-center text-2xl font-extralight mb-4">CodeAnt AI</p>
                        <h2 className="flex items-center justify-center text-2xl font-bold mb-6 border-b-2">Welcome to CodeAnt AI</h2>
                        <div className="wrapper">
                            <button className=" w-40 h-10 rounded bg-white text-black shadow-sm shadow-black mr-4" ><Link to="/">Saas</Link></button>
                            <button className="w-40 h-10 rounded bg-blue-500 text-white" >Self Hosted</button>
                        </div>
                        <button className="flex justify-center  w-full  bg-white text-black p-2 rounded mb-3 mt-6 shadow-sm shadow-black"><FaGithub className="w-6 h-5 mr-3" /><Link to="/repo">Self Hosted with GitHub</Link></button>
                        <button className="flex  justify-center w-full bg-white text-black p-2 rounded mb-3 shadow-sm shadow-black"><LuKeyRound className="w-6 h-5 mr-3" /> <Link to="/repo">Sign in with SSO</Link></button>
                    </div>
                </div>
                <p className=" ml-96 mt-6  ">By signing up you agree to the <b>Privacy policy</b></p>
            </div>
        </>
    );
}

export default Hosted;
