import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { PrimaryButton as PrimaryButtonBase } from "./../misc/Buttons.js";
import Image from "next/image.js";
import LogoImage from "./../../images/auto-aprecio/svg/iconclean.png";
import FacebookIcon from "./../../images/facebook-icon.svg";
import TwitterIcon from "./../../images/twitter-icon.svg";
import YoutubeIcon from "./../../images/youtube-icon.svg";
import InstagramIcon from "./../../images/iconoInstagram.svg";

const container_styles = tw`relative bg-gray-200 text-gray-700 px-8 py-20 lg:py-24`

const Container = styled.div(({ margins }) => [container_styles, margins ? tw`px-20`:tw`-mb-8 -mx-8`])

const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;
const SixColumns = tw.div`flex flex-wrap text-center sm:text-left justify-center sm:justify-start md:justify-between -mt-12`;

const Column = tw.div`px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12`;

const ColumnHeading = tw.h5`uppercase font-bold`;

const LinkList = tw.ul`mt-6 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300`;

const SubscribeNewsletterColumn = tw(Column)`text-center lg:text-left w-full! lg:w-auto! mt-20 lg:mt-12`;
const SubscribeNewsletterContainer = tw.div`max-w-sm mx-auto lg:mx-0 `;
const SubscribeText = tw.p`mt-2 lg:mt-6 text-sm font-medium text-gray-600`;
const SubscribeForm = tw.form`mt-4 lg:mt-6 text-sm sm:flex max-w-xs sm:max-w-none mx-auto sm:mx-0`;
const Input = tw.input`bg-gray-300 px-6 py-3 rounded sm:rounded-r-none border-2 sm:border-r-0 border-gray-400 hover:border-primary-500 focus:outline-none transition duration-300 w-full`;
const SubscribeButton = tw(PrimaryButtonBase)`mt-4 sm:mt-0 w-full sm:w-auto rounded sm:rounded-l-none px-8 py-3`;

const Divider = tw.div`my-16 border-b-2 border-gray-300 w-full`;

const ThreeColRow = tw.div`flex flex-col md:flex-row items-center justify-between`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImgWrapper = tw.div`w-8`;
const LogoText = tw.h5`ml-2 text-xl font-black tracking-wider text-gray-800`;

const CopywrightNotice = tw.p`text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-500`;

const SocialLinksContainer = tw.div`mt-8 md:mt-0 flex`;
const SocialLink = styled.a`
  ${tw`cursor-pointer p-2 rounded-full bg-gray-900 text-gray-100 hover:bg-gray-700 transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

export default ({ margins } ) => {
  return (
    <Container margins={margins}>
      <Content>
        <SixColumns>
          <Column>
            <ColumnHeading>Interacción</ColumnHeading>
            <LinkList>
            {//agregar los href="#" a estos links
            }
              <LinkListItem>
              
                <Link href="/Contacto">Contactenos</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/FaQs">FAQs</Link>
              </LinkListItem>
              <LinkListItem>
                <Link tw="opacity-50 cursor-not-allowed hidden">Soporte</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/Nosotros">Nosotros</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Servicios</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link tw="opacity-50 cursor-not-allowed hidden">Iniciar Sesion</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Historial del auto</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/Evaluador">Busca tu precio</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/Problemas">Problemas comunes</Link>
              </LinkListItem>
              <LinkListItem>
                <Link tw="opacity-50 cursor-not-allowed hidden">Equipo</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Novedades</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link tw="opacity-50 cursor-not-allowed hidden">Recomendaciones</Link>
              </LinkListItem>
              <LinkListItem>
                <Link tw="opacity-50 cursor-not-allowed hidden">Eventos</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href = "/BlogIndex">Blog</Link>
              </LinkListItem>
              <LinkListItem>
                <Link tw="opacity-50 cursor-not-allowed hidden">Office</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Legal</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link tw="opacity-50 cursor-not-allowed hidden"> GDPR</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/Politicas">Políticas de Privacidad</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/Terminos">Términos de Uso</Link>
              </LinkListItem>
              <LinkListItem>
                <Link tw="opacity-50 cursor-not-allowed hidden">Reclamaciones</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <SubscribeNewsletterColumn>
            <SubscribeNewsletterContainer>
              <ColumnHeading>Recibe nuestras actualizaciones!</ColumnHeading>
              <SubscribeText>
                Suscribete para recibir todas nuestras actualizacion e innovaciones. Cero Publicidad Garantizado.
              </SubscribeText>
              <SubscribeForm method="get" action="#">
                <Input type="email" placeholder="Tu Correo Eléctronico" />
                <SubscribeButton type="Submi">Suscribir</SubscribeButton>
              </SubscribeForm>
            </SubscribeNewsletterContainer>
          </SubscribeNewsletterColumn>
        </SixColumns>
        <Divider />
        <ThreeColRow>
          <LogoContainer>
            <LogoImgWrapper >
              <Image src={LogoImage} alt="Logo Rectangulo de Software Zerobreak" height="auto" width="auto"/>
            </LogoImgWrapper>
            <LogoText>ZeroBreak Inc.</LogoText>
          </LogoContainer>
          <CopywrightNotice>&copy; 2023 ZeroBreak Inc. All Rights Reserved.</CopywrightNotice>
          <SocialLinksContainer>
            <SocialLink href="https://facebook.com">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://twitter.com">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://youtube.com">
              <YoutubeIcon />
            </SocialLink>
            <SocialLink href="https://www.instagram.com/autopanas.do/">
              <InstagramIcon />
            </SocialLink>
          </SocialLinksContainer>
        </ThreeColRow>
      </Content>
    </Container>
  );
};
