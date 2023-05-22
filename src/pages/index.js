import React from 'react'
import tw from 'twin.macro'
import AnimationRevealPage from "./../helpers/AnimationRevealPage.js";
import Hero from "./../components/hero/TwoColumnWithVideo.js";
import Features from "./../components/features/ThreeColSimple.js";
import MainFeature from "./../components/features/TwoColWithButton.js";
import MainFeature2 from "./../components/features/TwoColSingleFeatureWithStats2.js";
import Footer from "./../components/footers/FiveColumnWithInputForm.js";

import HeroImage from "./../images/auto-aprecio/autos/prado.jpg"; 
import MainFeatureImage from "./../images/auto-aprecio/autos/lexus.jpg"; 
import MainFeature2Image from "./../images/auto-aprecio/autos/bm.jpg"; 
import engineIconImageSrc from "./../images/engine.png";
import listIconImageSrc from "./../images/list.png";
import carpriceIconImageSrc from "./../images/car-price.png";

const Subheading = tw.span`tracking-wider text-sm font-medium`;
const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
const Description = tw.span`inline-block mt-8`;
const D = tw.span`font-bold text-blue-500`;
const C = tw.span`font-bold text-red-500`;
const imageCss = tw`rounded-4xl`;

export default function Index() {
  return (
    <AnimationRevealPage>
      <Hero
        heading={<>En AutoPanas sabemos de <HighlightedText>Precios.</HighlightedText></>}
        description="Herramienta para encontrar el precio actual de cualquier vehiculo en el mercado dominicano"
        imageSrc={HeroImage}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Precios Nuevos/Usados"
        watchVideoButtonText="Tutorial"
      />
      <MainFeature
        subheading={<Subheading>Establecidos desde 2019 </Subheading>}
        heading={
          <>
            Realiza una compra
            <wbr /> <HighlightedText>inteligente.</HighlightedText>
          </>
        }
        description={
          <Description>
            Proporcionamos información precisa y confiable sobre el valor actual de cualquier tipo de vehículo en el mercado de la <D>República</D><C> Dominicana</C>, 
            lo que puede ayudarte a tomar una decisión reflexiva y evitar pagar de más..
            <br />
            <br />
            Somos una gu&iacute;a de precios online completamente gratuita,  para que cualquier persona pueda 
            acceder a información confiable sin tener que preocuparse por costos adicionales. 
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Comenzar Ahora"
        imageSrc={MainFeatureImage}
        imageCss={imageCss}
        imageRounded={true}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-20 md:h-32 opacity-25`}
      />
      
      <Features
        heading={
          <>
            Las Mejores <HighlightedText>Herramientas.</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: carpriceIconImageSrc,
            title: "Busca tu Precio",
            description: "La inteligencia artificial más avanzada para encontrar el precio exacto de tu vehículo",
            url: "https://google.com"
          },
          {
            imageSrc: engineIconImageSrc,
            title: "Problemas con tu Vehiculo?",
            description: "Proximamente... Descubre los problemas más comunes de cada modelo de vehículo",
            url: "https://timerse.com"
          },
          {
            imageSrc: listIconImageSrc,
            title: "Historial de vehiculo",
            description: "Quiere saber si el vehiculo que esta comprando tiene un historial de accidentes o robo? Gratis? Lo tenemos!..",
            url: "https://reddit.com"
          }
        ]}

        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
      <MainFeature2
        subheading={<Subheading>Innovaci&oacute;n es nuestra marca.</Subheading>}
        heading={<>Por qu&eacute; <HighlightedText>Nosotros ?</HighlightedText></>}
        statistics={[
          {
            key: "Estimaciones",
            value: "4000+",
          },
          {
            key: "Clientes",
            value: "20+"
          },
          {
            key: "Actualización",
            value: "24/7"
          }
        ]}
        primaryButtonText="Contáctanos"
        primaryButtonUrl="https://order.now.com"
        imageSrc={MainFeature2Image}
        imageCss={imageCss}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      />
      <Footer />
    </AnimationRevealPage>
  );
}