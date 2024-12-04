import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  

function AddTeamDialog() {
  return (
    <>
      <Dialog>
            <DialogTrigger>
                <Button>Add Team</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-start font-gbold">Add Team</DialogTitle>
                        <DialogDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </DialogDescription>
                    </DialogHeader>
            </DialogContent>
        </Dialog>
    </>
  )
}

export default AddTeamDialog