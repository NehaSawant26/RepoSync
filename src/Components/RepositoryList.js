import React from 'react';
import RepositoryItem from './RepositoryItem'
import Sidebar from './Sidebar';
import { IoMdAdd } from "react-icons/io";
import { HiOutlineRefresh } from "react-icons/hi";

export const repositories = [
    { id: 1, name: 'design-system', updated: 'Updated 1 day ago', type: 'Public', tech: 'React', Memory: '7320MB' },
    { id: 2, name: 'codeant-ci-app', updated: 'Updated 2 days ago', type: 'Private', tech: 'JavaScript', Memory: '5871MB' },
    { id: 3, name: 'analytics-dashboard', updated: 'Updated 5 days ago', type: 'Private', tech: 'Python', Memory: '4521MB' },
    { id: 4, name: 'mobile-app', updated: 'Updated 3 days ago', type: 'Public', tech: 'Swift', Memory: '3096MB' },
    { id: 5, name: 'e-commerce-platform', updated: 'Updated 6 days ago', type: 'Private', tech: 'Java', Memory: '6210MB' },
    { id: 6, name: 'blog-website', updated: 'Updated 4 days ago', type: 'Public', tech: 'HTML/CSS', Memory: '1876MB' },
    { id: 7, name: 'social-network', updated: 'Updated 7 days ago', type: 'Public', tech: 'PHP', Memory: '5432MB' },
    { id: 8, name: 'Chat application', updated: 'Updated 5 days ago', type: 'Private', tech: 'Node.js', Memory: '7632MB' },
    { id: 9, name: 'Data Visualization', updated: 'Updated 2 days ago', type: 'Public', tech: 'SQL', Memory: '4832MB' },
    { id: 10, name: 'Sentiment analysis', updated: 'Updated 5 days ago', type: 'Public', tech: 'NLP', Memory: '2872MB' },

];

const RepositoryList = () => {

    return (
        <>
            <div className="flex justify-start w-full">
                <Sidebar />

                <div className="flex-1 p-4 md:p-6 justify-end items-end  ml-64">
                    <div className=" flex ">
                        <h3 className="text-xl font-bold mb-2">Repositories</h3>
                        <button className="flex items-center ml-auto mr-2 w-32 rounded-xl text-white font-medium xt-md bg-blue-600"><HiOutlineRefresh className="w-6 h-5 m-1 ml-3 " />Refresh All</button>
                        <button className="flex items-center mr-5 w-40 rounded-xl text-white font-medium  text-md bg-blue-600"><IoMdAdd className="w-5 h-5 m-1 ml-3" />Add Repository</button>
                    </div>
                    <h2 className="text-md text-gray-600 mb-4" >33 total repositories</h2>

                    {repositories.map((repo, index) => (
                        <RepositoryItem key={index} repo={repo} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default RepositoryList;
