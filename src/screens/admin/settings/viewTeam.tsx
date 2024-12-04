import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

  import {
    Table,
    TableBody,
   
    TableCell,
    
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import axios from '../../../plugin/axios';
import { useEffect, useState } from "react";
  
  


function ViewTeam() {
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
    <div >
    <Dialog>
            <DialogTrigger>
                <Button>View Team</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-2xl text-start font-gbold">List of Team</DialogTitle>
                        <DialogDescription>
                            <div className="overflow-auto bg-primary-foreground h-56 ">
                                <Table className="">
                                    <TableHeader className="border border-primary-foreground">
                                        <TableRow>
                                            <TableHead className="text-lg text-center sticky font-gbold">Team Code</TableHead>
                                            <TableHead className="text-lg text-center sticky font-gbold">Team Name</TableHead>
                                            <TableHead className="text-lg text-center sticky font-gbold">Total Budget</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {teamAll && teamAll.length > 0 ? (
                                            teamAll.map((team: any, index: any) => (
                                                <TableRow key={index}>
                                                    <TableCell>{team?.team_code}</TableCell>
                                                    <TableCell>{team?.name}</TableCell>
                                                    <TableCell>{team?.budget}</TableCell>
                                                </TableRow>
                                            ))
                                        ) : (
                                            <TableRow>
                                                <TableCell colSpan={3}>No Team Found</TableCell>
                                            </TableRow>
                                        )}
                                    </TableBody>
                                </Table>
                            </div>
                       
                        </DialogDescription>
                    </DialogHeader>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default ViewTeam