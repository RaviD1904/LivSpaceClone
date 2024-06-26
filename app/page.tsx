"use client"

import React, { Fragment, useState } from "react";

import { Button, Carousel, Drawer } from "antd";
import { RightOutlined } from '@ant-design/icons';
import Link from "next/link";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Image from "next/image";
import carousal_banner_01 from "../assets/home_page/carousal_1_image.jpeg";
import carousal_banner_02 from "../assets/home_page/carousal_2_image.jpeg";
import carousal_banner_03 from "../assets/home_page/home-banner.jpg";
import {HOME_PAGE_CARD_DATA} from "../utils/data"
// import carousal_banner_03 from "../assets/home_page/carousal_3_image.jpeg"

import { Card } from "antd";
const { Meta } = Card;
export default function Home() {
  const [active, setActive] = useState<String>("1");
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleClick = (id: String) => {
    setActive("");
    console.log(`id = ${id}`);
    setActive(id);
    if (id === "5") {
      showDrawer();
    }
  };







  function ChevronDownIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    );
  }

  function HexagonIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    );
  }

  return (
    <div className="overflow-x-hidden">
      {/* navigation bar */}
      <div>
        <nav className="fixed top-0 z-50 bg-white py-4 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <HexagonIcon className="text-red-600 h-6 w-6" />
                <span className="text-3xl font-bold tracking-tight text-gray-900 ml-3">
                  LIVSPACE
                </span>
              </div>
              <div className="hidden md:flex space-x-8">
                <Link className="text-gray-500 hover:text-gray-900" href="#">
                  Interiors
                </Link>
                <div className="relative">
                  <Link
                    className="text-gray-500 hover:text-gray-900 inline-flex items-center"
                    href="#"
                  >
                    Design Ideas
                    <ChevronDownIcon className="ml-2 h-5 w-5" />
                  </Link>
                  <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-md w-40" />
                </div>
                <div className="relative">
                  <Link
                    className="text-gray-500 hover:text-gray-900 inline-flex items-center"
                    href="#"
                  >
                    Magazine
                    <ChevronDownIcon className="ml-2 h-5 w-5" />
                  </Link>
                  <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-md w-40" />
                </div>
                <div className="relative">
                  <Link
                    className="text-gray-500 hover:text-gray-900 inline-flex items-center"
                    href="#"
                  >
                    Cities
                    <ChevronDownIcon className="ml-2 h-5 w-5" />
                  </Link>
                  <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-md w-40" />
                </div>
                <Link className="text-gray-500 hover:text-gray-900" href="#">
                  Store Locator
                </Link>
                <div className="relative">
                  <Link
                    className="text-gray-500 hover:text-gray-900 inline-flex items-center"
                    href="#"
                  >
                    More
                    <ChevronDownIcon className="ml-2 h-5 w-5" />
                  </Link>
                  <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-md w-40" />
                </div>
              </div>
            </div>
            <div className="border-b-4 border-red-600 w-16 mt-3" />
          </div>
        </nav>
      </div>
      {/* navigation bar */}
      {/* Courusal */}
      <div className="mt-20">
        <Carousel arrows={true}>
          <div className="relative">
            <Image src={carousal_banner_01} alt="banner_01" />
            <div className="w-full absolute right-1/2 left-1/2 bottom-14 -translate-x-2/4 -translate-y-2/4">
              <h3 className="text-wrap text-center text-7xl text-white font-bold">
                Home to beautiful interiors
              </h3>
              <Button
                className="absolute right-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4"
                shape="round" 
                size="large"
                style={{
                  backgroundColor: "#d94c50",
                  border: "1px solid #d94c50",
                  color: "white",
                  marginTop: "30px",
                  padding:"10px 38px 38px 38px",
                  fontWeight: 600,
                }}
              >
                BOOK FREE CONSULTATION
              </Button>
            </div>
          </div>
          <div>
            <Image src={carousal_banner_02} alt="banner_02" />
          </div>
          <div>
            <Image src={carousal_banner_02} alt="banner_03" />
          </div>
        </Carousel>
      </div>

      <div className="mt-5">
        <p className="text-4xl font-bold text-balance text-center">
          One-stop shop for all things interiors
        </p>
        <p className=" mt-4 text-center text-xl font-normal text-balance">
          Be it end-to-end interiors, renovation or modular solutions, we have
          it all for your home or office. With a wide range of furniture &
          decor, we have your back from start to finish.
        </p>
      </div>

      <div className="px-7 py-5 mt-4 bg-slate-200">
        {/* <Carousel> */}
        <div className="flex gap-3 sm:flex-wrap">
        {/* <Carousel arrows={true}> */}
          {
          HOME_PAGE_CARD_DATA.map((item,index)=><div key={index}>
          <Card
            hoverable
            style={{ width: 240,backgroundColor:"whitesmoke" }}
            cover={<Image alt="example" src={carousal_banner_01} />}
          >
            <p className="text-center text-xl font-bold">{item.title}</p>
            <p className="text-center text-base font-normal">{item.subtitle}</p>
            <p className="text-center hover:text-red-400 mt-2">

            <RightOutlined className=""/>
            </p>
          </Card>
        </div>)
          
          
          }
        {/* </Carousel> */}
        </div>
        {/* </Carousel> */}
      </div>
      {/* Courusal */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="btm-nav md:hidden">
        <Fragment>
          <button
            key={1}
            className={active === "1" ? "active" : undefined}
            id={"1"}
            onClick={() => handleClick("1")}
          >
            <Image
              src="/home_icon.png"
              alt="home_icon"
              width={20}
              height={20}
            />
            <span className="text-xs">HOME</span>
          </button>
          <button
            key={2}
            className={active === "2" ? "active" : undefined}
            id={"2"}
            onClick={() => handleClick("2")}
          >
            <Image
              src="/design_icon.png"
              alt="design_icon"
              width={20}
              height={20}
            />
            <span className="text-xs">DESIGN IDEAS</span>
          </button>
          <button
            key={3}
            className={active === "3" ? "active" : undefined}
            id={"3"}
            onClick={() => handleClick("3")}
          >
            <Image
              src="/design_icon.png"
              alt="design_icon"
              width={20}
              height={20}
            />
            <span className="text-xs">LET'S BEGIN</span>
          </button>
          <button
            key={4}
            className={active === "4" ? "active" : undefined}
            id={"4"}
            onClick={() => handleClick("4")}
          >
            <Image
              src="/calcultor_icon.png"
              alt="calcultor_icon"
              width={20}
              height={20}
            />
            <span className="text-xs">GET ESTIMATE</span>
          </button>
          <button
            key={5}
            className={active === "5" ? "active" : undefined}
            id={"5"}
            onClick={() => handleClick("5")}
          >
            <Image src="/meu_icon.png" alt="menu_icon" width={20} height={20} />
            <span className="text-xs lg:text-base">MORE</span>
          </button>
        </Fragment>
      </div>

      <Drawer title="Basic Drawer" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      
    </div>
  );
}

