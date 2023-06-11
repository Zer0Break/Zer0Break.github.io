import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "./../helpers/AnimationRevealPage";
import Header from "./../components/headers/Light.js";
import Image from "next/image";
import Buscador from './../components/misc/Searcher.js';
import Footer from "./../components/footers/FiveColumnWithInputForm.js";
import imagen from "./../images/auto-aprecio/autos/carmoney.svg?url";
import { SectionHeading, Subheading as SubheadingBase } from "./../components/misc/Headings.js";
import styled from "styled-components";
import Trending from "./../components/cards/trending"

const Column = tw.div`mt-16 flex flex-col items-center `;
const HeaderContent = tw.div``;
const Subheading = tw(SubheadingBase)`text-xl mb-4 text-center`;
const Heading = tw(SectionHeading)`w-full`;
const Texto = styled.div`

p {
  ${tw`mb-6 mt-4 text-3xl font-bold text-center`}
}`;

export default function Evaluador ({

  subheading = "Conoce tú vehiculo",
  heading = "Encuentra tu mejor opción"


}) {

  return (
    <AnimationRevealPage  >
      <Header />
      <Column>
      <HeaderContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
      </HeaderContent>
      <Image src={imagen} alt="typeR" />
      <Texto><p>¿Que vehiculo buscas?</p></Texto>
      <Buscador tw="my-8 justify-center items-center" />
      </Column>
      <Trending />
      <Footer />
    </AnimationRevealPage>
  );
};