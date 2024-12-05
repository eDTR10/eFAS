import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import AddTeamDialog from "./team/addTeamDialog";
import ViewTeam from "./team/viewTeam";
import { ArrowBigLeft } from "lucide-react";
import AddFundType from "./fund/addFundType";
import ViewFund from "./fund/viewFund";
import { useEffect, useState } from "react";
import axios from '../../../plugin/axios';

function SettingsContainer() {
    const navigate = useNavigate();
    const [teamAll, setTeamAll] = useState<any>([])
    const [fundAll, setFundAll] = useState<any>([])

    function teamList() {
        axios.get('team/all/', {
            headers: {
                Authorization: `Token ${localStorage.getItem("accessToken")}`,
              },
        }).then((team:any) => {
            setTeamAll(team.data);
            console.log(team);
        })
    }
   
    function fundType() {
        axios.get('fund/all/', {
            headers: {
                Authorization: `Token ${localStorage.getItem("accessToken")}`,
              },
        }).then((fund:any) => {
            setFundAll(fund.data);
            console.log(fund);
        })
    }

    useEffect(() => {
        teamList();
        fundType();
    }, []);

  
  return (
    <div className=" relative w-full min-h-screen bg-background flex items-center justify-center flex-col">
        <Button className=" absolute top-0 flex gap-2  mt-40  ml-10 md:ml-2 z-20 self-start" onClick={() => { navigate("/admin/menu"); }}>
            <ArrowBigLeft/> Go Back
        </Button>

        <div className=" w-full h-full flex items-center justify-center ">
            <div className=" h-full w-[60%] px-2 sm:w-full  gap-5 grid grid-cols-2  justify-center">
                <div className="relative bg-card flex flex-col gap-2 border border-border px-3 py-2 rounded-md ">
                    <p className="text-2xl font-gbold text-accent-foreground md:text-base">Team Settings</p>
                <div className="flex items-start justify-start gap-4">
                    <AddTeamDialog teamList={teamList}/>
                    <ViewTeam teamList={teamList} teamAll={teamAll}/>
                </div>
            </div>
            <div  className="relative bg-card flex flex-col gap-2 border border-border px-3 py-2 rounded-md ">
                <p  className="text-2xl font-gbold text-accent-foreground md:text-base">Description Fund Type</p>
                <div className="flex items-start justify-start gap-4">
                    <AddFundType fundTypeTable={fundType}/>
                    <ViewFund fundAll={fundAll}/>
                </div>
            </div >
            <div  className="relative bg-card flex flex-col gap-2 border border-border px-3 py-2 rounded-md ">
                <p className="text-2xl font-gbold text-accent-foreground md:text-base">PAP Settings</p>
            </div>
            <div  className="relative bg-card flex flex-col gap-2 border border-border px-3 py-2 rounded-md ">
                <p className="text-2xl font-gbold text-accent-foreground md:text-base">Class Type</p>
            </div>
            <div className="relative bg-card flex flex-col gap-2 border border-border px-3 py-2 rounded-md ">
                <p className="text-2xl font-gbold text-accent-foreground md:text-base">Object Settings</p>
            </div>
            <div className="relative bg-card flex flex-col gap-2 border border-border px-3 py-2 rounded-md ">
                <p className="text-2xl font-gbold text-accent-foreground md:text-base">Claimant</p>
            </div>
        </div></div>
    </div>
    
  )
}

export default SettingsContainer