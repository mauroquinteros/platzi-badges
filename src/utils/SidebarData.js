import React from "react";
import { IoMdPersonAdd, IoMdListBox } from "react-icons/io";

export const SidebarData = [
  {
    title: "Listar",
    path: "/badges",
    icon: <IoMdListBox />,
    className: "Navbar__item fw-light",
  },
  {
    title: "Agregar",
    path: "/badges/new",
    icon: <IoMdPersonAdd />,
    className: "Navbar__item fw-light",
  },
];
