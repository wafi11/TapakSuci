import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareGithub, FaSquareInstagram, FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  const dataGeneral = [
    {
      id: 1,
      name: "Service",
      link: "#",
    },
    {
      id: 2,
      name: "Blogs",
      link: "#",
    },
    {
      id: 3,
      name: "Privacy",
      link: "/",
    },
  ];
  const dataLinks = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "About",
      link: "/about",
    },
    {
      id: 3,
      name: "Contact",
      link: "/contact",
    },
  ];
  const dataMedia = [
    {
      id: 1,
      name: "Buy Gift Card",
      link: "#",
    },
    {
      id: 2,
      name: "Cookie Preferences",
      link: "#",
    },
    {
      id: 3,
      name: "Legal Notices",
      link: "3",
    },
  ];
  return (
    <div className="w-full h-[300px] my-10 px-5">
      <div className="container pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-1 ">
          <div className="p-4 w-[350px]">
            <h1
              className="p-4 text-red-500 font-bold text-3xl "
              data-aos="zoom-in">
              Tapak Suci
              <br />
              Putra Muhammdiyah
            </h1>
            <p
              className="p-4 text-slate-300 font-normal tex-md "
              data-aos="zoom-out">
              NextTravel is a web application that helps you view hotel
              schedules or tourist attractions.
            </p>
            <div className="flex p-4 gap-8 text-gray-200">
              <FaSquareGithub size={30} />
              <FaXTwitter size={30} />
              <FaFacebookSquare size={30} />
              <FaSquareInstagram size={30} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
            <div className="p-2">
              <h1 className="text-xl font-bold text-yellow-500 pt-5 pb-3">
                General
              </h1>
              <ul className="flex flex-col gap-5">
                {dataGeneral.map((item) => (
                  <ListItem item={item} key={item.id} />
                ))}
              </ul>
            </div>
            <div className="p-2 ">
              <h1 className="text-xl font-bold text-yellow-500 pt-5 pb-3">
                Links
              </h1>
              <ul className="flex flex-col gap-5">
                {dataLinks.map((item) => (
                  <ListItem item={item} key={item.id} />
                ))}
              </ul>
            </div>
            <div className="p-2 ">
              <h1 className="text-xl font-bold text-yellow-500 pt-5 pb-3">
                Media
              </h1>
              <ul className="flex flex-col gap-5">
                {dataMedia.map((item) => (
                  <ListItem item={item} key={item.id} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

type List = {
  id: number;
  name: string;
  link: string;
};

interface ListItemProps {
  item: List;
}

export const ListItem: React.FC<ListItemProps> = ({ item }) => {
  return (
    <li
      data-aos="fade-up"
      key={item.id}
      className="cursor-pointer underline relative hover:text-red-600 hover:translate-x-1 duration-300 text-gray-200">
      <a href={item.link} data-aos="fade-up">
        {item.name}
      </a>
    </li>
  );
};
