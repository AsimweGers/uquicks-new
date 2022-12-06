import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import { BiSearch } from "react-icons/bi";
import { useRouter } from "next/router";
import { getCategories } from "../services";
import Image from "next/image";
import { NextSeo } from "next-seo";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchValue) {
      router.push(`/search/${searchValue}`);
    }
  };

  return (
    <div className="flex top-0 relative items-center w-full ">
      <nav className="bg-black w-screen py-2">
        <div className="md:justify-center mx-auto md:px-0">
          <div className="flex items-center justify-between md:justify-center h-14">
            <div className="flex items-center justify-between w-11/12 ">
              <div className="cursor-pointer font-semibold text-4xl flex-shrink-0">
                <Link href="/">
                  <img
                    src="https://www.kindpng.com/picc/m/223-2231002_entertainment-png-v-music-entertainment-logo-png-transparent.png"
                    alt=""
                    className="absolute w-10 "
                  />
                  <h1 className="font-bold text-4xl bg-red-800 text-white p-1 pl-14 md:pl-10 px-2 z-10">
                    Uquicks
                  </h1>
                  {/* <p className="text-sm italic font-extralight font-sans">
                    live better, the smart choice
                  </p> */}
                </Link>
              </div>
              <div className="flex items-center text-xl md:text-lg lg:text-xl">
                <div className="hidden lg:float-left lg:contents">
                  {categories.map((category, index) => (
                    <Link key={index} href={`/category/${category.slug}`}>
                      <span className="text-white hover:bg-white hover:text-black block px-3 py-2 rounded-md text-base font-semibold cursor-pointer">
                        <div className="flex items-center gap-2">
                          <Image
                            unoptimized
                            src={category.featuredImage.url}
                            alt={category.name}
                            width={30}
                            height={30}
                            className="align-middle rounded-full"
                          />
                          {category.name}
                        </div>
                      </span>
                    </Link>
                  ))}
                </div>
                <div
                  className="block m-2 mr-4 text-3xl text-white cursor-pointer hover:bg-red-800 hover:text-whit hover:rounded-full hover:p-2"
                  onClick={() => setShowSidebar(!showSidebar)}
                >
                  {showSidebar ? <ImCancelCircle /> : <AiOutlineSearch />}
                </div>
                {showSidebar && (
                  <div className=" ">
                    <div className="absolute left-0 z-10 items-center flex">
                      <form
                        onSubmit={handleSearch}
                        className="absolute -top-7 md:-top-7 flex items-center"
                      >
                        <input
                          value={searchValue}
                          onChange={(e) => setSearchValue(e.target.value)}
                          className="bg-primary p-3 md:text-md font-medium border-2 border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 w-[250px] md:w-[350px] rounded-full  md:top-0"
                          placeholder="Search Uquicks"
                        />
                        <button
                          onClick={handleSearch}
                          className="absolute right-3  border-1-2 border-gray-300 text-2xl text-gray-400"
                        >
                          <BiSearch />
                        </button>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className=" inline-flex items-center justify-center p-1 px-3 py-2 text-base font-semibold cursor-pointer rounded-md text-white hover:text-white "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-500 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="lg:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
                onClick={() => setIsOpen(!isOpen)}
              >
                {categories.map((category, index) => (
                  <Link key={index} href={`/category/${category.slug}`}>
                    <span className="text-white hover:bg-white hover:text-black block px-3 py-2 rounded-md text-lg font-semibold cursor-pointer">
                      <div className="flex items-center gap-2">
                        <Image
                          unoptimized
                          src={category.featuredImage.url}
                          alt={category.name}
                          width={30}
                          height={30}
                          className="align-middle rounded-full"
                        />
                        {category.name}
                      </div>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Header;
