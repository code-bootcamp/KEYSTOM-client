import styled from "@emotion/styled";

const FooterWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 380px;
    background-color: #1b1b1b;
    padding: 83px 340px 130px 340px;
    font-size: 18px;
    line-height: 24px;
    color: #c4c4c4;
    border-top: 0.5px solid #666;
`;

const FooterLeftDiv = styled.div``;


const FooterTopDiv = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding-bottom: 64px;
`;
const FooterLogo = styled.div`
    width: 100%;
    font-family: "Orbitron-bold";
    font-weight: 700;
    font-size: 34px;
    line-height: 24px;
`;

const FooterMidWrapper = styled.div`
    display: flex;
`;
const FooterInner = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;
const FooterMidDiv = styled.div`
    display: flex;
    padding-right: 120px;
    padding-bottom: 33px;
`;
const FooterBottomDiv = styled.div`
    display: flex;
    padding-bottom: 33px;
`;

const FooterBottomSpan = styled.span`
    font-size: 18px;
    line-height: 24px;
    padding-right: 74px;
    cursor: pointer;
`;

const FooterMidTitle = styled.div`
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    padding-right: 10px;
`;

const FooterMidContent = styled.div`
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
`;

const CopyRight = styled.div``;


export default function LayoutFooter() {
    return (
        <FooterWrapper>
            <FooterLeftDiv>
                <FooterTopDiv>
                    <FooterLogo>KEYSTUM</FooterLogo>
                </FooterTopDiv>
                <FooterInner>
                    <FooterMidWrapper>
                        <FooterMidDiv>
                            <FooterMidTitle>TEL</FooterMidTitle>
                            <FooterMidContent>070-456-7890</FooterMidContent>
                        </FooterMidDiv>

                        <FooterMidDiv>
                            <FooterMidTitle>Email</FooterMidTitle>
                            <FooterMidContent>
                                Keystom@gmail.com
                            </FooterMidContent>
                        </FooterMidDiv>

                        <FooterMidDiv>
                            <FooterMidTitle>Location</FooterMidTitle>
                            <FooterMidContent>
                                Seoul, Gurogu, 140-1s
                            </FooterMidContent>
                        </FooterMidDiv>
                    </FooterMidWrapper>
                    <FooterBottomDiv>
                        <FooterBottomSpan>SiteMap</FooterBottomSpan>
                        <FooterBottomSpan>Privacy Policy</FooterBottomSpan>
                        <FooterBottomSpan>Cookie Policy</FooterBottomSpan>
                        <CopyRight>
                            Copyright ©2022 F12 Developers Inc. All rights
                            reserved.
                        </CopyRight>
                    </FooterBottomDiv>
                </FooterInner>
            </FooterLeftDiv>
        </FooterWrapper>
    );
}
