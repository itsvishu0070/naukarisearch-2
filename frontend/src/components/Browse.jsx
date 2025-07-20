// import React, { useEffect } from 'react'
// import Navbar from './shared/Navbar'
// import Job from './Job';
// import { useDispatch, useSelector } from 'react-redux';
// import { setSearchedQuery } from '@/redux/jobSlice';
// import useGetAllJobs from '@/hooks/useGetAllJobs';

// // const randomJobs = [1, 2,45];

// const Browse = () => {
//     useGetAllJobs();
//     const {allJobs} = useSelector(store=>store.job);
//     const dispatch = useDispatch();
//     useEffect(()=>{
//         return ()=>{
//             dispatch(setSearchedQuery(""));
//         }
//     },[])
//     return (
//         <div>
//             <Navbar />
//             <div className='max-w-7xl mx-auto my-10'>
//                 <h1 className='font-bold text-xl my-10'>Search Results ({allJobs.length})</h1>
//                 <div className='grid grid-cols-3 gap-4'>
//                     {
//                         allJobs.map((job) => {
//                             return (
//                                 <Job key={job._id} job={job}/>
//                             )
//                         })
//                     }
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Browse


import React, { useEffect } from "react";
import Navbar from "./shared/Navbar";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import useGetAllJobs from "@/hooks/useGetAllJobs";

const Browse = () => {
  useGetAllJobs();
  const { allJobs } = useSelector((store) => store.job);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setSearchedQuery(""));
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">
          🔎 Search Results{" "}
          <span className="text-blue-600">({allJobs.length})</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allJobs.map((job) => (
            <Job key={job._id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;
