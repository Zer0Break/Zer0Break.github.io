import React, { useState } from 'react';
import tw from 'twin.macro';
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Header from "../components/headers/Light.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import styled from "styled-components";

const MainContainer = tw.div`flex flex-col justify-start h-full rounded-lg mt-6 mb-16 max-w-screen-xl mx-auto`;
const Container = tw.div`p-8 rounded-lg w-full md:w-2/3 bg-gray-100 flex flex-col justify-start shadow-xl`;
const Title = tw.h2`text-4xl font-bold mb-6 md:max-w-screen-xl`;
const Divider = tw.div`border-b-2 border-primary-500 w-4/6 mb-6 -mt-6`;
const ImgContainer = tw.div`flex ml-auto w-96`;
const Image = tw.img`w-full h-full object-contain `;
const ImgButtonContainer = tw.div`flex flex-col md:flex-row gap-4`;
const WrapTextButton = tw.div`flex flex-col md:flex-row gap-4 flex justify-center items-center`;

const NextButton = styled.button`
  ${tw`bg-primary-500 hover:bg-blue-600 hover:shadow-xl text-white font-semibold py-3 px-5 rounded-lg  transition duration-300 ease-in-out transform hover:scale-105 mt-5 mb-5 mx-auto w-1/3`}
  @media (max-width: 768px) {
    ${tw`w-full`}
`;

const WrapTextNeed = styled.div`
  ${tw`justify-start items-start w-2/4`}
  @media (max-width: 768px) {
    ${tw`w-full`}
`;

const BreadcrumbContainer = tw.div`
  flex items-center text-gray-500 mb-4 
  flex-wrap break-words max-w-screen-xl mx-auto
`;
const BreadcrumbItem = tw.span`mx-1`;

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

const TitleContainer = tw.div`flex flex-col items-start mt-8 max-w-screen-xl mx-auto `;
const MainTitle = tw.h2`text-xl font-bold`;
const SubTitleContainer = tw.div`flex flex-col md:flex-row items-center mt-2`;
const SubTitle = tw.h3`text-2xl font-bold`;
const SelectedButtonText = tw.p`text-lg ml-2 flex-wrap break-words`;
const NeedText = tw.p`text-sm text-gray-600 `;
const AdditionalText = tw.p`text-sm mt-4 mb-2 font-semibold`;

const ButtonGroup = tw.div`flex flex-col gap-4 my-10 md:items-start w-full md:w-2/4`;

const Button = styled.button`
  ${tw`relative border-b-2 hover:border-primary-500 transition duration-100 ease-in-out transform hover:scale-105 text-black py-3 px-3 rounded-lg text-sm font-semibold text-left w-3/4`}
  @media (max-width: 768px) {
    ${tw`w-full`}
`;

const pricetype = ({ selectedStyle }) => {
  const breadcrumbItems = ['Home', 'Ford', 'Corolita', '2012', 'Styles'];

  const handleNextClick = () => {
    // Lógica para el manejo del clic en el botón "Siguiente"
  };

  const isNextButtonDisabled = selectedStyle === '';

  const imageUrl = 'https://cdni.iconscout.com/illustration/premium/thumb/showroom-manager-giving-new-car-key-to-the-buyer-6921002-5662133.png'; // URL de la imagen que deseas mostrar

  return (
    <AnimationRevealPage>
      <Header />
      <React.Fragment>
        <Breadcrumb items={breadcrumbItems} />
        <TitleContainer>
          <MainTitle>Precio de vehículos usados</MainTitle>
          <SubTitleContainer>
            <SubTitle>Honda 2000</SubTitle>
            {selectedStyle && <SelectedButtonText>{selectedStyle}</SelectedButtonText>}
          </SubTitleContainer>
        </TitleContainer>
        <MainContainer>
          <Container>
            <Title>Elige un tipo de precio</Title>
            <Divider />
            <NeedText>¿En qué estás más interesado?</NeedText>
            <ImgButtonContainer>
              <ButtonGroup>
                <Button>Comprar a un dealer</Button>
                <Button>Comprar a un dealer certificado</Button>
                <Button>Comprar en privado</Button>
                {/* Agrega más botones si es necesario */}
              </ButtonGroup>
              <ImgContainer css={tw`w-full md:w-2/4`}>
                <Image src={imageUrl} alt="Imagen" />
              </ImgContainer>
            </ImgButtonContainer>
            <WrapTextButton>
              <WrapTextNeed>
                <AdditionalText>Basado en buenas condiciones o mejor</AdditionalText>
                <NeedText>Tiene algunos defectos estéticos reparables y está libre de problemas mecánicos importantes.</NeedText>
              </WrapTextNeed>
              <NextButton onClick={handleNextClick} disabled={isNextButtonDisabled}>
                Precio usado
              </NextButton>
            </WrapTextButton>
          </Container>
        </MainContainer>
      </React.Fragment>
      <Footer />
    </AnimationRevealPage>
  );
};

export default pricetype;