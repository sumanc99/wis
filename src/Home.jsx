import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom";

// home component
function Home(){
    return<>

        <div className="flex justify-center h-screen ">
            <div className="text-center space-y-10 m-20 p-10 ">
                <h1 className="text-5xl font-bold mb-9">
                    Show Your Product In Seconds
                </h1>

                <Link to='/choice'>
                    <Button size="lg" className="px-6 py-10 text-3xl">
                        Get Started
                    </Button>
                </Link>
                
            </div>
         
        </div>

    </>;
}



export default Home

