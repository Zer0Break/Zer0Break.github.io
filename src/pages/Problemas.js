import React from "react";
import tw from "twin.macro";//eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage";
import Header from "components/headers/light.js";
import MainFeature from 'components/misc/TwoColComplaints';
import Footer from "components/footers/FiveColumnWithInputForm.js";

        

export default () => {
      const MainimageCss = tw`rounded-4xl hidden 2xl:flex absolute -mr-24 w-144 -mt-32 object-cover object-left right-0 -z-10 `;
  const MainimageCssLogo = tw`rounded-4xl `;
  
  return (
    <AnimationRevealPage>
     
      <Header />

      <MainFeature 
              imageSrc="https://media.dealervenom.com/jellies/Toyota/RAV4/C431510_1G3_Side.png?auto=compress,format&w=640&h=480&fit=clamp"
              imageSrcLogo="https://www.freepnglogos.com/uploads/toyota-logo-png/toyota-logos-brands-10.png"
              imageCss={MainimageCss}
              imageCssLogo={MainimageCssLogo}
              imageDecoratorBlob={false}
              imageDecoratorBlobCss={tw`-translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />

      <Footer />
    </AnimationRevealPage>
  );
}