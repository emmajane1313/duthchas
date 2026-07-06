import { FunctionComponent, JSX } from "react";
import MarqueeText from "react-fast-marquee";

const Marquee: FunctionComponent = (): JSX.Element => {
  return (
    <div className="relative bottom-0 left-0 w-full h-fit flex flex-col z-20">
      <div className="relative w-full bg-red h-3"></div>
      <div className="relative w-full bg-blue h-3"></div>
      <div className="relative w-full bg-green h-3"></div>
      <div className="relative w-full h-10 border-y border-white flex flex-row bg-black">
        <MarqueeText gradient={false} speed={70} direction={"right"}>
          {Array.from({ length: 30 }).map((_, index: number) => {
            return (
              <span className="relative text-xs text-white px-5" key={index}>
                'S e Emma-Jane MacKinnon-Lee an t-ainm a th' orm. Tha mi às an
                teaghlach MacKinnon. 'S e Gàidheal a th’ annam.
              </span>
            );
          })}
        </MarqueeText>
      </div>
      <div className="relative w-full bg-white h-3"></div>
      <div className="relative w-full bg-rojo h-3"></div>
      <div className="relative w-full bg-morado h-3"></div>
    </div>
  );
};

export default Marquee;
