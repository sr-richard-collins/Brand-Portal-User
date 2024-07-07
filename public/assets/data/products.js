import product11 from '@/assets/images/products/product-1(1).png';
import product2 from '@/assets/images/products/product-2.png';
import product3 from '@/assets/images/products/product-3.png';
import product4 from '@/assets/images/products/product-4.png';
import product5 from '@/assets/images/products/product-5.png';
import product6 from '@/assets/images/products/product-6.png';
import product12 from '@/assets/images/products/product-1(2).png';
import avatar1 from '@/assets/images/users/avatar-1.jpg';
import avatar2 from '@/assets/images/users/avatar-2.jpg';
import avatar3 from '@/assets/images/users/avatar-3.jpg';
import avatar4 from '@/assets/images/users/avatar-4.jpg';
import avatar5 from '@/assets/images/users/avatar-5.jpg';
import avatar6 from '@/assets/images/users/avatar-6.jpg';
import avatar7 from '@/assets/images/users/avatar-7.jpg';
import avatar8 from '@/assets/images/users/avatar-8.jpg';
import avatar9 from '@/assets/images/users/avatar-9.jpg';
import avatar10 from '@/assets/images/users/avatar-10.jpg';
export const categoriesData = [{
  id: '1001',
  name: 'Computer'
}, {
  id: '1002',
  name: 'Camera'
}, {
  id: '1003',
  name: 'Headphones'
}, {
  id: '1004',
  name: 'Mobile'
}, {
  id: '1005',
  name: 'Pendrive'
}];
export const sellersData = [
  {
    id: '101',
    name: 'Anna M. Hines',
    storeName: 'Acme',
    image: avatar1,
    productsCount: 356,
    walletBalance: 256.45,
    revenue: 269.56,
    createdAt: new Date('09/04/2021'),
    review: {
      count: 588,
      stars: 5,
    },
  },
  {
    id: '102',
    name: 'Candice F. Gilmore',
    storeName: 'Globex',
    image: avatar2,
    productsCount: 289,
    walletBalance: 156.98,
    revenue: 89.75,
    createdAt: new Date('03/31/2021'),
    review: {
      count: 650,
      stars: 3.2,
    },
  },
  {
    id: '103',
    name: 'Vanessa R. Davis',
    storeName: 'Soylent',
    image: avatar3,
    productsCount: 71,
    walletBalance: 859.5,
    revenue: 452.5,
    createdAt: new Date('01/02/2020'),
    review: {
      count: 129,
      stars: 4.5,
    },
  },
  {
    id: '104',
    name: 'Judith H. Fritsche',
    storeName: 'Initech',
    image: avatar4,
    productsCount: 125,
    walletBalance: 163.75,
    revenue: 365,
    createdAt: new Date('09/05/2020'),
    review: {
      count: 523,
      stars: 2.5,
    },
  },
  {
    id: '105',
    name: 'Peter T. Smith',
    storeName: 'Hooli',
    image: avatar5,
    productsCount: 265,
    walletBalance: 545,
    revenue: 465.59,
    createdAt: new Date('05/22/2019'),
    review: {
      count: 241,
      stars: 3.7,
    },
  },
  {
    id: '106',
    name: 'Emmanuel J. Delcid',
    storeName: 'Vehement',
    image: avatar6,
    productsCount: 68,
    walletBalance: 136.54,
    revenue: 278.95,
    createdAt: new Date('01/12/2019'),
    review: {
      count: 4325,
      stars: 4.3,
    },
  },
  {
    id: '107',
    name: 'William J. Cook',
    storeName: 'Massive',
    image: avatar7,
    productsCount: 550,
    walletBalance: 365.85,
    revenue: 475.96,
    createdAt: new Date('06/1/2021'),
    review: {
      count: 6667,
      stars: 1.8,
    },
  },
  {
    id: '108',
    name: 'Martin R. Peters',
    storeName: 'Fringe',
    image: avatar8,
    productsCount: 123,
    walletBalance: 95.7,
    revenue: 142,
    createdAt: new Date('03/04/2020'),
    review: {
      count: 23,
      stars: 3.5,
    },
  },
  {
    id: '109',
    name: 'Paul M. Schubert',
    storeName: 'Weeds',
    image: avatar9,
    productsCount: 789,
    walletBalance: 423.4,
    revenue: 652.9,
    createdAt: new Date('05/07/2020'),
    review: {
      count: 223,
      stars: 5,
    },
  },
  {
    id: '110',
    name: 'Janet J. Champine',
    storeName: 'Soylent',
    image: avatar10,
    productsCount: 75,
    walletBalance: 216.8,
    revenue: 180.75,
    createdAt: new Date('07/13/2019'),
    review: {
      count: 231,
      stars: 4.6,
    },
  },
]
export const ecommerceProductsData = [{
  id: '10001',
  categoryId: '1001',
  sellerId: '101',
  name: 'G15 Gaming Laptop',
  description: 'Power Your Laptop with a Long-Lasting and Fast-Charging Battery.',
  images: [product11],
  price: 999,
  quantity: 9,
  review: {
    count: 1055,
    stars: 5
  },
  sale: {
    discount: 50,
    type: 'percent'
  }
}, {
  id: '10002',
  categoryId: '1002',
  sellerId: '102',
  name: 'Sony Alpha ILCE 6000Y 24.3 MP Mirrorless Digital SLR Camera',
  description: 'Capture special moments and portraits to remember and share.',
  images: [product2],
  price: 485,
  quantity: 10,
  review: {
    count: 680,
    stars: 5
  }
}, {
  id: '10003',
  categoryId: '1003',
  sellerId: '103',
  name: 'Sony Over-Ear Wireless Headphone with Mic',
  description: "Headphones are a pair of small loudspeaker drivers worn on or around the head over a user's ears.",
  images: [product3],
  price: 698,
  quantity: 56,
  review: {
    count: 2394,
    stars: 4.5
  },
  sale: {
    discount: 5,
    type: 'amount'
  }
}, {
  id: '10004',
  categoryId: '1004',
  sellerId: '104',
  name: 'Apple iPad Pro with Apple M1 chip',
  description: 'The new iPad mini and iPad.',
  images: [product4],
  price: 356,
  quantity: 0,
  review: {
    count: 588,
    stars: 5
  }
}, {
  id: '10005',
  categoryId: '1005',
  sellerId: '105',
  name: 'Adam ROMA USB-C / USB-A 3.1 (2-in-1 Flash Drive) – 128GB',
  description: 'A USB flash drive is a data storage device that includes flash memory with an integrated USB interface.',
  images: [product5],
  price: 854,
  quantity: 390,
  review: {
    count: 650,
    stars: 5
  },
  sale: {
    discount: 12,
    type: 'amount'
  }
}, {
  id: '10006',
  categoryId: '1004',
  sellerId: '106',
  name: 'Apple iPHone 13',
  description: 'The new iPHone 1 and iPad.',
  images: [product6],
  price: 763,
  quantity: 209,
  review: {
    count: 129,
    stars: 5
  }
}, {
  id: '10007',
  categoryId: '1001',
  sellerId: '107',
  name: 'Apple Mac',
  description: 'Power Your Laptop with a Long-Lasting and Fast-Charging Battery.',
  images: [product12],
  price: 629,
  quantity: 2,
  review: {
    count: 523,
    stars: 5
  },
  sale: {
    discount: 40,
    type: 'percent'
  }
}];
export const customersData = [{
  id: '2001',
  image: avatar1,
  name: 'Anna M. Hines',
  createdAt: new Date('23 April 2024'),
  email: 'anna.hines@mail.com',
  phone: '(+1)-555-1564-261',
  ordersCount: 15,
  address: 'Burr Ridge/Illinois'
}, {
  id: '2002',
  image: avatar2,
  name: 'Candice F. Gilmore',
  createdAt: new Date('12 April 2024'),
  email: 'candice.gilmore@mail.com',
  phone: '(+257)-755-5532-588',
  ordersCount: 215,
  address: 'Roselle/Illinois'
}, {
  id: '2003',
  image: avatar3,
  name: 'Vanessa R. Davis',
  createdAt: new Date('15 March 2024'),
  email: 'vanessa.davis@mail.com',
  phone: '(+1)-441-5558-183',
  address: 'Wann/Oklahoma',
  ordersCount: 125
}, {
  id: '2004',
  image: avatar4,
  name: 'Judith H. Fritsche',
  createdAt: new Date('11 January 2024'),
  email: 'judith.fritsche.com',
  phone: '(+57)-305-5579-759',
  address: 'SULLIVAN/Kentucky',
  ordersCount: 5
}, {
  id: '2005',
  image: avatar5,
  name: 'Peter T. Smith',
  createdAt: new Date('03 December 2023'),
  email: 'peter.smith@mail.com',
  phone: '(+33)-655-5187-93',
  address: 'Yreka/California',
  ordersCount: 15
}, {
  id: '2006',
  image: avatar6,
  name: 'Emmanuel J. Delcid',
  createdAt: new Date('12 April 2024'),
  email: 'emmanuel.delicid@mail.com',
  phone: '(+30)-693-5553-637',
  address: 'Atlanta/Georgia',
  ordersCount: 10
}, {
  id: '2007',
  image: avatar7,
  name: 'William J. Cook',
  createdAt: new Date('13 November 2023'),
  email: 'william.cook@mail.com',
  phone: '(+91)-855-5446-150',
  address: 'Rosenberg/Texas',
  ordersCount: 85
}, {
  id: '2008',
  image: avatar8,
  name: 'Martin R. Peters',
  createdAt: new Date('25 August 2023'),
  email: 'martin.peters@mail.com',
  phone: '(+61)-455-5943-13',
  address: 'Youngstown/Ohio',
  ordersCount: 3
}, {
  id: '2009',
  image: avatar9,
  name: 'Paul M. Schubert',
  createdAt: new Date('28 April 2024'),
  email: 'paul.schubert@mail.com',
  phone: '(+61)-035-5531-64',
  address: 'Austin/Texas',
  ordersCount: 181
}, {
  id: '2010',
  image: avatar10,
  name: 'Janet J. Champine',
  createdAt: new Date('06 May 2023'),
  email: 'janet.champine@mail.com',
  phone: '(+880)-115-5592-916',
  address: 'Nashville/Tennessee',
  ordersCount: 521
}];
export const ordersData = [
  {
    id: '3001',
    productId: '10001',
    customerId: '2001',
    createdAt: new Date('03/07/2021'),
    paymentMethod: 'Credit Card',
    status: 'Delivered',
  },
  {
    id: '3002',
    productId: '10002',
    customerId: '2002',
    createdAt: new Date('06/09/2018'),
    paymentMethod: 'Credit Card',
    status: 'Processing',
  },
  {
    id: '3003',
    productId: '10003',
    customerId: '2003',
    createdAt: new Date('12/07/2019'),
    paymentMethod: 'Pay Pal',
    status: 'Cancelled',
  },
  {
    id: '3004',
    productId: '10004',
    customerId: '2004',
    createdAt: new Date('01/12/2021'),
    paymentMethod: 'Credit Card',
    status: 'Delivered',
  },
  {
    id: '3005',
    productId: '10005',
    customerId: '2005',
    createdAt: new Date('01/05/2018'),
    paymentMethod: 'Pay Pal',
    status: 'Delivered',
  },
  {
    id: '3006',
    productId: '10006',
    customerId: '2006',
    createdAt: new Date('12/06/2020'),
    paymentMethod: 'Pay Pal',
    status: 'Processing',
  },
  {
    id: '3007',
    productId: '10007',
    customerId: '2007',
    createdAt: new Date('04/08/2017'),
    paymentMethod: 'Credit Card',
    status: 'Processing',
  },
  {
    id: '3008',
    productId: '10003',
    customerId: '2008',
    createdAt: new Date('03/07/2018'),
    paymentMethod: 'Credit Card',
    status: 'Cancelled',
  },
  {
    id: '3009',
    productId: '10002',
    customerId: '2009',
    createdAt: new Date('08/11/2019'),
    paymentMethod: 'Google Pay',
    status: 'Delivered',
  },
  {
    id: '3010',
    productId: '10005',
    customerId: '2010',
    createdAt: new Date('07/03/2019'),
    paymentMethod: 'Google Pay',
    status: 'Processing',
  },
]
export const inventoryData = [{
  id: '4001',
  productId: '10001',
  condition: 'New',
  location: 'WareHouse 1',
  quantity: 3521,
  reserved: 6532,
  onHand: 1236,
  lastModifiedAt: new Date('12/03/2021')
}, {
  id: '4002',
  productId: '10002',
  condition: 'New',
  location: 'WareHouse 2',
  quantity: 4562,
  reserved: 256,
  onHand: 214,
  lastModifiedAt: new Date('06/04/2021')
}, {
  id: '4003',
  productId: '10003',
  condition: 'Returned',
  location: 'WareHouse 3',
  quantity: 125,
  reserved: 4512,
  onHand: 412,
  lastModifiedAt: new Date('21/05/2020')
}, {
  id: '4004',
  productId: '10004',
  condition: 'Damaged',
  location: 'WareHouse 1',
  quantity: 4523,
  reserved: 1241,
  onHand: 852,
  lastModifiedAt: new Date('15/03/2021')
}, {
  id: '4005',
  productId: '10005',
  condition: 'New',
  location: 'WareHouse 2',
  quantity: 1475,
  reserved: 2345,
  onHand: 1256,
  lastModifiedAt: new Date('15/10/2020')
}];
export const invoicesData = [{
  id: 'RB6985',
  productId: '10001',
  customerId: '2001',
  orderId: '3001'
}, {
  id: 'RB1002',
  productId: '10002',
  customerId: '2002',
  orderId: '3002'
}, {
  id: 'RB3652',
  productId: '10003',
  customerId: '2003',
  orderId: '3003'
}, {
  id: 'RB7854',
  productId: '10004',
  customerId: '2004',
  orderId: '3004'
}, {
  id: 'RB9521',
  productId: '10005',
  customerId: '2005',
  orderId: '3005'
}, {
  id: 'RB9634',
  productId: '10006',
  customerId: '2006',
  orderId: '3006'
}, {
  id: 'RB8520',
  productId: '10007',
  customerId: '2007',
  orderId: '3007'
}, {
  id: 'RB3590',
  productId: '10003',
  customerId: '2008',
  orderId: '3008'
}, {
  id: 'RB5872',
  productId: '10005',
  customerId: '2009',
  orderId: '3009'
}, {
  id: 'RB1158',
  productId: '10002',
  customerId: '2010',
  orderId: '3010'
}];