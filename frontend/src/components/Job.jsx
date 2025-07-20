// import React from 'react'
// import { Button } from './ui/button'
// import { Bookmark } from 'lucide-react'
// import { Avatar, AvatarImage } from './ui/avatar'
// import { Badge } from './ui/badge'
// import { useNavigate } from 'react-router-dom'

// const Job = ({job}) => {
//     const navigate = useNavigate();
//     // const jobId = "lsekdhjgdsnfvsdkjf";

//     const daysAgoFunction = (mongodbTime) => {
//         const createdAt = new Date(mongodbTime);
//         const currentTime = new Date();
//         const timeDifference = currentTime - createdAt;
//         return Math.floor(timeDifference/(1000*24*60*60));
//     }
    
//     return (
//         <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
//             <div className='flex items-center justify-between'>
//                 <p className='text-sm text-gray-500'>{daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}</p>
//                 <Button variant="outline" className="rounded-full" size="icon"><Bookmark /></Button>
//             </div>

//             <div className='flex items-center gap-2 my-2'>
//                 <Button className="p-6" variant="outline" size="icon">
//                     <Avatar>
//                         <AvatarImage src={job?.company?.logo} />
//                     </Avatar>
//                 </Button>
//                 <div>
//                     <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
//                     <p className='text-sm text-gray-500'>India</p>
//                 </div>
//             </div>

//             <div>
//                 <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
//                 <p className='text-sm text-gray-600'>{job?.description}</p>
//             </div>
//             <div className='flex items-center gap-2 mt-4'>
//                 <Badge className={'text-blue-700 font-bold'} variant="ghost">{job?.position} Positions</Badge>
//                 <Badge className={'text-[#F83002] font-bold'} variant="ghost">{job?.jobType}</Badge>
//                 <Badge className={'text-[#7209b7] font-bold'} variant="ghost">{job?.salary}LPA</Badge>
//             </div>
//             <div className='flex items-center gap-4 mt-4'>
//                 <Button onClick={()=> navigate(`/description/${job?._id}`)} variant="outline">Details</Button>
//                 <Button className="bg-[#7209b7]">Save For Later</Button>
//             </div>
//         </div>
//     )
// }

// export default Job


import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
  const navigate = useNavigate();

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  };

  return (
    <div className="p-6 rounded-2xl shadow-lg bg-white border border-gray-200 transition-all hover:shadow-xl">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs text-gray-500">
          {daysAgoFunction(job?.createdAt) === 0
            ? "Posted Today"
            : `${daysAgoFunction(job?.createdAt)} days ago`}
        </p>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full hover:bg-gray-100"
        >
          <Bookmark className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <Avatar className="h-12 w-12 border">
          <AvatarImage src={job?.company?.logo} />
        </Avatar>
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            {job?.company?.name}
          </h2>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>

      <h1 className="text-xl font-bold text-[#333] mb-2">{job?.title}</h1>
      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
        {job?.description}
      </p>

      <div className="flex flex-wrap items-center gap-2 mb-4">
        <Badge
          variant="outline"
          className="text-blue-700 border-blue-200 bg-blue-50 font-medium"
        >
          {job?.position} Positions
        </Badge>
        <Badge
          variant="outline"
          className="text-red-700 border-red-200 bg-red-50 font-medium"
        >
          {job?.jobType}
        </Badge>
        <Badge
          variant="outline"
          className="text-purple-700 border-purple-200 bg-purple-50 font-medium"
        >
          {job?.salary} LPA
        </Badge>
      </div>

      <div className="flex gap-3">
        <Button
          onClick={() => navigate(`/description/${job?._id}`)}
          variant="outline"
          className="hover:border-[#7209b7] hover:text-[#7209b7]"
        >
          View Details
        </Button>
        <Button className="bg-[#7209b7] hover:bg-[#5d0999] text-white">
          Save For Later
        </Button>
      </div>
    </div>
  );
};

export default Job;
