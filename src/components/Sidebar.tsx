import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`bg-nav-bg  sticky top-0 h-[100dvh] w-[300px] max-screen1200:w-[250px] flex flex-col gap-10 shrink-0 max-screen1200:fixed z-10  transition-transform ${
          show
            ? "max-screen1200:translate-none"
            : "max-screen1200:-translate-x-full"
        }`}
      >
        <div className="p-dashboard-padding flex justify-center">
          <Link
            to={"/"}
            className="text-[22px] text-head2 font-mbold tracking-widest text-center inline-block px-6 py-2 rounded-2xl bg-logo-bg transition-colors hover:bg-logo-bg-hover"
          >
            მუვის<span className="text-main ">გოუ</span>
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-desc text-[14px] tracking-widest p-dashboard-padding-x">
            პანელი
          </p>
          <div className="flex flex-col">
            {routesList.map((e) => (
              <Link
                to={e.path}
                key={e.id}
                className={`text-head tracking-wider text-start p-dashboard-padding-x flex justify-start items-center h-[50px] cursor-pointer transition-all  ${
                  e.path == location.pathname
                    ? "border-r-2 border-main bg-linear-to-l from-main-clear to-transparent bg-[right_0%]"
                    : "border-r-2 border-transparent bg-[100px] "
                }   
              ${e.disabled ? "disabled_button" : ""}`}
              >
                {e.geo}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <div
        className={`hidden max-screen1200:block fixed h-full w-full top-0 left-0 z-[3] transition-[opacity,visibility] ${
          show ? "opacity-100 visible" : "opacity-0 invisible"
        } bg-[#00000083]`}
        onClick={() => setShow(false)}
      ></div>
      <div
        className=" hidden max-screen1200:block fixed top-5 left-5 py-2 text-head px-5  rounded-sm bg-nav-bg"
        onClick={() => setShow(true)}
      >
        მენიუ
      </div>
    </>
  );
}

const routesList = [
  { id: 0, geo: "მთავარი", eng: "Dashboard", path: "/" },
  { id: 1, geo: "ანგარიშები", eng: "Users", path: "/users" },
  { id: 2, geo: "ფილმები", eng: "Movies", path: "/movies" },
  { id: 3, geo: "სერიალები", eng: "Series", path: "/series" },
  {
    id: 4,
    geo: "კომენტარები",
    eng: "Comments",
    path: "/comments",
    disabled: true,
  },
  {
    id: 5,
    geo: "ხარვეზების",
    eng: "Error messages",
    path: "/error_messages",
    disabled: true,
  },
  { id: 6, geo: "განრიგი", eng: "Schedule", path: "/schedule", disabled: true },
];
