import React from "react";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Header from "../components/headers/Light.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import StyleSelector from "../components/forms/StyleSelector.js";

export default function CarStyle() {
  const styleButtons = [
    'Limited Hybrid Sport Utility 4D',
    'Competition Coupe 2D',
    'Estilo 3',
    'Estilo 4',
    'Estilo 5',
    'Estilo 6'
  ];

  return (
    <AnimationRevealPage>
      <Header />
      <StyleSelector title="Elige un estilo" buttons={styleButtons} />
      <Footer />
    </AnimationRevealPage>
  );
};