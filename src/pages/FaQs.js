import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import tw from "twin.macro";
import { SectionHeading, Subheading as SubheadingBase } from "./../components/misc/Headings.js";
import { SectionDescription } from "./../components/misc/Typography.js";
import { Container, ContentWithPaddingXl } from "./../components/misc/Layouts.js";
import ChevronDownIcon from "feather-icons/dist/icons/chevron-down.svg";
import SvgDecoratorBlob1 from "./../images/svg-decorator-blob-7.svg";
import SvgDecoratorBlob2 from "./../images/svg-decorator-blob-8.svg";
import AnimationRevealPage from "./../helpers/AnimationRevealPage";
import Header from "./../components/headers/Light.js";
import Footer from "./../components/footers/FiveColumnWithInputForm.js";

const Subheading = tw(SubheadingBase)`mb-4 text-center`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const Column = tw.div`flex flex-col items-center`;
const HeaderContent = tw.div``;

const FAQSContainer = tw.dl`mt-12 max-w-4xl relative`;
const FAQ = tw.div`cursor-pointer select-none mt-5 px-8 sm:px-10 py-5 sm:py-4 rounded-lg text-gray-800 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 transition duration-300`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold`;
const QuestionToggleIcon = motion(styled.span`
  ${tw`ml-2 transition duration-300`}
  svg {
    ${tw`w-6 h-6`}
  }
`);
const Answer = motion(tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`);

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-56 w-56 opacity-15 transform translate-x-2/3 -translate-y-12 text-teal-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;



export default function Faqs({
  subheading = "FAQS",
  heading = "Tienes preguntas ?",
  description = "Aqui podrias encontrar la respuesta que necesitas.",
  faqs = [
    {
      question: "¿Cómo funciona la estimación de precios de vehículos?",
      answer:
        "La estimación de precios de vehículos se basa en una combinación de factores, como el modelo, la marca, el año, la condición del vehículo, el kilometraje, el historial de accidentes y la ubicación geográfica. Estos factores se utilizan para determinar el valor de mercado actual del vehículo."
    },
    {
      question: "¿Cómo puedo obtener una estimación de precios de mi vehículo?",
      answer:
        "Puede obtener una estimación de precios de su vehículo utilizando herramientas en línea como la que ofrecemos en nuestra página web. Simplemente ingrese la información requerida sobre su vehículo y recibirá una estimación del valor de mercado actual."
    },
    {
      question: "¿Cuánto cuesta una estimación de precios de vehículos?",
      answer:
        "En nuestra página web, la estimación de precios de vehículos es completamente gratuita. Simplemente ingrese la información necesaria y le proporcionaremos una estimación del valor de mercado actual de su vehículo."
    },
    {
      question: "¿Cómo se compara la estimación de precios de vehículos con el precio de venta real?",
      answer:
        "La estimación de precios de vehículos se basa en datos de mercado actualizados regularmente. Si bien no podemos garantizar que el precio de venta real de su vehículo coincida exactamente con nuestra estimación, nuestro objetivo es proporcionarle una estimación precisa del valor de mercado actual."
    }
  ]
}){
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = questionIndex => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  return (
    <AnimationRevealPage>
      <Header />
    <Container>
      <ContentWithPaddingXl>
        <Column>
          <HeaderContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
          </HeaderContent>
          <FAQSContainer>
            {faqs.map((faq, index) => (
              <FAQ
                key={index}
                onClick={() => {
                  toggleQuestion(index);
                }}
                className="group"
              >
                <Question>
                  <QuestionText>{faq.question}</QuestionText>
                  <QuestionToggleIcon
                    variants={{
                      collapsed: { rotate: 0 },
                      open: { rotate: -180 }
                    }}
                    initial="collapsed"
                    animate={activeQuestionIndex === index ? "open" : "collapsed"}
                    transition={{ duration: 0.02, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <ChevronDownIcon />
                  </QuestionToggleIcon>
                </Question>
                <Answer
                  variants={{
                    open: { opacity: 1, height: "auto", marginTop: "16px" },
                    collapsed: { opacity: 0, height: 0, marginTop: "0px" }
                  }}
                  initial="collapsed"
                  animate={activeQuestionIndex === index ? "open" : "collapsed"}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  {faq.answer}
                </Answer>
              </FAQ>
            ))}
          </FAQSContainer>
        </Column>
      </ContentWithPaddingXl>
      <DecoratorBlob1/>
      <DecoratorBlob2 />
    </Container>
    <Footer />
    </AnimationRevealPage>
  );
};
