import { Url } from "url";

export interface Social {
    name: string;
    icon: React.ReactNode;
    href: string | Url;
}
