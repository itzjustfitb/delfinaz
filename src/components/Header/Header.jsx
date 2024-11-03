import React, { useState } from "react";
import siteLogo from "../../assets/images/site-logo.png";
import { Link } from "react-router-dom";
import { Button, Flex } from "antd";
import { Sling as Hamburger } from "hamburger-react";

function Header() {
  const navigations = [
    {
      label: "Haqqımızda",
      value: "/about",
    },
    {
      label: "Kitablar",
      value: "/books",
    },
    {
      label: "Oyuncaqlar",
      value: "/toys",
    },
    {
      label: "Endirimlər",
      value: "/discounts",
    },
    {
      label: "Bestseller",
      value: "/best-seller",
    },
    {
      label: "Əlaqə",
      value: "/contact",
    },
  ];

  const [burgerOpen, setBurgerOpen] = useState(false);

  return (
    <header className="mx-auto px-5 desktop:px-10 py-[18px] border-b border-border-100">
      <Flex
        justify="space-between"
        className="flex flex-wrap desktop:flex-nowrap"
        align="center"
      >
        <Link to="/">
          <img src={siteLogo} alt="Site Logo" />
        </Link>
        <nav
          className={`order-1 w-full desktop:w-fit desktop:block desktop:order-none duration-300 overflow-hidden desktop:h-fit ${
            burgerOpen ? "h-[244px] mt-[30px]" : "h-0"
          }`}
        >
          <Flex className="gap-5 desktop:gap-[32px] flex flex-col desktop:flex-row">
            {navigations.map((navigation, index) => (
              <Link
                key={index}
                className="font-medium hover:text-skyBlue-500 hover:underline"
                to={navigation.value}
              >
                {navigation.label}
              </Link>
            ))}
          </Flex>
        </nav>
        <Flex className="gap-[12px] hidden desktop:flex" align="center">
          <Link to="login">
            <Button
              className="bg-transparent py-[12px] px-[18px] h-fit text-black font-medium text-sm border-0 shadow-none"
              type="primary"
            >
              Giriş
            </Button>
          </Link>
          <Link to="register">
            <Button
              className="py-[12px] h-fit px-[30px] font-medium text-sm bg-skyBlue-500 border-0 shadow-none"
              type="primary"
            >
              Qeydiyyat
            </Button>
          </Link>
        </Flex>
        <div className="block desktop:hidden">
          <Hamburger
            rounded
            size={30}
            toggled={burgerOpen}
            toggle={setBurgerOpen}
          />
        </div>
      </Flex>
    </header>
  );
}

export default Header;
