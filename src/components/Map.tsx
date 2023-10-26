import React, { Component } from 'react';
import styled from 'styled-components';
import RoundedBox from './RoundedBox';
import UxIcon from '../images/ux-glass-clear.png'
import ThreeDGlassIcon from '../images/3D-glass-clear.png'
import MiscIcon from '../images/misc.png'
import MapMenuButton from './MapMenuButton';
import Text from './Text';
import Image from './Image';
import { Link } from 'react-router-dom';


interface Props {
  children?: React.ReactNode;
}

interface State {

}

export class Map extends Component<Props, State> {
  render() {
    return (
      <Main>
        <Welcome>Welcome!</Welcome>
        <Brief>This is my <span>virtual library</span>. Created in <span>React.js</span>, it contains <br></br>  all the work I am most proud of and eager to share with the world!</Brief>

        <MainGrid>

          <LeftSection>
            {/* about me */}
            <RoundedBox padding="0px 50px 80px 50px" flexDirection='column'>
              {/* <TextContainer> */}
              <Text padding='20px 0' fontSize='25px'>Explore and learn more about <span>me</span> and my <span>work</span>!</Text>
              <Text fontSize='20px'>I am passionate about video games, cats and bubbles. My love for design and 3D runs deep with experience in ux, programming, 3D production, and artsy hobbies!</Text>
              <Image src="/images/decoration/bobacat-spill.png" width='75%' height='50%' />
              {/* </TextContainer> */}

            </RoundedBox>
            {/* <BottomHalf>
              <RoundedBox padding="10px" href="/ux/project/this" center>
                <Image src="/images/icons/about.png" width='5vh' />
                <Text fontSize="20px" fontWeight='400' padding='10px 0 0 0'>Hey</Text>
              </RoundedBox>
            </BottomHalf> */}
          </LeftSection>

          <CenterSection>
            {/* photo */}
            <img src="/images/me.jpg" alt='' />
          </CenterSection>

          <RightSection>
            {/* Ux  */}
            <RoundedBox href="/ux">
              <ButtonImage src={UxIcon} />
            </RoundedBox>
            {/* 3d */}
            <RoundedBox href="/3d">
              <ButtonImage src={ThreeDGlassIcon} />
            </RoundedBox>
            {/* misc */}
            <RoundedBox href="/misc">
              <ButtonImage src={MiscIcon} />
            </RoundedBox>
          </RightSection>
        </MainGrid>

        {/* <Contact id="contact">
          <Text fontSize='30px' padding='0 0 15px 0'><span>Contact</span> me!</Text>
          <ContactContainer >
            <RoundedBox height="100%" padding={"0"}>
              <InnerContactContainer>
                <Links>
                  <StyledLink href="mailto:fgorgacheva@gmail.com">
                    <img src="/images/icons/mail1.png" alt="" />
                    <Text fontSize='20px'>fgorgacheva@gmail.com</Text>
                  </StyledLink>
                  <StyledLink target='_blank' rel='noopener noreferrer' href="https://linkedin.com/in/fgorgacheva">
                    <img src="/images/icons/linkedin1.png" alt="" />
                    <Text fontSize='20px'>in/fgorgacheva</Text>
                  </StyledLink>
                  {/* <StyledLink target='_blank' rel='noopener noreferrer' href="https://github.com/fgorgacheva">
                  <img src="/images/icons/github1.png" alt="" />
                  <Text fontSize='20px'>/fgorgacheva</Text>
                </StyledLink> //
                </Links>
                {/* <JijiDiv>
                <JijiImage src='/images/decoration/bobacat-stack.png' height="100%" />
              </JijiDiv> 
                <BobaDiv>
                  <RoundedBox center>
                    <Image src='/images/decoration/bobacat.png' height='100%' width='100%' />

                  </RoundedBox>
                </BobaDiv>

              </InnerContactContainer>
            </RoundedBox>*}
          </ContactContainer>
        </Contact> */}

        <Footer>

          <Contact>
            <Text fontSize="35px" fontFamily="nunito" fontWeight="700" color="white">Curious? Let's talk! ✨
            </Text>
            <Links>
              <Email>
                <Image width="30px" src="/images/icons/at.svg"></Image>
                <Text fontSize="25px" fontFamily="nunito" fontWeight="500" color="white" padding="0 20px"><StyledLink href="mailto:fgorgacheva@gmail.com">fgorgacheva@gmail.com</StyledLink></Text>
              </Email>

              <LinkedIn>
                <Image width="30px" src="/images/icons/in.svg"></Image>
                <Text fontSize="25px" fontFamily="nunito" fontWeight="500" color="white" padding="0 20px"><StyledLink href="https://www.linkedin.com/in/fgorgacheva">in/fgorgacheva</StyledLink></Text>
              </LinkedIn>
            </Links>
          </Contact>

          <Boba>
            <Image width="400px" height="" src="/images/decoration/bobacat.png"></Image>
          </Boba>
          <BackgroundImage src="/images/footer2.png"></BackgroundImage>
        </Footer>

      </Main >
    )
  }
}

// Main Styles ---------------------------------------------------------
const Main = styled.div`
  height: 100vh;

  font-family: nunito;
  color: #5f5f5f;

  font-size: 80%;

  padding-left: 5%;
  padding-right: 5%;

`;

const Welcome = styled.h2`
font-weight: 600;
`;

const Brief = styled.h1`
  margin-top: 50px;
  font-weight: 300;
  span{
    font-weight: 800;
  }
`;

const MainGrid = styled.div`
  height: 40vh;
  align-items: center;
  margin-top: 5%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(300px,1fr)) minmax(50px,1fr);
  grid-template-rows: minmax(0,1fr);
`;

// Left Styles ---------------------------------------------------------

const LeftSection = styled.div`
  height: 100%;
  width: 100%;
  row-gap: 15px;
  display: grid;
  grid-template-columns: minmax(0,1fr);
  grid-template-rows: minmax(0,1fr);
  justify-content: flex-end;
  align-items: center;

  img{
    object-fit: contain;
    margin: auto;
  }
`;

const Icons = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr;
  img{
    margin: auto;
    width: 60px;
    height: 60px;
  }
`;

const BottomHalf = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 2fr;
  column-gap: 15px;
`;

// Center Styles ---------------------------------------------------------

const CenterSection = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center;s */
  
  img{
    border-radius: 100%;
    height: 20vw;
    /* width: 50%; */
    
    box-shadow: -5px 10px 15px -3px rgba(0,0,0,0.1);
  }
`;

// Right Styles -----------------------------------------------------------

const RightSection = styled.div`
  height: 100%;
  width: 100%;
  align-items: center;
  grid-gap: 10px;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  justify-content: space-evenly;

  div {
    width: 125px;
    height: 125px;
  }
`;

const ButtonImage = styled.img`
  /* width: 15vh; */
  width: 100%;
  padding: 15px;
`;



// Contact Styles -----------------------------------------------------------

// const Contact = styled.div`
//   padding-top: 10vh;
//   padding-bottom: 10vh;

//   min-width: 500px;
//   width: 50%;
// `;

// const ContactContainer = styled.div`
//   display: grid;
//   grid-template-columns: minmax(0,4fr);
//   column-gap: 20px;
//   grid-template-rows: minmax(0,1fr);
//   position: relative;
// `;

// const Links = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   grid-gap: 5%;
//   flex-wrap: wrap;
// `;

const StyledLink = styled.a`
  align-items: center;
  display: grid;
  grid-template-columns: minmax(0,.5fr) minmax(0,2fr);
  text-decoration: none;
  color: white;
  text-align: left;
`;

// const JijiImage = styled(Image)`
// `
// const JijiDiv = styled.div`
//   align-items: flex-end;
//   justify-content: center;
//   height: 50%;
//   position: absolute;
//   bottom: 0;
//   width: 80%;
//   display: flex;
//   img{
//     height: 100%;
//     width: 100%;
//     object-fit: contain;
//   }
// `

// const BobaDiv = styled.div`
//   img{
//     width: 100%;
//     object-fit: contain
//   }
// `

// const InnerContactContainer = styled.div`
//   display: grid;
//   width: 100%;
//   padding: 20px;
//   grid-template-columns: minmax(0,1fr) minmax(0,150px);
//   grid-template-rows: minmax(0,1fr);
// `

// const TextContainer = styled.div`
//   height:100%;
//   display: grid;
//   grid-template-columns: minmax(0,1fr);
//   grid-template-rows: repeat(3, minmax(0,1fr));

//   img {
//     object-fit: contain
//   }
// `

// footer Styles -----------------------------------------------------------
const BackgroundImage = styled.img`
    position: absolute;
    z-index: 1;
    width: 100%;
    bottom: 0;
`

const Footer = styled.div`
    position: relative;
    margin-top: 10%;
    margin-bottom: 0;
    padding: 10% 15% 5% 20%;
    width: 100%;
    display: grid;
    grid-template-columns: minmax(0,3fr)  minmax(0,1fr) ;
`;

const Contact = styled.div`
    display:flex;
    z-index: 2;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 30px;
`;

const Boba = styled.div`
z-index:2;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Links = styled.div`
    margin-top: 5%;
    display: grid;
    grid-template-columns: 1fr 1fr;

`;

const Email = styled.div`
    display: grid;
    grid-template-columns: 1fr 15fr;

`;

const LinkedIn = styled.div`
    display: grid;
    grid-template-columns: 1fr 15fr;

`;

