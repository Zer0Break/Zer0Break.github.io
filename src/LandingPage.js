import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import TabGrid from "components/cards/TabCardGrid.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";

import engineIconImageSrc from "images/engine.png";
import listIconImageSrc from "images/list.png";
import carpriceIconImageSrc from "images/car-price.png";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const D = tw.span`font-bold text-blue-500`;
  const C = tw.span`font-bold text-red-500`;
  //const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={<>En AutoAprecio sabemos de <HighlightedText>Precios.</HighlightedText></>}
        description="Herramienta para encontrar el precio actual de cualquier vehiculo en el mercado dominicano"//<Description>Y sobre todo, lo que es un precio justo..//De precios justos, los conocemos todos!.</Description>
        imageSrc="https://images.unsplash.com/photo-1622893288761-823ba60f17a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
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
        imageSrc={
          "https://images.unsplash.com/photo-1571699821723-7265429b0d35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        }
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      {/*<TabGrid
        heading={
          <>
            Checkout our <HighlightedText>menu.</HighlightedText>
          </>
        } 
      />*/}
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
        imageInsideDiv={false}
        imageSrc="https://images.unsplash.com/photo-1655590546445-5c4ab65e7644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80"
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      />
      {/*<Testimonial
        subheading=""
        heading={<>Customers <HighlightedText>Love Us.</HighlightedText></>}
      />
    
      <DownloadApp
        text={<>People around you are ordering delicious meals using the <HighlightedTextInverse>React_Aries App.</HighlightedTextInverse></>}
      />*/}
      <Footer />
    </AnimationRevealPage>
  );
}
