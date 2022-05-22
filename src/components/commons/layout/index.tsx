// 전체 레이아웃 페이지
// Header + Footer
import { ReactNode } from "react";
import { useRouter } from "next/router";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import styled from "@emotion/styled";

interface ILayoutProps {
  children: ReactNode;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const BodyWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Body = styled.div`
  width: 100%;
  height: auto;
`;

const HIDDEN_HEADER = ["/"];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  let isHidden = HIDDEN_HEADER.includes(router.asPath);

  return (
    <Wrapper>
      {!isHidden && <LayoutHeader />}
      <BodyWrapper>
        <Body>{props.children}</Body>
      </BodyWrapper>
      <LayoutFooter />
    </Wrapper>
  );
}
