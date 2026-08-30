import React, { useState } from "react";

import Hero from "./Hero/Hero";
import OurStory from "./OurStory/OurStory";
import Wedding from "./Wedding/Wedding";
import TheDay from "./TheDay/TheDay";
import Details from "./Details/Details";
import Closing from "./Closing/Closing";

import fotoPareja from '../assets/nosotros.jpeg';


const IMG_PAREJA = {fotoPareja};
const IMG_LUGAR  = "https://www.monestirs.cat/monst/annex/espa/calleo/valladolid/palaz/Z-Palazuelos-01.jpg";

export default function Boda() {
  const [clicked, setClicked] = useState(false);
  const wa = "https://wa.me/34665695925?text=¡Hola!%20Confirmo%20que%20estaré%20el%2026%20de%20septiembre%20%F0%9F%A4%8D";

  return (
    <div className="">
{/* HERO SECTION */}
      <Hero />


<OurStory />
<Wedding />
<TheDay />
<Details />
< Closing />
    </div>
  );
}