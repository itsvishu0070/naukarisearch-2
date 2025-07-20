// import React from 'react';
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
// import { Button } from './ui/button';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { setSearchedQuery } from '@/redux/jobSlice';

// const category = [
//     "Frontend Developer",
//     "Backend Developer",
//     "Data Science",
//     "Graphic Designer",
//     "FullStack Developer"
// ]

// const CategoryCarousel = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const searchJobHandler = (query) => {
//         dispatch(setSearchedQuery(query));
//         navigate("/browse");
//     }

//     return (
//         <div>
//             <Carousel className="w-full max-w-xl mx-auto my-20">
//                 <CarouselContent>
//                     {
//                         category.map((cat, index) => (
//                             <CarouselItem className="md:basis-1/2 lg-basis-1/3">
//                                 <Button onClick={()=>searchJobHandler(cat)} variant="outline" className="rounded-full">{cat}</Button>
//                             </CarouselItem>
//                         ))
//                     }
//                 </CarouselContent>
//                 <CarouselPrevious />
//                 <CarouselNext />
//             </Carousel>
//         </div>
//     )
// }

// export default CategoryCarousel

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "@/redux/jobSlice";

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "FullStack Developer",
];

const CategoryCarousel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <section className="relative isolate px-4 py-20 bg-gradient-to-br from-[#f5f1ff] via-[#f9f7ff] to-[#f7f7ff] overflow-hidden">
      {/* Optional background flair */}
      <div className="absolute -z-10 inset-0 opacity-40 bg-[radial-gradient(circle_at_top_left,_rgba(174,123,255,0.2),_transparent_60%)]" />

      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 text-gray-800 tracking-tight">
        Explore by{" "}
        <span className="bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 text-transparent bg-clip-text">
          Category
        </span>
      </h2>

      <Carousel className="w-full max-w-md sm:max-w-xl mx-auto">
        <CarouselContent>
          {category.map((cat, index) => (
            <CarouselItem
              key={index}
              className="basis-full flex justify-center"
            >
              <Button
                onClick={() => searchJobHandler(cat)}
                className="bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 text-white hover:brightness-110 transition-all duration-300 ease-in-out font-semibold rounded-full px-8 py-4 text-lg shadow-lg backdrop-blur-md"
              >
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-[-2rem] bg-white/80 backdrop-blur-md shadow-lg hover:bg-white text-gray-600" />
        <CarouselNext className="right-[-2rem] bg-white/80 backdrop-blur-md shadow-lg hover:bg-white text-gray-600" />
      </Carousel>
    </section>
  );
};

export default CategoryCarousel;
