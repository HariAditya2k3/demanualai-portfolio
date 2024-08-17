import { GlobeDemo } from "../components/globalservice";
import { AppleCardsCarouselDemo } from "../components/Carousel";
import { TypewriterEffectDemo } from '../components/typewriter';
export default function PageName() {
  return (
    <div>
      
      {/* <div className="mb-0 border-4 border-gray-800 rounded-lg shadow-lg hover:shadow-2xl hover:border-gray-600 transition-all duration-300 ease-in-out">
  <GlobeDemo />
</div> */}


      {/* Reduce the top margin of AppleCardsCarouselDemo */}
      <div className="mt-0"> {/* Set margin-top to 0 or a smaller value */}
         <TypewriterEffectDemo />
        <AppleCardsCarouselDemo />
      </div>
    </div>
  );
}
