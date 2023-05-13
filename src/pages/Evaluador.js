import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "./../helpers/AnimationRevealPage";
import Header from "./../components/headers/Light.js";
import Image from "next/image";
import Buscador from './../components/misc/Searcher.js';
import Footer from "./../components/footers/FiveColumnWithInputForm.js";
import imagen from "./../images/auto-aprecio/autos/civictyper.svg?url";
import { SectionHeading, Subheading as SubheadingBase } from "./../components/misc/Headings.js";


const Column = tw.div`mt-16 flex flex-col items-center `;
const HeaderContent = tw.div``;
const Subheading = tw(SubheadingBase)`text-xl mb-4 text-center`;
const Heading = tw(SectionHeading)`w-full`;

export default ({

  subheading = "Conoce tú vehiculo",
  heading = "Honda Civic Type R"


}) => {

  return (
    <AnimationRevealPage disabled>
      <Header />
      <Column>
      <HeaderContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
      </HeaderContent>
      <Image src={imagen} alt="typeR" />
      </Column>
      <Buscador />
      <Footer />
    </AnimationRevealPage>
  );
};