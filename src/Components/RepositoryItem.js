import React from 'react';
import { GoDotFill } from "react-icons/go";

const RepositoryItem = ({ repo }) => {

    return (
        <>
            <div className="border-b  py-4 flex-col md:flex-row justify-end items-start md:items-center">
                <div className=" flex py-2">
                    <h2 className="font-semibold text-lg mr-2">{repo.id}.</h2>
                    <h4 className="font-semibold text-lg">{repo.name}</h4>
                    <span className="text-center  content-center text-blue-700 bg-blue-400 shadow-sm shadow-blue-800 ml-4 rounded-2xl w-16 bg-opacity-25">{repo.type}</span>
                </div>
                <div className="flex  mt-1 mb-2 ">
                    <span className=" flex ml-2 mr-14 ">{repo.tech}<GoDotFill className="ml-1 mt-1.5 text-blue-700" /></span>
                    <span className="  ml-4  w-16 mr-14 ">{repo.Memory}</span>
                    <span className="text-gray-500 ">{repo.updated}</span>
                </div>
            </div>
        </>
    );
}

export default RepositoryItem;
