import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {  ClipboardIcon, PlusCircleIcon, SettingsIcon, ViewIcon } from "lucide-react"
import { useNavigate } from "react-router-dom"


function CardMenu() {
    const navigate = useNavigate()

  return (
    <div className="flex items-center justify-center h-screen w-full ">
        <div className="grid grid-cols-3 gap-4 w-full p-5 phone:grid-cols-2 sm:grid-cols-2 ">
            {/* Add Saro */}
            <Card className="bg-primary cursor-pointer" >
                <CardHeader>
                    <CardTitle className="flex justify-center">
                    <PlusCircleIcon className="text-white w-14 h-14 animate-bounce"></PlusCircleIcon>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-white text-center text-2xl font-bold">Add Saro</p>
                </CardContent>
            </Card>

            {/* View Records */}
            <Card className="bg-primary cursor-pointer">
                <CardHeader>
                    <CardTitle className="flex justify-center">
                    <ViewIcon className="text-white w-14 h-14 animate-bounce"></ViewIcon>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-white text-center text-2xl font-bold">View Records</p>
                </CardContent>
            </Card>

            {/* View Reports*/}
            <Card className="bg-primary cursor-pointer hover:bg-dark transition duration-300">
                <CardHeader>
                    <CardTitle className="flex justify-center">
                    <ClipboardIcon className="text-white w-14 h-14 animate-bounce"></ClipboardIcon>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-white text-center text-2xl font-bold">View Reports</p>
                </CardContent>
            </Card>

            {/* Settings*/}
            <Card className="bg-primary cursor-pointer hover:bg-dark transition duration-300" onClick={() => {
        navigate('/admin/settings')
       
    }}>
                <CardHeader>
                    <CardTitle className="flex justify-center">
                    <SettingsIcon className="text-white w-14 h-14 animate-bounce"></SettingsIcon>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-white text-center text-2xl font-bold">Settings</p>
                </CardContent>
            </Card>
        </div>
        
        

        

    </div>
  )
}

export default CardMenu