import Image from "next/image";
import styles from "./page.module.css";
import {Metadata} from "next";
import {BrowserView, MobileView, isDesktop, isTablet, isMobileOnly} from "react-device-detect";
import styled from "styled-components";

export const metadata: Metadata = {
  title: "Tennis Cort Reserve | Home",
  description: "Tennis Cort Reserve | Home",
};

export default function Home() {
  return <main>home</main>;
}
