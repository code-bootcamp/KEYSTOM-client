// 전체 레이아웃 페이지
// Header + Presenter
import { ReactNode } from "react";
import { useRouter } from "next/router";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);

  return (
    <>
      <LayoutHeader />
        <body>{props.children}</body>
      <LayoutFooter />
    </>
  );
}
