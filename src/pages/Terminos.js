import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import AnimationRevealPage from "./../helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "./../components/misc/Layouts";
import Header from "./../components/headers/Light.js";
import Footer from "./../components/footers/FiveColumnWithInputForm.js";
import { SectionHeading } from "./../components/misc/Headings";

const LinkTerms = tw.a`text-primary-500 border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300`;
const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900 mb-10`;
const Text = styled.div`

  ${tw`text-lg  text-gray-800`}
  p {
    ${tw`mt-2 leading-loose`}
  }
  h1 {
    ${tw`text-3xl font-bold mt-10`}
  }
  h2 {
    ${tw`text-2xl font-bold mt-8`}
  }
  h3 {
    ${tw`text-xl font-bold mt-6`}
  }
  ul {
    ${tw`list-disc list-inside`}
    li {
      ${tw`ml-2 mb-3`}
      p {
        ${tw`mt-0 inline leading-normal`}
      }
    }
  }
`;

export default function Terminos({
  headingText = "Términos y condiciones"

}) {

  return (
    <AnimationRevealPage>
      <Header />
      <Container tw="relative bg-gray-100 rounded-4xl p-3 my-8">
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Text>

            <p>Última actualización: Mayo 08, 2023</p>

            <p>Lea atentamente estas condiciones antes de utilizar nuestro servicio.</p>

            <h1>Interpretación y definiciones</h1>
            <h2>Interpretación</h2>
            <p>
            Las palabras cuya letra inicial va en mayúscula tienen significados definidos en las siguientes condiciones.
            </p>
            <p>
              Las siguientes definiciones tendrán el mismo significado independientemente de que aparezcan en singular o en
              plural.
            </p>

            <h2>Definiciones</h2>
            <p>A los efectos de las presentes Condiciones Generales:</p>
            <ul>
            <br />
              <li>
                <strong>Afiliado</strong> significa una entidad que controla, es controlada por o está bajo control común
                con una parte, entendiéndose por "control" la propiedad del 50% o más de las acciones, participaciones u otros
                valores con derecho a voto para la elección de directores u otra autoridad de gestión.
              </li>
              <li>
                <strong>Compañia</strong> (referido como "la Compañía", "Nosotros", "Nos" o "Nuestro" en este Acuerdo)
                se refiere a AutoPanas.
              </li>
              <li>
                <strong>País</strong>referencia a República dominicana
              </li>
              <li>
                <strong>Servicio</strong> referencia a la página web
              </li>
              <li>
                <strong>Términos y condiciones</strong> (también denominadas "Condiciones") se refieren a estas Condiciones que
                constituyen el acuerdo completo entre Usted y la Empresa en relación con el uso del Servicio.
              </li>
              <li>
                <strong>Servicio de redes sociales de terceros</strong> cualquier servicio o contenido (incluidos datos
                información, productos o servicios) proporcionados por terceros que puedan mostrarse, incluirse o ponerse a
                disponibles a través del Servicio.
              </li>
              <li>
                <strong>Página web</strong> se refiere a AutoPanas, accesible desde <LinkTerms href="https://AutoPanas.com">https://AutoPanas.com</LinkTerms>
              </li>{" "}
              <li>
                <strong>Tu</strong> se refiere a la persona física que accede o utiliza el Servicio, o a la empresa u otra
                  entidad jurídica en nombre de la cual dicha persona accede o utiliza el Servicio, según proceda.
              </li>
            </ul>

            <h1>Reconocimiento</h1>
            <p>
              Estos son los Términos y Condiciones que rigen el uso de este Servicio y el acuerdo que opera
              entre Usted y la Empresa. Estos Términos y Condiciones establecen los derechos y obligaciones de todos los usuarios
              en relación con el uso del Servicio.
            </p>
            <p>
              Su acceso y uso del Servicio están condicionados a su aceptación y cumplimiento de estos Términos y Condiciones.
              Condiciones Generales. Estos Términos y Condiciones se aplican a todos los visitantes, usuarios y otras personas que accedan o utilicen el
              Servicio.
            </p>
            <p>
              Al acceder o utilizar el Servicio, Usted acepta quedar vinculado por las presentes Condiciones Generales. Si no está de acuerdo
              con cualquier parte de estas Condiciones, no podrá acceder al Servicio.
            </p>
            <p>
              Usted declara que es mayor de 18 años. La Empresa no permite que los menores de 18 años utilicen el
              Servicio.
            </p>
            <p>
              Su acceso y uso del Servicio también están condicionados a su aceptación y cumplimiento de la
              Política de privacidad de la Empresa. Nuestra Política de Privacidad describe Nuestras políticas y procedimientos sobre la recopilación,
              uso y divulgación de su información personal cuando utiliza la Aplicación o el Sitio Web y le informa sobre sus derechos de privacidad y cómo le protege la ley.
              Sus derechos de privacidad y cómo le protege la ley. Lea atentamente nuestra Política de privacidad antes de
              de utilizar nuestro Servicio.
            </p>

            <h1>Enlaces a otros sitios web</h1>
            <p>
              Nuestro Servicio puede contener enlaces a sitios web o servicios de terceros que no son propiedad ni están controlados por la
              Empresa.
            </p>
            <p>
              La Empresa no tiene control alguno sobre el contenido, las políticas de privacidad o las prácticas de los sitios web o servicios de terceros, ni asume responsabilidad alguna por los mismos.
              prácticas de sitios web o servicios de terceros. Además, usted reconoce y acepta que la Empresa
              no será responsable, directa o indirectamente, de ningún daño o pérdida causados o supuestamente causados por o en relación con el uso o la utilización de los sitios web de terceros.
              causados por o en conexión con el uso o confianza en cualquier contenido, bienes o servicios disponibles en o a través de dichos sitios web o servicios.
              o a través de dichos sitios web o servicios.
            </p>
            <p>
              Le recomendamos encarecidamente que lea los términos y condiciones y las políticas de privacidad de los sitios web o servicios de terceros que visite.
              o servicios de terceros que visite.
            </p>

            <h1>Terminación</h1>
            <p>
            Podemos terminar o suspender su acceso inmediatamente, sin previo aviso o responsabilidad, por cualquier razón
              incluyendo, sin limitación, si Usted incumple estos Términos y Condiciones.
            </p>
            <p>En caso de rescisión, cesará inmediatamente su derecho a utilizar el Servicio.</p>

            <h1>Limitación de responsabilidad</h1>
            <p>
              Sin perjuicio de los daños y perjuicios en que Usted pueda incurrir, toda la responsabilidad de la Empresa y de cualquiera de sus
              proveedores en virtud de cualquiera de las disposiciones de las presentes Condiciones y el recurso exclusivo de Usted por todo lo anterior estará
              limitado a la cantidad efectivamente pagada por Usted a través del Servicio o 100 USD si Usted no ha comprado
              nada a través del Servicio.
            </p>
            <p>
              En la medida máxima permitida por la legislación aplicable, en ningún caso la Empresa o sus proveedores serán
              responsables de ningún daño especial, incidental, indirecto o consecuente (incluyendo, pero no
              daños por lucro cesante, pérdida de datos u otra información, interrupción de la actividad comercial, lesiones
              lucro cesante, pérdida de datos u otra información, interrupción de la actividad empresarial, lesiones personales, pérdida de privacidad que
              el Servicio, el software de terceros y/o el hardware de terceros utilizado con el Servicio, o de otro modo en
              con cualquiera de las disposiciones de estas Condiciones), incluso si la Empresa o cualquier proveedor ha sido advertido de la
              de la posibilidad de que se produzcan dichos daños e incluso si el remedio no cumple su finalidad esencial.
            </p>
            <p>
              Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or
              consequential damages, which means that some of the above limitations may not apply. In these states, each
              party's liability will be limited to the greatest extent permitted by law.
            </p>

            <h1>"Descargo de responsabilidad "TAL CUAL" y "SEGÚN DISPONIBILIDAD</h1>
            <p>
              El Servicio se le proporciona "TAL CUAL" y "SEGÚN DISPONIBILIDAD" y con todos los fallos y defectos, sin garantía de ningún tipo.
              de ningún tipo. En la medida máxima permitida por la legislación aplicable, la Empresa, en su propio nombre y en el de sus
              nombre de sus Afiliadas y de sus respectivos licenciantes y proveedores de servicios, rechaza expresamente
              todas las garantías, ya sean expresas, implícitas, legales o de otro tipo, con respecto al Servicio, incluidas
              todas las garantías implícitas de comerciabilidad, idoneidad para un fin determinado, titularidad y no infracción,
              y las garantías que puedan derivarse del curso de las negociaciones, el curso de la ejecución, el uso o la práctica comercial.
              Sin perjuicio de lo anterior, la Empresa no ofrece garantía ni compromiso alguno, ni hace
              representación de ningún tipo que el Servicio cumplirá con sus requisitos, lograr los resultados previstos, ser
              compatible o funcione con cualquier otro software, aplicaciones, sistemas o servicios, funcione sin
              funcionamiento sin interrupciones, que cumpla las normas de rendimiento o fiabilidad, que esté libre de errores o que cualquier error o defecto pueda ser o vaya a ser corregido.
              puedan ser o vayan a ser corregidos.
            </p>
            <p>
              Sin perjuicio de lo anterior, ni la Empresa ni ningún proveedor de la Empresa hacen ninguna
              representación o garantía de ningún tipo, expresa o implícita: (i) en cuanto al funcionamiento o disponibilidad del
              Servicio, o la información, contenido y materiales o productos incluidos en el mismo; (ii) que el Servicio
              será ininterrumpido o estará libre de errores; (iii) en cuanto a la exactitud, fiabilidad o actualidad de cualquier información
              o contenido proporcionado a través del Servicio; o (iv) que el Servicio, sus servidores, el contenido o los correos electrónicos
              enviados desde o en nombre de la Empresa estén libres de virus, scripts, troyanos, gusanos, malware
              bombas de relojería u otros componentes dañinos.
            </p>
            <p>
              Algunas jurisdicciones no permiten la exclusión de determinados tipos de garantías o la limitación de los derechos legales del consumidor.
              derechos legales aplicables de un consumidor, por lo que algunas o todas las exclusiones y limitaciones anteriores pueden no ser aplicables a
              Usted. Pero en tal caso las exclusiones y limitaciones establecidas en esta sección se aplicarán en la
              medida en que lo permita la legislación aplicable.
            </p>

            <h1>Derecho aplicable</h1>
            <p>
              Las leyes del País, excluyendo sus conflictos de normas legales, regirán estos Términos y Su uso del
              Servicio. Su uso de la Aplicación también puede estar sujeto a otras leyes locales, estatales, nacionales o internacionales.
              internacionales.
            </p>

            <h1>Resolución de litigios</h1>
            <p>
              Si tiene alguna duda o disputa sobre el Servicio, se compromete a intentar primero resolver la disputa
              informalmente poniéndose en contacto con la Empresa.
            </p>

            <h1>Divisibilidad y renuncia</h1>
            <h2>Divisibilidad</h2>
            <p>
            Si alguna disposición de estas Condiciones se considera inaplicable o inválida, dicha disposición se modificará e
              interpretada para lograr los objetivos de dicha disposición en la mayor medida posible bajo la
              ley aplicable y las restantes disposiciones continuarán en pleno vigor y efecto.
            </p>

            <h2>Renuncia</h2>
            <p>
            Salvo lo dispuesto en el presente documento, el hecho de no ejercer un derecho o de no exigir el cumplimiento de una obligación
              en virtud de las presentes Condiciones no afectará a la capacidad de una parte para ejercer dicho derecho o exigir dicho cumplimiento en
              en cualquier momento posterior, ni la renuncia a un incumplimiento constituirá una renuncia a cualquier incumplimiento posterior.
            </p>

            <h1>Modificaciones de las presentes condiciones</h1>
            <p>
            Nos reservamos el derecho, a nuestra entera discreción, de modificar o sustituir estas Condiciones en cualquier momento. Si una revisión
              Si una revisión es material, haremos esfuerzos razonables para proporcionar al menos 30 días de antelación antes de cualquier nuevo término
              entren en vigor. Lo que constituya un cambio sustancial se determinará a nuestra entera discreción.
            </p>
            <p>
              Al continuar accediendo o utilizando Nuestro Servicio después de que dichas revisiones entren en vigor, Usted acepta quedar vinculado
              por los términos revisados. Si no está de acuerdo con los nuevos términos, en su totalidad o en parte, por favor deje de usar el
              sitio web y el Servicio.
            </p>

            <h1>Contacte con nosotros</h1>
            <p>Si tiene alguna pregunta sobre estas Condiciones, puede ponerse en contacto con nosotros:</p>

            <ul>
              <li>By email: support@example.com</li>
              <li>By phone number: 408.996.1010</li>
            </ul>
          </Text>
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};
