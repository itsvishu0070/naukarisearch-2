// import React, { useEffect, useState } from 'react'
// import { Badge } from './ui/badge'
// import { Button } from './ui/button'
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant';
// import { setSingleJob } from '@/redux/jobSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'sonner';

// const JobDescription = () => {
//     const {singleJob} = useSelector(store => store.job);
//     const {user} = useSelector(store=>store.auth);
//     const isIntiallyApplied = singleJob?.applications?.some(application => application.applicant === user?._id) || false;
//     const [isApplied, setIsApplied] = useState(isIntiallyApplied);

//     const params = useParams();
//     const jobId = params.id;
//     const dispatch = useDispatch();

//     const applyJobHandler = async () => {
//         try {
//             const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, {withCredentials:true});
            
//             if(res.data.success){
//                 setIsApplied(true); // Update the local state
//                 const updatedSingleJob = {...singleJob, applications:[...singleJob.applications,{applicant:user?._id}]}
//                 dispatch(setSingleJob(updatedSingleJob)); // helps us to real time UI update
//                 toast.success(res.data.message);

//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.response.data.message);
//         }
//     }

//     useEffect(()=>{
//         const fetchSingleJob = async () => {
//             try {
//                 const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`,{withCredentials:true});
//                 if(res.data.success){
//                     dispatch(setSingleJob(res.data.job));
//                     setIsApplied(res.data.job.applications.some(application=>application.applicant === user?._id)) // Ensure the state is in sync with fetched data
//                 }
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//         fetchSingleJob(); 
//     },[jobId,dispatch, user?._id]);

//     return (
//         <div className='max-w-7xl mx-auto my-10'>
//             <div className='flex items-center justify-between'>
//                 <div>
//                     <h1 className='font-bold text-xl'>{singleJob?.title}</h1>
//                     <div className='flex items-center gap-2 mt-4'>
//                         <Badge className={'text-blue-700 font-bold'} variant="ghost">{singleJob?.postion} Positions</Badge>
//                         <Badge className={'text-[#F83002] font-bold'} variant="ghost">{singleJob?.jobType}</Badge>
//                         <Badge className={'text-[#7209b7] font-bold'} variant="ghost">{singleJob?.salary}LPA</Badge>
//                     </div>
//                 </div>
//                 <Button
//                 onClick={isApplied ? null : applyJobHandler}
//                     disabled={isApplied}
//                     className={`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#7209b7] hover:bg-[#5f32ad]'}`}>
//                     {isApplied ? 'Already Applied' : 'Apply Now'}
//                 </Button>
//             </div>
//             <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>Job Description</h1>
//             <div className='my-4'>
//                 <h1 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gray-800'>{singleJob?.title}</span></h1>
//                 <h1 className='font-bold my-1'>Location: <span className='pl-4 font-normal text-gray-800'>{singleJob?.location}</span></h1>
//                 <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'>{singleJob?.description}</span></h1>
//                 <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gray-800'>{singleJob?.experience} yrs</span></h1>
//                 <h1 className='font-bold my-1'>Salary: <span className='pl-4 font-normal text-gray-800'>{singleJob?.salary}LPA</span></h1>
//                 <h1 className='font-bold my-1'>Total Applicants: <span className='pl-4 font-normal text-gray-800'>{singleJob?.applications?.length}</span></h1>
//                 <h1 className='font-bold my-1'>Posted Date: <span className='pl-4 font-normal text-gray-800'>{singleJob?.createdAt.split("T")[0]}</span></h1>
//             </div>
//         </div>
//     )
// }

// export default JobDescription


import React, { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useParams } from "react-router-dom";
import axios from "axios";
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from "@/utils/constant";
import { setSingleJob } from "@/redux/jobSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

const JobDescription = () => {
  const { singleJob } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.auth);
  const isIntiallyApplied =
    singleJob?.applications?.some(
      (application) => application.applicant === user?._id
    ) || false;
  const [isApplied, setIsApplied] = useState(isIntiallyApplied);

  const params = useParams();
  const jobId = params.id;
  const dispatch = useDispatch();

  const applyJobHandler = async () => {
    try {
      const res = await axios.get(
        `${APPLICATION_API_END_POINT}/apply/${jobId}`,
        { withCredentials: true }
      );
      if (res.data.success) {
        setIsApplied(true);
        const updatedSingleJob = {
          ...singleJob,
          applications: [...singleJob.applications, { applicant: user?._id }],
        };
        dispatch(setSingleJob(updatedSingleJob));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setSingleJob(res.data.job));
          setIsApplied(
            res.data.job.applications.some(
              (application) => application.applicant === user?._id
            )
          );
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleJob();
  }, [jobId, dispatch, user?._id]);

  return (
    <div className="max-w-6xl mx-auto my-12 p-6 rounded-lg bg-white shadow-lg">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900">
            {singleJob?.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <Badge
              className="text-blue-800 bg-blue-100 font-semibold"
              variant="ghost"
            >
              {singleJob?.position} Positions
            </Badge>
            <Badge
              className="text-red-600 bg-red-100 font-semibold"
              variant="ghost"
            >
              {singleJob?.jobType}
            </Badge>
            <Badge
              className="text-purple-800 bg-purple-100 font-semibold"
              variant="ghost"
            >
              {singleJob?.salary} LPA
            </Badge>
          </div>
        </div>

        <Button
          onClick={isApplied ? null : applyJobHandler}
          disabled={isApplied}
          className={`rounded-full px-6 py-2 text-white text-sm font-semibold transition duration-300 ${
            isApplied
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-[#7209b7] hover:bg-[#5f32ad]"
          }`}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>
      </div>

      <div className="mt-10">
        <h2 className="text-lg font-semibold border-b pb-2 mb-6 border-gray-200">
          Job Overview
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-800 text-[15px]">
          <div>
            <p>
              <span className="font-semibold">Role:</span> {singleJob?.title}
            </p>
            <p className="mt-2">
              <span className="font-semibold">Location:</span>{" "}
              {singleJob?.location}
            </p>
            <p className="mt-2">
              <span className="font-semibold">Experience Required:</span>{" "}
              {singleJob?.experience} yrs
            </p>
          </div>
          <div>
            <p>
              <span className="font-semibold">Salary:</span> {singleJob?.salary}{" "}
              LPA
            </p>
            <p className="mt-2">
              <span className="font-semibold">Applicants:</span>{" "}
              {singleJob?.applications?.length}
            </p>
            <p className="mt-2">
              <span className="font-semibold">Posted On:</span>{" "}
              {singleJob?.createdAt?.split("T")[0]}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold mb-2">Job Description:</h3>
          <p className="text-gray-700 leading-relaxed text-[15px]">
            {singleJob?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
