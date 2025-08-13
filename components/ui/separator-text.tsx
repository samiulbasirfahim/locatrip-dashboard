import { Separator } from "@/components/ui/separator";
import { ReactNode } from "react";

export function SeparatorWithText({ children }: { children: ReactNode }) {
    return (
        <div className="flex items-center py-5">
            <Separator />
            <span className="mx-4 text-sm text-muted-foreground">{children}</span>
            <Separator />
        </div>
    );
}
