// import React from 'react'
// import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
// import { Badge } from './ui/badge'
// import { useSelector } from 'react-redux'

// const AppliedJobTable = () => {
//     const {allAppliedJobs} = useSelector(store=>store.job);
//     return (
//         <div>
//             <Table>
//                 <TableCaption>A list of your applied jobs</TableCaption>
//                 <TableHeader>
//                     <TableRow>
//                         <TableHead>Date</TableHead>
//                         <TableHead>Job Role</TableHead>
//                         <TableHead>Company</TableHead>
//                         <TableHead className="text-right">Status</TableHead>
//                     </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                     {
//                         allAppliedJobs.length <= 0 ? <span>You haven't applied any job yet.</span> : allAppliedJobs.map((appliedJob) => (
//                             <TableRow key={appliedJob._id}>
//                                 <TableCell>{appliedJob?.createdAt?.split("T")[0]}</TableCell>
//                                 <TableCell>{appliedJob.job?.title}</TableCell>
//                                 <TableCell>{appliedJob.job?.company?.name}</TableCell>
//                                 <TableCell className="text-right"><Badge className={`${appliedJob?.status === "rejected" ? 'bg-red-400' : appliedJob.status === 'pending' ? 'bg-gray-400' : 'bg-green-400'}`}>{appliedJob.status.toUpperCase()}</Badge></TableCell>
//                             </TableRow>
//                         ))
//                     }
//                 </TableBody>
//             </Table>
//         </div>
//     )
// }

// export default AppliedJobTable

import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";
import { useSelector } from "react-redux";

const AppliedJobTable = () => {
  const { allAppliedJobs } = useSelector((store) => store.job);

  return (
    <div className="p-4 bg-white shadow-md rounded-lg border border-gray-100">
      <Table>
        <TableCaption className="text-base font-semibold text-gray-600 mb-4">
          📋 A list of your applied jobs
        </TableCaption>
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className="text-gray-700 font-semibold text-sm">
              📅 Date
            </TableHead>
            <TableHead className="text-gray-700 font-semibold text-sm">
              🧑‍💼 Job Role
            </TableHead>
            <TableHead className="text-gray-700 font-semibold text-sm">
              🏢 Company
            </TableHead>
            <TableHead className="text-right text-gray-700 font-semibold text-sm">
              📌 Status
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {allAppliedJobs.length <= 0 ? (
            <TableRow>
              <TableCell
                colSpan={4}
                className="text-center py-6 text-gray-500 italic"
              >
                You haven't applied to any job yet.
              </TableCell>
            </TableRow>
          ) : (
            allAppliedJobs.map((appliedJob, index) => (
              <TableRow
                key={appliedJob._id}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <TableCell className="text-sm text-gray-700">
                  {appliedJob?.createdAt?.split("T")[0]}
                </TableCell>
                <TableCell className="text-sm font-medium text-gray-800">
                  {appliedJob.job?.title}
                </TableCell>
                <TableCell className="text-sm text-gray-700">
                  {appliedJob.job?.company?.name}
                </TableCell>
                <TableCell className="text-right">
                  <Badge
                    className={`text-white px-3 py-1 rounded-full text-xs tracking-wide ${
                      appliedJob?.status === "rejected"
                        ? "bg-red-500"
                        : appliedJob.status === "pending"
                        ? "bg-yellow-500"
                        : "bg-green-500"
                    }`}
                  >
                    {appliedJob.status.toUpperCase()}
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
