import Image from 'next/image';
import { ThreeDCardDemo } from "../components/prodcard";
import { TypewriterEffectDemo } from '../components/typewriter';


export default function Products() {
  return ( 
    <div className="mt-0">
    <TypewriterEffectDemo />
      <ThreeDCardDemo />
    </div>
  );
}
