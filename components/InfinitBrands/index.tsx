import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import Image from "next/image";
import { infinitBrands } from "./constants";

export const InfinitBrands = () => {
  const width = "100px";
  const height = "100px";
  const quantity = infinitBrands.length;

  return (
    <div className="flex items-center justify-center">
      <div
        className="
          w-full overflow-hidden 
          mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
          hover:[&_.item]:paused 
          hover:[&_.item]:grayscale
        "
        style={
          {
            "--width": width,
            "--height": height,
            "--quantity": quantity,
          } as React.CSSProperties
        }
      >
        <div className="flex w-full min-w-[calc(var(--width)*var(--quantity))] h-20 mt-8 relative">
          {infinitBrands.map((brands, index) => (
            <div
              key={index}
              className="
                item 
                absolute left-full 
                w-(--width) h-20 
                transition-[filter] duration-500 
                animate-[autoRun_80s_linear_infinite]
                hover:grayscale-0!
              "
              style={
                {
                  "--position": index + 1,
                  animationDelay:
                    "calc((80s / var(--quantity)) * (var(--position) - 1))",
                } as React.CSSProperties
              }
            >
              <Image
                src={brands.src}
                alt={`Slider item ${index + 1}`}
                width={50}
                height={50}
                className="w-full h-full block"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
