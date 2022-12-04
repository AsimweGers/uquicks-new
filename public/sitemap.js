const { sitemapStream, streamTopromise } = required("sitemap");
const { Readable } = required("stream");

export default async (req, res) => {
  const links = [
    {
      url: "https://uquicks.com/AboutUs",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.uquicks.com/ContactUs",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.uquicks.com/Terms-&-Conditions",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.uquicks.com/Privacy-Policy",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.uquicks.com/post/ntume-ani-by-golden-gate-choir",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.uquicks.com/post/maria-by-ambassadors-of-christ",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.uquicks.com/post/mercy-chinwo-obinasom",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.uquicks.com/post/ada-ehi-jesus-you-are-able",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.uquicks.com/post/top-200-ugandan-gospel-songs-of-all-time-luganda-worship-gospel-nonstop-2022-dj-mixing-software",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.uquicks.com/post/mukama-osanidde-by-phoebe-ashaba",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.uquicks.com/post/tukutendereza-yesu-jehovah-shalom-acapella",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.uquicks.com/post/joy-to-the-world-by-jehovah-shalom-acapella-sdamissionug",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.uquicks.com/post/are-you-single-and-searching-by-jehovah-shalom-acapella",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.uquicks.com/post/wano-by-ntaate",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.uquicks.com/post/have-a-little-talk-with-jesus-by-jehovah-shalom-acapella",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.uquicks.com/post/awo-by-ntaate-sda-mission-ug",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.uquicks.com/post/weapon-of-victory-by-ntaate-sdamissionug-com",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.uquicks.com/post/ruhanga-akantorana-by-ntaate-insurance-in-jesus",
      changefreq: "daily",
      priority: 0.3,
    },
  ];

  const stream = new sitemapStream({ hostname: `https://${req.headers.host}` });

  res.writHead(200, {
    "content-Type": "application/xml",
  });

  const xmlString = await streamTopromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());

  res.end(xmlString);
};
