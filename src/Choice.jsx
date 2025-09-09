import { Button } from "@/components/ui/button"
import {Card,CardContent,CardFooter,CardHeader,CardTitle} from "@/components/ui/card"
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function Choice() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-full max-w-sm m-5">
        <CardHeader>
          <CardTitle className="text-3xl text-center">Choose Your Product</CardTitle>
        </CardHeader>

        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="produc" className="text-lg">
                        Select Product
                    </Label>
                    <Select>
                        <SelectTrigger >
                            <SelectValue placeholder="Select Product" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="price" className="text-lg">
                        Product Price
                    </Label>
                    <Input
                    id="price"
                    type="number"
                    placeholder="#20,000"
                    required
                    />
                </div> 
            </div>
          </form>
        </CardContent>

        <CardFooter>
          <Button className="w-full">Continue</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Choice
