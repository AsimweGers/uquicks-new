import React from "react";
import Image from "next/image";
import Link from "next/link";
import TimeAgo from "react-timeago";
import { grpahCMSImageLoader } from "../util";

const PostCard = ({ post }) => (
  <div className="bg-white shadow-lg w-72 border-2 hover:shadow-2xl m-4">
    <div className="relative overflow-hidden shadow-md pb-60 mb-6">
      <img
        src={post.featuredImage.url}
        alt={post.title}
        className="object-top absolute h-60 w-full object-cover  shadow-lg"
      />
    </div>

    <h1 className="transition duration-700 text-center mb-2 cursor-pointer hover:text-pink-600 text-xl font-semibold">
      <Link href={`/post/${post.slug}`}>{post.title}</Link>
    </h1>
    <div className="flex gap-6  items-center justify-center">
      <div className="font-medium text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 inline mr-2 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span className="align-middle">
          <TimeAgo date={post.createdAt} />
        </span>
      </div>
    </div>

    <div className="text-center">
      <Link href={`/post/${post.slug}`}>
        <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-blue-600 hover:bg-pink-600 text-lg font-medium rounded-full text-white px-2 py-1 my-2 cursor-pointer">
          Download
        </span>
      </Link>
    </div>
  </div>
);

export default PostCard;