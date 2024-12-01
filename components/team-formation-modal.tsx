import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function TeamFormationModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Form Team</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Team Formation</DialogTitle>
          <DialogDescription>
            Team formation and management coming soon
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

