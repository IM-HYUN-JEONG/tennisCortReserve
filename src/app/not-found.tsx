"use client";
import Link from "next/link";
import {NextPage} from "next";
import styled from "styled-components";

const NotFound: NextPage = () => {
  return (
    <Container>
      <div>이 페이지는 존재하지 않습니다. 다른 페이지를 검색해 보세요.</div>
      <Link href="/">홈으로</Link>
    </Container>
  );
};

export default NotFound;

const Container = styled.div``;
