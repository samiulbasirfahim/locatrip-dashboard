import { LucideIcon } from "lucide-react";

export type ChildLinkType = {
  title: string;
  href: string;
};

export type LinkType = {
  icon: LucideIcon;
  title: string;
  href: string;
  children: ChildLinkType[];
};
