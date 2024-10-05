import globeIcon from "../assets/discover.svg";
import searchIcon from "../assets/search.svg";
import libraryIcon from "../assets/library.svg";
import techIcon from "../assets/tech.svg";
import sportsIcon from "../assets/sports.svg";
import financeIcon from "../assets/finance.svg";
import screenIcon from "../assets/entertainment.svg";
import artsIcon from "../assets/arts.svg";

export const NavLinks = [
  {
    title: "Home",
    path: "#",
    icon: searchIcon,
  },
  {
    title: "Discover",
    path: "/",
    icon: globeIcon,
  },
  {
    title: "Library",
    path: "#",
    icon: libraryIcon,
  },
];

export const topics = [
  {
    title: "Tech & Science",
    icon: techIcon,
  },
  {
    title: "Finance",
    icon: financeIcon,
  },
  {
    title: "Arts & Culture",
    icon: artsIcon,
  },
  {
    title: "Sports",
    icon: sportsIcon,
  },
  {
    title: "Entertainment",
    icon: screenIcon,
  },
];
