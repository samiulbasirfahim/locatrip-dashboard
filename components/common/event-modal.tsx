import { DialogTitle } from "@radix-ui/react-dialog";
import { Dialog, DialogContent } from "../ui/dialog";
import { H3, P } from "../ui/typography";
import Input from "./input";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { EventType } from "@/app/(dashboard)/management/events/page";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    selectedPref: EventType | null;
    onCreatePref: () => void;
    onUpdatePref: () => void;
};

export default function EventModal({ isOpen, onClose, selectedPref }: Props) {
    const [formData, setFormData] = useState({
        title: "",
    });

    useEffect(() => {
        if (selectedPref)
            setFormData({
                ...(selectedPref as unknown as typeof formData),
            });
        else
            setFormData({
                title: "",
            });
    }, [selectedPref]);

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-xl">
                <DialogTitle className="flex items-start gap-1 justify-between w-auto flex-col">
                    <div>
                        <H3 className="mb-0">
                            {selectedPref === null ? "Add " : "Edit"} New Category
                        </H3>
                        <P className="!mt-0 text-muted-foreground">
                            {selectedPref === null ? "Add a new " : "Edit "} event cateogory
                        </P>
                    </div>
                </DialogTitle>

                <form className="flex flex-col mt-10 gap-4">
                    <Input
                        label="Preference Name"
                        id="preference-name"
                        placeholder="Preference Name"
                        defaultValue={formData.title}
                    />

                    <div className="flex items-center justify-center">
                        <Button>{selectedPref === null ? "Add Category" : "Save Change"}</Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
