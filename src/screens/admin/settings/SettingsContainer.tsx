import { Button } from "@/components/ui/button"
import Settings from "./Settings"
import { useNavigate } from "react-router-dom"


function SettingsContainer() {
    const navigate = useNavigate();

  
  return (
    <>
        <div className="relative">
            <div className="absolute -left-[700px] phone:left-0 sm:-left-48 top-32 items-start justify-start">
                <Button className="phone:w-[150%] sm:w-[150%]" onClick={() => { navigate("/admin/menu"); }}>
                    Go Back
                </Button>
            </div>
        </div>
        <div className=" min-h-full w-full max-w-[1468px]  flex flex-col justify-center">
            <Settings />
        </div>
    </>
    
  )
}

export default SettingsContainer