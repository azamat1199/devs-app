import { useEffect, useState } from "react";
import { MdOutlineMonetizationOn } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineTimelapse } from "react-icons/md";
import { FaAngleDoubleRight } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { BiSolidBellRing } from "react-icons/bi";
import Skeleton from "react-loading-skeleton";
import { MdAnalytics } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { FaUser } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import cx from "classnames";
import { IconType } from "../../types/utility.types";
import LogoIcon from "../icons/logo";
import "./sidebar.css";

const preparedModules = [
  {
    code: "person",
    name: "Люди",
  },
  {
    code: "users",
    name: "Пользователи",
  },
  {
    code: "analytics",
    name: "Аналитика",
  },
  {
    code: "timelapse",
    name: "Отчет",
  },
  {
    code: "monetization",
    name: "Монетизация",
  },
];
const icons = {
  person: FaUser,
  users: FaUsers,
  analytics: MdAnalytics,
  timelapse: MdOutlineTimelapse,
  monetization: MdOutlineMonetizationOn,
};

const SidebarBottomLink = ({
  text,
  leftProps,
  color = "text-secondary",
  open,
}: any) => {
  return (
    <AnimatePresence>
      <Link to="/" className="flex gap-3 px-3 py-[10px] justify-center">
        <div className="w-[20px] h-[20px]]">
          <leftProps.icon size={20} className={color} />
        </div>
      </Link>
    </AnimatePresence>
  );
};

const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(() => {
    return localStorage.getItem("sidebarOpen") === "false" || false;
  });
  const toggleSidebar = () => {
    setOpen(!open);
  };

  const pathname = useLocation();

  const navAnimation = {
    open: {
      x: 0,
      maxWidth: "56px",
      display: "flex",
    },
    collapsed: {
      //   width: 0,
      display: "none",
      left: 0,
      duration: 0.7,
    },
  };
  const listAnimation = {
    open: {
      x: 0,
      maxWidth: "256px",
      display: "flex",
    },
    collapsed: {
      //   width: 0,
      //   display: "none",
      type: "spring",
      stiffness: 200,
      damping: 25,
      left: 0,
      duration: 0.7,
    },
  };

  useEffect(() => {
    localStorage.setItem("sidebarOpen", open.toString());
  }, [open]);

  return (
    <div>
      <motion.div
        variants={navAnimation}
        initial={{ maxWidth: "56px" }}
        animate={"collapsed"}
        transition={{ duration: 0.6, ease: "easeIn" }}
        className={`sidebar w-full border-[rgba(0, 0, 0, 0.10)] absolute z-40 p-0`}
      >
        <div className="flex flex-col flex-1 font-medium overflow-auto bg-white">
          {open ? (
            <Link
              to="/"
              className="text-[0.9rem] text-secondary pl-[18px] pt-3 pb-4 border-b bg-white cursor-pointer"
            >
              <LogoIcon />
            </Link>
          ) : (
            <div
              className="  text-[0.9rem] text-secondary p-[9px] border-b"
              onClick={toggleSidebar}
            >
              <div className="p-2 bg-[#6E8BB7] rounded-[6px] cursor-pointer flex justify-center">
                <FaAngleDoubleRight size={14} />
              </div>
            </div>
          )}
          <ul className="sidebar-menu sidebar-menu-tw">
            <div className="border-slate-300 flex flex-col gap-[8px] mt-3">
              {Object.values(preparedModules).map((module, index: any) => {
                const IconComponent: any = (icons as Record<string, IconType>)[
                  module.code
                ];

                return (
                  <li
                    key={index}
                    className={cx("m-1", {
                      "bg-[#0E73F6] rounded-[6px]": pathname.pathname.includes(
                        module.code
                      ),
                      "bg-none": !pathname.pathname.includes(module.code),
                    })}
                  >
                    <Link
                      to={module.code || "#"}
                      className="sidebar-menu-l-item"
                    >
                      {IconComponent ? (
                        <IconComponent
                          className={cx({
                            " text-[white]": pathname.pathname.includes(
                              module.code
                            ),
                          })}
                        />
                      ) : (
                        <Skeleton width={20} height={20} />
                      )}
                    </Link>
                  </li>
                );
              })}
            </div>
          </ul>
        </div>
        <div className="sidebar-bottom-links-wrapper bg-white">
          <SidebarBottomLink
            leftProps={{ icon: IoSettingsOutline }}
            open={open}
          />
          <SidebarBottomLink
            leftProps={{ icon: BiSolidBellRing }}
            open={open}
          />
          <div>
            <SidebarBottomLink leftProps={{ icon: RxAvatar }} open={open} />
          </div>
        </div>
      </motion.div>
      {open && (
        <motion.div
          variants={listAnimation}
          initial={{ x: -300 }}
          animate={open ? "open" : "collapsed"}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 25,
            duration: 0.7,
          }}
          className={`sidebar w-full border-[rgba(0, 0, 0, 0.10)] absolute z-40 p-0 bg-[white]`}
        >
          <div className="flex items-center justify-between p-[9px] border-b">
            <h4 className="font-bold text-base">Рекрутинг</h4>
            <div
              className="p-2 bg-[#6E8BB7] rounded-[6px] cursor-pointer"
              onClick={toggleSidebar}
            >
              <FaAngleDoubleLeft size={14} />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Sidebar;
