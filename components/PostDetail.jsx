import React from "react";
import Head from "next/head";
import Image from "next/image";
import { grpahCMSImageLoader } from "../util";
import ReactPlayer from "react-player";
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

  return (
    <div className="container">
      <Head>
        <title>{post.title}</title>
        <meta name="og:title" content={post.title} />
        <meta
          name="description"
          content="Watch & Download More free, Gospel Music, sda music, sda hymnal Sunday, sda mission story, Sda, granite bay church sda, sda church, sda sabbath school lesson"
        />
        <meta
          property="og:post"
          content="Watch & Download More  free, Gospel Music, sda music, sda hymnal Sunday, sda mission story, Sda, granite bay church sda, sda church, sda sabbath school lesson"
        />
        <meta property="og:image" src={`${post.featuredImage.url}`} />
        
        <link rel="icon" href={`${post.featuredImage.url}`} />
      </Head>
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

                {/* 
                <iframe
                  className=" font-medium justify-center "
                  src={`https://ytmp4.buzz/api/button/videos/${post.downloadable}`}
                  width="100%"
                  allowtransparency="true"
                  scrolling="no"
                  style={{
                    border: "none",
                    height: "auto",
                  }}
                ></iframe> */}
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

      <div className="mt-10 flex items-center flex-col bg-white shadow-2xl py-3 px-28 justify-center rounded-lg">
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
    </div>
  );
};

export default PostDetail;
