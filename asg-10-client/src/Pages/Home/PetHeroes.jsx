import React from "react";

const PetHeroes = () => {
  return (
    <div className="mb-16 w-11/12 mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-2">Meet Our Pet Heroes</h2>
        <p className="text-gray-600 mb-5 lg:mb-15">
          Stories from our happy adopters and caregivers.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">



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
        
        
        
        
        
        {/* <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </div>
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Sarah & Buddy</h2>
            <p>
              "We adopted Buddy a month ago, and he has brought so much joy to
              our family. The process was smooth!"
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </div>
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Mr. Ahmed & Whiskers</h2>
            <p>
              "Found Whiskers on PawMart. He is a very calm and loving cat.
              Grateful to the owner for the easy adoption."
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </div>
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Rahim (Pet Caregiver)</h2>
            <p>
              "I use PawMart to buy supplies for my pet care service. Always
              find good quality products and fast delivery."
            </p>
          </div>
        </div> */}




      </div>
    </div>
  );
};

export default PetHeroes;
