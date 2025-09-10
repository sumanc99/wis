import { Button } from "@/components/ui/button"
import {Card,CardContent,CardHeader,CardTitle} from "@/components/ui/card"
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Choice() {

  const [price, setPrice] = useState("");
  const [product, setProduct] = useState("");
  const [productError, setProductError] = useState("");

  const navigate = useNavigate();

  // handle price validation
  const handleSubmit = (e)=>{
    e.preventDefault();

    if(product ==""){
       setProductError("Provide Value");
    }else{
      navigate("/fyler",{state:{product,price}});
    }
   
  };

  const handlePrice = (e)=>{
    let value = e.target.value.replace(/[^0-9]/g,"");

    if(value !==""){

      const formatted = new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        minimumFractionDigits: 0,
      }).format(value);

      setPrice(formatted);

    }else{
      setPrice("");
    }
  };

  const handleProduct = (value)=>{

    if(value !==""){
      setProduct(value);
      setProductError("");
    }
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-full max-w-sm m-5">
        <CardHeader>
          <CardTitle className="text-3xl text-center">Choose Your Product</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="produc" className="text-lg">
                        Select Product
                    </Label>
                    <Select onValueChange={(value)=>handleProduct(value)}>
                        <SelectTrigger >
                            <SelectValue placeholder="Select Product" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="indomie">Indomie</SelectItem>
                            <SelectItem value="supreme">Supreme Noodles</SelectItem>
                            <SelectItem value="tea">Tea</SelectItem>
                        </SelectContent>
                    </Select>
                    <p className="text-red-500">{productError}</p>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="price" className="text-lg">
                        Product Price
                    </Label>
                    <Input
                    id="price"
                    type="text"
                    value = {price}
                    onChange = {handlePrice}
                    placeholder="₦0"
                    required
                    />
                </div> 
            <Button className="w-full" type="submit">Continue</Button>
            </div>
          </form>
        </CardContent>
         
      </Card>
    </div>
  )
}

export default Choice
