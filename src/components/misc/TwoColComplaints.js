import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "./Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "./Buttons.js";
import TeamIllustrationSrc from "./../../images/team-illustration-2.svg";
import SvgDotPattern  from "./../../images/dot-pattern.svg"
import { Divider } from 'primereact/divider';
import DesignIllustration from "./../../images/sstest2.png";


const Container = tw.div`relative`;
// const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl py-0 md:py-0`;
const TwoColumn = tw.div`grid max-w-screen-xl my-12 grid-cols-12 gap-2 `;

const Column = tw.div`w-full max-w-screen-lg`;

const LeftColumn = tw(Column)`relative col-span-2`;
const LogoContainer = tw.div`relative inline-block items-center justify-center`;

const MidColumn = tw(Column)`relative col-start-4 col-span-6 justify-center items-center mt-12`;
const ImageColumn = tw.div`absolute -top-1/2 object-cover -z-10 right-0 bg-cover`;
// const TextColumn = styled(Column)(props => [
//   tw`md:w-2/12 mt-16 relative lg:mr-16`,
//   props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
// ]);

const SelectRow = tw.div`grid grid-cols-1 items-center justify-center md:grid-cols-1 mt-4 lg:grid-cols-12 gap-2 px-4 sm:px-16 mx-auto relative z-10 flex-col`;

const Image = styled.img(props => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

const DecoratorBlob = styled(SvgDotPattern)(props => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`,
])

const TextContent = tw.div`lg:py-8 text-center md:text-left`;
const TextList = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`inline-block md:inline-block text-left text-4xl leading-tight`;
const Heading = tw(
  SectionHeading
)`mt-4  text-secondary-700 text-3xl sm:text-4xl lg:text-5xl text-left md:leading-tight`;
const Description = tw.p`mt-4 md:text-left text-sm md:text-base inline-block lg:text-lg font-medium leading-relaxed`;

const PrimaryButton = styled(PrimaryButtonBase)(props => [
  tw`mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0`,
  props.buttonRounded && tw`rounded-full`
]);


export default ({
  heading = "TOYOTA",
  subheading = (
    <>
      Modelos:
    </>
  ),
  description = (
    <>
      AutoPana posee <span tw="text-blue-700 font-bold">68,573 quejas</span> de esta marca en general. <br></br> Los peores modelos son:  <span tw="text-blue-600 ">2019 RAV4, 2007 Camry, 2008 RAV4, 2009 Camry, and the 2007 RAV4</span>.
    </>
  ),
  imgDesignIllustration = DesignIllustration,
  primaryButtonText = "Learn More",
  primaryButtonUrl = "https://timerse.com",
  imageSrc = TeamIllustrationSrc,
  imageSrcLogo = TeamIllustrationSrc,
  buttonRounded = true,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  imageCss = null,
  imageCssLogo = null,
  imageDecoratorBlob = false,
  imageDecoratorBlobCss = null,
  textOnLeft = true
}) => {

  return (
    <Container>
      <TwoColumn>
        <LeftColumn >
          <LogoContainer>
            <Image css={imageCssLogo} src={imageSrcLogo} imageBorder={imageBorder} imageShadow={imageShadow} imageRounded={imageRounded} />
            {imageDecoratorBlob && <DecoratorBlob css={imageDecoratorBlobCss} />}
          </LogoContainer>

          <Heading>{heading}</Heading>
        </LeftColumn>
        <MidColumn>
        <Description>{description}</Description>
        <Divider />

        <Subheading>{subheading}</Subheading>
        {/* <TextList> 
          {/* <ul>
            <li>2019 RAV4</li>
            <li>2007 Camryyyyyyyyyyyyyy</li>
            <li>2008 RAV4</li>
            </ul> 
            
        </TextList> */}
        {/* <img src={imgDesignIllustration} alt="Toyota Logo" width="100" height="100"></img> */}
        </MidColumn>
      

        {/* <TextContent>
            <Subheading>{subheading}</Subheading>
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            <PrimaryButton buttonRounded={buttonRounded} as="a" href={primaryButtonUrl}>
            {primaryButtonText}
            </PrimaryButton>
          </TextContent> */}
          <Image css={imageCss} src={imageSrc} imageBorder={imageBorder} imageShadow={imageShadow} imageRounded={imageRounded} />
      </TwoColumn>
          
          <Image src={imgDesignIllustration} tw="w-3/5 flex ml-64 -mt-16 mb-16" />
      
    </Container>
  );
};
