import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
// import Image from "next/image.js";
import { SectionHeading, Subheading as SubheadingBase } from "./../misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "./../misc/Buttons.js";
import EmailIllustrationSrc from "./../../images/auto-aprecio/svg/contactanos.svg?url";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url(${EmailIllustrationSrc.src});`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
const Textarea = styled(Input).attrs({as: "textarea"})`
  ${tw`h-24`}
`

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`

export default ({
  subheading = "Contactenos",
  heading = <>Sientase libre de <span tw="text-primary-500">ponerse en contacto</span><wbr/> con nosotros.</>,
  description = "Nos encanta escuchar de nuestros clientes y estamos siempre disponibles para ayudar en cualquier cosa que necesiten. Si tiene alguna pregunta, inquietud o sugerencia, no dude en ponerse en contacto con nosotros.",
  submitButtonText = "Enviar",
  formAction = "#",
  formMethod = "get",
  textOnLeft = true,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
        {/* <Image src={EmailIllustrationSrc} height={530} width={820}/> */}
          <Image imageSrc={EmailIllustrationSrc} alt="Persona con headset para atencion al cliente"/>
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
            <Form action={formAction} method={formMethod}>
              <Input type="email" name="email" placeholder="Correo electronico" />
              <Input type="text" name="nombre" placeholder="Nombre" />
              <Input type="text" name="apellido" placeholder="Apellido" />
              <Input type="text" name="caso" placeholder="Caso" />
              <Textarea name="mensaje" placeholder="Exponga su mensaje aqui" />
              <SubmitButton type="submi">{submitButtonText}</SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
