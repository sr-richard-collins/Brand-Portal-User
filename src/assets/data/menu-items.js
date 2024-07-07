export const MENU_ITEMS = [
  {
    key: 'dashboard',
    icon: 'iconamoon:home-duotone',
    label: 'Color Codes',
    url: '/dashboard',
  },

  {
    key: 'category',
    icon: 'iconamoon:cheque-duotone',
    label: 'Image Material',
    children: [
      {
        key: 'category-main',
        label: 'mot accordion',
        url: '/',
        parentKey: 'category',
      },
      {
        key: 'category-sub',
        label: 'mot accordion',
        url: '/',
        parentKey: 'category',
      },
    ],
  },
]
