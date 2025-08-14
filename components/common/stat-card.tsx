import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { H2, H4 } from "../ui/typography";

type PropsType = {
  label: string;
  value: string;
  isUp: boolean;
  subValue: string;
  subText: string;
};

export function StatCard({ label, value, isUp, subText, subValue }: PropsType) {
  return (
    <Card>
      <CardContent>
        <H4 className="text-muted-foreground">{label}</H4>
        <H2>{value}</H2>
        <small className="text-muted-foreground text-sm flex gap-2 items-center">
          <span
            className="flex items-center"
            style={{
              color: isUp ? "#22C55E" : "#E32D2D",
            }}
          >
            {isUp ? (
              <ArrowUpRight className="w-6" strokeWidth={1} />
            ) : (
              <ArrowDownRight className="w-6" strokeWidth={1} />
            )}
            {subValue}
          </span>
          {subText}
        </small>
      </CardContent>
    </Card>
  );
}
