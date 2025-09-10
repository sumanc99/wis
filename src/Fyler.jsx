import { Button } from "@/components/ui/button"
import {Card,CardContent,CardFooter,CardHeader,CardTitle} from "@/components/ui/card"
import { useLocation } from "react-router-dom"
import noodles from "./assets/images/noodleplate.png"
import html2canvas from "html2canvas"
import { useRef } from "react"

function Fyler() {
  const location = useLocation();
  const {product, price} = location.state || {};
  const componentRef = useRef();

  const handleDownload = ()=>{

    const flyer = componentRef.current;

    html2canvas(flyer, {scale:1.3})
    .then((canvas)=>{
      const link = document.createElement("a");
      link.download = "fyler.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-sm m-5" >
        {/* <CardHeader>
          
        </CardHeader> */}

        <CardContent className="flex flex-col gap-6" ref={componentRef}>
          {/* business Name */}
          <div className="text-center  flex-col gap-6 ">
            <h2 className="text-3xl mt-5 font-bold">
              Bana’s Golden Bite
            </h2>
            <p className="text-center text-sm m-1 text-gray-400 font-semibold">
              Your Everyday Chill Spot
            </p>
            <p className="text-center text-sm m-1 tracking-wider font-semibold">
              Contact: +2347066872703
            </p>
          </div>
          
          {/* image */}
          <div className="text-center">
            <img 
            src={product ? `/products/${product}.png` : ""}
            alt={product}
            className="mx-auto w-full h-auto max-w-xs sm:max-w-sm md:max-w-md rounded-lg object-contain"        
            />
          </div>
          {/* details */}
          <div className="grid gap-5 p-2 text-center">
            <h1 className="text-4xl font-semibold capitalize">{product}</h1>
             <p className="text-red-600 font-bold text-4xl">{price}</p>
             <p className="text-xl text-gray-500">Available now</p>
          </div>
        </CardContent>

        <CardFooter className="flex items-center justify-center ">
           <Button
          size="lg"
          className="bg-black text-white text-lg px-10 py-6 rounded-xl"
          onClick = {handleDownload}
          >
          Download
        </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Fyler
