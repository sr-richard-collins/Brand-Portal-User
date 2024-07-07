export const MENU_ITEMS = [
  {
    key: 'dashboard',
    icon: 'iconamoon:home-duotone',
    label: 'Dashboard',
    url: '/dashboard'
  },
  {
    key: 'employee',
    icon: 'iconamoon:profile-duotone',
    label: 'Employee',
    url: '/employee'
  },
  {
    key: 'category',
    icon: 'iconamoon:cheque-duotone',
    label: 'Category',
    children: [{
      key: 'category-main',
      label: 'Main Categories',
      url: '/category-main',
      parentKey: 'category'
    }, {
      key: 'category-sub',
      label: 'Sub Categories',
      url: '/category-sub',
      parentKey: 'category'
    },]
  },
  {
    key: 'post',
    icon: 'iconamoon:edit-duotone',
    label: 'Post',
    url: '/category'
  },
  {
    key: 'comment',
    icon: 'iconamoon:comment-dots-duotone',
    label: 'Comment',
    url: '/comment'
  },
  {
    key: 'basesetting',
    icon: 'iconamoon:settings-duotone',
    label: 'Base Settings',
    url: '/basesetting'
  },
];