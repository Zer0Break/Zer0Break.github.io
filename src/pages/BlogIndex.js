import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import AnimationRevealPage from "./../helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "./../components/misc/Layouts";
import Header from "./../components/headers/Light.js";
import Footer from "./../components/footers/FiveColumnWithInputForm.js";
import { SectionHeading } from "./../components/misc/Headings";
import { PrimaryButton } from "./../components/misc/Buttons";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900`;
const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;
const PostContainer = styled.div`
  ${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8`}
  ${props =>
    props.featured &&
    css`
      ${tw`w-full!`}
      ${Post} {
        ${tw`sm:flex-row! h-full sm:pr-4`}
      }
      ${Image} {
        ${tw`sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg`}
      }
      ${Info} {
        ${tw`sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0`}
      }
      ${Description} {
        ${tw`text-sm mt-3 leading-loose text-gray-600 font-medium`}
      }
    `}
`;
const Post = tw.div`cursor-pointer flex flex-col bg-gray-100 rounded-lg`;
const Image = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-64 w-full bg-cover bg-center rounded-t-lg`}
`;
const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none`;
const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content-center after:block after:border-b-2 after:border-primary-500 after:w-8`;
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300`;
const Description = tw.div``;

const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;

export default function Blog({
  headingText = "Novedades",
  posts = [
    {
      imageSrc:
        "https://www.mbusa.com/content/dam/mb-nafta/us/eq/design/eqs580x4/interior/hotspots/MY23-EQS-SUV-TP-Hyperscreen-XL.jpg",
      category: "AUTOMOVILISMO",
      date: "Mayo 03, 2023",
      title: "Mercedes-Benz busca superar a Tesla en la carrera de autos eléctricos",
      description:
        "Mercedes-Benz quiere dejar atrás a Tesla en la carrera por los vehículos eléctricos eficientes y para ello incorporó su equipo de Fórmula 1 al proceso de ingeniería. ¿Cómo lo hará?.",
      url: "https://timerse.com",
      featured: true
    },
    getPlaceholderPost(),
    getPlaceholderPost2(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost()
  ]
}) {
  const [visible, setVisible] = useState(7);
  const onLoadMoreClick = () => {
    setVisible(v => v + 6);
  };
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Posts>
            {posts.slice(0, visible).map((post, index) => (          
              <PostContainer key={index} featured={post.featured}>
                <Post className="group" as="a" href={post.url}>
                  <Image imageSrc={post.imageSrc} />
                  <Info>
                    <Category>{post.category}</Category>
                    <CreationDate>{post.date}</CreationDate>
                    <Title>{post.title}</Title>
                    {post.featured && post.description && <Description>{post.description}</Description>}
                  </Info>
                </Post>
              </PostContainer>
            ))}
          </Posts>       
          {visible < posts.length && (
            <ButtonContainer>
              <LoadMoreButton onClick={onLoadMoreClick}>Load More</LoadMoreButton>
            </ButtonContainer>
          )}
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};
   
const getPlaceholderPost = () => ({
  imageSrc:
    "https://www.latercera.com/resizer/KcmGhBhQTIzJzUottUTMrrtCy40=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/R3U4CKW3SRHQFKXQI7VU3JYUDM.png",
  category: "AUTOMOVILISMO",
  date: "Mayo 03, 2023",
  title: "Lo que debes saber del Lamborghini Revuelto que marca el fin de una era",
  description:
    "La firma italiana Lamborghini presentó su más reciente modelo Revuelto, un bólido que ha combinado la fuerza de tres motores eléctricos que promete superar los 1.000 caballos de fuerza de potencia.",
  url: "https://reddit.com"
});

const getPlaceholderPost2 = () => ({
  imageSrc:
    "https://cdn.motor1.com/images/mgl/ZnKq0z/s3/cn023_003rm.jpg",
  category: "AUTOMOVILISMO",
  date: "Mayo 03, 2023",
  title: "El Auto Show alista sus motores: la famosa feria de coches comienza en Nueva York",
  description:
    "En Nueva York, comienza la feria más importante del automóvil en los Estados Unidos. El evento será desde este viernes hasta el domingo 16 de abril en el Javits Center de Manhattan. Ariel Coro, experto en tecnología, en conversación con Jeniffer Montoya, describe los modelos de vehículos más recientes.",
  url: "https://reddit.com"
});
