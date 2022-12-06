import React from "react";
// import moment from 'moment';
import Image from "next/image";
import Link from "next/link";

const FeaturedPostCard = ({ post }) => (
  <div className="relative h-72 md:mx-3 md:mt-3">
    <div
      className="absolute bg-center  bg-no-repeat bg-cover shadow-md inline-block w-full h-72"
      style={{ backgroundImage: `url('${post.featuredImage.url}')` }}
    />
    <div className="absolute bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
    <div className="flex flex-col items-center justify-center absolute w-full h-full">
      <p className="text-white mb-4  px-2 text-shadow font-semibold text-2xl text-center">
        {post.title}
      </p>
    </div>
    <Link href={`/post/${post.slug}`}>
      <span className="cursor-pointer absolute w-full h-full" />
    </Link>
  </div>
);

export default FeaturedPostCard;
