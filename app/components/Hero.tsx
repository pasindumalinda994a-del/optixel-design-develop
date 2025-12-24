import Image from "next/image";
import CircularText from "./CircularText";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#F4F4F5] overflow-hidden">
      {/* Full Section Container with max-w-8xl */}
      <div className="relative max-w-8xl mx-auto min-h-screen">
        {/* Large LX-41 Background Text */}
        <div className="absolute top-0 left-0 right-0 flex items-start justify-center pointer-events-none z-0 -translate-y-20">
          <div 
            className="text-[36rem] font-medium text-[#1B1C1E] leading-none"
            style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
          >
            LX-41
          </div>
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 px-8 pt-24 pb-16">
          {/* Center - Camera Product Display Section */}
          <div className="flex justify-center items-center relative mb-16 z-20">
            <div className="relative w-full max-w-xl">
              <Image
                src="/images/heroimage.png"
                alt="LX-41 Camera being held in hand"
                width={800}
                height={600}
                className="w-full h-auto object-contain relative z-10"
                priority
              />
            </div>
          </div>

          

          {/* Option 2: Absolute positioning examples (uncomment to use) */}
          
          <CircularText 
            text="Watch the video - Watch the video - " 
            spinDuration={20}
            onHover="speedUp"
            className="text-black"
            position="absolute"
            top="50%"
            left="60%"
            zIndex={20}
          />
         
          
          
        </div>
      </div>
    </section>
  );
}

