import { Button } from "@/components/ui/button"

function Settings() {
  return (
    <div className="flex items-center justify-center h-screen w-full ">
  
        <div className="grid grid-cols-2 gap-16 mt-20">
            <div className="">
                <p className="text-2xl font-gbold">Team Settings:</p>
                <div className="flex items-start justify-start gap-4">
                    <Button>Add Team</Button>
                    <Button>View Team</Button>
                </div>
                
            </div>
            <div>
                <p className="text-2xl font-gbold">Description Fund Type:</p>
            </div>
            <div>
                <p className="text-2xl font-gbold">Description Fund Type:</p>
            </div>
            <div>
                <p className="text-2xl font-gbold">Description Fund Type:</p>
            </div>
            <div>
                <p className="text-2xl font-gbold">Description Fund Type:</p>
            </div>
            <div>
                <p className="text-2xl font-gbold">Description Fund Type:</p>
            </div>

            
        </div>
    </div>

  )
}

export default Settings