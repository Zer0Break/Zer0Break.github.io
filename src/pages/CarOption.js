import React, { useState } from "react";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Header from "../components/headers/Light.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import tw from "twin.macro";
import styled from "styled-components";

// Estilos CSS utilizando la librería `tw` y `styled-components`
const MainContainer = tw.div`flex flex-col justify-start h-full rounded-lg mt-6 mb-16 max-w-screen-xl mx-auto`;
const Container = tw.div`p-8 rounded-lg w-full md:w-2/3 bg-gray-100 flex flex-col justify-start shadow-xl`;
const Title = tw.h2`text-4xl font-bold mb-6 md:max-w-screen-xl`;
const Divider = tw.div`border-b-2 border-primary-500 w-4/6 mb-6 -mt-6`;
const TextContainer = tw.div`flex items-start mb-10`;
const Text = tw.p`text-sm`;
const ButtonContainerWp = tw.div`flex justify-end mb-2`;
const WpOptionButton = tw.button`hover:shadow-sm text-blue-400 font-bold py-2 px-4 rounded-lg self-end transition duration-300 ease-in-out transform hover:scale-105`;
const ButtonGroup = tw.div`flex flex-col break-words gap-1 mb-6`;
const NextButton = tw.button`bg-primary-500 hover:bg-blue-600 hover:shadow-xl text-white font-semibold py-3 px-5 rounded-lg self-end transition duration-300 ease-in-out transform hover:scale-105`;
const TitleContainer = tw.div`flex flex-col items-start mt-8 max-w-screen-xl mx-auto `;
const MainTitle = tw.h2`text-xl font-bold`;
const SubTitleContainer = tw.div`flex flex-col md:flex-row items-center mt-2`;
const SubTitle = tw.h3`text-2xl font-bold`;
const SelectedButtonText = tw.p`text-lg ml-2 flex-wrap break-words`;
const SectionTitle = tw.h2`text-sm font-bold px-4 mt-4`;
const SectionText = tw.p`text-sm text-black px-4 `;
const SectionContainer = tw.div`rounded-lg pb-6 -mt-4`;
const BreadcrumbContainer = tw.div`
  flex items-center text-gray-500 mb-4 
  flex-wrap break-words max-w-screen-xl mx-auto
`;
const BreadcrumbItem = tw.span`mx-1`;
const PrincipalOptionContainer = styled.div`
  ${tw`mb-4 bg-gray-200 rounded-lg`}
`;
const PrincipalOptionButton = styled.button`
  ${tw`relative bg-gray-200 border hover:border-gray-500 transition duration-100 ease-in-out transform text-black py-3 px-3 rounded-lg text-lg text-left font-semibold w-full`}
`;
const SubOptionContainer = styled.div`
  ${tw`grid grid-cols-2 gap-4 mb-8 px-4`}
  @media (max-width: 460px) {
    grid-template-columns: 1fr;
  }
`;
const SubOptionTitle = tw.h4`text-sm font-bold px-4 mt-4`;
const SubOptionButton = styled.button`
  ${tw`relative flex items-center bg-gray-200 border border-gray-400 hover:border-gray-500 transition duration-100 ease-in-out transform hover:scale-105 text-black py-2 px-2 rounded-lg text-sm text-left`}
`;
const OptionImage = styled.img`
  ${tw`h-12 w-16 object-cover rounded-lg mr-2`}
  @media (max-width: 330px) {
    ${tw`h-8 w-10`}
`;

// Componente para el Breadcrumb
const Breadcrumb = ({ items }) => {
  const breadcrumbItems = items.slice(0, 5); // Mostrar solo los primeros 5 elementos

  return (
    <BreadcrumbContainer>
      {breadcrumbItems.map((item, index) => (
        <React.Fragment key={index}>
          {index !== 0 && <span tw="mx-1">{'/'}</span>}
          <BreadcrumbItem>{item}</BreadcrumbItem>
        </React.Fragment>
      ))}
    </BreadcrumbContainer>
  );
};

// Componente para la opción principal
const PrincipalOption = ({ title, subTitle, subOptions, images, sections }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleOptionClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <PrincipalOptionContainer>
      <PrincipalOptionButton onClick={handleOptionClick}>{title}</PrincipalOptionButton>
      {isExpanded && (
        <>
          {subTitle && <SubOptionTitle>{subTitle}</SubOptionTitle>}
          <SubOptionContainer>
            {subOptions.map((subOption, index) => (
              <SubOptionButton key={subOption}>
                {images && images[index] && <OptionImage src={images[index]} alt={subOption} />}
                {subOption}
              </SubOptionButton>
            ))}
          </SubOptionContainer>
          {sections && sections.length > 0 && (
            <SectionContainer>
              {sections.map((section, index) => (
                <React.Fragment key={index}>
                  <SectionTitle>{section.sectionTitle}</SectionTitle>
                  <SectionText>{section.sectionText}</SectionText>
                </React.Fragment>
              ))}
            </SectionContainer>
          )}
        </>
      )}
    </PrincipalOptionContainer>
  );
};

// Componente principal
const CarOption = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [options, setOptions] = useState([
    {
      title: "Color",
      subTitle: "Color exterior",
      subOptions: ["Blanco", "Azul", "Negro", "Verde", "Marrón", "Rosado", "Rojo", "Rojo vino", "Gris", "Morado", "Beige", "Naranja" ],
      images: [
        "https://fondosmil.com/fondo/17538.jpg",
        "https://fondosmil.com/fondo/9917.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Color_negro.jpg/1200px-Color_negro.jpg",
        "https://www.arpaindustriale.com/sites/default/files/decors_fiches_default/new/0549_r.jpg",
        "https://dannyvelour.files.wordpress.com/2016/12/marron-bote-pintura-en-spray-aerosol-color-marron.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Kegich.svg/341px-Kegich.svg.png",
        "https://bangbranding.com/blog/wp-content/uploads/2016/09/700x511_SliderInterior.jpg",
        "https://htmlcolorcodes.com/assets/images/colors/burgundy-color-solid-background-1920x1080.png",
        "https://fondosmil.com/fondo/9853.jpg",
        "https://www.fiestasholi.com/wp-content/uploads/2020/04/morado-fiestas-holi.jpg",
        "https://img.freepik.com/foto-gratis/espacio-diseno-papel-textura-fondo_53876-42776.jpg?w=2000",
        "https://e0.pxfuel.com/wallpapers/801/993/desktop-wallpaper-plain-orange-solid-orange.jpg",
      ],
    },
    {
      title: "Tren Motriz",
      subOptions: [],
      sections: [
        {
          sectionTitle: "Motor",
          sectionText: "V8, HEMI, Supercharged, 6.2 Liter",
        },
        {
          sectionTitle: "Transmisión",
          sectionText: "Automatic, 8-Spd",
        },
        {
          sectionTitle: "Tracción",
          sectionText: "FWD",
        },
      ],
    },
    {
      title: "Paquetes",
      subTitle: "Elija un paquete",
      subOptions: ["Paquete A", "Paquete B", "Paquete C"],
    },
    {
      title: "Opciones",
      subTitle: "Elija una opción",
      subOptions: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"],
    },
  ]);
  const [isNextButtonClicked, setIsNextButtonClicked] = useState(false);
  const breadcrumbItems = ["Home", "Ford", "Corolita", "2012", "Styles"];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextClick = () => {
    const updatedBreadcrumbItems = [...breadcrumbItems];
    updatedBreadcrumbItems[4] = "New Option";
    setBreadcrumbItems(updatedBreadcrumbItems);

    setIsNextButtonClicked(true);
  };

  const isNextButtonDisabled = selectedOption === "";

  return (
    <AnimationRevealPage>
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      <TitleContainer>
        <MainTitle>Precio de vehículos usados</MainTitle>
        <SubTitleContainer>
          <SubTitle>Honda 2000</SubTitle>
          {isNextButtonClicked && <SelectedButtonText>{selectedOption}</SelectedButtonText>}
        </SubTitleContainer>
      </TitleContainer>
      <MainContainer>
        <Container>
          <Title>Elija opciones</Title>
          <Divider />
          <TextContainer>
            <Text>
              El equipo estándar ha sido preseleccionado a continuación. Los precios sin especificar opciones pueden afectar la precisión del valor de un vehículo.
            </Text>
          </TextContainer>
          <ButtonContainerWp>
            <WpOptionButton>Precio sin opciones</WpOptionButton>
          </ButtonContainerWp>
          <ButtonGroup>
            {options.map((option) => (
              <PrincipalOption
                key={option.title}
                title={option.title}
                subTitle={option.subTitle}
                subOptions={option.subOptions}
                images={option.images}
                sections={option.sections}
              />
            ))}
          </ButtonGroup>
          <NextButton
            onClick={handleNextClick}
            disabled={isNextButtonDisabled}
            style={{
              opacity: isNextButtonDisabled ? "0.5" : "1",
              cursor: isNextButtonDisabled ? "not-allowed" : "pointer",
              ...(isNextButtonDisabled ? { pointerEvents: "none" } : {}),
            }}
          >
            Siguiente
          </NextButton>
          {selectedOption === "Tren Motriz" && (
            <SectionContainer>
              {options.find((option) => option.title === "Tren Motriz").sections.map((section, index) => (
                <React.Fragment key={index}>
                  <SectionTitle>{section.sectionTitle}</SectionTitle>
                  <SectionText>{section.sectionText}</SectionText>
                </React.Fragment>
              ))}
            </SectionContainer>
          )}
        </Container>
      </MainContainer>
      <Footer />
    </AnimationRevealPage>
  );
};

export default CarOption;
