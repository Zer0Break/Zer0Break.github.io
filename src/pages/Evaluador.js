import React from "react";
import tw from "twin.macro";//eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage";
import Header from "components/headers/light.js";
import Buscador from 'components/misc/Searcher.js';
import Footer from "components/footers/FiveColumnWithInputForm.js";

export default () => {
  return (
    <AnimationRevealPage disabled>
     
      <Header />


      <Buscador />
    
      <Footer />
    </AnimationRevealPage>
  );
}