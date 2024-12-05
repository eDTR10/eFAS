import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Edit, Trash2Icon } from "lucide-react"
import axios from '../../../../plugin/axios';
import { useEffect, useState } from "react";

function viewFund() {
    const [fundAll, setFundAll] = useState<any>([])

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
        fundType();
    }, []);
  return (
    <>
    <Dialog >
        <DialogTrigger>
            <Button>View Fund type</Button>
        </DialogTrigger>
        <DialogContent className="max-w-xl h-[50vh]">
            <DialogHeader>
                <DialogTitle className=" text-2xl text-start font-gbold">List of Funds</DialogTitle>
                    <DialogDescription>
                            <Table className="w-full ">
                                <TableHeader  className="sticky top-0  z-10 bg-primary">
                                    <TableRow>
                                        <TableHead className="text-md  w-[300px]   text-accent font-gbold">Fund type</TableHead>
                                        <TableHead className="text-md  w-[300px]   text-accent font-gbold">Action</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
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
                                            <TableCell colSpan={3}>No Funds Found</TableCell>
                                        </TableRow>
                                    )}
                                      
                                </TableBody>
                            </Table>
                        
                    </DialogDescription>
                </DialogHeader>
        </DialogContent>
    </Dialog>
    </>
  )
}

export default viewFund