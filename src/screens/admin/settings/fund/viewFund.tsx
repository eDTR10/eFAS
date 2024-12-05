import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Edit, Trash2Icon } from "lucide-react"


function viewFund({fundType, fundAll}:any) {
  return (
    <>
    <Dialog >
        <DialogTrigger>
            <Button>View Fund type</Button>
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
                                            <TableHead className="text-lg text-end font-gbold">Fund type</TableHead>
                                            <TableHead className="text-lg text-end font-gbold">Action</TableHead>
                                        </div>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                <div className="mt-10 w-[100%] border border-primary-foreground">
                                    {fundAll && fundAll.length > 0 ? (
                                    fundAll.map((fund:any, index:any) => (
                                        <TableRow key={index}>
                                            <TableCell>{fund?.fund_type}</TableCell>
                                            <TableCell>
                                                <div className="flex flex-row text-end">
                                                    <Edit className="w-5 h-5 text-lime-700 font-bold" />
                                                    <Trash2Icon className="w-5 h-5 text-red-700 font-bold" />
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

export default viewFund