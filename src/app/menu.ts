export const menuItem = [
  {
    name: 'Home',
    url: '/home',
    icon: 'icon-home'
  },
  {
    name: 'Admin',
    url: '/admin',
    icon: 'icon-settings',
    children: [
      {
        name: 'Dashboard',
        url: '/admin/dashboard',
        icon: 'icon-speedometer',
        badge: {
          variant: 'info',
          text: 'NEW'
        }
      }
    ]
  }
]