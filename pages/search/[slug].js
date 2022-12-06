import React, { useState } from "react";
import { useRouter } from "next/router";

import { getCategories, getPosts } from "../../services";
import { PostCard, Categories, Loader } from "../../components";
import Head from "next/head";

const SearchPost = ({ posts }) => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("false");

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <>
      <Head>
        <title>Search Uquicks | The Home of Gospel | Resources | Events</title>
        <meta
          name="description"
          content="Uquicks is fully equipped gospel based website with the all kinds of
            gospel music across the world."
        />
        <meta
          property="og:title"
          content="Search Uquicks | The Home of Gospel | Resources | Events"
        />
        <link
          rel="icon"
          href="https://iconarchive.com/download/i60242/zerode/plump/Search.ico"
        />
      </Head>
      <div className=" px-4 mb-8 flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 flex flex-wrap lg:col-span-8">
            <div className="mt-5">
              <div className=" mb-1  flex text-center justify-center transition duration-500 ease transform hover:-translate-y-1 flex-col px-10 items-center lg:items-center bg-blue-600  rounded-full text-white py-3 cursor-pointer">
                <h1 className="font-large text-xl ">Search Uquicks Here</h1>
                <p className="font-small text-sm">
                  Search Gospel Music, sda music, sunday music, sermons, praise
                  and worship, pathfinders, accapella, and much more in the
                  Search Box below if you didnot get what you want in the above
                  search.
                </p>
              </div>
              <input
                class="mt-4 border-2 border-gray-300 mb-4 bg-white h-14 w-full px-5 pr-16 rounded-full text-sm focus:outline-none "
                type="search"
                name="search"
                placeholder="Search Any Sda Songs Sunday Songs, Hymns, Praise and Worship, Sermons, Accapella, Pathfinders and More"
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              />
            </div>
            <div className="gap-4 grid md:grid-cols-2 lg:grid-cols-3">
              {posts
                .filter((post) => {
                  if (searchTerm == "") {
                    return post;
                  } else if (
                    post.node.title
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return post;
                  }
                })
                .map((post, index) => (
                  <PostCard key={index} post={post.node} />
                ))}
            </div>
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8 mt-4">
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchPost;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}

export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}
