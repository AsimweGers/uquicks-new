import { FeaturedPosts } from "../sections/index";
import { PostCard, Categories, PostWidget } from "../components";
import { getPosts } from "../services";
import { useState } from "react";

export default function Home({ posts }) {
  const [posted] = useState(posts.slice(0, 5000));

  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(20);

  const [PageNumberLimit] = useState(8);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(8);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(posted.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = posted.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const handlePrev = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % PageNumberLimit == 0) {
      setminPageNumberLimit(maxPageNumberLimit - PageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - PageNumberLimit);
    }
  };

  const handleNext = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setminPageNumberLimit(maxPageNumberLimit + PageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + PageNumberLimit);
    }
  };

  let PageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    PageIncrementBtn = <li onClick={handleNext}>...</li>;
  }

  let PageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    PageDecrementBtn = <li onClick={handlePrev}>...</li>;
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <head>
        <title>Uquicks | The Home of Gospel | Resources | Events</title>
        <meta
          property="og:title"
          content="Uquicks | The Home of Gospel | Resources | Events"
        />
        <link
          rel="icon"
          href="/uquickslogo.png"
        />
        <meta
          property="og:description"
          content="Uquicks is fully equipped gospel based website with the all kinds of
            gospel music across the world."
        />

        <meta
          name="keywords"
          content="sda music, sda nonstops, hymn songs, sda hymns, sda mix"
        />

        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta charset="utf-8" />
        <meta name="theme-color" content="#000000" />
      </head>
      <div className="container mb-4">
        <FeaturedPosts />
        <div className="grid lg:grid-cols-12 gap-4">
          <div className="lg:col-span-8 justify-center flex flex-wrap">
            {currentItems.map((post, index) => (
              <PostCard key={index} post={post.node} />
            ))}
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8 mx-4">
              <PostWidget />
              <Categories />
            </div>
          </div>
          <div
            onClick={scrollToTop}
            className="flex list-none gap-4 text-2xl font-semibold md:sticky cursor-pointer text-blue-500 hover:text-pink-500 justify-center md:left-72"
          >
            {PageDecrementBtn}
            {renderPageNumbers}
            {PageIncrementBtn}
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
