"use client";
import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

import Image from "next/image";
import {MenuData} from "../../assets/const";
import styled from "styled-components";

export default function Header() {
  const pathname = usePathname();

  return (
    <HeaderWrap>
      <Link href="/">
        <Image src="/images/icon-tennis.png" width={120} height={60} alt="tennis-logo" style={{display: "flex", justifyContent: "flex-start"}} />
      </Link>
      <MenuBox>
        {MenuData.map(menu => {
          return (
            <MenuBtn key={menu.id}>
              <Link
                href={menu.path}
                style={{
                  color: menu.path === pathname ? "black" : "#C4C4C4",
                }}
              >
                {menu.name}
              </Link>
            </MenuBtn>
          );
        })}
      </MenuBox>
    </HeaderWrap>
  );
}
const HeaderWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid black;
`;

const MenuBox = styled.div`
  display: flex;
  alignitems: center;
  justifycontent: flex-end;
  font-size: 1.5rem;
  fontweight: 700;
`;

const MenuBtn = styled.div` 
  color: #838383;
  fontSize: 18px;
  font-weight: 700;
  margin: 0rem 1rem 0rem 1rem;
  padding: 0px 6px 0px 6px;
  ":hover": {
    borderBottom: "1px solid #C4C4C4",
    backgroundColor: "transparent", //메뉴 호버했을때 투명 색상
  },
`;
