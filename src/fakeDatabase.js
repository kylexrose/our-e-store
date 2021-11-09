
const productList = [
   {
        id: '1',
        title: "Apple",
        description: 'delicious apple',
        brand: 'macintosh',
        price: .99,
            image: 'https://media.istockphoto.com/photos/red-apple-with-leaf-picture-id683494078?k=20&m=683494078&s=170667a&w=0&h=HHnGEokgWVCLhAnBG4PNQ_Q0xVO9FZMa6iCJdAKPPbc=',
   },
   {
        id: '2',
        title: "Pineapple",
        description: 'sweet and sour',
        brand: 'the twang',
        price: 3.99,
       image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2021/06/pineapple.jpg?fit=1200%2C879&ssl=1',
    },
    {
        id: '3',
        title: "Mango",
        description: 'tropical mango',
        brand: 'the sticky stuff',
        price: 1.99,
        image: 'https://snaped.fns.usda.gov/sites/default/files/styles/crop_ratio_7_5/public/seasonal-produce/2018-05/mango.jpg?itok=KiyDzhWy',
    },
    {
        id: '4',
        title: "Grapes",
        description: 'luscious grapes',
        brand: 'crack on a string',
        price: 4.99,
        image: 'https://image.shutterstock.com/image-photo/blue-wet-isabella-grapes-bunch-260nw-220836805.jpg',
    },
  
];




export const fetchProducts = () => new Promise((resolve, reject) => {
  console.log('fetching Data from imaginary products database')
  setTimeout(() => {
      try {
          // fetchingData from imaginary database
          resolve(productList)
      } catch (error) {
          reject(error);
      }
  }, 1000);
});