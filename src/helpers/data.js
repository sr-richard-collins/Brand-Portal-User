import * as yup from 'yup';
import { categoriesData, customersData, ecommerceProductsData, inventoryData, invoicesData, ordersData, sellersData } from '@/assets/data/products';
import { activityStreamData, appsData, notificationsData } from '@/assets/data/topbar';
import { sleep } from '@/utils/promise';
import { dataTableRecords, pricingData, projectsData, timelineData, transactionsData } from '@/assets/data/other';
import { emailsData, socialCommentsData, socialEventsData, socialGroupsData, socialPostsData, socialUsersData, teamMembers } from '@/assets/data/social';
import { todoData } from '@/assets/data/task';
const getUserForAllComments = commentsData => {
  return commentsData.map(comment => {
    const socialUser = socialUsersData.find(user => user.id === comment.socialUserId);
    if (comment.children) {
      comment.children = getUserForAllComments(comment.children);
    }
    return {
      ...comment,
      socialUser
    };
  });
};
export const getTopbarIntegratedApps = () => {
  return appsData;
};
export const getNotifications = () => {
  return notificationsData;
};
export const getActivityStream = async () => {
  await sleep();
  return activityStreamData;
};
export const getProductById = async id => {
  const product = ecommerceProductsData.find(product => product.id === id);
  if (product) {
    const category = categoriesData.find(category => category.id === product?.categoryId);
    const seller = sellersData.find(seller => seller.id === product?.sellerId);
    const productsData = {
      ...product,
      category,
      seller
    };
    await sleep();
    return productsData;
  }
};
export const getAllEcommerceProducts = async () => {
  const productsData = ecommerceProductsData.map(product => {
    const category = categoriesData.find(category => category.id === product.categoryId);
    const seller = sellersData.find(seller => seller.id === product.sellerId);
    return {
      ...product,
      category,
      seller
    };
  });
  await sleep();
  return productsData;
};
export const getAllProductCategories = async () => {
  await sleep();
  return categoriesData;
};
export const getAllOrders = async () => {
  const data = ordersData.map(order => {
    const customer = customersData.find(customer => customer.id === order.customerId);
    const product = ecommerceProductsData.find(product => product.id === order.productId);
    return {
      ...order,
      customer,
      product
    };
  });
  await sleep();
  return data;
};
export const getAllCustomers = async () => {
  await sleep();
  return customersData;
};
export const getAllSellers = async () => {
  await sleep();
  return sellersData;
};
export const getOrderById = async id => {
  const order = ordersData.find(order => order.id === id);
  if (order) {
    const customer = customersData.find(customer => customer.id === order.customerId);
    const product = ecommerceProductsData.find(product => product.id === order.productId);
    const orderData = {
      ...order,
      customer,
      product
    };
    await sleep();
    return orderData;
  }
};
export const getAllInventoryProducts = async () => {
  const data = inventoryData.map(inventory => {
    const product = ecommerceProductsData.find(product => product.id === inventory.productId);
    return {
      ...inventory,
      product
    };
  });
  await sleep();
  return data;
};
export const getAllInvoices = async () => {
  const data = invoicesData.map(invoice => {
    const product = ecommerceProductsData.find(product => product.id === invoice.productId);
    const customer = customersData.find(customer => customer.id === invoice.customerId);
    const order = ordersData.find(order => order.id === invoice.orderId);
    return {
      ...invoice,
      product,
      customer,
      order
    };
  });
  await sleep();
  return data;
};
export const getInvoiceById = async id => {
  const invoice = invoicesData.find(invoice => invoice.id === id);
  if (invoice) {
    const product = ecommerceProductsData.find(product => product.id === invoice?.productId);
    const customer = customersData.find(customer => customer.id === invoice?.customerId);
    const order = ordersData.find(order => order.id === invoice?.orderId);
    const invoiceData = {
      ...invoice,
      product,
      customer,
      order
    };
    await sleep();
    return invoiceData;
  }
};
export const getAllTimeline = async () => {
  await sleep();
  return timelineData;
};
export const getAllPricingPlans = async () => {
  await sleep();
  return pricingData;
};
export const getAllProjects = async () => {
  await sleep();
  return projectsData;
};
export const getAllTransactions = async () => {
  const data = transactionsData.map(transaction => {
    const customer = customersData.find(customer => customer.id === transaction.customerId);
    return {
      ...transaction,
      customer
    };
  });
  await sleep();
  return data;
};
export const getAllPendingRequests = async () => {
  const data = socialUsersData.filter(user => user.hasRequested);
  await sleep();
  return data;
};
export const getAllFriends = async () => {
  const data = socialUsersData.filter(user => !user?.hasRequested);
  await sleep();
  return data;
};
export const getUserById = async id => {
  const user = socialUsersData.find(user => user.id === id);
  if (user) {
    await sleep();
    return user;
  }
};
export const getAllUsers = async () => {
  await sleep();
  return socialUsersData;
};
export const getAllEvents = async () => {
  await sleep();
  return socialEventsData;
};
export const getNewFeedPosts = async () => {
  const postsData = socialPostsData.filter(post => !post.saved).map(post => {
    const socialUser = socialUsersData.find(user => user.id === post.socialUserId);
    const commentsData = socialCommentsData.filter(comment => comment.postId === post.id);
    let comments;
    if (commentsData.length) {
      comments = getUserForAllComments(commentsData);
    }
    return {
      ...post,
      socialUser,
      comments
    };
  });
  await sleep();
  return postsData;
};
export const getSavedFeedPosts = async () => {
  const postsData = socialPostsData.filter(post => post.saved).map(post => {
    const socialUser = socialUsersData.find(user => user.id === post.socialUserId);
    const commentsData = socialCommentsData.filter(comment => comment.postId === post.id);
    let comments;
    if (commentsData.length) {
      comments = getUserForAllComments(commentsData);
    }
    return {
      ...post,
      socialUser,
      comments
    };
  });
  await sleep();
  return postsData;
};
export const getMemoriesFeedPosts = async () => {
  const timeStamp = new Date().getTime() - 1 * 24 * 60 * 60 * 1000;
  const postsData = socialPostsData.filter(post => !post.saved && post.createdAt < new Date(timeStamp)).map(post => {
    const socialUser = socialUsersData.find(user => user.id === post.socialUserId);
    const commentsData = socialCommentsData.filter(comment => comment.postId === post.id);
    let comments;
    if (commentsData.length) {
      comments = getUserForAllComments(commentsData);
    }
    return {
      ...post,
      socialUser,
      comments
    };
  });
  await sleep();
  return postsData;
};
export const getJoinedGroups = async () => {
  const data = socialGroupsData.filter(group => group.joined);
  await sleep();
  return data;
};
export const getSuggestedGroups = async () => {
  const data = socialGroupsData.filter(group => group.suggested);
  await sleep();
  return data;
};
export const getFriendsGroups = async () => {
  const data = socialGroupsData.filter(group => group.friends);
  await sleep();
  return data;
};
export const getAllDataTableRecords = async () => {
  await sleep();
  return dataTableRecords;
};
export const getAllTeamMembers = async () => {
  const data = teamMembers.map(teamMember => {
    const member = socialUsersData.find(user => user.id === teamMember.memberId);
    return {
      member,
      ...teamMember
    };
  });
  await sleep();
  return data;
};
export const getAllTasks = async () => {
  const data = todoData.map(task => {
    const employee = sellersData.find(seller => seller.id === task.employeeId);
    return {
      ...task,
      employee
    };
  });
  await sleep();
  return data;
};
export const getAllEmails = async filter => {
  const fillDataToEmails = emails => {
    return emails.map(email => {
      const from = socialUsersData.find(user => user.id === email.fromId);
      const to = socialUsersData.find(user => user.id === email.toId);
      return {
        ...email,
        from,
        to
      };
    });
  };
  let allEmailsData;
  if (filter === 'important') allEmailsData = fillDataToEmails(emailsData.filter(email => email.important));else if (filter === 'deleted') allEmailsData = fillDataToEmails(emailsData.filter(email => email.deleted));else if (filter === 'sent') allEmailsData = fillDataToEmails(emailsData.filter(email => email.fromId === '101'));else if (filter === 'draft') allEmailsData = fillDataToEmails(emailsData.filter(email => email.draft));else if (filter === 'starred') allEmailsData = fillDataToEmails(emailsData.filter(email => email.starred));else allEmailsData = fillDataToEmails(emailsData.filter(email => email.toId === '101'));
  await sleep();
  return allEmailsData;
};
export const getEmailsCategoryCount = async () => {
  const mailsCount = {
    inbox: 0,
    starred: 0,
    draft: 0,
    sent: 0,
    deleted: 0,
    important: 0
  };
  mailsCount.inbox = emailsData.filter(email => email.toId === '101').length;
  mailsCount.starred = emailsData.filter(email => email.starred).length;
  mailsCount.draft = emailsData.filter(email => email.draft).length;
  mailsCount.sent = emailsData.filter(email => email.fromId === '101').length;
  mailsCount.important = emailsData.filter(email => email.important).length;
  await sleep();
  return mailsCount;
};
export const getEmailDetails = async id => {
  const email = emailsData.find(email => email.id === id);
  if (email) {
    email.from = socialUsersData.find(user => user.id === email.fromId);
    email.to = socialUsersData.find(user => user.id === email.toId);
    await sleep();
    return email;
  }
};
export const serverSideFormValidate = async data => {
  const formSchema = yup.object({
    fName: yup.string().min(3, 'First name should have at least 3 characters').max(50, 'First name should not be more than 50 characters').required('First name is required'),
    lName: yup.string().min(3, 'Last name should have at least 3 characters').max(50, 'Last name should not be more than 50 characters').required('Last name is required'),
    username: yup.string().min(3, 'Username should have at least 3 characters').max(20, 'Username should not be more than 20 characters').required('Username is required'),
    city: yup.string().min(3, 'City should have at least 3 characters').max(20, 'City should not be more than 20 characters').required('City is required'),
    state: yup.string().min(3, 'State should have at least 3 characters').max(20, 'State should not be more than 20 characters').required('State is required'),
    zip: yup.number().required('ZIP is required')
  });
  const validatedObj = await formSchema.validate(data, {
    abortEarly: false
  });
  return validatedObj;
};