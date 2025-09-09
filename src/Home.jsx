import { Button } from "@/components/ui/button"

// home component
function Home(){
    return<>

        <div className="flex justify-center h-screen ">
            <div className="text-center space-y-10 m-20 p-10 ">
                <h1 className="text-5xl font-bold">
                    Show Your Product In Seconds
                </h1>
                <Button size="lg" className="px-6 py-10 text-3xl">
                    Get Started
                </Button>
                
            </div>
         
        </div>

    </>;
}



export default Home

