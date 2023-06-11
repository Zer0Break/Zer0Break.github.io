import React,{ useState, useRef } from "react";
import tw, { css, styled } from "twin.macro";
import AnimationRevealPage from "./../helpers/AnimationRevealPage.js";
import { motion } from "framer-motion";
import Header from "./../components/headers/Light.js";
import Footer from "./../components/footers/FiveColumnWithInputForm.js";
import Image from "next/image";
import SvgDecoratorBlob1 from "../images/Vector.svg";
import SvgDecoratorBlob2 from "../images/dot-pattern.svg";
import ArrowIcon from "../images/arrow.svg";


//Marcas
import toyota from "../images/brands/toyota.png";
import acura from "../images/brands/acura.png";
import chevrolet from "../images/brands/chevrolet.jpg";
import dodge from "../images/brands/dodge.png";
import hyundai from "../images/brands/hyundai.png";
import lexus from "../images/brands/lexus.png";
import mazda from "../images/brands/mazda.png";
import mercedes from "../images/brands/mercedes-benz.png";
import mitsubishi from "../images/brands/mitsubishi.png";
import porsche from "../images/brands/porsche.png";
import tesla from "../images/brands/tesla.png";

//Dealers
import dealer1 from "../images/dealers/deale1.jpg";
import dealer2 from "../images/dealers/deale2.png";
import dealer3 from "../images/dealers/deale3.png";

//Mecanicos
import mec1 from "../images/mech/mec1.jpg";
import mec2 from "../images/mech/mec2.png";

const smooth = tw`transition duration-300 ease-in-out transform`;
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none fill-current text-primary-500 opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-1/2 -translate-y-40 rotate-180 -z-10`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none fill-current text-primary-500 opacity-25 absolute w-32 h-32 right-0 bottom-0 transform translate-x-12 translate-y-10 -z-10`}
`;
const DecoratorBlob3 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none fill-current text-primary-500 opacity-25 absolute w-32 h-32 left-0 bottom-0 transform -translate-x-14 translate-y-64 -z-10`}
`;

const Portrait = () => {
  const MainimageCss = tw`rounded-4xl hidden 2xl:flex absolute -mr-24 w-144 -mt-32 object-cover object-left right-0 -z-10 `;
  const MainimageCssLogo = tw`rounded-4xl`;

  const [search, setSearch] = useState('');
  const toyota = {
    car: 'https://media.dealervenom.com/jellies/Toyota/RAV4/C431510_1G3_Side.png?auto=compress,format&w=640&h=480&fit=clamp',
    logo: 'https://www.freepnglogos.com/uploads/toyota-logo-png/toyota-logos-brands-10.png',
  }

  const models = [
    {
      name: 'Camry',
      results: 689,
      quantity: 8,
    },
    {
      name: 'Corolla',
      results: 462,
      quantity: 7,
    },
    {
      name: 'Sienna',
      results: 1322,
      quantity: 9,
    },
    {
      name: 'Land Cruiser',
      results: 326,
      quantity: 5,
    },
    {
      name: 'Land Cruiser Prado',
      results: 147,
      quantity: 2,
    },
    {
      name: 'Fortuner',
      results: 501,
      quantity: 7,
    }
  ];

  const filtered_models = models.filter((model) => model.name.includes(search))

  const Search__Results = () => { // to add transparency
    let color_;
    const percentage = (quantity) => {
      // const width = width_ >= 10 ? 100:(width_ * 8.5);
      const complete = quantity >= 10;
      const colors = [
        {
          quantities: [1, 2, 3],
          color: "#57ED9C"
        },
        {
          quantities: [4, 5, 6],
          color: "#CFED57"
        },
        {
          quantities: [7],
          color: "#EDD557"
        },
        {
          quantities: [8],
          color: "#EDA857"
        },
        {
          quantities: [9],
          color: "#ED5757"
        },
        {
          quantities: [10],
          color: "#FF2E2E"
        },
      ]

      colors.map(({ quantities, color }) => {
        if (quantities.indexOf(quantity) !== -1) {
          color_ = color;
        }
      });
      return css`
        &:after {
          width: ${(complete ? 10 : quantity) * 10}%;
          background-color: ${color_ + (complete ? 'AD' : 59)} 
        }
        ${tw`after:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:z-10`}
      `
    };

    const Result = ({ name = '', results = 0, quantity = 0, backgroundColor }) =>
      <li tw="relative flex cursor-pointer px-3 py-2 border-b border-gray-300 last:border-b-0" css={[percentage(quantity)]}>
        <span tw="font-semibold text-gray-800">{name}</span> <span tw="px-3 font-medium text-gray-400">[{results}]</span>
        <span tw="relative flex justify-center items-center rounded-full text-white font-bold p-2 ms-auto h-6 w-6 z-20" css={{ backgroundColor: color_ }}>{quantity}</span>
      </li>;

    return (
      <ul tw="bg-white border border-gray-300 mt-2" css={[filtered_models.length > 6 && tw`overflow-y-scroll`]}>
        {filtered_models.map((props, i) => <Result {...props} key={i} />)}
      </ul>)
  }


  const Results__Title = () => {
    return (
      <p tw=" mt-7 mb-2 text-center">
        <b tw="text-primary-500 text-3xl">Conoce tú vehiculo! <br /></b>
        <b tw="text-primary-700 text-3xl">Descubre los problemas comunes de todas las marcas.</b><br /><br /><br /><br /><br />
        <b tw="text-primary-700 text-3xl">**IMAGEN MUY BONITA**.</b>
      </p>
    )
  }

  return (
    <div tw="relative flex justify-center bg-gray-100 px-6 sm:px-10 h-[415px] -mx-8 ">
      {/* <Image src={toyota_logo} tw="hidden lg:block absolute left-[5%] top-[50%] translate-y-[-50%] w-[25%] max-w-[400px] z-10" alt="Totoya"/> */}
      <DecoratorBlob1 tw="z-50" />
      <DecoratorBlob2 tw="z-50" />

      <div tw="relative z-20 w-full sm:max-w-[850px] mt-3 mb-6 sm:mb-3 sm:max-h-[150px]">
        <Results__Title />
        {/* <input value={search} onChange={e => { setSearch(e.target.value) }} 
        tw='bg-white placeholder:text-gray-300 w-full focus-within:outline-none px-3 py-[10px] border border-gray-400 rounded' 
        placeholder="Buscar..."
        />
        {filtered_models.length ? <Search__Results /> : notFound() } */}

      </div>
      {/* <Image src={toyota_ejemplo} alt="Totoya carro" tw="hidden lg:block absolute right-0 top-[50%] translate-y-[-50%] w-[35%] z-10" /> */}
    </div>
  )
}

const Brands = () => {
  const [showMore, setShowMore] = useState(false);

  const models = useRef(null);

  const handleBtn = (val) => {
    models.current.scroll({
      top: 0,
      behavior: "smooth"
    });
    setShowMore(val);
  }

  const Brand = ({ name = '', tier = 0, description = '', img }) => {
    return (
      <div tw="relative lg:max-w-[330px] w-5/12 sm:w-6/12 md:w-6/12 lg:w-4/12 2xl:w-1/5 3xl:w-2/12 hover:scale-105 hover:cursor-pointer px-8 drop-shadow-lg text-center" css={[smooth]}>
        {/* <div tw="absolute top-[-12px] left-[22px] flex justify-center bg-blue-600 rounded-full px-2 text-3xl text-white font-bold w-[45px] z-20">
          { tier }
        </div> */}
        <div tw="w-full relative bg-white overflow-hidden sm:mr-10 rounded-2xl p-[2px] h-[58px] sm:h-[138px] lg:h-[138px] xl:h-[138px] 2xl:h-[118px] 3xl:h-[138px]">
          <div tw="flex justify-center items-center border-2 rounded-2xl border-gray-300 bg-transparent py-4 h-full w-full">
            <Image src={img} alt="Carro" style={{ objectFit: "contain", scale: "0.8" }} fill />
          </div>

        </div>
        <h3 tw="mb-1 font-bold text-lg">{name}</h3>
      </div>
    )
  }

  const brands = [
    {
      name: 'Toyota',
      img: toyota,
    },
    {
      name: 'Mercedes-Benz',
      img: mercedes,
    },
    {
      name: 'Acura',
      img: acura,
    },
    {
      name: 'Chevrolet',
      img: chevrolet,
    },
    {
      name: 'Dodge',
      img: dodge,
    },
    {
      name: 'Hyundai',
      img: hyundai,
    },
    {
      name: 'Lexus',
      img: lexus,
    },
    {
      name: 'Mazda',
      img: mazda,
    },
    {
      name: 'Mitsubishi',
      img: mitsubishi,
    },
    {
      name: 'Porsche',
      img: porsche,
    },
    {
      name: 'Tesla',
      img: tesla,
    },

  ]
  // const ShowMoreBtn = () => {
  //   if (worst_models.length > 6) {
  //     return (<div tw="flex justify-center my-4">
  //       <button onClick={() => { handleBtn(!showMore); }} tw="flex items-center text-2xl font-bold uppercase cursor-pointer hover:text-blue-400">
  //         Ver m{showMore ? 'enos':'ás'} <ArrowIcon css={[tw`ml-2`, smooth, showMore && tw`rotate-180`]} />
  //       </button>
  //     </div>)
  //   }
  // }


  return (
    <div tw="flex flex-col w-3/4 px-5 sm:px-10 pt-5">
      <h4 tw="mt-6 px-8 text-3xl font-bold text-primary-700 capitalize">Marcas</h4>
      <motion.div
        ref={models}
        tw="flex w-full flex-wrap max-sm:justify-center pt-8 overflow-x-hidden overflow-y-hidden"
        animate={{ height: true ? 'auto' : 370 }}
        transition={{ duration: 0.5, easeOutIn: [0.04, 0.62, 0.23, 0.98] }}
      >
        {brands.map((model, i) => <Brand {...model} key={i} />)}
        <DecoratorBlob3 />

      </motion.div>
      {/* <ShowMoreBtn /> */}
    </div>
  )
}

const Dealers = () => {
  const [showMore, setShowMore] = useState(false);

  const dealers = useRef(null);

  const handleBtn = (val) => {
    dealers.current.scroll({
      top: 0,
      behavior: "smooth"
    });
    setShowMore(val);
  }

  const Dealer = ({ name = '', tier = 0, address ='', phone ='', description = '', img }) => {
    return (
      <div tw="relative max-h-[100] lg:min-w-[330px] w-full lg:w-4/12 hover:scale-105 hover:cursor-pointer px-8 drop-shadow-md" css={[smooth]}>
        {/* <div tw="absolute top-[-12px] left-[22px] flex justify-center bg-blue-600 rounded-full px-2 text-3xl text-white font-bold w-[45px] z-20">
          {tier}
        </div> */}
        <div tw="w-full relative bg-gray-200 border border-gray-300 overflow-hidden sm:mr-10 mb-10 rounded-lg max-h-[100]">
          <div tw="flex justify-center items-center bg-white w-full h-full ">
            <Image src={img} tw="" alt="Carro" style={{ objectFit: "contain"}} />
          </div>
          <div tw="p-4">
            <h3 tw="mb-1 font-bold text-lg">{name}</h3>
            <p>{address} <br/>{phone} </p>
          </div>
        </div>
      </div>
    )
  }

  const dealer =[  {
    name: 'Altamira Auto Import',
    img: dealer1,
    tier: 1,
    address: 'Av. 27 de Febrero # 419, Santo Domingo',
    phone: '(809) 221-2222',
    description: 'This model sufre de aa lot of problems that i don’t know but is the worst.', 
  },
  {
    name: 'Cleaner Studio',
    img: dealer2,
    tier: 1,
    address: 'Av. 27 de Febrero # 419, Santo Domingo',
    phone: '(809) 221-2222',
    description: 'This model sufre de aa lot of problems that i don’t know but is the worst.',
  },
  {
    name: 'Espaillat Motors',
    img: dealer3,
    tier: 1,
    address: 'Av. 27 de Febrero # 419, Santo Domingo',
    phone: '(809) 221-2222',
    description: 'This model sufre de aa lot of problems that i don’t know but is the worst.',
  }
  ]

  // const ShowMoreBtn = () => {
  //   if (worst_models.length > 6) {
  //     return (<div tw="flex justify-center my-4">
  //       <button onClick={() => { handleBtn(!showMore); }} tw="flex items-center text-2xl font-bold uppercase cursor-pointer hover:text-blue-400">
  //         Ver m{showMore ? 'enos' : 'ás'} <ArrowIcon css={[tw`ml-2`, smooth, showMore && tw`rotate-180`]} />
  //       </button>
  //     </div>)
  //   }
  // }


  return (
    <div tw="flex flex-col w-3/4 px-5 sm:px-10 pt-5">
      <h4 tw="mt-6 px-8 text-3xl font-bold text-primary-700 capitalize">Dealers recomendados</h4>
      <motion.div
        ref={dealers}
        css={[showMore ? tw`` : tw``]}
        tw="flex w-full flex-wrap max-sm:justify-center pt-8 overflow-x-hidden overflow-y-hidden"
        animate={{ height: true ? 'auto' : 370 }}
        transition={{ duration: 0.5, easeOutIn: [0.04, 0.62, 0.23, 0.98] }}
      >
        {dealer.map((model, i) => <Dealer {...model} key={i} />)}
      </motion.div>
      {/* <ShowMoreBtn /> */}
    </div>)
}

const Mecanicos = () => {
  const [showMore, setShowMore] = useState(false);

  const mecanicos = useRef(null);

  const handleBtn = (val) => {
    mecanicos.current.scroll({
      top: 0,
      behavior: "smooth"
    });
    setShowMore(val);
  }

  const Mecanico = ({ name = '', tier = 0, address ='', phone ='', description = '', img }) => {
    return (
      <div tw="relative max-h-[100] lg:min-w-[330px] w-full lg:w-4/12 hover:scale-105 hover:cursor-pointer px-8 drop-shadow-md" css={[smooth]}>
        {/* <div tw="absolute top-[-12px] left-[22px] flex justify-center bg-blue-600 rounded-full px-2 text-3xl text-white font-bold w-[45px] z-20">
          {tier}
        </div> */}
        <div tw="w-full relative bg-gray-200 border border-gray-300 overflow-hidden sm:mr-10 mb-10 rounded-lg max-h-[100]">
          <div tw="flex justify-center items-center bg-white w-full h-full ">
            <Image src={img} tw="" alt="Carro" style={{ objectFit: "contain"}} />
          </div>
          <div tw="p-4">
            <h3 tw="mb-1 font-bold text-lg">{name}</h3>
            <p>{address} <br/>{phone} </p>
          </div>
        </div>
      </div>
    )
  }

  const mecanico =[  {
    name: 'SK Performance',
    img: mec1,
    tier: 1,
    address: 'Av. 27 de Febrero # 419, Santo Domingo',
    phone: '(809) 221-2222',
    description: 'This model sufre de aa lot of problems that i don’t know but is the worst.', 
  },
  {
    name: 'Anaky Racing',
    img: mec2,
    tier: 1,
    address: 'Av. 27 de Febrero # 419, Santo Domingo',
    phone: '(809) 221-2222',
    description: 'This model sufre de aa lot of problems that i don’t know but is the worst.',
  },
  {
    name: 'SK Performance',
    img: mec1,
    tier: 1,
    address: 'Av. 27 de Febrero # 419, Santo Domingo',
    phone: '(809) 221-2222',
    description: 'This model sufre de aa lot of problems that i don’t know but is the worst.',
  }
  ]

  // const ShowMoreBtn = () => {
  //   if (worst_models.length > 6) {
  //     return (<div tw="flex justify-center my-4">
  //       <button onClick={() => { handleBtn(!showMore); }} tw="flex items-center text-2xl font-bold uppercase cursor-pointer hover:text-blue-400">
  //         Ver m{showMore ? 'enos' : 'ás'} <ArrowIcon css={[tw`ml-2`, smooth, showMore && tw`rotate-180`]} />
  //       </button>
  //     </div>)
  //   }
  // }


  return (
    <div tw="flex flex-col w-3/4 px-5 sm:px-10 pt-5">
      <h4 tw="mt-6 px-8 text-3xl font-bold text-primary-700 capitalize">Mecánicos recomendados</h4>
      <motion.div
        ref={mecanicos}
        css={[showMore ? tw`` : tw``]}
        tw="flex w-full flex-wrap max-sm:justify-center pt-8 overflow-x-hidden overflow-y-hidden"
        animate={{ height: true ? 'auto' : 370 }}
        transition={{ duration: 0.5, easeOutIn: [0.04, 0.62, 0.23, 0.98] }}
      >
        {mecanico.map((model, i) => <Mecanico {...model} key={i} />)}
      </motion.div>
      {/* <ShowMoreBtn /> */}
    </div>)
}

export default function Problemas() {
  return (
    <AnimationRevealPage disabled>
      <Header />
      <Portrait />
      {/* <Slider /> */}

      <Brands />
      <Dealers />
      <Mecanicos />
      <Footer />
    </AnimationRevealPage>
  );
}