// import React, { useState } from 'react'
// import { Button } from './ui/button'
// import { Search } from 'lucide-react'
// import { useDispatch } from 'react-redux';
// import { setSearchedQuery } from '@/redux/jobSlice';
// import { useNavigate } from 'react-router-dom';

// const HeroSection = () => {
//     const [query, setQuery] = useState("");
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const searchJobHandler = () => {
//         dispatch(setSearchedQuery(query));
//         navigate("/browse");
//     }

//     return (
//         <div className='text-center'>
//             <div className='flex flex-col gap-5 my-10'>
//                 <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#9c06e1] font-medium'>Do NaukriSearch,Get Hired</span>
//                 <h1 className='text-5xl font-bold'>Search, Apply & <br /> Get Your <span className='text-[#6A38C2]'>Dream Jobs</span></h1>
//                 <p></p>
//                 <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
//                     <input
//                         type="text"
//                         placeholder='Find your dream jobs'
//                         onChange={(e) => setQuery(e.target.value)}
//                         className='outline-none border-none w-full'

//                     />
//                     <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2]">
//                         <Search className='h-5 w-5' />
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default HeroSection


import React, { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#f7f3ff] via-[#efeaff] to-[#faf6ff] py-24 px-6 lg:px-12">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-100/40 via-white/30 to-transparent"></div>

      <div className="mx-auto max-w-4xl text-center space-y-8">
        <span className="inline-block px-5 py-1.5 rounded-full bg-white/80 border border-purple-200 shadow backdrop-blur text-purple-700 text-sm font-medium tracking-wide">
          🚀 Do NaukriSearch, Get Hired
        </span>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
          Search, Apply & <br />
          <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-transparent bg-clip-text">
            Get Your Dream Job
          </span>
        </h1>

        <p className="text-gray-600 text-md max-w-xl mx-auto">
          Discover curated roles tailored to your skills, experience, and
          aspirations. Your career breakthrough starts here.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 justify-center max-w-xl mx-auto mt-6">
          <div className="flex w-full sm:w-[75%] shadow-md border border-gray-300 rounded-full overflow-hidden bg-white transition focus-within:ring-2 focus-within:ring-purple-500">
            <input
              type="text"
              placeholder="Search for jobs (e.g. React, Backend)"
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-5 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none bg-transparent"
            />
          </div>
          <Button
            onClick={searchJobHandler}
            className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:brightness-110 text-white px-6 py-3 text-sm font-semibold shadow-md transition"
          >
            <Search className="h-5 w-5 mr-1" />
            Search
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

