import { FC, HTMLAttributes } from "react";
import { Url } from "url";
import Button from "./Button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Social } from "@/lib/types";

interface SocialsProps extends HTMLAttributes<HTMLDivElement> {
    socials: Social[];
}

const Socials: FC<SocialsProps> = ({ socials, className, ...props }) => {
    return (
        <span className={cn(`flex flex-wrap gap-10`, className)}>
            {socials.map((social, key) => (
                <Link key={key} aria-label={social.name} href={social.href}>
                    <Button
                        className="text-4xl p-0 text-inherit"
                        variant={"secondary"}
                        aria-label={social.name}
                    >
                        {social.icon}
                    </Button>
                </Link>
            ))}
        </span>
    );
};

export default Socials;
