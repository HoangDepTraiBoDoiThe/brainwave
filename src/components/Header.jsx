import { useState } from "react";

import { brainwave } from "../assets";
import { navigation } from "../constants";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import ButtonGradient from "../assets/svg/ButtonGradient";

import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";

const Header = () => {
  const pathName = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const handleCloseNavOnClick = () => {
    setOpenNavigation(false);
  };

  return (
    <div
      className={`${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      } fixed top-0 left-0 w-full z-50 border-b border-n-6`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8 " href="#hero">
          <img src={brainwave} width={190} height={40}></img>
        </a>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[4.8rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleCloseNavOnClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 py-6 px-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } ${
                  pathName.hash === item.url ? "lg:text-n-1" : "lg:text-n-1/50"
                }`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>

        <a className="text-n-1/50 hidden transition-colors hover:text-n-1 mr-8 lg:block ">
          New Account
        </a>
        <Button className={"hidden lg:flex"} href={"#login"}>
          Signin
        </Button>
        <Button
          className={"ml-auto flex lg:hidden"}
          px="px-3"
          href={"#login"}
          onClick={() => setOpenNavigation(!openNavigation)}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
        <ButtonGradient />
      </div>
    </div>
  );
};

export default Header;
