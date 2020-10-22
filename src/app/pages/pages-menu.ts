import { NbMenuItem } from "@nebular/theme";
import { link } from 'fs';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: "Dashboard",
    icon: "home-outline",
    link: "/pages/dashboard",
  },
  // {
  //   title: "User",
  //   icon: "lock-outline",
  //   children: [
  //     {
  //       title: "Login",
  //       link: "/pages/login",
  //     },
  //     {
  //       title: "Register",
  //       link: "/pages/register",
  //     },
  //   ],
  // },
  // {
  //   title: "Posts",
  //   icon: "people",
  //   children: [
  //     {
  //       title: "All Posts",
  //       icon: "lock-outline",
  //       link: "/pages/view-allposts",
  //     },
  //     {
  //       title: "Add Post",
  //       icon: "lock",
  //       link: "/pages/add-post",
  //     },
  //   ],
  // },
  {
    title: "Staff",
    icon: "people",
    children: [
      {
        title: "View Staff",
      }, 
      {
        title: "Add Staff",
      }
    ]
  },
  {
    title: "Allied Health",
    icon: "people",
    children: [
      {
        title: "View Allied Health",
        link: "/pages/viewalliedhealth"
      },
      {
        title: "Add Allied Health",
        link: "/pages/addalliedhealth"
      }
    ]
  },
  {
    title: "Referrals",
    icon: "people",
    children: [
      {
        title: "Pending Referrals",
        link: "/pages/pending-referrals",
      },
      {
        title: "Accepted Referrals",
        link: "/pages/accepted-referrals",
      },
      {
        title: "Rejected Referrals",
        link: "/pages/rejected-referrals",
      },
    ]
  },
  // {
  //   title: "Products",
  //   icon: "facebook",
  //   children: [
  //     {
  //       title: "All Products",
  //       link: "/pages/products"
  //     },
  //     {
  //       title: "Add Product",
  //       link: "/pages/addproduct"
  //     }
  //   ]
  // },
  // {
  //   title: "Dynamic Form",
  //   icon: "lock",
  //   link: "/pages/dynamic-form",
  // },
  // {
  //   title: "FEATURES",
  //   group: true,
  // },
  // {
  //   title: "Auth",
  //   icon: "lock-outline",
  //   children: [
  //     {
  //       title: "Login",
  //       link: "/auth/login",
  //     },
  //     {
  //       title: "Register",
  //       link: "/auth/register",
  //     },
  //     {
  //       title: "Request Password",
  //       link: "/auth/request-password",
  //     },
  //     {
  //       title: "Reset Password",
  //       link: "/auth/reset-password",
  //     },
  //   ],
  // },
];
