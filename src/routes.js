import React from 'react';

import { Icon } from '@chakra-ui/react';
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdGroups,
  MdAccountBalanceWallet,
  MdWork,
  MdSubscriptions,
  MdHistory,
  MdSmartToy,
  MdSettings,
  MdHelpCenter,
  MdInfo,
  MdLogout,
} from 'react-icons/md';

// Admin Imports
import MainDashboard from 'views/admin/default';
import NFTMarketplace from 'views/admin/marketplace';
// import Profile from 'views/admin/profile';
import DataTables from 'views/admin/dataTables';
import RTL from 'views/admin/rtl';

// User Imports
import UserDashboard from 'views/user/dashboard';
import Team from 'views/team';
import Wallet from 'views/wallet';
import Profile from 'views/Profile';

// Auth Imports
import SignInCentered from 'views/auth/signIn';
import Register from 'views/auth/register';
import Portfolio from 'views/portfolio';

const routes = [
  {
    name: 'Dashboard',
    layout: '/admin',
    path: '/user-dashboard',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <UserDashboard />,
  },
  {
    name: 'Team',
    layout: '/admin',
    path: '/team',
    icon: <Icon as={MdGroups} width="20px" height="20px" color="inherit" />,
    component: <Team />,
  },
  {
    name: 'Wallet',
    layout: '/admin',
    path: '/wallet',
    icon: (
      <Icon
        as={MdAccountBalanceWallet}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: <Wallet />,
  },
  {
    name: 'Portfolio',
    layout: '/admin',
    path: '/portfolio',
    icon: <Icon as={MdWork} width="20px" height="20px" color="inherit" />,
    component: <Portfolio />,
  },
  {
    name: 'Subscription',
    layout: '/admin',
    path: '/subscription',
    icon: (
      <Icon as={MdSubscriptions} width="20px" height="20px" color="inherit" />
    ),
    component: <RTL />,
  },
  {
    name: 'Payment History',
    layout: '/admin',
    path: '/payment-history',
    icon: <Icon as={MdHistory} width="20px" height="20px" color="inherit" />,
    component: <RTL />,
  },
  // {
  //   name: 'AI Trading Boot',
  //   layout: '/admin',
  //   path: '/ai-trading-boot',
  //   icon: <Icon as={MdSmartToy} width="20px" height="20px" color="inherit" />,
  //   component: <RTL />,
  //   children: [
  //     {
  //       name: 'Boot',
  //       path: '/ai-trading-boot',
  //       component: <RTL />,
  //     },
  //     {
  //       name: 'Dashboard',
  //       path: '/ai-trading-dashboard',
  //       component: <RTL />,
  //     },
  //   ],
  // },
  {
    name: 'AI Trading Boot',
    layout: '/admin',
    path: '/ai-trading-boot',
    component: <RTL />,
    icon: <Icon as={MdSmartToy} width="20px" height="20px" color="inherit" />,
    subNav: [
      {
        name: 'Binanse Boot',
        path: '/ai-trading-boot/binanse-boot',
        component: <RTL />,
      },
      {
        name: 'CoinStore Boot',
        path: '/ai-trading-boot/coinstore-boot',
        component: <RTL />,
      },
    ],
  },

  {
    name: 'Profile',
    layout: '/admin',
    path: '/profile',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: <Profile />,
  },
  {
    name: 'Settings',
    layout: '/admin',
    path: '/settings',
    icon: <Icon as={MdSettings} width="20px" height="20px" color="inherit" />,
    component: <RTL />,
  },
  {
    name: 'Help Supports',
    layout: '/admin',
    path: '/help-supports',
    icon: <Icon as={MdHelpCenter} width="20px" height="20px" color="inherit" />,
    component: <RTL />,
  },
  {
    name: 'About Us',
    layout: '/admin',
    path: '/about-us',
    icon: <Icon as={MdInfo} width="20px" height="20px" color="inherit" />,
    component: <RTL />,
  },
  {
    name: 'Logout',
    layout: '/admin',
    path: '/logout',
    icon: <Icon as={MdLogout} width="20px" height="20px" color="inherit" />,
    component: <RTL />,
  },

  {
    name: 'Main Dashboard',
    layout: '/admin',
    path: '/default',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <MainDashboard />,
  },
  {
    name: 'NFT Marketplace',
    layout: '/admin',
    path: '/nft-marketplace',
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: 'Data Tables',
    layout: '/admin',
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    path: '/data-tables',
    component: <DataTables />,
  },
  {
    name: 'Profile',
    layout: '/admin',
    path: '/profile',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: <Profile />,
  },
  {
    name: 'Sign In',
    layout: '/auth',
    path: '/sign-in',
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: <SignInCentered />,
  },
  {
    name: 'RTL Admin',
    layout: '/rtl',
    path: '/rtl-default',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <RTL />,
  },
  {
    layout: '/auth',
    path: '/sign-up',
    component: <Register />,
  },
];

export default routes;
