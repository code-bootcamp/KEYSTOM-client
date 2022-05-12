// 헤더 페이지
import styled from "@emotion/styled"
import {useRouter } from 'next/router';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  width: 1920px;
  height: 180px;
  background-color: #2c2c2c;
  padding-left: 210px;
  padding-right: 210px;
`

const LogoDiv = styled.div`
  width: 120px;
  height: 120px;
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
`
const Menu = styled.div`
  font-weight: 700;
font-size: 18px;
line-height: 18px;
color: #f1f1f1;
padding-left: 58px;
cursor: pointer;
:hover{
  color:#B150F2 ;
}

`

const IconWrapper = styled.div`
display: flex;
  width: 54px;
  height: 54px;
  margin-right: 38px;
  margin-bottom: 23px;
`

const UserIcon = styled.img`
width: 100%;
cursor: pointer;
`
const BasketWrapper = styled.div`
  width: 54px;
  height: 54px;
  margin-right: 38px;
  margin-bottom: 23px;
  margin-top: -38px;
`

const BasketIcon = styled.img`
  width: 54px;
  height: 54px;
cursor: pointer;
`

const BasketNum = styled.div`
width: 20px;
height: 20px;
border-radius: 20px;
padding-left: 6px;
background-color:#B150F2  ;
position: relative;
left: 35px;
top:23px;

`


export default function LayoutHeader() {
const router = useRouter()

  const MoveToHome = () =>{
    router.push("/")
  }

  const MoveToStore = () =>{
    router.push("/store")
  }


  const MoveToMyPage = () =>{
    router.push("/mypage")
  }

  return (
    <Wrapper>
      <LogoDiv>
        <Logo src="/images/lg.png" onClick={MoveToHome}/>
      </LogoDiv>
      <MenuWrapper>
        <MenuDiv>
          <Menu onClick={MoveToStore}>STORE</Menu>
          <Menu onClick={MoveToMyPage}>MY PAGE</Menu>
        </MenuDiv>
        <MenuDiv>
          <IconWrapper>
            <UserIcon src="/images/user.png"/>
          </IconWrapper>
  
          <BasketWrapper>
              <BasketNum>0</BasketNum>
              <BasketIcon src="/images/basket.png"/>
          </BasketWrapper>
        </MenuDiv>
      </MenuWrapper>
    </Wrapper>
  );
}
