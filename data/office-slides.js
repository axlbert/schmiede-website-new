const slide1 = {
  label: {
    titleParts: [
      { type: 'subtitle', content: 'We work in a' },
      { type: 'title', content: 'cool coworking place' },
      { type: 'subtitle', content: 'called super 7000.' },
    ],
    paragraph: `
      Our cozy -full of plants- office will blow your mind, 
      be ready for kikker games and some unexpected gun fights.
    `,
  },
  imageSrc: '/about/office/office-1.jpg',
  alt: 'Office Image 1',
};

const slide2 = {
  label: {
    titleParts: [
      { type: 'subtitle', content: 'Lorem ipsum' },
      { type: 'title', content: 'dolor sit amet' },
      { type: 'subtitle', content: 'consectetur.' },
    ],
    paragraph: `
      Morbi non dui placerat, maximus dolor interdum, facilisis massa. 
      Phasellus accumsan, mauris ac faucibus accumsan.
    `,
  },
  imageSrc: '/about/office/office-2.jpg',
  alt: 'Office Image 2',
};

const slide3 = {
  label: {
    titleParts: [
      { type: 'title', content: 'Lorem ipsum dolor' },
      { type: 'subtitle', content: 'sit amet consectetur' },
      { type: 'title', content: 'adipiscing elit.' },
    ],
    paragraph: `
      Sed dapibus, velit vel ullamcorper blandit, dui sapien 
      cursus diam, et tempor dolor leo vel magna.
    `,
  },
  imageSrc: '/about/office/office-3.jpg',
  alt: 'Office Image 3',
};

const slide4 = {
  label: {
    titleParts: [
      { type: 'subtitle', content: 'Lorem ipsum' },
      { type: 'title', content: 'dolor sit amet' },
      { type: 'subtitle', content: 'consectetur' },
      { type: 'title', content: 'adipiscing elit.' },
    ],
    paragraph: `
      Integer id dolor felis. Donec ac feugiat ex. Donec eu lacinia 
      quam. Cras massa risus, malesuada ut diam
    `,
  },
  imageSrc: '/about/office/office-4.jpg',
  alt: 'Office Image 4',
};

const slide5 = {
  label: {
    paragraph: `
      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices 
      posuere cubilia Curae; Curabitur eleifend volutpat augue.
      Proin at elementum elit. Cras in venenatis est. 
      Vivamus ut efficitur urna, non feugiat est.
    `,
  },
  imageSrc: '/about/office/office-5.jpg',
  alt: 'Office Image 5',
};

const officeSlides = [
  slide1, slide2, slide3, slide4, slide5, slide1, slide2, slide3, slide4,
];
export default officeSlides;
