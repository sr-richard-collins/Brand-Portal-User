import { addOrSubtractDaysFromDate, addOrSubtractMinutesFromDate } from '@/utils/date';
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
import avatar11 from '@/assets/images/users/avatar-11.jpg';
import avatar12 from '@/assets/images/users/avatar-12.jpg';
import groupImg1 from '@/assets/images/app-social/group-1.jpg';
import groupImg2 from '@/assets/images/app-social/group-2.jpg';
import groupImg3 from '@/assets/images/app-social/group-3.jpg';
import groupImg4 from '@/assets/images/app-social/group-4.jpg';
import groupImg5 from '@/assets/images/app-social/group-5.jpg';
import groupImg6 from '@/assets/images/app-social/group-6.jpg';
import groupImg7 from '@/assets/images/app-social/group-7.jpg';
import groupImg8 from '@/assets/images/app-social/group-8.jpg';
import groupImg9 from '@/assets/images/app-social/group-9.jpg';
import postImg1 from '@/assets/images/app-social/post-1.jpg';
import postImg2 from '@/assets/images/app-social/post-2.jpg';
import postImg3 from '@/assets/images/app-social/post-3.jpg';
import postImg4 from '@/assets/images/app-social/post-4.jpg';
import postImg6 from '@/assets/images/app-social/post-6.jpg';
import postImg7 from '@/assets/images/app-social/post-7.jpg';
import favorite1 from '@/assets/images/app-social/favorite-1.jpg';
import favorite2 from '@/assets/images/app-social/favorite-2.jpg';
import favorite3 from '@/assets/images/app-social/favorite-3.jpg';
import favorite4 from '@/assets/images/app-social/favorite-4.jpg';
import small1 from '@/assets/images/small/img-1.jpg';
import small2 from '@/assets/images/small/img-2.jpg';
import small3 from '@/assets/images/small/img-3.jpg';
export const socialCommentsData = [{
  id: '401',
  postId: '10002',
  comment: 'Nice work, makes me think of The Money Pit.',
  likesCount: 7,
  socialUserId: '103',
  children: [{
    id: '402',
    comment: "i'm in the middle of a timelapse animation myself! (Very different though.) Awesome stuff.",
    likesCount: 1,
    postId: '10002',
    replyTo: '401',
    socialUserId: '104',
    children: [{
      id: '404',
      comment: 'Nice work, makes me think of The Money Pit.',
      likesCount: 3,
      postId: '10002',
      replyTo: '401',
      socialUserId: '105'
    }]
  }, {
    id: '405',
    comment: "i'm in the middle of a timelapse animation myself! (Very different though.) Awesome stuff.",
    likesCount: 5,
    postId: '10002',
    replyTo: '401',
    socialUserId: '106'
  }]
}, {
  id: '403',
  postId: '10008',
  comment: "i'm in the middle of a timelapse animation myself! (Very different though.) Awesome stuff.",
  likesCount: 2,
  socialUserId: '105'
}];
export const socialPostsData = [{
  id: '10001',
  socialUserId: '101',
  caption: 'Story based around the idea of time lapse, animation to post soon!',
  photos: [postImg1, postImg2, postImg3, postImg4, postImg7, postImg6],
  likesCount: 1504,
  commentsCount: 521,
  createdAt: addOrSubtractMinutesFromDate(2)
}, {
  id: '10002',
  socialUserId: '102',
  caption: '🌟✨ Just spent the most amazing weekend camping in the wilderness! 🏕️🌲 Nothing beats disconnecting from the hustle and bustle of city life and reconnecting with nature.',
  likesCount: 260,
  commentsCount: 234,
  createdAt: addOrSubtractMinutesFromDate(61)
}, {
  id: '10003',
  socialUserId: '103',
  caption: 'The parallax is a little odd but O.o that house build is awesome!!',
  likesCount: 3560,
  commentsCount: 897,
  embedLink: 'https://player.vimeo.com/video/87993762',
  createdAt: addOrSubtractMinutesFromDate(662)
}, {
  id: '10004',
  socialUserId: '104',
  likesCount: 1504,
  liked: true,
  commentsCount: 653,
  photos: [postImg2, postImg3],
  createdAt: addOrSubtractMinutesFromDate(895),
  saved: true
}, {
  id: '10005',
  socialUserId: '105',
  likesCount: 1005,
  liked: true,
  commentsCount: 895,
  photos: [postImg4],
  createdAt: addOrSubtractMinutesFromDate(896),
  saved: true
}, {
  id: '10006',
  socialUserId: '106',
  likesCount: 6350,
  commentsCount: 2203,
  liked: true,
  caption: '“Not only must we be good, but we must also be good for something.”',
  createdAt: addOrSubtractMinutesFromDate(1200),
  saved: true
}, {
  id: '10007',
  socialUserId: '107',
  likesCount: 3560,
  commentsCount: 523,
  embedLink: 'https://www.youtube.com/embed/i8KnCFq4Sw0',
  createdAt: addOrSubtractMinutesFromDate(1325),
  saved: true
}, {
  id: '10008',
  socialUserId: '108',
  likesCount: 1503,
  liked: true,
  commentsCount: 720,
  caption: 'Cant go wrong with Bernadette Clothes \n Affordable Price and Top Quality \n COD Available, 10 days return policy',
  tags: ['#Clothes', '#Trendy', '#Shirts'],
  photos: [favorite1],
  createdAt: addOrSubtractMinutesFromDate(301),
  saved: true
}, {
  id: '10009',
  socialUserId: '109',
  likesCount: 1301,
  liked: true,
  commentsCount: 451,
  caption: 'Cant go wrong with Bernadette Clothes \n Affordable Price and Top Quality \n COD Available, 10 days return policy',
  tags: ['#Grocery', '#HomeMaterial', '#Foods', '#Market'],
  photos: [favorite2],
  createdAt: addOrSubtractMinutesFromDate(361),
  saved: true
}, {
  id: '10010',
  socialUserId: '110',
  likesCount: 1250,
  commentsCount: 256,
  caption: 'Land of elves in Norse mythology. \n The "otherworld" of Welsh mythology. \n The city in which King Arthur reigned.',
  tags: ['#Travelling', '#Nature'],
  photos: [favorite3],
  createdAt: addOrSubtractMinutesFromDate(361),
  saved: true
}, {
  id: '10011',
  socialUserId: '111',
  likesCount: 1001,
  liked: true,
  commentsCount: 345,
  caption: 'Academic Library \n Special Library. \n Public Library.',
  tags: ['#LoveReading', '#Book'],
  photos: [favorite4],
  createdAt: addOrSubtractMinutesFromDate(985),
  saved: true
}, {
  id: '10012',
  socialUserId: '112',
  likesCount: 9520,
  liked: true,
  commentsCount: 4020,
  embedLink: 'https://www.youtube.com/embed/c9Wg6Cb_YlU',
  createdAt: addOrSubtractDaysFromDate(1)
}, {
  id: '10013',
  socialUserId: '101',
  likesCount: 91220,
  commentsCount: 8651,
  embedLink: 'https://www.youtube.com/embed/CXkjHLBr_y0',
  createdAt: addOrSubtractDaysFromDate(1)
}, {
  id: '10014',
  socialUserId: '102',
  likesCount: 854,
  commentsCount: 102,
  embedLink: 'https://www.youtube.com/embed/IJ_LDIlYnjw',
  createdAt: addOrSubtractDaysFromDate(3)
}, {
  id: '10015',
  socialUserId: '103',
  likesCount: 3850,
  commentsCount: 663,
  embedLink: 'https://www.youtube.com/embed/ehmsJLZlCZ0',
  createdAt: addOrSubtractDaysFromDate(4)
}];
export const socialUsersData = [{
  id: '101',
  avatar: avatar1,
  name: 'Victoria P. Miller',
  mutualCount: 43,
  email: 'hildabbridges@teleworm.us',
  message: 'How are you today?',
  time: addOrSubtractMinutesFromDate(10),
  phone: '456 9595 9594',
  location: 'California, USA',
  languages: ['English', 'German', 'Spanish'],
  activityStatus: 'online'
}, {
  id: '102',
  avatar: avatar2,
  name: 'Dallas C. Payne',
  mutualCount: 856,
  email: 'kevinmbacon@dayrep.com',
  message: "Hey! a reminder for tommorow's meeting...",
  time: addOrSubtractMinutesFromDate(20),
  status: '** no status **',
  phone: '456 9595 9486',
  location: 'New Jersey, USA',
  languages: ['English', 'German', 'Spanish'],
  activityStatus: 'offline'
}, {
  id: '103',
  avatar: avatar3,
  name: 'Florence A. Lopez',
  mutualCount: 52,
  email: 'sherriewtorres@dayrep.com',
  message: "Hello! I just got your assignment, everything's alright, exce",
  time: addOrSubtractMinutesFromDate(50),
  activityStatus: 'typing',
  status: '|| Karma ||',
  phone: '456 9595 9562',
  location: 'California, USA',
  languages: ['English', 'German', 'Spanish']
}, {
  id: '104',
  avatar: avatar4,
  name: 'Gail A. Nix',
  mutualCount: 12,
  email: 'davidrwill@teleworm.us',
  message: "Are we going to have this week's planning meeting today?",
  time: addOrSubtractMinutesFromDate(100),
  status: 'Hey there! I am using Chat.',
  phone: '456 9595 8956',
  location: 'New York, USA',
  languages: ['English', 'German', 'Spanish'],
  activityStatus: 'offline'
}, {
  id: '105',
  avatar: avatar5,
  name: 'Lynne J. Petty',
  mutualCount: 548,
  email: 'darylvdonnellan@teleworm.us',
  message: 'Please check this template...',
  time: addOrSubtractMinutesFromDate(150),
  status: 'TM',
  phone: '456 9595 9594',
  location: 'California, USA',
  languages: ['English', 'German', 'Spanish'],
  activityStatus: 'offline'
}, {
  id: '106',
  avatar: avatar6,
  name: 'Victoria P. Miller',
  mutualCount: 0,
  email: 'risahcuevas@jourrapide.com',
  message: 'Are free for 10 minutes? would like to discuss something...',
  time: addOrSubtractMinutesFromDate(200),
  status: 'Available',
  phone: '456 9595 9594',
  location: 'California, USA',
  languages: ['English', 'German', 'Spanish'],
  activityStatus: 'online'
}, {
  id: '107',
  avatar: avatar7,
  name: 'Dallas C. Payne',
  mutualCount: 856,
  hasRequested: true,
  email: 'darylvdonnellan@teleworm.us',
  message: 'How are you?',
  time: addOrSubtractMinutesFromDate(250),
  status: 'Hey there! I am using Chat.',
  phone: '456 9595 9594',
  location: 'California, USA',
  languages: ['English', 'German', 'Spanish'],
  activityStatus: 'online'
}, {
  id: '108',
  avatar: avatar8,
  name: 'Florence A. Lopez',
  mutualCount: 52,
  email: 'florencevdonnellan@teleworm.us',
  message: 'Whats going on?',
  time: addOrSubtractMinutesFromDate(350),
  phone: '456 9595 9865',
  location: 'California, USA',
  languages: ['English', 'German', 'Spanish'],
  activityStatus: 'offline'
}, {
  id: '109',
  avatar: avatar9,
  name: 'Gail A. Nix',
  mutualCount: 12,
  email: 'gaila@teleworm.us',
  message: 'Would you like to join us?',
  time: addOrSubtractMinutesFromDate(450),
  phone: '456 9595 9594',
  location: 'California, USA',
  languages: ['English', 'German', 'Spanish'],
  activityStatus: 'offline'
}, {
  id: '110',
  avatar: avatar10,
  name: 'Lynne J. Petty',
  mutualCount: 54,
  email: 'lynnepetty@teleworm.us',
  message: 'Hello! You asked me for some extra excercises to train CO. Here you are, like I promissed.',
  time: addOrSubtractMinutesFromDate(500),
  phone: '456 9595 9594',
  location: 'California, USA',
  languages: ['English', 'German', 'Spanish'],
  activityStatus: 'typing'
}, {
  id: '111',
  avatar: avatar11,
  name: 'Tonya J. Hill',
  mutualCount: 123,
  hasRequested: true,
  email: 'tonyahill@teleworm.us',
  message: 'Hey! Okay, thank you for letting me know. See you!',
  time: addOrSubtractMinutesFromDate(600),
  phone: '456 9595 3265',
  location: 'California, USA',
  languages: ['English', 'German', 'Spanish'],
  activityStatus: 'online'
}, {
  id: '112',
  avatar: avatar12,
  name: 'James A. Briggs',
  mutualCount: 56,
  email: 'jamesbridge@teleworm.us',
  message: 'Hey! Okay, thank you for letting me know. See you!',
  time: addOrSubtractMinutesFromDate(650),
  phone: '456 9595 9594',
  location: 'California, USA',
  languages: ['English', 'German', 'Spanish'],
  activityStatus: 'offline'
}];
export const socialEventsData = [{
  id: '201',
  image: groupImg2,
  startsAt: addOrSubtractDaysFromDate(2),
  type: 'togetherness',
  title: 'Musical Event : Des Moines',
  venue: '4436 Southern Avenue, Iowa-50309'
}, {
  id: '202',
  image: groupImg5,
  startsAt: addOrSubtractDaysFromDate(3),
  type: 'professional',
  title: 'Antisocial Darwinism : Evansville',
  venue: '1265 Lucy Lane, Indiana-47710'
}, {
  id: '203',
  image: groupImg6,
  startsAt: addOrSubtractDaysFromDate(4),
  type: 'celebration',
  title: 'Balls of the Bull Festival : Dallas',
  venue: '1422 Liberty Street, Texas-75204'
}, {
  id: '204',
  image: groupImg7,
  startsAt: addOrSubtractDaysFromDate(5),
  type: 'professional',
  title: 'Belch Blanket Babylon : LA Follette',
  venue: '2542 Cedar Street, Tennessee-37766'
}];
export const socialGroupsData = [{
  id: '301',
  image: groupImg1,
  name: 'Interior Design & Architech',
  description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  membersCount: 23345,
  friends: true
}, {
  id: '302',
  image: groupImg2,
  name: 'Event Management',
  description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  membersCount: 26312,
  joined: true
}, {
  id: '303',
  image: groupImg3,
  name: 'Commercial University, Delhi.',
  description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  membersCount: 39678,
  friends: true
}, {
  id: '304',
  image: groupImg4,
  name: 'Tourist Place of Potland',
  description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  membersCount: 2345,
  friends: true
}, {
  id: '305',
  image: groupImg5,
  name: 'Promote Your Business',
  description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  membersCount: 7980,
  suggested: true
}, {
  id: '306',
  image: groupImg6,
  name: 'The Greasy Mullets',
  description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  membersCount: 98231,
  suggested: true
}, {
  id: '307',
  image: groupImg7,
  name: 'Tourist Place of Portland',
  description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  membersCount: 2015,
  joined: true
}, {
  id: '308',
  image: groupImg8,
  name: 'UI / UX Design',
  description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  membersCount: 1450,
  joined: true
}, {
  id: '309',
  image: groupImg9,
  name: 'Music Circle',
  description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  membersCount: 9387,
  friends: true
}, {
  id: '310',
  image: groupImg1,
  name: 'Travelling The World',
  description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  membersCount: 25800020,
  joined: true
}];
export const teamMembers = [{
  id: '701',
  memberId: '101',
  role: 'HR Manager',
  projects: 342,
  duration: '2y',
  tasks: 1032
}, {
  id: '702',
  memberId: '102',
  role: 'Web Designer',
  projects: 231,
  duration: '1.3y',
  tasks: 543
}, {
  id: '703',
  memberId: '103',
  role: 'UI/UX Designer',
  projects: 123,
  duration: '7m',
  tasks: 231
}, {
  id: '704',
  memberId: '104',
  role: 'Software Engineer',
  projects: 452,
  duration: '4y',
  tasks: 331
}, {
  id: '705',
  memberId: '105',
  role: 'Lead Product Design',
  projects: 352,
  duration: '6m',
  tasks: 463
}, {
  id: '706',
  memberId: '106',
  role: 'Project Manager',
  projects: 231,
  duration: '4y',
  tasks: 573
}];
export const emailsData = [{
  id: '2001',
  fromId: '102',
  toId: '101',
  subject: 'Lucas Kriebel (@Daniel J. Olsen) has sent you a direct message on Twitter!',
  content: '@Daniel J. Olsen - Very cool :) Nicklas, You have a new direct message.',
  label: 'Primary',
  createdAt: new Date('11:49 am'),
  read: false,
  starred: false,
  important: true,
  deleted: false
}, {
  id: '2002',
  fromId: '103',
  toId: '101',
  subject: 'Images',
  label: 'Primary',
  attachments: [{
    preview: postImg1,
    name: 'Img_201.jpg'
  }, {
    preview: postImg2,
    name: 'Img_202.jpg'
  }, {
    preview: postImg3,
    name: 'Img_203.jpg'
  }, {
    preview: postImg4,
    name: 'Img_204.jpg'
  }, {
    preview: postImg6,
    name: 'Img_206.jpg'
  }, {
    preview: postImg7,
    name: 'Img_207.jpg'
  }],
  createdAt: new Date('Feb 21'),
  read: true,
  starred: true,
  important: true,
  deleted: false
}, {
  id: '2003',
  fromId: '104',
  toId: '101',
  subject: 'Train/Bus',
  content: "Yes ok, great! I'm not stuck in Stockholm anymore, we're making progress.",
  label: 'Primary',
  createdAt: new Date('Feb 19'),
  read: true,
  starred: false,
  important: false,
  deleted: false
}, {
  id: '2004',
  fromId: '105',
  toId: '101',
  subject: "This Week's Top Stories",
  content: "Our top pick for you on Medium this week The Man Who Destroyed America's Ego",
  label: 'Primary',
  createdAt: new Date('Feb 28'),
  read: false,
  starred: false,
  important: false,
  deleted: false
}, {
  id: '2005',
  fromId: '106',
  toId: '101',
  label: 'Primary',
  attachments: [{
    name: 'Dashboard.pdf'
  }, {
    name: 'pages-data.pdf'
  }],
  createdAt: new Date('Feb 28'),
  read: true,
  starred: true,
  important: false,
  deleted: false
}, {
  id: '2006',
  fromId: '107',
  toId: '101',
  label: 'Primary',
  attachments: [{
    name: 'doc1.doc'
  }, {
    name: 'doc2.doc'
  }, {
    name: 'doc3.doc'
  }, {
    name: 'doc4.doc'
  }],
  createdAt: new Date('Feb 27'),
  read: true,
  starred: false,
  important: true,
  deleted: false
}, {
  id: '2007',
  fromId: '108',
  toId: '101',
  subject: 'Regarding our meeting',
  content: "That's great, see you on Thursday!",
  label: 'Primary',
  createdAt: new Date('Feb 24'),
  read: false,
  starred: true,
  important: false,
  deleted: false
}, {
  id: '2008',
  fromId: '109',
  toId: '101',
  subject: "Task assigned: Clone ARP's website",
  content: 'You have been assigned a task by Alex@Work on the board Web.',
  label: 'Primary',
  createdAt: new Date('Feb 24'),
  read: false,
  starred: true,
  important: false,
  deleted: false
}, {
  id: '2009',
  fromId: '110',
  toId: '101',
  subject: "Let's go fishing!",
  content: "Hey, You wanna join me and Fred at the lake tomorrow? It'll be awesome.",
  label: 'Primary',
  createdAt: new Date('Feb 23'),
  read: true,
  starred: false,
  important: true,
  deleted: false
}, {
  id: '2010',
  fromId: '111',
  toId: '101',
  subject: 'Hey man',
  content: "Nah man sorry i don't. Should i get it?",
  label: 'Primary',
  createdAt: new Date('Feb 23'),
  read: true,
  starred: true,
  important: true,
  deleted: false
}, {
  id: '2011',
  fromId: '112',
  toId: '101',
  subject: '1 new items in your Stackexchange inbox',
  content: 'The following items were added to your Stack Exchange global inbox since you last checked it.',
  label: 'Primary',
  createdAt: new Date('Feb 21'),
  read: true,
  starred: true,
  important: false,
  deleted: false
}, {
  id: '2012',
  fromId: '102',
  toId: '101',
  subject: 'You can now use your storage in Google Drive',
  content: 'Hey Nicklas Sandell! Thank you for purchasing extra storage space in Google Drive.',
  label: 'Primary',
  createdAt: new Date('Feb 20'),
  read: true,
  starred: true,
  important: false,
  deleted: false
}, {
  id: '2013',
  fromId: '102',
  toId: '101',
  subject: 'Lucas Kriebel (@Daniel J. Olsen) has sent you a direct message on Twitter!',
  content: '@Daniel J. Olsen - Very cool :) Nicklas, You have a new direct message.',
  label: 'Social',
  createdAt: new Date('11:49 am'),
  read: false,
  starred: false,
  important: true,
  deleted: false
}, {
  id: '2014',
  fromId: '103',
  toId: '101',
  subject: 'Images',
  label: 'Promotions',
  attachments: [{
    preview: postImg1,
    name: 'Img_201.jpg'
  }, {
    preview: postImg2,
    name: 'Img_202.jpg'
  }, {
    preview: postImg3,
    name: 'Img_203.jpg'
  }, {
    preview: postImg4,
    name: 'Img_204.jpg'
  }, {
    preview: postImg6,
    name: 'Img_206.jpg'
  }, {
    preview: postImg7,
    name: 'Img_207.jpg'
  }],
  createdAt: new Date('Feb 21'),
  read: false,
  starred: true,
  important: true,
  deleted: false
}, {
  id: '2015',
  fromId: '104',
  toId: '101',
  subject: 'Train/Bus',
  content: "Yes ok, great! I'm not stuck in Stockholm anymore, we're making progress.",
  label: 'Updates',
  createdAt: new Date('Feb 19'),
  read: false,
  starred: false,
  important: false,
  deleted: false
}, {
  id: '2016',
  fromId: '105',
  toId: '101',
  subject: "This Week's Top Stories",
  content: "Our top pick for you on Medium this week The Man Who Destroyed America's Ego",
  label: 'Forums',
  createdAt: new Date('Feb 28'),
  read: false,
  starred: false,
  important: false,
  deleted: false
}, {
  id: '2017',
  fromId: '106',
  toId: '101',
  label: 'Social',
  attachments: [{
    name: 'Dashboard.pdf'
  }, {
    name: 'pages-data.pdf'
  }],
  createdAt: new Date('Feb 28'),
  read: true,
  starred: true,
  important: false,
  deleted: false
}, {
  id: '2018',
  fromId: '107',
  toId: '101',
  label: 'Promotions',
  attachments: [{
    name: 'doc1.doc'
  }, {
    name: 'doc2.doc'
  }, {
    name: 'doc3.doc'
  }, {
    name: 'doc4.doc'
  }],
  createdAt: new Date('Feb 27'),
  read: false,
  starred: false,
  important: true,
  deleted: false
}, {
  id: '2019',
  fromId: '108',
  toId: '101',
  subject: 'Regarding our meeting',
  content: "That's great, see you on Thursday!",
  label: 'Social',
  createdAt: new Date('Feb 24'),
  read: true,
  starred: true,
  important: false,
  deleted: false
}, {
  id: '2020',
  fromId: '109',
  toId: '101',
  subject: "Task assigned: Clone ARP's website",
  content: 'You have been assigned a task by Alex@Work on the board Web.',
  label: 'Updates',
  createdAt: new Date('Feb 24'),
  read: true,
  starred: true,
  important: false,
  deleted: false
}, {
  id: '2021',
  fromId: '110',
  toId: '101',
  subject: "Let's go fishing!",
  content: "Hey, You wanna join me and Fred at the lake tomorrow? It'll be awesome.",
  label: 'Updates',
  createdAt: new Date('Feb 23'),
  read: true,
  starred: false,
  important: true,
  deleted: false
}, {
  id: '2022',
  fromId: '111',
  toId: '101',
  subject: 'Hey man',
  content: "Nah man sorry i don't. Should i get it?",
  label: 'Forums',
  createdAt: new Date('Feb 23'),
  read: false,
  starred: true,
  important: true,
  deleted: false
}, {
  id: '2023',
  fromId: '112',
  toId: '101',
  subject: '1 new items in your Stackexchange inbox',
  content: 'The following items were added to your Stack Exchange global inbox since you last checked it.',
  label: 'Social',
  createdAt: new Date('Feb 21'),
  read: true,
  starred: true,
  important: false,
  deleted: false
}, {
  id: '2024',
  fromId: '102',
  toId: '101',
  subject: 'You can now use your storage in Google Drive',
  content: 'Hey Nicklas Sandell! Thank you for purchasing extra storage space in Google Drive.',
  label: 'Promotions',
  createdAt: new Date('Feb 20'),
  read: true,
  starred: true,
  important: false,
  deleted: false
}, {
  id: '2025',
  fromId: '103',
  toId: '101',
  subject: 'Hello',
  content: 'Trip home from Colombo has been arranged, then Jenna will come get me from Stockholm. :)',
  label: 'Updates',
  createdAt: new Date('Mar 6'),
  read: true,
  starred: false,
  important: true,
  deleted: false
}, {
  id: '2026',
  fromId: '104',
  toId: '101',
  subject: "Since you asked... and i'm inconceivably bored at the train station",
  content: "Alright thanks. I'll have to re-book that somehow, i'll get back to you.",
  label: 'Forums',
  createdAt: new Date('Mar 6'),
  read: true,
  starred: false,
  important: false,
  deleted: false
}, {
  id: '2027',
  fromId: '101',
  toId: '102',
  subject: 'Lucas Kriebel (@Daniel J. Olsen) has sent you a direct message on Twitter!',
  content: '@Daniel J. Olsen - Very cool :) Nicklas, You have a new direct message.',
  label: 'Social',
  createdAt: new Date('11:49 am'),
  read: true,
  starred: false,
  important: true,
  deleted: false
}, {
  id: '2028',
  fromId: '101',
  toId: '103',
  subject: 'Images',
  label: 'Promotions',
  attachments: [{
    preview: postImg1,
    name: 'Img_201.jpg'
  }, {
    preview: postImg2,
    name: 'Img_202.jpg'
  }, {
    preview: postImg3,
    name: 'Img_203.jpg'
  }, {
    preview: postImg4,
    name: 'Img_204.jpg'
  }, {
    preview: postImg6,
    name: 'Img_206.jpg'
  }, {
    preview: postImg7,
    name: 'Img_207.jpg'
  }],
  createdAt: new Date('Feb 21'),
  read: true,
  starred: true,
  important: true,
  deleted: false
}, {
  id: '2029',
  fromId: '101',
  toId: '104',
  subject: 'Train/Bus',
  content: "Yes ok, great! I'm not stuck in Stockholm anymore, we're making progress.",
  label: 'Updates',
  createdAt: new Date('Feb 19'),
  read: true,
  starred: false,
  important: false,
  deleted: false
}, {
  id: '2030',
  fromId: '101',
  toId: '105',
  subject: "This Week's Top Stories",
  content: "Our top pick for you on Medium this week The Man Who Destroyed America's Ego",
  label: 'Forums',
  createdAt: new Date('Feb 28'),
  read: true,
  starred: false,
  important: false,
  deleted: false
}, {
  id: '2031',
  fromId: '101',
  toId: '106',
  label: 'Social',
  attachments: [{
    name: 'Dashboard.pdf'
  }, {
    name: 'pages-data.pdf'
  }],
  createdAt: new Date('Feb 28'),
  read: true,
  starred: true,
  important: false,
  deleted: false
}, {
  id: '2032',
  fromId: '109',
  toId: '101',
  subject: "Task assigned: Clone ARP's website",
  content: 'You have been assigned a task by Alex@Work on the board Web.',
  label: 'Updates',
  createdAt: new Date('Feb 24'),
  read: true,
  starred: true,
  important: false,
  deleted: true
}, {
  id: '2033',
  fromId: '110',
  toId: '101',
  subject: "Let's go fishing!",
  content: "Hey, You wanna join me and Fred at the lake tomorrow? It'll be awesome.",
  label: 'Updates',
  createdAt: new Date('Feb 23'),
  read: true,
  starred: false,
  important: true,
  deleted: true
}];
export const messages = [];
const defaultTo = {
  id: '112',
  mutualCount: 56,
  name: 'Gilbert Chicoine',
  avatar: avatar10,
  email: 'jamesbridge@teleworm.us',
  message: 'Hey! Okay, thank you for letting me know. See you!',
  time: addOrSubtractMinutesFromDate(650),
  phone: '456 9595 9594',
  location: 'California, USA',
  languages: ['English', 'German', 'Spanish'],
  activityStatus: 'online'
};
for (const user of socialUsersData) {
  messages.push({
    id: '101',
    to: defaultTo,
    from: user,
    message: {
      type: 'text',
      value: 'Hey 😊'
    },
    sentOn: addOrSubtractMinutesFromDate(110)
  }, {
    id: '102',
    to: user,
    from: defaultTo,
    message: {
      type: 'text',
      value: 'Hii'
    },
    sentOn: addOrSubtractMinutesFromDate(110)
  }, {
    id: '103',
    to: defaultTo,
    from: user,
    message: {
      type: 'text',
      value: "Hi Gaston, thanks for joining the meeting. Let's dive into our quarterly performance review."
    },
    sentOn: addOrSubtractMinutesFromDate(110)
  }, {
    id: '104',
    to: user,
    from: defaultTo,
    message: {
      type: 'text',
      value: "Hi Gilbert, thanks for having me. I'm ready to discuss how things have been going."
    },
    sentOn: addOrSubtractMinutesFromDate(110)
  }, {
    id: '105',
    to: defaultTo,
    from: user,
    message: {
      type: 'file',
      value: [{
        preview: small1
      }, {
        preview: small2
      }, {
        preview: small3
      }]
    },
    sentOn: addOrSubtractMinutesFromDate(110)
  }, {
    id: '106',
    to: user,
    from: defaultTo,
    message: {
      type: 'file',
      value: [{
        name: 'financial-report-2024.zip',
        size: 2.3
      }]
    },
    sentOn: addOrSubtractMinutesFromDate(20)
  }, {
    id: '107',
    to: defaultTo,
    from: user,
    message: {
      type: 'text',
      value: "Thanks, Emily. I appreciate your support. Overall, I'm optimistic about our team's performance and looking forward to tackling new challenges in the next quarter."
    },
    sentOn: addOrSubtractMinutesFromDate(10)
  });
}