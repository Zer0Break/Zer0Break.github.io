import React from "react";
import tw, { css, styled } from "twin.macro";
import { motion } from "framer-motion";
import Header from "./../components/headers/Light.js";
import Footer from "./../components/footers/FiveColumnWithInputForm.js";

import ArrowIcon from "../images/arrow.svg";
import car_img from "../images/temp/seinna_model.png";

import toyota_ejemplo from "../images/temp/toyota_ejemplo.png";
import toyota_logo from "../images/temp/toyota_logo.png";

import { useState, useRef } from 'react';
import Image from "next/image"; 

import MainFeature_ from './../components/misc/TwoColComplaints.js';
import AnimationRevealPage from "./../helpers/AnimationRevealPage.js";

const smooth = (speed = 'normal') => {
  const speeds = {
    fast: 100,
    normal: 300,
  }
  return css`
    & {
      transition-duration: ${ speeds[speed] + 'ms' };
      ${tw`transition-all ease-in-out`}
    }
  `;
};

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
  
    const filtered_models = models.filter( (model) => model.name.toUpperCase().includes(search.toUpperCase()) );
  
    const Search__Results = () => { // to add transparency
      let color_;
      const result_styles = (quantity) => {
        const complete = quantity >= 10;
        const colors = [
          {
            quantities: [1,2,3],
            color: "#57ED9C"
          },
          {
            quantities: [4,5,6],
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
          if (quantities.indexOf(quantity) !== -1) color_ = color;
        });
        return css`
        &:after {
          width: ${( complete ? 10: quantity) * 10}%;
          background-color: ${color_ + ( complete ? 'AD': 59)};
        }
        &:hover {
          border-color: ${color_};
        }
        &:hover + li {
          border-top-color: ${color_}
        }
        &:hover span.title {
          ${tw`text-black`}
        }
        &:hover span.results {
          ${tw`text-gray-500`}
        }
        /* border */ 
        ${tw`border border-gray-300 border-b-0 first:rounded-t last:border-b last:rounded-b`}
        
       /* color bar */
        ${tw`after:content-[''] after:absolute after:top-0 after:left-0 after:h-full`}
        /* main styles */
        ${tw`relative flex cursor-pointer px-3 py-2`}
        ${smooth('fast')}
        `
      };
      
      const Result = ({ name = '', results = 0, quantity = 0 }) => 
      <li css={[result_styles(quantity)]}>
        <span className="title" tw="font-semibold z-1 text-gray-700" css={[smooth()]}>{name}</span> <span className="results" tw="px-3 font-medium text-gray-400" css={[smooth('fast')]}>[{results}]</span> 
        <span tw="relative flex justify-center items-center rounded-full text-white font-bold p-2 ms-auto h-6 w-6" css={{ backgroundColor: color_ }}>{quantity}</span>
      </li>;

      return (
      <ul tw="bg-gray-200 mt-2 max-h-[250px] rounded" css={[filtered_models.length > 6 && tw`overflow-y-scroll`]}>
        { filtered_models.map((props, i) => <Result {...props} key={i} />) }
      </ul>)
    }

    const Results__Title = ({ selected_brand, reports, models }) => {
      return (
          <p tw="text-lg text-gray-800 mt-7 mb-2">
            <span tw="font-bold">{ selected_brand }</span> tiene un total de <span tw="font-bold text-blue-700">{reports} reportes</span> entre <b tw="text-primary-500">{models}</b> modelos.
          </p>
      )
    }
  
    const notFound = () => {
      return (
        <div tw="flex flex-col items-center">
          <h3 tw="text-[80px] text-blue-700">
            ?
          </h3>
          <h4 tw="text-base text-gray-500 text-center"> 
            No hemos encontrado ningún resultado que coincida con su búsqueda.
          </h4>
        </div>
      )
    }

  return (
    <div tw="relative flex justify-center bg-gray-100 px-6 sm:px-10 h-[415px]">
      <Image src={toyota_logo} tw="hidden lg:block absolute left-[5%] top-[50%] translate-y-[-50%] w-[25%] max-w-[400px] z-10" alt="Totoya"/>

      <div tw="relative z-20 w-full sm:max-w-[400px] mt-3 mb-6 sm:mb-3 bg-gray-100">
        <Results__Title selected_brand="Toyota" reports="8,523" models={48} />
        <input value={search} onChange={e => { setSearch(e.target.value) }} 
        tw='bg-white placeholder:text-gray-300 w-full focus-within:outline-none px-3 py-[10px] border border-gray-400 rounded' 
        placeholder="Buscar..."
        />
        {filtered_models.length ? <Search__Results /> : notFound() }
      </div>

      <Image src={toyota_ejemplo} alt="Totoya carro" tw="hidden lg:block absolute right-0 top-[50%] translate-y-[-50%] w-[35%] z-10" />
    </div>
    )
}

const Models = () => {
    const [showMore, setShowMore] = useState(false);

    const models = useRef(null);

    const handleBtn = (val) => {
      models.current.scroll({
        top: 0,
        behavior: "smooth"
      });
      setShowMore(val);
    }

    const Model = ({ name = '', tier = 0, description = '', img }) => {
      return (
        <div className="group" tw="relative w-full sm:w-[50%] lg:w-[33.33%] px-6 lg:px-8 hover:scale-105 hover:cursor-pointer" css={[smooth()]}>
          <div tw="absolute top-[-12px] left-[10px] min-[1095px]:left-[22px] flex justify-center bg-blue-600 group-hover:bg-blue-500 transition rounded-full px-2 text-3xl text-white font-bold w-[45px] z-20" css={[smooth]}>
            { tier }
          </div>
          <div tw="w-full relative bg-gray-200 border border-gray-300 overflow-hidden sm:mr-10 mb-10 rounded-lg">
            <div tw="flex justify-center items-center bg-blue-400 group-hover:bg-blue-300 h-[200px] w-full" css={[smooth()]}>
              <Image src={ img } tw="max-w-[290px] w-[80%]" alt="Carro"/>
            </div>
            <div tw="p-4">
              <h3 tw="mb-1 font-bold text-lg">{ name }</h3>
              <p tw="">{ description }</p>
            </div>
          </div>
        </div>
      )
    }

    const car = {
      name: 'Sienna 2020',
      img: car_img,
      tier: 1,
      description: 'This model sufre de aa lot of problems that i don’t know but is the worst.',
    }

    const worst_models = [...Array(12).keys()].map(() => (car));
    
    const ShowMoreBtn = () => {
      if (worst_models.length > 6) {
        return (<div tw="flex justify-center my-4">
          <button onClick={() => { handleBtn(!showMore); }} tw="flex items-center text-2xl font-bold uppercase cursor-pointer hover:text-blue-400">
            Ver m{showMore ? 'enos':'ás'} <ArrowIcon css={[tw`ml-2`, smooth(), showMore && tw`rotate-180`]} />
          </button>
        </div>)
      }
    }

  
  return (
  <div tw="flex flex-col px-5 sm:px-10 pt-5">
    <h4 tw="mt-6 text-3xl font-bold text-gray-900 capitalize ps-6 lg:ps-8">Worst Models</h4>
    <motion.div
      ref={models}
      tw="flex w-full flex-wrap max-sm:justify-center pt-8 overflow-x-hidden overflow-y-hidden"
      animate={{ height: showMore ? 'auto' : 370 }}
      transition={{ duration: 0.5, easeOutIn: [0.04, 0.62, 0.23, 0.98] }}
      >
      { worst_models.map((model, i) => <Model {...model} key={i} />) }
    </motion.div>
    <ShowMoreBtn />
  </div>)
}
export default function Problemas() {
  return (
    <>
      <Header />
      <Portrait />
      <Models />
      <Footer margins />
    </>
  );
}