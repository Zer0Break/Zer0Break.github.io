import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "./../helpers/AnimationRevealPage.js";
import Header from "./../components/headers/Light.js";
import Footer from "./../components/footers/FiveColumnWithInputForm.js";
import MainFeature1 from "./../components/features/TwoColWithButton.js";
import Features from "./../components/features/ThreeColSimple.js";
import hudCar from "./../images/utility/hud.jpg";
import RepairCar from "./../images/utility/carrepair.jpeg";
import SupportIconImage from "./../images/support-icon.svg?url";
import ShieldIconImage from "./../images/shield-icon.svg?url";
import CustomerLoveIconImage from "./../images/simple-icon.svg?url";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading>Sobre AutoPanas</Subheading>}
        heading="Descubre la mejor experiencia en nuestra aplicación web: Conócenos"
        description="Somos un equipo comprometido en ofrecer la mejor experiencia en nuestra aplicación web, enfocados en la simplicidad y facilidad de uso para nuestros usuarios. Siempre estamos trabajando en mejorar y añadir nuevas características para mantenernos a la vanguardia de la tecnología. Nuestro enfoque está en la simplicidad y facilidad de uso, creando una interfaz amigable e intuitiva que permita a nuestros usuarios navegar sin problemas."
        buttonRounded={false}
        primaryButtonText="See Portfolio"
        imageSrc={RepairCar}
      />
      <MainFeature1
        subheading={<Subheading>Nuestra visión</Subheading>}
        heading="Mirando hacia el futuro: Nuestra visión de innovación tecnológica."
        description="Nuestra visión es ser líderes en el servicio de datos a nivel nacional, a través de un servicio excepcional al cliente. Nos enfocamos en mantenernos a la vanguardia de las últimas tendencias tecnológicas para ofrecer siempre lo mejor a nuestros clientes."
        buttonRounded={false}
        primaryButtonText="Contactanos"
        imageSrc={hudCar}
        textOnLeft={false}
      />
      <Features
        subheading={<Subheading>Nuestros valores</Subheading>}
        heading="Seguimos esto..."
        description="La satisfacción del cliente es nuestra máxima prioridad, y trabajamos arduamente para brindar un servicio excepcional en todo momento. Además, valoramos la innovación y el compromiso con la excelencia, siempre buscando formas de mejorar y crecer como empresa."
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "Soporte 24/7",
            description: "Estamos disponibles las 24 horas del día para brindar un excelente servicio a nuestros usuarios, en cualquier momento y en cualquier lugar"
          },
          {
            imageSrc: ShieldIconImage,
            title: "Equipo sólido",
            description: "Trabajamos juntos para ofrecer lo mejor, lo que nos permite desarrollar nuestras habilidades para alcanzar nuestros objetivos"
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Satisfacción del cliente",
            description: "Nos esforzamos por superar las expectativas en todo momento, creemos que la satisfacción del cliente es la clave de nuestro éxito"
          },
        ]}
        linkText=""
      />

      <Footer />
    </AnimationRevealPage>
  );
};