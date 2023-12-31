/* eslint-disable react/prop-types */
import { useState, useEffect, createContext, useRef } from 'react';
const dataURL = `https://vidia-copy.onrender.com/product`;
const items = [
  {
    id: 1,
    name: 'TechRadar',
    comment: `More powerful than we even thought possible`,
    clicked: true,
  },
  {
    id: 2,
    name: 'PCWorld',
    comment: `Fantastically, futuristically fast`,
    clicked: false,
  },
  {
    id: 3,
    name: 'The Verge',
    comment: `I couldn't quite believe my eyes... The RTX 4090 is a beast`,
    clicked: false,
  },
  {
    id: 4,
    name: 'Hardware Canucks',
    comment: `Creator apps... absolutely demolishing every other card`,
    clicked: false,
  },
  {
    id: 5,
    name: 'KitGuru',
    comment: `A new efficiency champion`,
    clicked: false,
  },
  {
    id: 6,
    name: 'TweakTown',
    comment: `DLSS 3 is pure magic`,
    clicked: false,
  },
];
const LandingPageContext = createContext();
export const LandingPageProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [specs, setSpecs] = useState({});
  const accoladesList = useRef(items);
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  useEffect(() => {
    const getProductData = async () => {
      const productRes = await fetch(`${dataURL}`);
      const productData = await productRes.json();
      setData(productData[0]);
      const specsRes = await fetch(`${dataURL}/1`);
      const specsData = await specsRes.json();
      setSpecs(specsData);
    };
    getProductData();
  }, []);
  return (
    <LandingPageContext.Provider
      value={{
        data,
        specs,
        accoladesList,
        isHovered,
        setIsHovered,
        handleMouseEnter,
        handleMouseLeave,
      }}
    >
      {children}
    </LandingPageContext.Provider>
  );
};
export default LandingPageContext;
