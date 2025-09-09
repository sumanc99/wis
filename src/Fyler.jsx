import { Button } from "@/components/ui/button"
import {Card,CardContent,CardFooter,CardHeader,CardTitle} from "@/components/ui/card"
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function Fyler() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-full max-w-sm m-5">
        <CardHeader>
          
        </CardHeader>

        <CardContent className="flex flex-col gap-6">
          {/* image */}
          <div className="border text-center">
            <h1>image</h1>
          </div>
          {/* details */}
          <div className="border grid gap-5 p-2 text-center">
            <h1 className="text-xl font-semibold">Indomie</h1>
             <p className="text-red-600 font-bold text-xl">₦5,500</p>
             <p className="text-sm text-gray-500">Available now</p>
          </div>
        </CardContent>

        <CardFooter className="flex items-center justify-center ">
           <Button
          size="lg"
          className="bg-black text-white text-lg px-10 py-6 rounded-xl"
        >
          Download
        </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Fyler
