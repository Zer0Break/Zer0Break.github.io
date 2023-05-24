import React from "react";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import Header from "../components/headers/Light.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import ContactUsForm from "../components/forms/TwoColContactUsWithIllustrationFullForm.js";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default function Contacto () {
  return (
    <AnimationRevealPage>
      <Header />
      <ContactUsForm />
      
      <Footer />
    </AnimationRevealPage>
  );
};
