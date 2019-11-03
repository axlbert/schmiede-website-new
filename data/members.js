/**
 * TEAM MEMBERS DATA.
 */

const ollie = {
  name: 'Ollie',
  role: 'Developer',
  imageSrc: '/about/member-1.jpg',
  personal: {
    location: 'Kyiv, Ukraine',
    quote: `Give me wine and cards, i'll be in purgatory.`,
    favorites: new Map([
      ['Book', 'Harry Potter'],
      ['Color', 'Black'],
      ['Food', 'Pizza'],
      ['Vacation Spot', 'Italy'],
    ]),
  },
  professional: {
    sinceYear: 2019,
    quote: `Keep it simple, stupid.`,
    description: `
      1: Coming from the fashion industry, I am working at Schmiede.one 
      on things that display my true passions which are: food, 
      agriculture, and innovative business models.
      My project range is, from our test field to pure software projects 
      to Indoor farming, which makes working at Schmiede.one very diverse.
    `,
  },
};

const analisa = {
  name: 'Analisa',
  role: 'Designer',
  imageSrc: '/about/member-2.jpg',
  personal: {
    location: 'Lima, Peru',
    quote: `Give me a book and chocolates, i'll be in paradise.`,
    favorites: new Map([
      ['Book', 'El Extranjero'],
      ['Color', 'Black'],
      ['Food', 'Ceviche'],
      ['Vacation Spot', 'Italy'],
    ]),
  },
  professional: {
    sinceYear: 2018,
    quote: `Make it simple but significant.`,
    description: `
      2: Coming from the fashion industry, I am working at Schmiede.one 
      on things that display my true passions which are: food, 
      agriculture, and innovative business models.
      My project range is, from our test field to pure software projects 
      to Indoor farming, which makes working at Schmiede.one very diverse.
    `,
  },
};

const leonarda = {
  name: 'Leonarda',
  role: 'Project Manager',
  imageSrc: '/about/member-3.jpg',
  personal: {
    location: 'Düsseldorf, Germany',
    quote: `Give me a book and chocolates, i'll be in paradise.`,
    favorites: new Map([
      ['Book', 'El Extranjero'],
      ['Color', 'Black'],
      ['Food', 'Ceviche'],
      ['Vacation Spot', 'Italy'],
    ]),
  },
  professional: {
    sinceYear: 2017,
    quote: `Divide and rule.`,
    description: `
      3: Coming from the fashion industry, I am working at Schmiede.one 
      on things that display my true passions which are: food, 
      agriculture, and innovative business models.
      My project range is, from our test field to pure software projects 
      to Indoor farming, which makes working at Schmiede.one very diverse.
    `,
  },
};

//const members = [ollie];
//const members = [leonarda];
const members = [ollie, analisa, leonarda];
export default members;
