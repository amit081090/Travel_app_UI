'use client'
import Image from "next/image";
import { useState } from "react";
type ButtonProps = {

    type:'button' | 'submit';
    title:string;
    title1:string;
    icon?:string;
    variant:string;
    full?:boolean;
}

const Button = ({type, title, icon, variant,full}:ButtonProps) => {
const [show ,setShow]=useState();

  return (
    <>
    
      
   <button 
    className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`}
   type={type}
   >
  {icon && <Image src={icon} alt={title} width={24} height={24}/>}
  <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>

   </button>

<button 
className={`flexCenter gap-4 rounded-full border ${variant} ${full && 'w-full'}`}
type={type}
>
{icon && <Image src={icon} alt={title} width={24} height={24}/>}
<label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>

</button>


</>
  )
}

export default Button