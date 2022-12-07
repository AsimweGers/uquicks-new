import React from "react";
import Image from "next/image";
import Link from "next/link";
import TimeAgo from "react-timeago";
import { grpahCMSImageLoader } from "../util";

const PostCard = ({ post }) => (
  <div className="bg-white shadow-lg border-2 hover:shadow-2xl">
    <div className="relative overflow-hidden shadow-md pb-60 mb-2">
      <img
        src={post.featuredImage.url}
        alt={post.title}
        className="object-top absolute h-60 w-full object-cover  shadow-lg"
      />
    </div>

    <h1 className="transition duration-700 text-center mb-1 cursor-pointer hover:text-pink-600 text-xl font-semibold">
      <Link href={`/post/${post.slug}`}>{post.title}</Link>
    </h1>
    <div className="flex flex-col items-center justify-center">
      <span className="align-middle font-light text-sm">
        <TimeAgo date={post.createdAt} />
      </span>
      <div className="text-center">
      <Link href={`/post/${post.slug}`}>
        <span className="transition duration-500 ease transform hover:-translate-y-1 my-2 inline-block bg-green-600 text-lg font-base text-white px-2 cursor-pointer">
          Download
        </span>
      </Link>
    </div>
    </div>
  </div>
);

export default PostCard;
