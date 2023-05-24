import React, { useState } from "react";
import tw from "twin.macro";
import "tailwindcss/tailwind.css"; // Importa los estilos de Tailwind CSS


const Container = tw.div`flex justify-between items-center w-4/5 mx-auto mb-10 mt-4`;
const Title = tw.h2`text-2xl font-bold `;
const ButtonGroup = tw.div`flex flex-wrap justify-center`;
const Button = tw.button`text-lg bg-primary-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded mt-2 md:mt-0 md:mr-0 ml-2 
transition duration-300 ease-in-out hover:bg-blue-700 hover:text-white hover:shadow-md hover:scale-100 active:bg-blue-700 
active:text-black active:shadow-inner active:scale-90 `;
const ImageContainer = tw.div`flex justify-center w-full`;
const ImageGrid = tw.div`grid grid-cols-1 md:grid-cols-3 gap-10 w-4/5`;
const ImageItem = tw.div`flex flex-col items-center rounded-lg  p-0 w-full mb-16
transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl cursor-pointer`;
const BrandsContainer = tw.div`bg-gray-100 py-24 px-4 mt-12 mb-16 mx-auto rounded-xl`;
const BrandsTitle = tw.h2`w-4/5 mx-auto text-2xl font-bold`;
const BrandsSubtitle = tw.h3`w-4/5 mx-auto text-lg text-gray-600`;
const BrandGrid = tw.div`flex flex-col gap-4 my-10 md:grid md:grid-cols-2 sm:grid-cols-2 grid grid-cols-1`;
const BrandItem = tw.div`flex items-center gap-4 max-w-xs mx-auto md:w-full`;
const BrandImage = tw.img`w-24 h-24 object-contain`;
const BrandInfo = tw.div`flex flex-col`;

const TrendingArticles = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
  // Array de imágenes del apartado de "Mas buscados".
  const imageData = [
    {
      image: "https://cdn.carbuzz.com/gallery-images/1600/620000/400/620476.jpg",
      title: "Mercedes Benz 2021",
      content: "29,000 mi",
      model: "GLE Coupe AWD",
      price: "$123,000",
    },
    {
      image: "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my23/gle/coupe/byo-options/2023-AMG-GLE-COUPE-MP-028.jpg",
      title: "Mercedes Benz 2023",
      content: "1,000 mi",
      model: "AMG GLE Coupe 63",
      price: "$223,000",
    },
    {
      image: "https://i.gaw.to/content/photos/38/24/382445_2020_Audi_Q7.jpg",
      title: "Audi Q7 2020",
      content: "16,000 mi",
      model: "AWD 6-Cylinder Turbo",
      price: "$98,000",
    },
    {
      image: "https://www.marinoperformancemotors.com/imagetag/12612/4/l/Used-2015-Ferrari-458-Spider.jpg",
      title: "Ferrari Spider 2015",
      content: "5,000 mi",
      model: "AWD Turbo",
      price: "$320,000",
    },
    {
      image: "https://images.pistonheads.com/nimg/46812/blobid0.jpg",
      title: "Lamborghini Urus 2023",
      content: "3,000 mi",
      model: "AWD Turbo",
      price: "$450,000",
    },
  ];

  const totalImages = imageData.length;

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalImages - 1 ? 0 : prevIndex + 1
    );
  };

  const displayedImages = [
    imageData[currentIndex],
    imageData[(currentIndex + 1) % totalImages],
    imageData[(currentIndex + 2) % totalImages]
  ];

  // Array de imágenes del apartado de "Marcas mas buscadas".
  const brandData = [
    {
      image: "https://w7.pngwing.com/pngs/372/467/png-transparent-toyota-avensis-car-toyota-fj-cruiser-logo-toyota-emblem-text-trademark.png",
      title: "Honda",
      subtitle: "Desde $30,000",
    },
    {
      image: "https://w7.pngwing.com/pngs/372/467/png-transparent-toyota-avensis-car-toyota-fj-cruiser-logo-toyota-emblem-text-trademark.png",
      title: "Toyota",
      subtitle: "Desde $20,000",
    },
    {
      image: "https://w7.pngwing.com/pngs/372/467/png-transparent-toyota-avensis-car-toyota-fj-cruiser-logo-toyota-emblem-text-trademark.png",
      title: "Kia",
      subtitle: "Desde $10,000",
    },
    {
      image: "https://w7.pngwing.com/pngs/372/467/png-transparent-toyota-avensis-car-toyota-fj-cruiser-logo-toyota-emblem-text-trademark.png",
      title: "Hyundai",
      subtitle: "Desde $8,000",
    },
  ];

  return (
    <div>
      <Container>
        <Title>Los más buscados</Title>
        <ButtonGroup>
          <Button onClick={handleLeftClick}>←</Button>
          <Button onClick={handleRightClick}>→</Button>
        </ButtonGroup>
      </Container>
      <ImageContainer>
        <ImageGrid>
        {displayedImages.map((data, index) => (
            <ImageItem key={index}>
              <img src={data.image} alt={`Imagen ${index + 1}`} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              <div tw="bg-transparent w-full p-2 rounded-lg">
                <h3 tw="text-lg font-bold">{data.title}</h3>
                <p tw="text-gray-500">{data.content}</p>
                <p tw="text-gray-700 font-bold mt-3">{data.model}</p>
                <p tw="bg-blue-200 text-blue-800 mt-6 mb-3 pl-3 pr-3 py-2 inline-block rounded">{data.price}</p>
              </div>
            </ImageItem>
          ))}
        </ImageGrid>
      </ImageContainer>
      <BrandsContainer>
      <BrandsTitle>Marcas con los mejores precios</BrandsTitle>
      <BrandsSubtitle>Estas son las marcas con el mejor precio del mercado.</BrandsSubtitle>
      <BrandGrid>
      {brandData.map((data, index) => (
      <BrandItem key={index}>
        <BrandImage src={data.image} alt={`Logo Marca ${index + 1}`} />
        <BrandInfo>
          <h3 tw="text-lg font-bold">{data.title}</h3>
          <p tw="text-gray-500">{data.subtitle}</p>
        </BrandInfo>
      </BrandItem>
        ))}
      </BrandGrid>
    </BrandsContainer>
    </div>
  );
};

export default TrendingArticles;
