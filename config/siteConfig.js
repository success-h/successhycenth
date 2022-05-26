const baseUrl = "https://github.com/success-h/";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Success Hycenth`,
  author: {
    name: "Success Hycenth",
    github: "https://github.com/success-h",
    twitter: "https://twitter.com/success__hycent",
    linkedin: "https://linkedin.com/in/hycenth-success-a57556204",
    email: "successhycenth8@gmail.com",
    website: "https://successhycenth.vercel.app",
  },
  repo: {
    url: baseUrl,
  },
  seo: {
    title: "Success Hycenth",
    titleTemplate: "%s - Success Hycenth",
    description: "Hi 👋,  I’m a software engineer, UI/UX Designer.",
    siteUrl: "https://successhycenth.vercel.app",
    twitter: {
      handle: "@success__hycent",
      site: "@successhycenth",
      cardType: "summary_large_image",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://successhycenth.vercel.app",
      title: "Success Hycenth",
      description:
        "I’m a software engineer, UI/UX Designer. Learn more about me...",
      site_name: "Success Hycenth",
      images: [
        {
          url: "https://res.cloudinary.com/dp3a4be7p/image/upload/v1648637163/media/portfolio/images/profile_fa2ero.jpg",
          width: 1240,
          height: 480,
          alt: "Success Hycenth",
        },
        {
          url: "https://res.cloudinary.com/dp3a4be7p/image/upload/v1648637163/media/portfolio/images/profile_fa2ero.jpg",
          width: 1012,
          height: 506,
          alt: "Success Hycenth",
        },
      ],
    },
  },
};

export default siteConfig;
