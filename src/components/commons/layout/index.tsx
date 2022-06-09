import { ReactNode } from "react";
import { useRouter } from "next/router";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import styled from "@emotion/styled";
import LayoutAdminSideBar from "./admin/index";

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

const Inner = styled.div`
    width: 100%;
    display: flex;
`;

const HIDDEN_ADMIN_SIDEBAR = ["/admin/", "/admin/product/", "/admin/user/", "/admin/product/write/"];

export default function Layout(props: ILayoutProps) {
    const router = useRouter();

    const isHidden = HIDDEN_ADMIN_SIDEBAR.includes(router.asPath);

    return (
        <Wrapper>
            <LayoutHeader />
            <Inner>
                {isHidden && <LayoutAdminSideBar />}
                <BodyWrapper>
                    <Body>{props.children}</Body>
                </BodyWrapper>
            </Inner>
            <LayoutFooter />
        </Wrapper>
    );
}
