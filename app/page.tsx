import React from "react";
import { Button, Carousel } from "antd";
import Link from "next/link";
import Image from "next/image";
import carousal_banner_01 from "../assets/home_page/carousal_1_image.jpeg";
import carousal_banner_02 from "../assets/home_page/carousal_2_image.jpeg";
import carousal_banner_03 from "../assets/home_page/carousal_3_image.jpg";
// import carousal_banner_03 from "../assets/home_page/carousal_3_image.jpeg"

// import { Card } from "antd";
// const { Meta } = Card;
export default function Home() {
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
        <Carousel arrows>
          <div className="relative">
            <Image src={carousal_banner_01} alt="banner_01" />
            <div className="w-full absolute right-1/2 left-1/2 bottom-14 -translate-x-2/4 -translate-y-2/4">
              <h3 className="text-wrap text-center text-7xl text-white font-bold">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
              <Button
                className="absolute right-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4"
                shape="round"
                size="large"
                style={{
                  backgroundColor: "red",
                  border: "1px solid red",
                  color: "white",
                  marginTop: "30px",
                  fontWeight: 800,
                }}
              >
                See Your Favourite Design
              </Button>
            </div>
          </div>
          <div>
            <Image src={carousal_banner_02} alt="banner_02" />
          </div>
          <div>
            <Image src={carousal_banner_03} alt="banner_03" />
          </div>
        </Carousel>
      </div>

      <div>
        <div>
          {/* <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <Image
                alt="example"
                src={carousal_banner_01}
              />
            }
          >
            <p>Hello</p>
            <p>Hello</p>
          </Card> */}
        </div>
      </div>
      {/* Courusal */}
    </div>
  );
}
