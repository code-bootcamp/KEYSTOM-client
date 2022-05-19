import styled from "@emotion/styled"
import MapPage from "../../map"

const FooterWrapper = styled.div`
  display: flex;
    width: 1920px;
    height: 600px;
    background-color: #f1f1f1;
    padding-left: 210px;
    padding-right: 210px;
    padding-bottom: 120px;
    color: #2c2c2c;
` 

const FooterLeftDiv = styled.div`
width: 600px;
padding-left: 100px;
`

const FooterRightDiv = styled.div`
width: 200px;
padding-left: 250px;
`


const FooterTopDiv = styled.div`
display: flex;
align-items: center;
  width: 700px;
  padding-top: 126px;
  padding-bottom: 166px;
`
const FooterLogoDiv = styled.div`
  width: 120px;
  height: 120px;
`
const FooterLogo = styled.img`
  width: 100%;
`

const FooterLogoTitle = styled.div`
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;
  padding-left: 48px;
`

const FooterBottomWrapper = styled.div`
width: 400px;
display: flex;
justify-content: space-between;
`

const FooterBottomDiv = styled.div``

const FooterBottomTitle = styled.div`
font-weight: 700;
font-size: 20px;
line-height: 20px;
padding-bottom: 24px;
`

const FooterBottomContent = styled.div`
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

// const CompanyAddress = styled.div`
//   padding-bottom: 15px;
// `

const FooterMapDiv =  styled.div`
width: 500px;
height: 300px;
`



export default function LayoutFooter() {
  return (
    <FooterWrapper>
      <FooterLeftDiv>
        <FooterTopDiv>
          <FooterLogoDiv>
            <FooterLogo src="/images/lg.png"/>
          </FooterLogoDiv>
          <FooterLogoTitle>개발자들의 F12</FooterLogoTitle>
          </FooterTopDiv>
          <FooterBottomWrapper>
            <FooterBottomDiv>
              <FooterBottomTitle>TEL</FooterBottomTitle>
              <FooterBottomContent>070-456-7890</FooterBottomContent>
            </FooterBottomDiv>

            <FooterBottomDiv>
              <FooterBottomTitle>Email</FooterBottomTitle>
              <FooterBottomContent>F12dev@gmail.com</FooterBottomContent>
            </FooterBottomDiv>
          </FooterBottomWrapper>
        </FooterLeftDiv>

        <FooterRightDiv>
          <LocationText>Location</LocationText>
          <FooterMapDiv>
            <MapPage/>
          </FooterMapDiv>
        </FooterRightDiv>
    </FooterWrapper>
)
}
