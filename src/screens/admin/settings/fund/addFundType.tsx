import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import axios from '../../../../plugin/axios';
import Swal from "sweetalert2";
import { useState } from "react";

function addFundType() {
    const [fundType, setFundType] = useState(''); 
    
    const addFundSave = async () => { 
        const newFund = { fund_type: fundType, }; 
        
        try { 
            const response = await axios.post('fund/all/', newFund); 
            console.log('Fund saved successfully:', response.data); 
            Swal.fire({ 
                icon: "success", 
                title: "Fund saved successfully ...", 
                showConfirmButton: false, timer: 2000 });
                setFundType(''); 
            } catch (error) { 
                console.error('Error saving Fund:', error); 
            } 
        };
  return (
    <>
    <Dialog> 
      <DialogTrigger> 
        <Button>Add Fund Type</Button> 
        </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-start font-gbold">Description Fund Type</DialogTitle>
                          <DialogDescription >
                          <div> 
                                <div className="mb-5"> 
                                    <label className="block text-sm font-medium text-start mt-5">Fund Type</label> 
                                    <input type="text" className="mt-1 p-2 border rounded w-full" 
                                    onChange={(e) => setFundType(e.target.value)} value={fundType} /> 
                                </div> 
                                <Button className="bg-primary w-full" onClick={addFundSave}>Save</Button> 
                            </div>

                             
                          </DialogDescription>
                        
                       
                    </DialogHeader>
            </DialogContent>
     </Dialog></>
  )
}

export default addFundType