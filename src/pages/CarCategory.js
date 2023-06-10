import React from "react";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Header from "../components/headers/Light.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import Category from "../components/forms/StyleSelector.js";

export default function CarCategory() {
  const buttonImages = [
    // Aquí puedes proporcionar las URL de las imágenes de los botones
    // Ejemplo:
    'https://w7.pngwing.com/pngs/213/184/png-transparent-chevrolet-camaro-personal-luxury-car-coupe-2014-chevrolet-camaro-car-performance-car-vehicle.png',
    'https://w7.pngwing.com/pngs/254/636/png-transparent-dodge-viper-performance-car-automotive-design-car-convertible-computer-car.png',
  ];

  const buttons = [
    // Aquí puedes proporcionar los nombres de los botones
    // Ejemplo:
    'Coupe',
    'Convertible',
  ];

  return (
    <AnimationRevealPage>
      <Header />
      <Category
        title="Elige una categoria"
        buttonImages={buttonImages}
        buttons={buttons}
        isCarCategoryPage={true} // Pasa la prop "isCarCategoryPage" como `true` en la página CarCategory
      />
      <Footer />
    </AnimationRevealPage>
  );
};