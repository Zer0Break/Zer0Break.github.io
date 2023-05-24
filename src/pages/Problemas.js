import React from "react";
import tw, { css } from "twin.macro";
import Header from "./../components/headers/Light.js";
import Footer from "./../components/footers/FiveColumnWithInputForm.js";

import ArrowIcon from "../images/arrow.svg";
import car_img from "../images/temp/seinna_model.png";

import toyota_ejemplo from "../images/temp/toyota_ejemplo.png";
import toyota_logo from "../images/temp/toyota_logo.png";

import { useState } from 'react';
import Image from "next/image"; 

import MainFeature_ from './../components/misc/TwoColComplaints.js';
import AnimationRevealPage from "./../helpers/AnimationRevealPage.js";

const Portrait = () => {
  const MainimageCss = tw`rounded-4xl hidden 2xl:flex absolute -mr-24 w-144 -mt-32 object-cover object-left right-0 -z-10 `;
  const MainimageCssLogo = tw`rounded-4xl`;

  const toyota = {
    car: 'https://media.dealervenom.com/jellies/Toyota/RAV4/C431510_1G3_Side.png?auto=compress,format&w=640&h=480&fit=clamp',
    logo: 'https://www.freepnglogos.com/uploads/toyota-logo-png/toyota-logos-brands-10.png',
  }
  
  const Search__Box = () => <input tw='bg-white placeholder:text-gray-300 w-full focus-within:outline-none px-3 py-[10px] border border-gray-400 rounded' placeholder="Buscar..."/>
  
  const Search__Results = () => { // to add transparency

    const percentage = (backgroundColor, width) => css`
      &:after {
        width: ${(width * 8.5)}%;
        background-color: ${backgroundColor+59} 
      }
      ${tw`after:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:z-10`}
    `;

    const Result = ({name = '', results = 0, quantity = 0, backgroundColor}) => 
    <li tw="relative flex px-3 py-2 border-b border-gray-300 last:border-b-0" css={[percentage(backgroundColor, quantity)]}>
      <span tw="font-semibold text-gray-800">{name}</span> <span tw="px-3 font-medium text-gray-400">[{results}]</span> 
      <span tw="relative flex justify-center items-center rounded-full text-white font-bold p-2 ms-auto h-6 w-6 z-20" css={{ backgroundColor }}>{quantity}</span>
    </li>;

    return <ul tw="bg-gray-200 border border-gray-300 mt-2">
            { models.map((props, i) => <Result {...props} key={i} />) }
          </ul>
  }

  const models = [
    {
      name: 'Camry',
      results: 689,
      quantity: 8,
      backgroundColor: "#EDA857"
    },
    {
      name: 'Corolla',
      results: 462,
      quantity: 7,
      backgroundColor: "#EDD557"
    },
    {
      name: 'Sienna',
      results: 1322,
      quantity: 9,
      backgroundColor: "#ED5757"
    },
    {
      name: 'Land Cruiser',
      results: 326,
      quantity: 5,
      backgroundColor: "#CFED57"
    },
    {
      name: 'Land Cruiser Prado',
      results: 147,
      quantity: 2,
      backgroundColor: "#57ED9C"
    },
    {
      name: 'Fortuner',
      results: 501,
      quantity: 7,
      backgroundColor: "#EDD557"
    }
  ];
  
  const Results__Title = ({ selected_brand, reports, models }) => {
    return (
        <p tw="text-lg text-gray-800 mt-7 mb-2">
          <span tw="font-bold">{ selected_brand }</span> tiene un total de <span tw="font-bold text-blue-700">{reports} reportes</span> entre <b tw="text-primary-500">{models}</b> modelos.
        </p>
    )
  }

  return (
    <div tw="relative flex justify-center bg-gray-100 px-6 sm:px-10">

      <Image src={toyota_logo} tw="hidden lg:block absolute left-[5%] top-[50%] translate-y-[-50%] w-[25%] max-w-[400px] z-10" />

      <div tw="relative z-20 w-full sm:max-w-[400px] mt-3 mb-6 sm:mb-3 bg-gray-100">
        <Results__Title selected_brand="Toyota" reports="8,523" models={48} />
        <Search__Box />
        <Search__Results />
      </div>

      <Image src={toyota_ejemplo} tw="hidden lg:block absolute right-0 top-[50%] translate-y-[-50%] w-[35%] z-10" />
    </div>
    )
}

const Models = () => {
  const [showMore, setShowMore] = useState(false);

  const Model = ({ name = '', tier = 0, description = '', img }) => {
    return (
      <div tw="relative">
        <div tw="absolute top-[-12px] left-[-12px] flex justify-center bg-blue-600 rounded-full px-2 text-3xl text-white font-bold w-[45px] z-20">
          { tier }
        </div>
        <div tw="relative bg-gray-200 border border-gray-300 overflow-hidden w-[350px] sm:mr-10 mb-10 rounded-lg">
          <div tw="flex justify-center items-center rounded-b-lg bg-blue-400 h-[150px] w-full">
            <Image src={ img } tw="w-[220px]"/>
          </div>
          <div tw="p-4">
            <h3 tw="mb-1 font-bold text-lg">{ name }</h3>
            <p>{ description }</p>
          </div>
        </div>
      </div>
    )
  }

  const array_of = (n) => [...Array(n).keys()]
  const car = {
    name: 'Sienna 2020',
    img: car_img,
    tier: 1,
    description: 'This model sufre de aa lot of problems that i don’t know but is the worst.',
  }
  const worst_models = array_of(showMore ? 12 : 6 ).map(() => (car));

  return (
  <div tw="flex flex-col px-5 sm:px-20 pt-5">
    <h4 tw="mb-5 mt-6 text-3xl font-bold text-gray-900 capitalize">Worst Models</h4>
    <div tw="flex w-full flex-wrap max-sm:justify-center">
      { worst_models.map((model, i) => <Model {...model} key={i} />) }
    </div>
    <div tw="flex justify-center mb-5">
      <button onClick={() => { setShowMore(!showMore) }} tw="flex items-center text-2xl font-bold uppercase cursor-pointer hover:text-blue-400">
        Ver más <ArrowIcon tw="ml-2" />
      </button>
    </div>
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