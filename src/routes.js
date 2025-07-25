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
import AboutUs from 'views/aboutus';
import HelpSupportForm from 'views/helpsupport';
import SettingsPanel from 'views/settings';
import LogoutModal from 'views/logout';
import Payment from 'views/payment';
import Subscription from 'views/subscription';
import BinanceBoot from 'views/binanseboot';
import AITradingBoot from 'views/aitradingboot';

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
    component: <Subscription />,
  },
  {
    name: 'Payment History',
    layout: '/admin',
    path: '/payment-history',
    icon: <Icon as={MdHistory} width="20px" height="20px" color="inherit" />,
    component: <Payment />,
  },
  {
    name: 'AI Trading Boot',
    layout: '/admin',
    path: '/ai-trading-boot',
    // component: <AITradingBoot />,
    icon: <Icon as={MdSmartToy} width="20px" height="20px" color="inherit" />,

    subNav: [
      {
        name: 'Binance Boot',
        path: '/ai-trading-boot/binance-boot',
        component: <BinanceBoot />,
        icon: (
          <Icon as={MdSmartToy} width="16px" height="16px" color="inherit" />
        ),
      },
      {
        name: 'CoinStore Boot',
        path: '/ai-trading-boot/coinstore-boot',
        component: <RTL />,
        icon: (
          <Icon as={MdSmartToy} width="16px" height="16px" color="inherit" />
        ),
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
    component: <SettingsPanel />,
  },
  {
    name: 'Help Supports',
    layout: '/admin',
    path: '/help-supports',
    icon: <Icon as={MdHelpCenter} width="20px" height="20px" color="inherit" />,
    component: <HelpSupportForm />,
  },
  {
    name: 'About Us',
    layout: '/admin',
    path: '/about-us',
    icon: <Icon as={MdInfo} width="20px" height="20px" color="inherit" />,
    component: <AboutUs />,
  },
  {
    name: 'Logout',
    layout: '/admin',
    path: '/logout',
    icon: <Icon as={MdLogout} width="20px" height="20px" color="inherit" />,
    component: <LogoutModal />,
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
