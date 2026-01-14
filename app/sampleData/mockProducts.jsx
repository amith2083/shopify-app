import headphones from '../assests/headphones-displayed-against-dark-background.jpg';
import smartwatch from '../assests/rendering-smart-home-device.jpg';
import speaker from '../assests/brown-retro-electronic-speakers-device.jpg';
import juicer from '../assests/woman-makes-orange-juice-home-kitchen-with-electric-juicer.jpg';
import coffeemaker from '../assests/view-3d-coffee-cup-with-machine.jpg';
import laptopbag  from '../assests/unrecognizable-man-putting-laptop-devices-into-briefcase.jpg';
export const MOCK_PRODUCTS = [
  {
    id: 1,
    title: 'Premium Wireless Headphones',
    price: 349.99,
    images: [headphones],
    tags: ['Best Seller', 'Featured'],
    inStock: true,
  },
  {
    id: 2,
    title: 'Rendering Smart Watch',
    price: 399.99,
    images: [smartwatch],
   tags: ['Out of Stock'],
    inStock: false,
    outOfStockConfig: {
      heading: 'Currently Unavailable',
      buttonColor: '#2C6ECB',
      message: 'This item is temporarily out of stock. Enter your email to be notified when it becomes available.',
    }
  },
  {
    id: 3,
    title: 'Retro Electronic Speaker',
    price: 149.99,
    images: [speaker],
    tags: ['Best Seller'],
    inStock: true,
    
  },
  {
    id: 4,
    title: 'Electric Juicer',
    price: 129.99,
    images: [juicer],
    tags: ['Featured', 'Few Stocks Remaining'],
    inStock: true,
  },
  {
    id: 5,
    title: 'Coffee Maker',
    price: 179.99,
    images: [coffeemaker],
    tags: ['Best Seller', 'Featured'],
    inStock: true,
  },
  {
    id: 6,
    title: 'Laptop Bag',
    price: 89.99,
    images: [laptopbag],
   tags: ['Out of Stock'],
    inStock: false,
    outOfStockConfig: {
      heading: 'Coming Soon',
      buttonColor: '#059669',
      message: 'This item will be restocked soon. Sign up to receive a notification when it\'s available.',
    }
  },
];