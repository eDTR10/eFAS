import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Edit, Trash2Icon} from "lucide-react";

function ViewTeam({teamList, teamAll}:any) {
  return (
   <>
    <Dialog >
        <DialogTrigger>
            <Button onClick={teamList}>View Team</Button>
        </DialogTrigger>
        <DialogContent className="max-w-xl h-[50vh]">
            <DialogHeader>
                <DialogTitle className="text-2xl text-start font-gbold">List of Team</DialogTitle>
                    <DialogDescription>
                        <div className="overflow-auto bg-primary-foreground h-[40vh]">
                            <Table className="w-full ">
                                <TableHeader className=" border border-primary-foreground">
                                    <TableRow>
                                        <div className="fixed top-14 bg-primary-foreground w-[90%]">
                                            <TableHead className="text-lg text-center font-gbold">Team Code</TableHead>
                                            <TableHead className="text-lg text-center font-gbold">Team Name</TableHead>
                                            <TableHead className="text-lg text-center font-gbold">Total Budget</TableHead>
                                            <TableHead className="text-lg text-center font-gbold">Action</TableHead>
                                        </div>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                <div className="mt-10 border border-primary-foreground">
                                    {teamAll && teamAll.length > 0 ? (
                                        teamAll.map((team: any, index: any) => (
                                            <TableRow key={index} className="">
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
                                        </div>
                                </TableBody>
                            </Table>
                        </div>
                    </DialogDescription>
                </DialogHeader>
        </DialogContent>
    </Dialog>
    </>
  )
}

export default ViewTeam