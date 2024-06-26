import { rest } from 'msw';
// For more information on creating simulated HTTP API endpoints, please visit https://mswjs.io/docs/
export const routes = [
  rest.get('/dishes', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
    {
        id: 1,
        title: "Buttermilk Pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./images/buttermilkpancake.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammok freegan
               copper mug whatever cold-pressed`,
    },
     {
        id: 2,
        title: "Diner Double",
        category: "lunch",
        price: 13.99,
        img: "./images/item-2.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammok freegan
               copper mug whatever cold-pressed`,
    },
     {
        id: 3,
        title: "Godzilla Milkashake",
        category: "shakes",
        price: 6.99,
        img: "./images/item-3.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammok freegan
               copper mug whatever cold-pressed`,
    },
     {
        id: 4,
        title: "Country Delight",
        category: "breakfast",
        price: 20.99,
        img: "./images/item-4.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammok freegan
               copper mug whatever cold-pressed`,
    },
     {
        id: 5,
        title: "Egg Attack",
        category: "lunch",
        price: 22.99,
        img: "./images/item-5.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammok freegan
               copper mug whatever cold-pressed`,
    },
     {
        id: 6,
        title: "Oreo Dream",
        category: "shakes",
        price: 18.99,
        img: "./images/item-6.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammok freegan
               copper mug whatever cold-pressed`,
    },
     {
        id: 7,
        title: "Bacon Overflow",
        category: "breakfast",
        price: 8.99,
        img: "./images/item-7.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammok freegan
               copper mug whatever cold-pressed`,
    },
     {
        id: 8,
        title: "American Classic",
        category: "lunch",
        price: 12.99,
        img: "./images/item-8.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammok freegan
               copper mug whatever cold-pressed`,
    },
     {
        id: 9,
        title: "Quarantine Buddy",
        category: "dinner",
        price: 16.99,
        img: "./images/item-9.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammok freegan
               copper mug whatever cold-pressed`,
    },
     {
        id: 10,
        title: "Bison Steak",
        category: "dinner",
        price: 22.99,
        img: "./images/item-10.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammok freegan
               copper mug whatever cold-pressed`,
    }
    
])
    );
  }),
];
