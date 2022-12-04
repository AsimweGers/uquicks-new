import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us | Uquicks</title>
        <meta
          name="keywords"
          content="Uquicks, uquick, sda, kblc, kasese better living center, light fm kasese, awr light fm, Kasese News Updates, Kasese Technology, Loans in Kasese, Insurance in Kasese, Make Money Kasese, Kasese Entertainment, Free Data Kasese,how to see my ubteb results online, how to see my uneb results online,how to see my unmeb results online, Services at Free Costs in Kasese, Rwenzori tv live Rwenzori tv live streaming,"
        />
        <meta
          name="og:description"
          content="Uquicks is a gospel based music website that gives you all the gospel music and much more across the world"
        />
        <meta property="og:title" content="About Us | Uquicks" />
        <link
          rel="icon"
          href="/https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR60Dn7Tv-6ptaz5sHLHq95OIqXlYFR4p-8bA&usqp=CAU"
        />
      </Head>
      <div className="transition duration-500 ease transform hover:-translate-y-1 px-2 mt-4 items-center flex flex-col">
        <div className="text-center mb-4 text-3xl justify-center transition duration-500 ease transform hover:-translate-y-1 inline-block items-center lg:items-center bg-gray-400 rounded-full px-4 py-3">
          <h1> About Uquicks </h1>
        </div>
        <div className=" transition duration-500 ease transform hover:-translate-y-1  inline-block">
          <p className="text-xl p-2">
            Uquicks is fully equipped gospel based website with the all kinds of
            gospel music across the world. Music like Sda music, Sunday,
            sermons, Sda hymns, Sda mix, accapella ,Sda nonstops, praise and
            worship,events, articles, gospel artists and much more. It also
            updates users with the latest resources on how to live better in
            Christ. It also promotes gospel music artists and choirs from all
            regions
          </p>
          <p className=" p-2 text-xl  mb-4">
            Uquicks is the number one free gospel streaming and downloading
            website in uganda with the latest and free gospel music and much
            more. Uquicks finds its strength in proclaiming the word of God
            through music and streaming gospel Videos for all users across the
            globe.
          </p>
          <p className="text-xl p-2">
            Uquicks was created by{" "}
            <a
              style={{ color: "skyblue" }}
              href="https://joshcreativeprogrammer.netlify.app"
              target="_blank"
            >
              Bwambale Joshua
            </a>{" "}
            The C.E.O for the love of Gospel music to the world.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
