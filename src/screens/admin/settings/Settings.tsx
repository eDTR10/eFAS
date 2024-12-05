
import AddTeamDialog from "./addTeamDialog"
import ViewTeam from "./viewTeam"
import axios from '../../../plugin/axios';
import { useEffect, useState } from "react";

function Settings() {
 const [teamAll, setTeamAll] = useState<any>([])

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

    useEffect(() => {
        teamList()
        
    }, []);
    
  return (
    <div className=" flex items-center justify-center h-screen w-full ">
  
        <div className="grid grid-cols-2 gap-16 mt-20">
            <div className="relative">
                <p className="text-2xl font-gbold">Team Settings:</p>
                <div className="flex items-start justify-start gap-4">
                    <AddTeamDialog teamList={teamList}/>
                    <ViewTeam />
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