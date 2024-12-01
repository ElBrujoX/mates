import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function TournamentEntryModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Enter Tournament</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tournament Entry</DialogTitle>
          <DialogDescription>
            Enter tournament details and registration coming soon
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

