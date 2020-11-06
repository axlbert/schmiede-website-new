const slide1 = {
  label: {
    titleParts: [
      { type: "subtitle", content: "We work in a" },
      { type: "title", content: "light, spacious and green" },
      { type: "subtitle", content: "office." },
    ],
    paragraph: `
      We work in the center of Düsseldorf, 100 meters away from the Rhine.
      We have our own garden and enjoy barbecues with the team as well as sitting and coding on the terrace.
    `,
  },
  imageSrc: "/about/office/office-1.jpg",
  alt: "Office Image 1",
};

const slide2 = {
  label: {
    titleParts: [
      { type: "subtitle", content: "We employ" },
      { type: "title", content: "the latest technologies" },
      { type: "subtitle", content: "in our daily business." },
    ],
    paragraph: `
      We keep ourselves up to date about the newest technologies and work methodologies
      that can help us excel in our work.
    `,
  },
  imageSrc: "/about/office/office-2.jpg",
  alt: "Office Image 2",
};

const slide3 = {
  label: {
    titleParts: [
      { type: "title", content: "Employee satisfaction" },
      { type: "subtitle", content: "is of utmost importance" },
    ],
    paragraph: `
      Work hard, play hard is the name of the game. A kicker table 
      and a dedicated table tennis room in the office helps us blow off steam
      when needed.
    `,
  },
  imageSrc: "/about/office/office-3.jpg",
  alt: "Office Image 3",
};

const slide4 = {
  label: {
    titleParts: [
      { type: "title", content: "Sustainability" },
      { type: "subtitle", content: "means more for us" },
    ],
    paragraph: `
    As part of Grimme group, we help mechanizing and feeding the world
    through enabling farmers to become more efficient and successful
    `,
  },
  imageSrc: "/about/office/office-4.jpg",
  alt: "Office Image 4",
};

const slide5 = {
  label: {
    paragraph: `
      At Schmiede.one, our team of highly skilled professionals dedicates time and
      effort to create innovative quality products in the field of agriculture, ranging from
      user friendly and highly scalable web and mobile applications, data science driven smart
      algorithms, to heavy machinery driven by artificial intelligence.
    `,
  },
  imageSrc: "/about/office/office-5.jpg",
  alt: "Office Image 5",
};

const officeSlides = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide1,
  slide2,
  slide3,
  slide4,
];
export default officeSlides;
