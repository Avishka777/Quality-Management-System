import { FaCommentAlt } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { BiImageAdd , BiSolidEdit} from "react-icons/bi";
import { RiAccountPinBoxFill } from "react-icons/ri";
import { MdOutlineDashboardCustomize,MdViewList} from "react-icons/md";
import { AiFillEdit} from "react-icons/ai";
import { LuView} from "react-icons/lu";

const menu = [
  {
    title: "Dashboard",
    icon: <MdOutlineDashboardCustomize />,
    path: "/dashboard",
  },

  {
    title: "Quality Management",
    icon: <BsFillPeopleFill />,
    childrens: [

      {
        title: "Add Details",
        icon: <BiImageAdd />,
        path: "/add-product",
      },
      {
        title: "Update Details",
        icon: <AiFillEdit />,
        path: "/edit-product",
      },
      {
        title: "View Details",
        icon: <MdViewList />,
        path: "/product-detail",
      },
    ],
  },
  {
    title: "My Account",
    icon: <RiAccountPinBoxFill />,
    childrens: [
      {
        title: "Profile",
        icon: <LuView />,
        path: "/profile",
      },
      {
        title: "Edit Profile",
        icon: <BiSolidEdit />,
        path: "/edit-profile",
      },
    ],
  },
  {
    title: "Report Bug",
    icon: <FaCommentAlt />,
    path: "/contact-us",
  },
];
export default menu;
