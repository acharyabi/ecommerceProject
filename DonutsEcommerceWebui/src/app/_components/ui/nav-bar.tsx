"use client";
import { NavBarData } from "@/app/_types/navbar";
import {
  NAVBAR_DATA_MENU,
  NAVBAR_DATA_MENU_SMALL,
} from "@/app/_components/constraints/navbar-data";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";
import { Drawer } from "antd";
import { usePathname } from "next/navigation";
import styles from "@/app/styles/nav.module.css";
import { useState } from "react";
export default function NavBar() {
  const pathName = usePathname();
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <nav className=" px-3 sm:px-14 font-Fredoka">
      <section className=" hidden  lg:flex justify-between   items-center py-8   ">
        {NAVBAR_DATA_MENU.map((navdata: NavBarData) => (
          <div key={navdata.url}>
            {navdata.image ? (
              <Link href={navdata.url}>
                <img src={navdata?.image} alt="brandlogo" className="h-8 " />
              </Link>
            ) : (
              <Link href={navdata.url}>
                <p
                  className={`text-sm relative hover:text-primary ${styles.navitem} `}
                >
                  {navdata.title}
                </p>
              </Link>
            )}
          </div>
        ))}
      </section>
      <section className="  lg:hidden ">
        <div className=" py-8 flex items-center justify-between      ">
          <GiHamburgerMenu
            className="h-8 w-8"
            onClick={() => setShowDrawer(true)}
          />
          <Drawer
            placement="top"
            style={{ height: "100vh" }}
            open={showDrawer}
            closeIcon={null}
          >
            <section>
              <div className="flex justify-between  mb-10 w-full">
                <RxCross1
                  className="h-8 w-8 "
                  onClick={() => setShowDrawer(false)}
                />

                <img
                  src="ever-donuts-logo.png"
                  alt="brand logo"
                  className="h-8"
                />
                <CiLocationOn className="h-8 w-8 text-gray-500" />
              </div>
              <hr />

              <div className="flex flex-col text-sm  gap-5 pt-4">
                {NAVBAR_DATA_MENU.map((navdata: NavBarData) => (
                  <div key={navdata.url}>
                    {navdata.title !== "logo" ? (
                      <Link
                        href={navdata.url}
                        onClick={() => setShowDrawer(false)}
                      >
                        {navdata.title}
                      </Link>
                    ) : null}
                  </div>
                ))}
              </div>
            </section>
          </Drawer>
          <Link href={"/"}>
            <img src="ever-donuts-logo.png" alt="brand logo" className="h-8" />
          </Link>
          <CiLocationOn className="h-8 w-8 text-gray-500" />
        </div>

        <div className="grid  grid-cols-3   ">
          {NAVBAR_DATA_MENU_SMALL.map((navdata: NavBarData) => (
            <Link
              href={navdata.url}
              key={navdata.url}
              className={`place-self-center ${
                pathName === navdata.url ? "border-b-2 border-black" : ""
              }`}
            >
              <p className="text-sm relative   py-3 ">{navdata.title}</p>
            </Link>
          ))}
        </div>
      </section>
    </nav>
  );
}
