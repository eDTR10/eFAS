
import AddTeamDialog from "./AddTeamDialog"
import ViewTeam from "./ViewTeam"


function Settings() {
  return (
    <div className="flex items-center justify-center h-screen w-full ">
  
        <div className="grid grid-cols-2 gap-16 mt-20">
            <div className="">
                <p className="text-2xl font-gbold">Team Settings:</p>
                <div className="flex items-start justify-start gap-4">
                    <AddTeamDialog />
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