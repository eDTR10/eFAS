import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
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
import {  Edit, Trash2Icon, } from "lucide-react";
  

function ViewTeam({teamList, teamAll}:any) {
    
    
  return (
    <div className="">
    <Dialog >
            <DialogTrigger>
                <Button onClick={teamList}>View Team</Button>
            </DialogTrigger>
            <DialogContent className="max-w-[500px] md:w-[95%] min-h-[50vh] rounded-sm ">
                
                    <DialogTitle className=" text-2xl text-start font-gbold">List of Team</DialogTitle>
                        <div className="overflow-x-auto border border-primary mt-4">
               
                                <Table  className="w-full"   >
                                    <TableHeader  className="sticky top-0  z-10 bg-primary">
                                        <TableRow>
                                            <TableHead className="text-md  w-[300px]   text-accent font-gbold">Team Code</TableHead>
                                            <TableHead className="text-md  w-[400px]    text-accent  font-gbold">Team Name</TableHead>
                                            <TableHead className="text-md   text-accent  font-gbold">Total Budget</TableHead>
                                            <TableHead className="text-md    text-accent  font-gbold">Action</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody >
                        
                                        {teamAll && teamAll.length > 0 ? (
                                            teamAll.map((team: any, index: any) => (
                                              
                                                    <TableRow key={index} className="border border-border">
                                                        <TableCell>{team?.team_code}</TableCell>
                                                        <TableCell>{team?.name}</TableCell>
                                                        <TableCell>{team?.budget}</TableCell>
                                                        <TableCell>
                                                            <div className="flex flex-row">
                                                                <Edit className="w-5 h-5 text-lime-700 font-bold"/>
                                                                <Trash2Icon className="w-5 h-5 text-red-700 font-bold"/>
                                                            </div>
                                                        </TableCell>
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
                    
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default ViewTeam