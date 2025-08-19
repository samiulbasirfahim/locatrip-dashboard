import { ComponentProps } from "react";
import { Input as InputShadcn } from "../ui/input";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";

type Props = {
    label: string;
    id: string;
} & ComponentProps<"input">;

const Input = ({ label, id, ...props }: Props) => {
    return (
        <div className="grid w-full items-center gap-2">
            <Label htmlFor={id}>
                {label}
            </Label>
            <InputShadcn
                {...props}
                id={id}
                name={id}
                className={cn([
                    "h-12 bg-muted-background placeholder:text-muted-foreground/60",
                    props.className,
                ])}
            />
        </div>
    );
};

export default Input;
