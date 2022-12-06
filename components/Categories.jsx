import React, { useState, useEffect } from "react";
import Link from "next/link";

import { getCategories } from "../services";
import Image from "next/image";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="bg-white shadow-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Labels</h3>
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <div className="flex items-center gap-2">
            <Image
              unoptimized
              src={category.featuredImage.url}
              alt={category.name}
              width={30}
              height={30}
              className="align-middle rounded-full"
            />
            <span
              className={`cursor-pointer block ${
                index === categories.length - 1 ? "border-b-0" : "border-b"
              } my-4`}
            >
              {category.name}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
