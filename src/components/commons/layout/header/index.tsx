// 헤더 페이지
import styled from "@emotion/styled"
import {useRouter } from 'next/router';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  width: 1920px;
  height: 80px;
  background-color: #2c2c2c;
  padding-left: 210px;
  padding-right: 210px;
`

const LogoDiv = styled.div`
  width: 54px;
  height: 54px;
  margin-left: 60px;
`

const Logo = styled.img`
  width: 100%;
  cursor: pointer;
`
const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const MenuDiv = styled.div`
  display: flex;
align-items: center;
margin-right: 60px;
`
const Menu = styled.div`
color: #f1f1f1;
padding-left: 35px;
font-weight: 400;
font-size: 14px;
line-height: 24px;
cursor: pointer;
:hover{
  color:#B150F2 ;
}

`

const IconWrapper = styled.div`
display: flex;
  width: 24px;
  height: 24px;
  margin-right: 20px;
  margin-bottom: 14px;
  
`

const UserIcon = styled.img`
width: 100%;
cursor: pointer;
`
const BasketWrapper = styled.div`
  width: 24px;
  height: 24px;
  margin-bottom: 16px;
`

const BasketIcon = styled.img`
  width: 24px;
  height: 24px;
cursor: pointer;
`

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
const router = useRouter()

  const moveToHome = () =>{
    router.push("/")
  }

  const moveToStore = () =>{
    router.push("/store")
  }

  const moveToMyPage = () => {
    router.push("/mypage")
  }

  const moveToLogin = () => {
    router.push("/login")
  }

  const moveToEventPage = () => {
    router.push("/market")
  }

  return (
    <Wrapper>
      <LogoDiv>
        <Logo src="/images/lg.png" onClick={moveToHome}/>
      </LogoDiv>
      <MenuWrapper>
        <MenuDiv>
          <Menu onClick={moveToStore}>STORE</Menu>
          <Menu onClick={moveToMyPage}>MY PAGE</Menu>
          <Menu onClick={moveToEventPage}>EVENT</Menu>
        </MenuDiv>
        <MenuDiv>
          <IconWrapper>
            <UserIcon src="/account.png" onClick={moveToLogin}/>
          </IconWrapper>
          <BasketWrapper>
              {/* <BasketNum>0</BasketNum> */}
              <BasketIcon src="/on.png" onClick={moveToMyPage}/>
          </BasketWrapper>
        </MenuDiv>
      </MenuWrapper>
    </Wrapper>
  );
}
