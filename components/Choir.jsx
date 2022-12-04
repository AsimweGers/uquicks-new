import React from "react";
import Image from "next/image";

import { grpahCMSImageLoader } from "../util";

const choir = ({ choir }) => (
  <div className="text-center mt-20 mb-8 p-8 relative rounded-lg bg-gray-400 ">
    <div className="flex justify-center">
      <Image
        unoptimized
        loader={grpahCMSImageLoader}
        alt={choir.name}
        height={100}
        width={100}
        className="align-middle rounded-full"
        src={choir.photo.url}
      />
    </div>
    <h3 className="text-white mt-4 mb-4 text-xl font-bold">{choir.name}</h3>
    <p className="text-white text-ls">{choir.bio}</p>
  </div>
);

export default choir;