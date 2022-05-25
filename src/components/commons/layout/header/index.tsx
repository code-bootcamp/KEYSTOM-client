// 헤더 페이지
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    background-color: transparent;
    padding: 25px 340px;
    color: #fff;
`;

const LogoDiv = styled.div`
    width: 140px;
    margin-right: 60px;
`;

const Logo = styled.div`
    font-family: "Orbitron-bold";
    font-size: 24px;
    line-height: 100%;
    width: 100%;
    text-align: center;
    cursor: pointer;
`;
const MenuWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const MenuDiv = styled.div`
    display: flex;
    align-items: center;
    margin-right: 60px;
`;
const Menu = styled.div`
    /* color: #B150F2; */
    color: #fff;
    padding-left: 50px;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    cursor: pointer;
    :hover {
        font-weight: 600;
        color: #b150f2;
    }
`;
const MenuIconDiv = styled.div`
    display: flex;
    width: 68px;
    height: 100%;
`;

const IconWrapper = styled.div`
    display: flex;
    width: 24px;
    height: 24px;
    margin-right: 20px;
`;

const UserIcon = styled.img`
    width: 100%;
    cursor: pointer;
`;
const BasketWrapper = styled.div`
    width: 24px;
    height: 24px;
`;

const BasketIcon = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
`;

// const BasketNum = styled.div`
// width: 20px;
// height: 20px;
// border-radius: 20px;
// padding-left: 6px;
// background-color:#B150F2  ;
// position: relative;
// left: 35px;
// top:23px;
// `

export default function LayoutHeader() {
    const router = useRouter();

    const moveToHome = () => {
        router.push("/");
    };

    const moveToStore = () => {
        router.push("/store");
    };

    const moveToMyPage = () => {
        router.push("/mypage");
    };

    const moveToLogin = () => {
        router.push("/login");
    };

    const moveToEventPage = () => {
        router.push("/event");
    };

    return (
        <Wrapper>
            <LogoDiv>
                <Logo onClick={moveToHome}>KEYSTOM</Logo>
            </LogoDiv>
            <MenuWrapper>
                <MenuDiv>
                    <Menu onClick={moveToStore}>STORE</Menu>
                    <Menu onClick={moveToEventPage}>EVENT</Menu>
                    <Menu onClick={moveToMyPage}>MY PAGE</Menu>
                </MenuDiv>
                <MenuIconDiv>
                    <IconWrapper>
                        <UserIcon
                            src="/images/header/account.png"
                            onClick={moveToLogin}
                        />
                    </IconWrapper>
                    <BasketWrapper>
                        {/* <BasketNum>0</BasketNum> */}
                        <BasketIcon
                            src="/images/header/on.png"
                            onClick={moveToMyPage}
                        />
                    </BasketWrapper>
                </MenuIconDiv>
            </MenuWrapper>
        </Wrapper>
    );
}
