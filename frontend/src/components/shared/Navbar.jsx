// import React from 'react'
// import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
// import { Button } from '../ui/button'
// import { Avatar, AvatarImage } from '../ui/avatar'
// import { LogOut, User2 } from 'lucide-react'
// import { Link, useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import axios from 'axios'
// import { USER_API_END_POINT } from '@/utils/constant'
// import { setUser } from '@/redux/authSlice'
// import { toast } from 'sonner'

// const Navbar = () => {
//     const { user } = useSelector(store => store.auth);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const logoutHandler = async () => {
//         try {
//             const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
//             if (res.data.success) {
//                 dispatch(setUser(null));
//                 navigate("/");
//                 toast.success(res.data.message);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.response.data.message);
//         }
//     }
//     return (
//       <div className="bg-zinc-600">
//         <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
//           <div>
//             <h1 className="text-2xl font-bold text-[rgb(16,4,3)]">
//               Naukri<span className="text-[rgb(140,12,252)]">Search</span>
//             </h1>
//           </div>
//           <div className="flex items-center gap-12">
//             <ul className="flex font-medium items-center gap-5">
//               {user && user.role === "recruiter" ? (
//                 <>
//                   <li>
//                     <Link to="/admin/companies">Companies</Link>
//                   </li>
//                   <li>
//                     <Link to="/admin/jobs">Jobs</Link>
//                   </li>
//                 </>
//               ) : (
//                 <>
//                   <li>
//                     <Link to="/">Home</Link>
//                   </li>
//                   <li>
//                     <Link to="/jobs">Jobs</Link>
//                   </li>
//                   <li>
//                     <Link to="/browse">Browse</Link>
//                   </li>
//                 </>
//               )}
//             </ul>
//             {!user ? (
//               <div className="flex items-center gap-2">
//                 <Link to="/login">
//                   <Button variant="outline">Login</Button>
//                 </Link>
//                 <Link to="/signup">
//                   <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">
//                     Signup
//                   </Button>
//                 </Link>
//               </div>
//             ) : (
//               <Popover>
//                 <PopoverTrigger asChild>
//                   <Avatar className="cursor-pointer">
//                     <AvatarImage
//                       src={user?.profile?.profilePhoto}
//                       alt="@shadcn"
//                     />
//                   </Avatar>
//                 </PopoverTrigger>
//                 <PopoverContent className="w-80">
//                   <div className="">
//                     <div className="flex gap-2 space-y-2">
//                       <Avatar className="cursor-pointer">
//                         <AvatarImage
//                           src={user?.profile?.profilePhoto}
//                           alt="@shadcn"
//                         />
//                       </Avatar>
//                       <div>
//                         <h4 className="font-medium">{user?.fullname}</h4>
//                         <p className="text-sm text-muted-foreground">
//                           {user?.profile?.bio}
//                         </p>
//                       </div>
//                     </div>
//                     <div className="flex flex-col my-2 text-gray-600">
//                       {user && user.role === "student" && (
//                         <div className="flex w-fit items-center gap-2 cursor-pointer">
//                           <User2 />
//                           <Button variant="link">
//                             {" "}
//                             <Link to="/profile">View Profile</Link>
//                           </Button>
//                         </div>
//                       )}

//                       <div className="flex w-fit items-center gap-2 cursor-pointer">
//                         <LogOut />
//                         <Button onClick={logoutHandler} variant="link">
//                           Logout
//                         </Button>
//                       </div>
//                     </div>
//                   </div>
//                 </PopoverContent>
//               </Popover>
//             )}
//           </div>
//         </div>
//       </div>
//     );
// }

// export default Navbar


import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";
import { toast } from "sonner";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Logout failed");
    }
  };

  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand */}
        <Link
          to="/"
          className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-transparent bg-clip-text"
        >
          NaukriSearch
        </Link>

        {/* Nav + Auth */}
        <div className="flex items-center gap-8">
          {/* Navigation Links */}
          <ul className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-700">
            {user?.role === "recruiter" ? (
              <>
                <li>
                  <Link to="/admin/companies" className="hover:text-blue-600">
                    Companies
                  </Link>
                </li>
                <li>
                  <Link to="/admin/jobs" className="hover:text-blue-600">
                    Jobs
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/"
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md 
             text-lg text-transparent bg-clip-text bg-gradient-to-r 
             from-blue-400 via-blue-600 to-purple-600 font-bold 
             transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/jobs"
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md 
             text-lg text-transparent bg-clip-text bg-gradient-to-r 
             from-blue-400 via-blue-600 to-purple-600 font-bold 
             transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/browse"
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md 
             text-lg text-transparent bg-clip-text bg-gradient-to-r 
             from-blue-400 via-blue-600 to-purple-600 font-bold 
             transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    Browse
                  </Link>
                </li>
              </>
            )}
          </ul>

          {/* Auth */}
          {!user ? (
            <div className="flex gap-3">
              <Link to="/login">
                <Button
                  variant="outline"
                  className="border-blue-500 text-blue-600 hover:bg-blue-50"
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow hover:brightness-110">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer ring-2 ring-blue-500 hover:scale-105 transition">
                  <AvatarImage
                    src={user?.profile?.profilePhoto}
                    alt="profile"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-72 mt-2 p-4 bg-white rounded-xl shadow-lg border border-gray-200">
                <div className="space-y-3 text-gray-800">
                  {/* Profile Section */}
                  <div className="flex items-center gap-3">
                    <Avatar className="ring-1 ring-gray-300">
                      <AvatarImage
                        src={user?.profile?.profilePhoto}
                        alt="profile"
                      />
                    </Avatar>
                    <div>
                      <p className="font-medium">{user?.fullname}</p>
                      <p className="text-sm text-gray-500">
                        {user?.profile?.bio}
                      </p>
                    </div>
                  </div>

                  <div className="h-px bg-gray-200 my-2" />

                  {/* Action Links */}
                  <div className="flex flex-col gap-2">
                    {user?.role === "student" && (
                      <Link
                        to="/profile"
                        className="flex items-center gap-2 text-blue-600 hover:underline text-sm"
                      >
                        <User2 className="w-4 h-4" />
                        View Profile
                      </Link>
                    )}
                    <button
                      onClick={logoutHandler}
                      className="flex items-center gap-2 text-red-500 hover:underline text-sm"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
