import React from "react";

const PetHeroes = () => {
  return (
    <div className="mb-32 w-11/12 mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-2">Meet Our Pet Heroes</h2>
        <p className="text-gray-600 mb-5 lg:mb-15">
          Stories from our happy adopters and caregivers.
        </p>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6">



        <div className="card card-side bg-base-100 shadow-md items-center">
          <figure className="w-[45%]">
            <img
              src="https://images.pexels.com/photos/16055360/pexels-photo-16055360.jpeg"
              alt="Movie" />
          </figure>
          <div className="card-body w-[55%]">
            <h1 className="card-title font-bold text-[22px]">Jonathon Bernernered</h1>
            <h2 className="font-semi-bold text-[18px] mb-3">Our Tech Expert</h2>
            <p className="mb-3">We adopted Buddy a month ago, and he has brought so much joy to our family. The process was smooth!</p>
            <div className="card-actions justify-end">
              <button className="btn bg-[#0967C2] text-white border-[#0059b3]">
              <svg aria-label="LinkedIn logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="white" d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z" fillRule="evenodd"></path></svg>
              Hero in LinkedIn
              </button>
            </div>
          </div>
        </div>

        <div className="card card-side bg-base-100 shadow-md items-center">
          <figure className="w-[45%]">
            <img
              src="https://images.pexels.com/photos/5264055/pexels-photo-5264055.jpeg?_gl=1*6kh7l2*_ga*MTkxNjc2NjI4My4xNzY1MDQ5Mzc5*_ga_8JE65Q40S6*czE3NjUxMjYxODgkbzUkZzEkdDE3NjUxMjY4ODkkajU0JGwwJGgw"
              alt="Movie" />
          </figure>
          <div className="card-body w-[55%]">
            <h1 className="card-title font-bold text-[22px]">Hilari Jeorjia</h1>
            <h2 className="font-semi-bold text-[18px] mb-3">Our Tech Expert</h2>
            <p className="mb-3">We adopted Buddy a month ago, and he has brought so much joy to our family. The process was smooth!</p>
            <div className="card-actions justify-end">
              <button className="btn bg-[#0967C2] text-white border-[#0059b3]">
              <svg aria-label="LinkedIn logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="white" d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z" fillRule="evenodd"></path></svg>
              Hero in LinkedIn
              </button>
            </div>
          </div>
        </div>

        <div className="card card-side bg-base-100 shadow-md items-center">
          <figure className="w-[45%]">
            <img
              src="https://images.pexels.com/photos/11725365/pexels-photo-11725365.jpeg?_gl=1*dk5r6q*_ga*MTkxNjc2NjI4My4xNzY1MDQ5Mzc5*_ga_8JE65Q40S6*czE3NjUxMjYxODgkbzUkZzEkdDE3NjUxMjY5NTkkajU5JGwwJGgw"
              alt="Movie" />
          </figure>
          <div className="card-body w-[55%]">
            <h1 className="card-title font-bold text-[22px]">Roberto Alfredo</h1>
            <h2 className="font-semi-bold text-[18px] mb-3">Our Tech Expert</h2>
            <p className="mb-3">We adopted Buddy a month ago, and he has brought so much joy to our family. The process was smooth!</p>
            <div className="card-actions justify-end">
              <button className="btn bg-[#0967C2] text-white border-[#0059b3]">
              <svg aria-label="LinkedIn logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="white" d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z" fillRule="evenodd"></path></svg>
              Hero in LinkedIn
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetHeroes;
