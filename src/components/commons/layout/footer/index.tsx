import styled from "@emotion/styled"
import MapPage from "../../map"

const FooterWrapper = styled.div`
display: flex;
    width: 1920px;
    height: 600px;
    background-color: #f1f1f1;
    padding-left: 210px;
    padding-right: 210px;
    color: #2c2c2c;
` 

const LeftDiv = styled.div`
width: 800px;
`

const RightDiv = styled.div``


const TopDiv = styled.div`
display: flex;
align-items: center;
  width: 100%;
  padding-top: 126px;
  padding-bottom: 166px;
`
const LogoDiv = styled.div`
  width: 120px;
  height: 120px;
`
const Logo = styled.img`
  width: 100%;
`

const LogoTitle = styled.div`
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;
  padding-left: 48px;
`

const BottomWrapper = styled.div`
width: 400px;
display: flex;
justify-content: space-between;
`

const BottomDiv = styled.div``

const BottomTitle = styled.div`
font-weight: 700;
font-size: 20px;
line-height: 20px;
padding-bottom: 24px;
`

const BottomContent = styled.div`
font-weight: 400;
font-size: 18px;
line-height: 24px;
`


const LocationText = styled.div`
font-weight: 700;
font-size: 20px;
line-height: 20px;
padding-top: 140px;
padding-bottom: 24px;
`

const CompanyAddress = styled.div`
  padding-bottom: 15px;
`

const MapDiv =  styled.div`
width: 300px;
height: 300px;
`



export default function LayoutFooter() {
  return (
    <FooterWrapper>
      <LeftDiv>
        <TopDiv>
          <LogoDiv>
            <Logo src="/images/lg.png"/>
          </LogoDiv>
          <LogoTitle>개발자들의 F12</LogoTitle>
          </TopDiv>
          <BottomWrapper>
            <BottomDiv>
              <BottomTitle>TEL</BottomTitle>
              <BottomContent>070-456-7890</BottomContent>
            </BottomDiv>

            <BottomDiv>
              <BottomTitle>Email</BottomTitle>
              <BottomContent>F12dev@gmail.com</BottomContent>
            </BottomDiv>
          </BottomWrapper>
        </LeftDiv>

        <RightDiv>
          <LocationText>Location</LocationText>
          <MapDiv>
            <CompanyAddress>
              서울시 행복구 행복빌딩 B동 1004호
            </CompanyAddress>
            <MapPage/>
          </MapDiv>
        </RightDiv>
    </FooterWrapper>
);;
}
