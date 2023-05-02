import { ChangeEventHandler, FC, InputHTMLAttributes } from "react";
import * as Label from "@radix-ui/react-label";
import { cn } from "@/lib/utils";

export interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    labelText: string;
    inputText?: string;
    InputElement?: React.ReactNode;
}

const Field: FC<FieldProps> = ({
    labelText,
    id,
    InputElement,
    className,
    onChange,
    type,
    ...props
}) => {
    return (
        <fieldset className="flex flex-col justify-center">
            <Label.Root className="flex-1" htmlFor={id}>
                {labelText}
                <span className="text-red-500">
                    {props.required ? "*" : null}
                </span>
            </Label.Root>
            {InputElement ? (
                InputElement
            ) : type !== "textarea" ? (
                <>
                    <input
                        className={cn(
                            "flex-1 w-full outline-none bg-stone-500 text-stone-50 dark:bg-stone-500 dark:text-stone-50 px-5 py-2 rounded-md focus-within:ring ring-orange-500/20",
                            className
                        )}
                        id={id}
                        name={id}
                        onChange={onChange}
                        type={type}
                        {...props}
                    />
                </>
            ) : (
                <textarea
                    className={cn(
                        "flex-1 w-full outline-none bg-stone-500 text-stone-50 dark:bg-stone-500 dark:text-stone-50 px-5 py-2 rounded-md focus-within:ring ring-orange-500/20",
                        className
                    )}
                    name={id}
                    rows={5}
                    id={id}
                    onChange={
                        onChange as
                            | ChangeEventHandler<HTMLTextAreaElement>
                            | undefined
                    }
                ></textarea>
            )}
        </fieldset>
    );
};
export default Field;
