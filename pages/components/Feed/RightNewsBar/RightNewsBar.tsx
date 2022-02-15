import React from 'react';
import SingleNew from './SingleNew';

const RightNewsBar: React.FC = () => {
  return (
    <div className="w-72 bg-[#0d0d0d] mx-auto mt-5 rounded-xl py-4 text-gray-100 sticky top-5">
      <div className=" flex items-center justify-between px-4">
        <h2 className="font-semibold">Meme News </h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 cursor-pointer"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <SingleNew />
    </div>
  );
};

export default RightNewsBar;
