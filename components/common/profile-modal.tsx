import { DialogTitle } from "@radix-ui/react-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";
import { H3 } from "../ui/typography";
import { Mail, MapPin, Users, UsersRound } from "lucide-react";

type Props = {
  showModal: boolean;
  onClose: () => void;
};

export function ProfileModal({ showModal, onClose }: Props) {
  return (
    <Dialog open={showModal} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-lg">
        <DialogTitle>
          <div className="flex">
            <div className="flex items-center gap-2 justify-between w-auto">
              <Avatar className="rounded-full h-12 w-12">
                <AvatarImage
                  src="https://github.com/evilrabbit.png"
                  alt="@evilrabbit"
                  className=""
                />
                <AvatarFallback>user avatar</AvatarFallback>
              </Avatar>
              <H3>Brooklyn Simmons</H3>
            </div>
          </div>
        </DialogTitle>

        <div className="flex flex-col shadow-lg shadow-black/10 p-4 gap-3">
          <div className="flex items-center gap-2 text-primary">
            <UsersRound />
            Basic Information
          </div>

          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 text-muted-foreground">
                <Mail className="w-5" strokeWidth={1} /> Email:
              </span>
              sara@gmail.com
            </div>

            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 text-muted-foreground">
                <MapPin className="w-5" strokeWidth={1} /> Location:
              </span>
              New York, USA
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
