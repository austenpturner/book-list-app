import { GoHome } from "react-icons/go";
import { BiSolidCommentAdd } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { IoLibrary } from "react-icons/io5";
import { FaRegCircle } from "react-icons/fa";

export const navItems = [
  {
    id: 1,
    name: "home",
    icon: GoHome,
    link: "/",
  },
  {
    id: 2,
    name: "post",
    icon: BiSolidCommentAdd,
    link: "/newPost",
  },
  {
    id: 3,
    name: "profile",
    icon: FaRegCircle,
    link: "/profile",
  },
  {
    id: 4,
    name: "library",
    icon: IoLibrary,
    link: "/library",
  },
  {
    id: 5,
    name: "search",
    icon: BsSearch,
    link: "/search",
  },
];
