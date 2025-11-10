import { CustomFlowbiteTheme } from "flowbite-react";

const theme: CustomFlowbiteTheme = {
  navbar: {
    root: {
      base: "border-gray-200 bg-purple px-2 py-2.5 sm:px-4",
    },
    toggle: {
      base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden",
    },
    link: {
      active: {
        on: "bg-blue-700 text-black dark:text-white md:bg-transparent",
        off: "border-b text-gray-400 hover:bg-blue-700 hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:hover:bg-transparent md:hover:text-white",
      },
    },
  },
  footer: {
    root: {
      base: "w-full rounded-lg bg-transparent shadow dark:bg-gray-800 md:flex md:items-center md:justify-between",
      container: "w-full p-6",
      bgDark: "bg-gray-800",
    },
  },
};

export default theme;
