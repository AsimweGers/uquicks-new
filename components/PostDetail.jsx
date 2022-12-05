import React from "react";
import ReactPlayer from "react-player";
import { NextSeo } from "next-seo";
// import AdBanner from "./AdBanner";

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-3">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  const SEO = {
    title: post.title,
    description: `Watch & Download ${post.title} Song and Lyrics for free. More music like Gospel Music, sda music, sda hymns, Sunday music, sda mission story, Sda, granite bay church sda, sda church, sda sabbath school lesson, All find you here`,
    additionalMetaTags: [
      {
        keywords: `Watch & Download ${post.title} Song and Lyrics for free. More music like Gospel Music, sda music, sda hymns, Sunday music, sda mission story, Sda, granite bay church sda, sda church, sda sabbath school lesson, All find you here ,sda music, sda nonstops, hymn songs, sda hymns, sda mix`,
      },
    ],

    additionalLinkTags: [{ rel: "icon", href: post.featuredImage.url }],

    openGraph: {
      title: post.title,
      description: `Watch & Download ${post.title} Song and Lyrics for free. More music like Gospel Music, sda music, sda hymns, Sunday music, sda mission story, Sda, granite bay church sda, sda church, sda sabbath school lesson, All find you here`,
      keywords: `Watch & Download ${post.title} Song and Lyrics for free. More music like Gospel Music, sda music, sda hymns, Sunday music, sda mission story, Sda, granite bay church sda, sda church, sda sabbath school lesson, All find you here ,sda music, sda nonstops, hymn songs, sda hymns, sda mix`,
      images: [
        {
          url: post.featuredImage.url,
          width: 800,
          height: 600,
          alt: "Og Image Alt",
          type: "image/png",
        },
        {
          url: post.featuredImage.url,
          width: 900,
          height: 800,
          alt: "Og Image Alt Second",
          type: "image/png",
        },
        { url: post.featuredImage.url },
      ],
    },
  };

  return (
    <>
      <NextSeo {...SEO} />
      <div className="bg-white shadow-lg rounded-lg mt-6 p-3">
        <div className="relative overflow-hidden shadow-md mb-6">
          <img
            src={post.featuredImage.url}
            alt={post.title}
            className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg"
          />
        </div>
        <div className="">
          <h1 className="mb-16 text-2xl text-center font-semibold">
            {post.title}
          </h1>
          <div className="items-center justify-center ">
            <div className="justify-center text-center">
              <span className="transition duration-500 ease px-4 transform hover:-translate-y-1 inline-block my-4 bg-green-600 text-lg font-medium rounded-full text-white py-3 cursor-pointer">
                Download Audio
              </span>
              <div>
                <iframe
                  className=" font-medium justify-center"
                  src={`https://loader.to/api/button/?url=https://www.youtube.com/watch?v=${post.downloadable}&f=mp3&color=008744#`}
                  width="100%"
                  allowtransparency="true"
                  scrolling="no"
                  style={{
                    border: "none",
                    height: "100px",
                  }}
                ></iframe>
                <div className="justify-center text-center lg:mt-">
                  <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-blue-500 my-4 text-lg font-medium rounded-full text-white px-4 py-3 cursor-pointer">
                    Download Video
                  </span>
                  <iframe
                    className="font-medium justify-center"
                    width="100%"
                    allowtransparency="true"
                    scrolling="no"
                    style={{
                      border: "none",
                      height: "100px",
                    }}
                    src={`https://loader.to/api/button/?url=https://www.youtube.com/watch?v=${post.downloadable}&=mp3&color=008744#`}
                  ></iframe>
                </div>
              </div>
              <div className="mt-4">
                <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-red-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
                  Preview
                </span>
                <div style={{ position: "relative", padding: "56.25%" }}>
                  <ReactPlayer
                    style={{
                      position: "absolute",
                      top: "10px",
                      left: "-4px",
                    }}
                    url={`${post.player}`}
                    width="90%"
                    height="90%"
                    controls={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center flex-col bg-white shadow-2xl py-3 px-2 lg:px-28 justify-center rounded-lg">
        <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-500 text-lg font-medium rounded-full text-white px-8 py-3 my-6 cursor-pointer">
          Lyrics
        </span>
        <div className="justify-center flex flex-col items-center">
          {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) =>
              getContentFragment(itemindex, item.text, item)
            );

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
      </div>
      {/* <div>
        <AdBanner />
      </div> */}
    </>
  );
};

export default PostDetail;
