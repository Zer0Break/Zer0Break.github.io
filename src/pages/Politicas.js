import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "./../helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "./../components/misc/Layouts.js";
import Header from "./../components/headers/Light.js";
import Footer from "./../components/footers/FiveColumnWithInputForm.js";
import { SectionHeading } from "./../components/misc/Headings.js";


const Link = tw.a`text-primary-500 border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300`;
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

export default function Politica ({ 
  headingText = "Política de privacidad" 

}) {
  return (
    <AnimationRevealPage>
      <Header />
      <Container tw="relative bg-gray-100 rounded-4xl p-3 my-8">
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Text >
            <p>Última actualización: Mayo 04, 2023</p>

            <p>
            Esta política de privacidad describe cómo recopilamos, utilizamos y protegemos la información personal de nuestros usuarios.
            </p>

            <h1>Interpretación y Definiciones</h1>
            <h2>Interpretación</h2>
            <p>
              Las palabras cuya letra inicial está en mayúscula tienen significados definidos bajo las siguientes condiciones.
            </p>
            <p>
            Las siguientes definiciones tendrán el mismo significado independientemente de que aparezcan en singular o en plural.
            </p>

            <h2>Definiciones</h2>
            <p>A efectos de la presente Política de Privacidad:<br /></p>
            <ul>
              <li>
                <p>
                  <strong>Tu</strong> se refiere a la persona física que accede o utiliza el Servicio, o a la empresa u otra
                  entidad jurídica en nombre de la cual dicha persona accede o utiliza el Servicio, según proceda.
                </p>
              </li>
              <li>
                <p>
                  <strong>Compañia</strong> (referido como "la Compañía", "Nosotros", "Nos" o "Nuestro" en este Acuerdo)
                  se refiere a AutoPanas.
                </p>
              </li>
              <li>
                <strong>Afiliado</strong> significa una entidad que controla, es controlada por o está bajo control común
                con una parte, entendiéndose por "control" la propiedad del 50% o más de las acciones, participaciones u otros
                valores con derecho a voto para la elección de directores u otra autoridad de gestión.
              </li>
              <li>
                <strong>Cuenta</strong> significa una cuenta única creada para que Usted acceda a nuestro Servicio o a partes de nuestro
                Servicio.
              </li>
              <li>
                <strong>Página web</strong> se refiere a AutoPanas, accesible desde <Link href="https://AutoPanas.com">https://AutoPanas.com</Link>
              </li>{" "}
              <li>
                <strong>Servicio</strong> referencia a la página web.
              </li>
              <li>
                <strong>País</strong> referencia a República Dominicana.
              </li>
              <li>
                <p>
                  <strong>Proveedor de servicios</strong> toda persona física o jurídica que trate los datos por cuenta de
                  de la Sociedad. Se refiere a terceras empresas o personas contratadas por la Empresa para
                  facilitar el Servicio, prestar el Servicio en nombre de la Empresa, realizar servicios relacionados con el Servicio o ayudar a la Empresa a analizar cómo se utiliza el Servicio.
                  con el Servicio o para ayudar a la Empresa a analizar cómo se utiliza el Servicio.
                </p>
              </li>
              <li>
                <strong>Servicio de redes sociales de terceros</strong> se refiere a cualquier sitio web o sitio web de una red social
                a través del cual un Usuario puede iniciar sesión o crear una cuenta para utilizar el Servicio.
              </li>
              <li>
                <p>
                  <strong>Datos personales</strong> es toda información relativa a una persona física identificada o identificable.
                  identificado o identificable.
                </p>
              </li>
              <li>
                <strong>Cookies</strong> son pequeños archivos que un sitio web coloca en su ordenador, dispositivo móvil o cualquier otro
                dispositivo móvil o cualquier otro dispositivo por un sitio web, que contienen los detalles de su historial de navegación en ese sitio web entre sus muchos usos.
                usos.
              </li>{" "}
              <li>
                <strong>Datos de uso</strong> se refiere a los datos recogidos automáticamente, ya sean generados por el uso del
                o de la propia infraestructura del Servicio (por ejemplo, la duración de la visita a una página).
              </li>
            </ul>

            <h1>Recogida y uso de sus datos personales</h1>
            <h2>Tipos de datos recogidos</h2>

            <h3>Datos personales</h3>
            <p>
              Al utilizar nuestro Servicio, podemos pedirle que nos proporcione cierta información de identificación personal
              que puede ser utilizada para contactar con Usted o identificarle. La información de identificación personal se puede incluir, pero no se limita a:
            </p>
            <ul>
            <br /><li>Dirección de correo electrónico</li> <li>Nombre y apellidos</li> <li>Número de teléfono</li>{" "}
              <li>Dirección, Provincia, Código postal</li> <li>Datos de uso</li>
            </ul>

            <h3>Datos de uso</h3>
            <p>Los Datos de Uso se recogen automáticamente al utilizar el Servicio.</p>
            <p>
              Los Datos de Uso pueden incluir información como la dirección de Protocolo de Internet de Su Dispositivo (por ejemplo, la dirección IP),
              el tipo de navegador, la versión del navegador, las páginas de nuestro Servicio que Usted visita, la hora y la fecha de Su visita
              el tiempo empleado en esas páginas, identificadores únicos de dispositivos y otros datos de diagnóstico.
            </p>
            <p>
              Cuando accede al Servicio por o a través de un dispositivo móvil, podemos recopilar cierta información
              automáticamente, incluyendo, pero no limitado a, el tipo de dispositivo móvil que utiliza, su dispositivo móvil único
              la dirección IP de su dispositivo móvil, su sistema operativo móvil, el tipo de navegador de Internet móvil que utiliza, identificadores únicos de dispositivo y otros datos de diagnóstico.
              móvil que utiliza, identificadores únicos de dispositivo y otros datos de diagnóstico.
            </p>
            <p>
            También podemos recopilar información que su navegador envía cada vez que visita nuestro Servicio o cuando accede a
              el Servicio por o a través de un dispositivo móvil.
            </p>

            <h3>Tecnologías de seguimiento y Cookies</h3>
            <p>
              Utilizamos Cookies y tecnologías de seguimiento similares para rastrear la actividad en Nuestro Servicio y almacenar cierta
              información. Las tecnologías de rastreo utilizadas son balizas, etiquetas y scripts para recopilar y rastrear información
              y para mejorar y analizar Nuestro Servicio.
            </p>
            <p>
            Usted puede indicar a su navegador que rechace todas las Cookies o que le indique cuándo se está enviando una Cookie. No obstante,
              si no acepta las Cookies, es posible que no pueda utilizar algunas partes de nuestro Servicio.
            </p>
            <p>
              Las cookies pueden ser "persistentes" o de "sesión". Las Cookies persistentes permanecen en su ordenador personal o
              dispositivo móvil cuando Usted se desconecta, mientras que las Cookies de Sesión se eliminan en cuanto Usted cierra su navegador web.
              navegador. Más información sobre las cookies: <Link href="https://www.termsfeed.com/blog/cookies/">Todo sobre las cookies</Link>
              .
            </p>
            <p>Utilizamos tanto cookies de sesión como cookies persistentes para los fines que se indican a continuación:</p><br />
            <ul>
              <li>
                <p>
                  <strong> Cookies necesarias / esenciales</strong>
                </p>
                <p> Tipo: Cookies de sesión. </p>
                <p> Administrado por: Nosotros. </p>
                <p>
                  Finalidad: Estas Cookies son esenciales para proporcionarle los servicios disponibles a través del Sitio Web y para
                  permitirle utilizar algunas de sus funciones. Ayudan a autenticar a los usuarios y a evitar el uso fraudulento de
                  cuentas de usuario. Sin estas Cookies, los servicios que Usted ha solicitado no pueden serle prestados, y Nosotros
                  sólo utilizamos estas Cookies para prestarle dichos servicios.
                </p>
              </li>
              <li>
                <p>
                  <strong>Política de Cookies / Aviso Aceptación Cookies</strong>
                </p>
                <p> Tipo: Cookies persistentes. </p>
                <p> Administrado por: Nosotros. </p>
                <p>Finalidad: Estas Cookies identifican si los usuarios han aceptado el uso de cookies en el Sitio Web.</p>
              </li>
              <li>
                <p>
                  <strong>Cookies de funcionalidad</strong>
                </p>
                <p> Tipo: Cookies persistentes. </p>
                <p> Administrado por: Nosotros. </p>
                <p>
                  Finalidad: Estas Cookies nos permiten recordar las elecciones que Usted realiza cuando utiliza el Sitio Web, como por ejemplo
                  recordar sus datos de acceso o su preferencia de idioma. El objetivo de estas Cookies es proporcionarle
                  una experiencia más personal y evitar que tenga que volver a introducir sus preferencias cada vez que
                  que utilice el Sitio Web.
                </p>
              </li>
            </ul>

            <h2>Uso de sus datos personales</h2>
            <p>La Empresa podrá utilizar los Datos Personales para los siguientes fines:</p><br />
            <ul>
              <li>
                <strong>Para prestar y mantener nuestro Servicio</strong> entre otras cosas, para supervisar el uso de nuestro Servicio.
              </li>
              <li>
                <strong>Para gestionar su cuenta:</strong> para gestionar Su registro como usuario del Servicio. Los
                Datos Personales que Usted proporcione pueden darle acceso a diferentes funcionalidades del Servicio que están
                disponibles para Usted como usuario registrado.
              </li>
              <li>
                <strong>Para la ejecución de un contrato:</strong> el desarrollo, cumplimiento y realización del
                contrato de compra de los productos, artículos o servicios que Usted haya adquirido o de cualquier otro contrato con
                Nosotros a través del Servicio.
              </li>
              <li>
                <strong>Para contactar con usted:</strong> ponernos en contacto con usted por correo electrónico, teléfono, SMS u otras formas
                formas de comunicación electrónica, como las notificaciones push de una aplicación móvil relativas a actualizaciones
                o comunicaciones informativas relacionadas con las funcionalidades, productos o servicios contratados, incluidas
                las actualizaciones de seguridad, cuando sea necesario o razonable para su implementación.
              </li>
              <li>
                <strong>Para proporcionarle</strong> con noticias, ofertas especiales e información general sobre otros
                servicios y eventos que ofrecemos que son similares a los que ya ha comprado o preguntado, a menos que haya optado por no recibir dicha información.
                a menos que haya optado por no recibir dicha información.
              </li>
              <li>
                <strong>Gestionar sus solicitudes:</strong> Atender y gestionar sus solicitudes.
              </li>
            </ul>

            <p>Podemos compartir su información personal en las siguientes situaciones:</p><br />

            <ul>
              <li>
                <strong>Con los proveedores de servicios:</strong> Podemos compartir su información personal con proveedores de servicios
                para supervisar y analizar el uso de nuestro Servicio, para ponernos en contacto con Usted.
              </li>
              <li>
                <strong>Para transferencias comerciales:</strong> Podemos compartir o transferir su información personal en
                en relación con, o durante las negociaciones de, cualquier fusión, venta de activos de la Empresa, financiación o
                adquisición de todo o parte de nuestro negocio a otra empresa.
              </li>
              <li>
                <strong>Con afiliados:</strong> Podemos compartir su información con nuestras filiales, en cuyo caso
                exigiremos a dichas filiales que respeten la presente Política de Privacidad. Las filiales incluyen nuestra empresa matriz y
                filiales, empresas conjuntas u otras empresas que controlemos o que estén bajo control común con nosotros.
                control común con nosotros.
              </li>
              <li>
                <strong>Con socios comerciales:</strong> Podemos compartir su información con nuestros socios comerciales para
                ofrecerle determinados productos, servicios o promociones.
              </li>
              <li>
                <strong>Con otros usuarios:</strong> Cuando Usted comparte información personal o interactúa de otro modo en las
                áreas públicas con otros usuarios, dicha información puede ser vista por todos los usuarios y puede ser públicamente
                públicamente. Si Usted interactúa con otros usuarios o se registra a través de un Servicio de Medios Sociales de Terceros
                Social de Terceros, Sus contactos en el Servicio de Medios Sociales de Terceros pueden ver Su nombre, perfil, fotos y descripción de Su actividad.
                descripción de Su actividad. Del mismo modo, otros usuarios podrán ver las descripciones de Su actividad,
                comunicarse con usted y ver su perfil.
              </li>
            </ul>

            <h2>Conservación de sus datos personales</h2>
            <p>
              La Empresa conservará Sus Datos Personales únicamente durante el tiempo que sea necesario para los fines establecidos en
              esta Política de Privacidad. Conservaremos y utilizaremos sus Datos Personales en la medida necesaria para cumplir con nuestras
              obligaciones legales (por ejemplo, si estamos obligados a conservar sus datos para cumplir la legislación aplicable)
              resolver conflictos y hacer cumplir nuestros acuerdos legales y políticas.
            </p>
            <p>
            La Empresa también conservará los Datos de Uso con fines de análisis interno. Por lo general, los Datos de Uso se conservan
              durante un período de tiempo más corto, excepto cuando estos datos se utilizan para reforzar la seguridad o mejorar la
              funcionalidad de Nuestro Servicio, o estemos legalmente obligados a conservar estos datos durante períodos de tiempo más largos.
            </p>

            <h2>Transferencia de sus datos personales</h2>
            <p>
              Su información, incluidos los Datos Personales, se procesa en las oficinas operativas de la Empresa y en cualesquiera
              otros lugares donde se encuentren las partes implicadas en el tratamiento. Esto significa que esta información puede
              ser transferida a - y mantenida en - ordenadores situados fuera de su estado, provincia, país u
              jurisdicción gubernamental donde las leyes de protección de datos puedan diferir de las de su jurisdicción.
              jurisdicción.
            </p>
            <p>
              Su consentimiento a esta Política de Privacidad seguido de Su envío de dicha información representa Su
              acuerdo con dicha transferencia.
            </p>
            <p>
              La Empresa tomará todas las medidas razonablemente necesarias para garantizar que sus datos sean tratados de forma segura y de acuerdo con esta Política de Privacidad.
              de acuerdo con esta Política de Privacidad y no se realizará ninguna transferencia de Sus Datos Personales a una
              organización o a un país a menos que existan controles adecuados que incluyan la seguridad de Sus datos
              y demás información personal.
            </p>

            <h2>Divulgación de sus datos personales</h2>
            <h3>Operaciones comerciales</h3>
            <p>
              Si la empresa participa en una fusión, adquisición o venta de activos, sus datos personales pueden ser transferidos.
              Le avisaremos antes de que sus datos personales se transfieran y queden sujetos a una política de privacidad diferente.
              diferente.
            </p>
            <h3>Cumplimiento de la ley</h3>
            <p>
            En determinadas circunstancias, la Empresa puede verse obligada a revelar sus Datos Personales si así se lo exige la ley o en respuesta a solicitudes válidas de autoridades públicas (por ejemplo, un tribunal o una agencia gubernamental).
              por ley o en respuesta a solicitudes válidas de autoridades públicas (por ejemplo, un tribunal o una agencia gubernamental).
            </p>
            <h3>Otros requisitos legales</h3>
            <p>
            La Empresa podrá revelar sus Datos Personales en la creencia de buena fe de que dicha acción es necesaria para:
            </p>
            <ul><br />
              <li>Cumplir una obligación legal</li>
              <li>Proteger y defender los derechos o la propiedad de la empresa</li>
              <li>Prevenir o investigar posibles irregularidades en relación con el Servicio</li>
              <li>Proteger la seguridad personal de los usuarios del Servicio o del público.</li>
              <li>Protección frente a la responsabilidad jurídica</li>
            </ul>

            <h2>Seguridad de sus datos personales</h2>
            <p>
              La seguridad de sus Datos Personales es importante para Nosotros, pero recuerde que ningún método de transmisión por
              Internet, o método de almacenamiento electrónico es 100% seguro. Aunque nos esforzamos por utilizar medios
              comercialmente aceptables para proteger sus Datos Personales, no podemos garantizar su seguridad absoluta.
            </p>

            <h1>Privacidad infantil</h1>
            <p>
              Nuestro Servicio no se dirige a menores de 13 años. No recopilamos conscientemente información personal identificable de menores de 13 años.
              identificable de cualquier persona menor de 13 años. Si usted es un padre o tutor y es consciente de que su hijo nos ha proporcionado datos personales, póngase en contacto con nosotros.
              sabe que su hijo nos ha proporcionado datos personales, póngase en contacto con nosotros. Si tenemos conocimiento de que
              hemos recopilado datos personales de menores de 13 años sin verificar el consentimiento paterno, procederemos a
              tomaremos medidas para eliminar esa información de nuestros servidores.
            </p>
            <p>
              Si necesitamos basarnos en el consentimiento como base legal para procesar su información y su país requiere el consentimiento de uno de sus padres, podemos solicitar el consentimiento de sus padres antes de recopilar y utilizar dicha información.
              el consentimiento de uno de sus padres, es posible que solicitemos el consentimiento de sus padres antes de recopilar y utilizar dicha información.
            </p>

            <h1>Enlaces a otros sitios web</h1>
            <p>
              Nuestro Servicio puede contener enlaces a otros sitios web no gestionados por nosotros. Si hace clic en un enlace
              se le dirigirá al sitio web de ese tercero. Le recomendamos encarecidamente que revise la Política de privacidad
              de cada sitio que visite.
            </p>
            <p>
              No tenemos ningún control ni asumimos ninguna responsabilidad por el contenido, las políticas de privacidad o las prácticas de ningún sitio o servicio de terceros.
              sitios o servicios de terceros.
            </p>

            <h1>Cambios en esta política de privacidad</h1>
            <p>
              Podemos actualizar nuestra Política de Privacidad de vez en cuando. Le notificaremos cualquier cambio publicando la nueva
              Política de Privacidad en esta página.
            </p>
            <p>
              Se lo comunicaremos por correo electrónico y/o mediante un aviso destacado en nuestro Servicio, antes de que el cambio entre en vigor, y actualizaremos la fecha de "Última actualización" en la parte superior de esta Política de privacidad.
              efectiva y actualizaremos la fecha de "Última actualización" en la parte superior de esta Política de Privacidad.
            </p>
            <p>
              Le aconsejamos que revise periódicamente esta Política de Privacidad para comprobar si se han producido cambios. Las modificaciones de esta Política de privacidad
              entrarán en vigor cuando se publiquen en esta página.
            </p>
          </Text>
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};
