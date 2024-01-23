"use client";

import { useState } from "react";
import Burger from "../Burger";
import MobileNav from "../MobileNav";

function MobileBlock() {
   const [isActive, setActive] = useState(false);
   return (
      <>
         <Burger isActive={isActive} setActive={setActive} />
         <MobileNav isActive={isActive} setActive={setActive} />
      </>
   );
}
export default MobileBlock;
