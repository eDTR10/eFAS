import React, { useState } from 'react';
import { ArrowBigLeft, Receipt } from "lucide-react";
import AddRecordTable from "./add_record_table/AddRecordTable";
import AddRecordDialog from './dialogs/AddRecordDialog';
import UpdateRecordDialog from './dialogs/UpdateRecordDialog';


const AddRecordContainer = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const [records, setRecords] = useState([]);

    const handleSave = (newRecord: any) => {
        // setRecords([...records, newRecord]);
    };

    return (
        <div className="w-[95%] mt-[120px]">
            <div className="flex justify-between">
                <p className="text-primary font-gsemibold text-lg mb-4">Add Record</p>
                <button
                    className="bg-primary text-white px-4 py-2 rounded-md mb-4 flex gap-x-2"
                    onClick={() => setIsDialogOpen(true)}
                >
                    Add Record <Receipt />
                </button>
            </div>
            <AddRecordTable />
            <br />
            <AddRecordDialog
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                onSave={handleSave}
            />


        </div>
    );
};

export default AddRecordContainer;