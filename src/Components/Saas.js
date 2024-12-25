import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaGitlab, FaBitbucket } from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";
import About from './About';

const Saas = () => {

    return (
        <>
            <About />
            <div className="container mt-40 ">
                <div className="w-4/5 flex justify-end items-center mr-40 ">
                    <div className="w-auto   p-6 bg-white shadow-sm shadow-black rounded ">
                        <p className="flex items-center justify-center text-2xl font-extralight mb-4">CodeAnt AI</p>
                        <h2 className=" flex items-center justify-center text-2xl font-bold  border-b-2">Welcome to CodeAnt AI</h2>
                        <div className="mt-6">
                            <button className="w-40 h-10 rounded bg-blue-500 text-white mr-4" > Saas </button>
                            <button className="w-40 h-10 rounded bg-white text-black shadow-sm shadow-black"> <Link to="/hosted">Self Hosted</Link></button>
                        </div>
                        <button className=" flex items-center justify-center w-full p-2 rounded mb-3 mt-6 shadow-sm shadow-black bg-white text-black"><FaGithub className="w-6 h-5 mr-3" /><Link to="/repo">Sign in with GitHub</Link></button>
                        <button className="flex items-center justify-center w-full bg-white text-black p-2 rounded mb-3 shadow-sm shadow-black"><FaBitbucket className="w-6 h-5 mr-3 text-blue-600" /><Link to="/repo">Sign in with Bitbucket</Link></button>
                        <button className="flex items-center justify-center w-full bg-white text-black p-2 rounded mb-3 shadow-sm shadow-black"><VscAzureDevops className="w-6 h-5 mr-3 text-blue-800" /><Link to="/repo">Sign in with Azure DevOps</Link></button>
                        <button className="flex items-center justify-center w-full bg-white text-black p-2 rounded shadow-sm shadow-black "><FaGitlab className="w-6 h-5 mr-3 text-orange-500" /><Link to="/repo">Sign in with GitLab</Link></button>
                    </div >
                </div >
                <p className=" ml-96 mt-6  ">By signing up you agree to the <b>Privacy policy</b></p>
            </div>
        </>
    );
}

export default Saas;
