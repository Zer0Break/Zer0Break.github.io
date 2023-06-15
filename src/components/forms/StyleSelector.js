import React, { useState } from 'react';
import tw from 'twin.macro';

const MainContainer = tw.div`flex flex-col justify-start h-full rounded-lg mt-6 mb-16 max-w-screen-xl mx-auto`;
const Container = tw.div`p-8 rounded-lg w-full md:w-2/3 bg-gray-100 flex flex-col justify-start shadow-xl`;
const Title = tw.h2`text-4xl font-bold mb-6 md:max-w-screen-xl`;
const Divider = tw.div`border-b-2 border-primary-500 w-4/6 mb-6 -mt-6`;
const ButtonGroup = tw.div`flex flex-col flex-wrap break-words gap-4 mb-10 md:grid md:grid-cols-2 md:gap-4 md:flex md:flex-wrap`;
const Button = tw.button`relative bg-gray-200 border hover:border-gray-500 transition duration-100 ease-in-out transform hover:scale-105 text-black py-3 px-3 rounded-lg text-sm text-left`;
const PriceText = tw.span`text-xs text-gray-700 ml-2 self-end`;
const ImageContainer = tw.div`flex items-center justify-center w-32 sm:w-64 md:w-64 h-24 mb-1 mt-1`;
const Image = tw.img`w-full h-full object-contain `;

const NextButton = tw.button`bg-primary-500 hover:bg-blue-600 hover:shadow-xl text-white font-semibold py-3 px-5 rounded-lg self-end transition duration-300 ease-in-out transform hover:scale-105`;

const TitleContainer = tw.div`flex flex-col items-start mt-8 max-w-screen-xl mx-auto `;
const MainTitle = tw.h2`text-xl font-bold`;
const SubTitleContainer = tw.div`flex flex-col md:flex-row items-center mt-2`;
const SubTitle = tw.h3`text-2xl font-bold`;
const SelectedButtonText = tw.p`text-lg ml-2 flex-wrap break-words`;

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

const StyleSelector = ({ title, buttonImages, buttons, isCarCategoryPage }) => {
  const [selectedStyle, setSelectedStyle] = useState('');
  const [selectedButtonText, setSelectedButtonText] = useState('');
  const [styles, setStyles] = useState(buttons.map((button) => ({ name: button, isSelected: false })));
  const breadcrumbItems = ['Home', 'Ford', 'Corolita', '2012', 'Styles'];
  const [isNextButtonClicked, setIsNextButtonClicked] = useState(false);

  const handleStyleClick = (style) => {
    const updatedStyles = styles.map((s) => ({
      ...s,
      isSelected: s.name === style
    }));
    setStyles(updatedStyles);
    setSelectedStyle(style);

    // Obtener el texto del botón seleccionado, en pocas palabras el estilo
    setSelectedButtonText(style);
  };

  const renderPriceText = (style) => {
    if (style.name === 'Limited Hybrid Sport Utility 4D') {
      return <PriceText>(Precio más bajo)</PriceText>;
    }
    if (style.name === 'Competition Coupe 2D') {
      return <PriceText>(Precio más alto)</PriceText>;
    }
    return null;
  };

  const handleNextClick = () => {
    const updatedBreadcrumbItems = [...breadcrumbItems];
    updatedBreadcrumbItems[4] = 'Nueva Opción';
    setBreadcrumbItems(updatedBreadcrumbItems);

    // Obtener el texto del botón seleccionado antes de cambiar el estado
    const selectedButton = styles.find((s) => s.isSelected);
    setSelectedButtonText(selectedButton ? selectedButton.name : '');

    // Marcar que se ha hecho clic en el botón "Siguiente"
    setIsNextButtonClicked(true);
  };

  const isNextButtonDisabled = selectedStyle === '';

  return (
    <React.Fragment>
      <Breadcrumb items={breadcrumbItems} />
      <TitleContainer>
        <MainTitle>Precio de vehículos usados</MainTitle>
        <SubTitleContainer>
          <SubTitle>Honda 2000</SubTitle>
          {isNextButtonClicked && <SelectedButtonText>{selectedButtonText}</SelectedButtonText>}
        </SubTitleContainer>
      </TitleContainer>
      <MainContainer>
        <Container>
          <Title>{title}</Title>
          <Divider />
          <ButtonGroup>
            {styles.map((style, index) => (
              <Button
                key={style.name}
                onClick={() => handleStyleClick(style.name)}
                css={[
                  style.isSelected && tw`border-primary-500`,
                  style.isSelected && tw`bg-blue-200`,
                  isCarCategoryPage && tw`flex flex-col items-center`, // Aplica centrado solo en CarCategory
                ]}
              >
                {style.name}
                {renderPriceText(style)}
                {buttonImages && buttonImages[index] && (
                  <ImageContainer> 
                    <Image src={buttonImages[index]} alt={`Imagen ${index}`} />
                  </ImageContainer>
                )}
              </Button>
            ))}
          </ButtonGroup>
          <NextButton
            onClick={handleNextClick}
            disabled={isNextButtonDisabled}
            style={{
              opacity: isNextButtonDisabled ? '0.5' : '1',
              cursor: isNextButtonDisabled ? 'not-allowed' : 'pointer',
              ...(isNextButtonDisabled ? { pointerEvents: 'none' } : {})
            }}
          >
            Siguiente
          </NextButton>
        </Container>
      </MainContainer>
    </React.Fragment>
  );
};

export default StyleSelector;
