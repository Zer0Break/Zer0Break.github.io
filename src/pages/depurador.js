import React, { useState, useRef } from "react";
import tw from "twin.macro";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useFormik } from 'formik';
import Link from "next/link.js";
import Image from 'next/image.js';
import AnimationRevealPage from "./../helpers/AnimationRevealPage";
import { SectionHeading} from "./../components/misc/Headings.js";
import { Dropdown } from 'primereact/dropdown';
import { Toast } from 'primereact/toast';
import { InputNumber } from 'primereact/inputnumber';

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import imagen from "./../images/ad-banner.png";
import heart from "./../images/utility/heart.svg?url";
import quit from "./../images/utility/quit.svg?url";
import back from "./../images/utility/back.svg?url";


const Container = tw.div`w-full mx-auto border-2 rounded-2xl bg-gradient-to-r divide-y md:(border-2 ) lg:(w-4/6 flex justify-center divide-x) 2xl:w-4/6`;
const Heading = tw(SectionHeading)`text-xl text-center italic font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 xl:(text-5xl)`;
const Columns = tw.div`grid grid-cols-2 gap-x-2 gap-y-2 px-4 pb-1 w-full md:(grid gap-x-6 gap-y-8 grid-cols-4 p-4) 2xl:pr-5 `;
const Column = tw.div`col-span-2 w-full`;

const Form = tw.form``
const Cardata = tw.div`flex flex-col w-full p-1 md:divide-y`;
const Description = tw.div`my-1 mx-1 h-16 w-full overflow-auto break-words md:(h-40 mt-5 px-4 w-full)`
const ImageDiv = tw.button`rounded flex mx-auto justify-center w-full md:(justify-center) hover:opacity-25 transition-opacity duration-300 ease-in-out `;

const TinderRow = tw.div`flex -mt-4 justify-center scale-50 h-32 md:scale-75 lg:(scale-100 mt-6)`;
// left-1/2 absolute transform -translate-x-1/2 w-1/3
const Input = tw.input`mt-2 block w-full h-10 rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`;
const Label = tw.label`block text-sm font-medium leading-6 text-gray-900 `;
const CircleWrapper = motion(styled.div` 
  ${tw`inline-flex justify-center items-center h-full aspect-square border-2 rounded-full`}
`);
const CircleFill = motion(styled.button`
  ${tw`inline-flex justify-center items-center h-full aspect-square rounded-full`}
`);
const circleVariants = {
    visible: { scale: 0.85, opacity: 1 },
    hidden: { opacity: 0 },
};

const marcas = [
    {
        name: 'Toyota',
        models: ['Camry', 'Corolla', 'RAV4', 'Highlander', 'Land Cruiser Prado']
    },
    {
        name: 'Honda',
        models: ['Civic', 'Accord', 'CR-V', 'Pilot']
    },
    {
        name: 'Ford',
        models: ['Mustang', 'F-150', 'Explorer', 'Escape']
    },
    {
        name: 'Chevrolet',
        models: ['Silverado', 'Equinox', 'Camaro', 'Tahoe']
    }
];

export default function Depurador({
    heading = "SUPER DEPURADOR",
    linkCarImg = "https://scontent-bos5-1.xx.fbcdn.net/v/t39.30808-6/346077822_2982464465231365_3315792677596198824_n.jpg?stp=dst-jpg_p640x640&_nc_cat=108&ccb=1-7&_nc_sid=3b2858&_nc_ohc=RL1iPppDnCgAX_4WnqM&_nc_ht=scontent-bos5-1.xx&oh=00_AfBpFno2LVaiV_8Ryt-_vH46rL2kU_47Ag4_tqhKs_olYQ&oe=64700762",
    linkCar = "https://www.facebook.com/marketplace/item/255847676854315/?ref=browse_tab&referral_code=marketplace_top_picks&referral_story_type=top_picks",
    carDescription = "2012 Mitsubishi Lancer Ralliart with 54k miles. Motor was just completely rebuilt (700miles on the build), new crankshaft, new Wiseco forged pistons (block was bored to 87mm for new pistons) new Manley connecting rods,new acl main bearings,new king maxkote rod bearings, new oil pump. All new seals.Cylinder head was just cleaned and pressure tested. GSC S2 camshafts+Evo X turbo swap+big ets intercooler+piping+ets manifold+ets downpipe+ets intake+Tial Q BOV+driven fab catch can.New Turbo Smart wastegate. Camshaft position sensors+VTT solenoid.New drilled and slotted rotors with new pads. New 18x9.5 225/40r18, about 700 miles on them. Lowered on D2 coilovers have about 10k on them. Has recaro seats. Ultimate racing cat back. 10”subwoofer built into trunk Transmission fluid and filter changed at54k. New front cv shafts. New crankshaft position sensor. Intermittent issue where transmission doesn’t go into gear,no slipping or hard shift before   Drives as of 3/23 8700 obo"
}) {
    const [selectedMarca, setSelectedMarca] = useState(null);
    const [filteredModels, setFilteredModels] = useState([]);

    const toast = useRef(null);
    const show = (values) => {
        toast.current.show({ severity: 'success', summary: 'Submitted', detail: `${values.marca} ${values.model} ` });
    };

    const formik = useFormik({
        initialValues: {
            marca: '',
            model: '',
            year: null,
            price: '0',
            cilinders: '4',
            fuelType: '',
            traccion: '',
            divisa: 'DOP'
        },
        validate: (values) => {
            let errors = {};

            if (!values.marca) {
                errors.marca = 'Marca es necesario.';
            }
            else if (!values.model) {
                errors.model = 'Modelo es necesario mmg.';
            }
            else if (values.year < 1960) {
                errors.year = 'El Año no puede ser menor a 1960.';
            } else if (values.year > 2027) {
                errors.year = 'El Año no puede ser mayor a 2027.';
            }

            return errors;
        },
        onSubmit: (values) => {
            show(values);
            console.log(values);
            formik.resetForm();
            setSelectedMarca('');
        }
    });

    const handleMarcaChange = (e) => {
        const selectedMarcaValue = e.value;
        setSelectedMarca(selectedMarcaValue);

        const filteredModels = selectedMarcaValue.models;
        setFilteredModels(selectedMarcaValue.models);
        console.log(filteredModels);

        formik.setFieldValue('marca', selectedMarcaValue.name);
        formik.setFieldValue('model', ''); // Reset the selected model
    };

    const isFormFieldInvalid = (values) => !!(formik.touched[values] && formik.errors[values]);

    const getFormErrorMessage = (values) => {
        return isFormFieldInvalid(values) ? <small className="p-error">{formik.errors[values]}</small> : <small className="p-error">&nbsp;</small>;
    };

    const [isGreenVisible, setGreenVisible] = useState(false);
    const [isRedVisible, setRedVisible] = useState(false);
    const [isGoldVisible, setGoldVisible] = useState(false);

    const handleButtonClick = (setState) => {
        setState(true);

        setTimeout(() => {
            setState(false);
        }, 100); // Adjust the delay time (in milliseconds) as needed
    };

    return (

        <AnimationRevealPage disabled>
            <div tw="hidden md:flex justify-center mt-8 rotate-180">
                <Image src={imagen} alt="Ad example" width={728} height={90} />
            </div>

            <Form onSubmit={formik.handleSubmit}>
                <Toast ref={toast} />
                <Heading>{heading}</Heading>
                <Container>

                    <Columns className="p-fluid">
                        <Column>
                            <Label >Marca {getFormErrorMessage('marca')}</Label>
                            <Dropdown
                                inputId="marca"
                                name="marca"
                                value={selectedMarca}
                                options={marcas}
                                optionLabel="name"
                                placeholder="Marca"
                                className={formik.errors.marca ? 'p-invalid' : ''}
                                onChange={handleMarcaChange}
                                tw="h-10 md:h-12"
                            />
                        </Column>

                        <Column>

                            <Label htmlFor="Modelo" >Modelo {getFormErrorMessage('model')}</Label>
                            <Dropdown
                                inputId="model"
                                name="model"
                                value={formik.values.model}
                                options={filteredModels}
                                optionLabel=""
                                placeholder="Modelo"
                                disabled={!selectedMarca}
                                onChange={formik.handleChange}
                                tw="h-10 md:h-12"
                            />
                        </Column>

                        <Column tw='col-span-1 md:(col-start-1 col-span-2)'>
                            <Label htmlFor="year" >
                                Año {getFormErrorMessage('year')}
                            </Label>
                            <InputNumber
                                inputId="in_year"
                                name="year"
                                placeholder="Año"
                                useGrouping={false}
                                value={formik.values.year}
                                onValueChange={formik.handleChange}
                                className={formik.errors.year && (formik.values.year) ? 'p-invalid' : ''}
                                tw='text-xl font-bold h-10 md:h-12' />

                        </Column>

                        <Column tw='col-span-1 md:(col-span-2)'>
                            <Label htmlFor="cilinders" >
                                Cilindros
                            </Label>
                            <Dropdown
                                inputId="cilinders"
                                name="cilinders"
                                value={formik.values.cilinders}
                                options={['2', '3', '4', '5', '6', '8', '10', '12']}
                                placeholder="Cilindros"
                                onChange={formik.handleChange}
                                tw="h-10 md:h-12"
                            />
                        </Column>

                        <Column tw='col-span-1 md:(col-start-1 col-span-2)'>
                            <Label htmlFor="fuelType" >
                                Fuel Type
                            </Label>
                            <Dropdown
                                inputId="fuelType"
                                name="fuelType"
                                value={formik.values.fuelType}
                                options={['Gasolina', 'Diesel', 'GLP', 'EV', 'Hibrido']}
                                placeholder="Fuel Type"
                                onChange={formik.handleChange}
                                tw="h-10 md:h-12"
                            />
                        </Column>

                        <Column tw='col-span-1 md:(col-span-2)'>
                            <Label htmlFor="traccion" >
                                Traccion
                            </Label>
                            <Dropdown
                                inputId="traccion"
                                name="traccion"
                                value={formik.values.traccion}
                                options={['Delantera', 'Trasera', '4WD']}
                                placeholder="Traccion"
                                onChange={formik.handleChange}
                                tw="h-10 md:h-12"
                            />
                        </Column>

                        <Column tw="col-span-1 md:(col-start-1 col-span-2)">
                            <Label htmlFor="price" >
                                Precio
                            </Label>
                            <InputNumber inputId="price"
                                name="price" value={formik.values.price}
                                onValueChange={formik.handleChange}
                                prefix="$ "
                                className={''}
                                tw='text-xl font-bold h-10 md:h-12'
                            />


                        </Column>

                        <Column tw="col-span-1 md:(col-span-2)">
                            <Label htmlFor="divisa" >
                                Moneda
                            </Label>
                            <Dropdown
                                inputId="divisa"
                                name="divisa"
                                value={formik.values.divisa}
                                options={['DOP', 'Dolares']}
                                placeholder="Moneda"
                                onChange={formik.handleChange}
                                tw="h-10 md:h-12"
                            />
                        </Column>

                    </Columns>
                    <Cardata>
                        <Link href={linkCar} passHref>
                            <ImageDiv type="button" >
                                <Image 
                                src={linkCarImg} 
                                width={450} 
                                height={300} 
                                alt="Picture of post's car"
                                tw="rounded-2xl" />
                            </ImageDiv>
                        </Link>
                        <Description>{carDescription} </Description>
                    </Cardata>
                </Container>


                <TinderRow >
                    <CircleWrapper whileTap={() => handleButtonClick(setGoldVisible)} tw='border-amber-400 mr-4 scale-90 transform transition-transform hover:scale-95'>
                        <CircleFill
                            initial="hidden"
                            animate={isGoldVisible ? 'visible' : 'hidden'}
                            variants={circleVariants}
                            tw='flex bg-gradient-to-tr from-amber-60 to-amber-70 scale-110' />
                        <Image src={back} alt="heart" width={50} height={50} tw='pointer-events-none absolute' />
                    </CircleWrapper>
                    <CircleWrapper whileTap={() => handleButtonClick(setRedVisible)} tw='border-red-500 transform transition-transform hover:scale-105'>
                        <CircleFill
                            initial="hidden"
                            animate={isRedVisible ? 'visible' : 'hidden'}
                            variants={circleVariants}
                            tw='flex bg-gradient-to-tr from-red-60 to-red-50 scale-110' />
                        <Image src={quit} alt="heart" width={50} height={50} tw='pointer-events-none absolute' />
                    </CircleWrapper>
                    <CircleWrapper type="submit" whileTap={() => handleButtonClick(setGreenVisible)} tw='border-green-60 ml-4 transform transition-transform hover:scale-105'>
                        <CircleFill
                            initial="hidden"
                            animate={isGreenVisible ? 'visible' : 'hidden'}
                            variants={circleVariants}
                            tw='flex bg-gradient-to-tr from-green-60 to-green-50 scale-110' />
                        <Image src={heart} alt="heart" width={50} height={50} tw='absolute pointer-events-none' />
                    </CircleWrapper>
                </TinderRow>
            </Form>
        </AnimationRevealPage>
    )
}