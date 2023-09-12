import { useEffect, useRef } from "react";
import logo from "../../assets/images/logo.png";
import userimg from "../../assets/images/avatar-icon.png";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a doctor",
  },
  {
    path: "/services",
    display: "services",
  },
  {
    path: "/contact",
    display: "contact",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop ||
        document > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };
  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  });

  const togglemenu = () => menuRef.current.classList.toggle("show__menu");
  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ======logo====== */}
          <div>
            <img src={logo} />
          </div>
          {/* ======menu====== */}
          <div className="navigation" ref={menuRef} onClick={togglemenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* -----------nav rigth--------- */}
          <div className=" flex items-center gap-4 ">
            <div>
              <Link to="/">
                <figure className="w-[35px] h-[35px] rounded-full">
                  <img src={userimg} className="w-full rounded-full" />
                </figure>
              </Link>
            </div>
            <Link to="/login">
              <button className="bg-primaryColor py-2 px-6 text-white font[600] h-[44px] flex items-center  justify-center rounded-[50px]">
                Login
              </button>
            </Link>
            <span className="md:hidden" onClick={togglemenu}>
              <BiMenu className="w-6 h-6 cursor-pointer"></BiMenu>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
