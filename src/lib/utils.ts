import { Icons } from "@/components/common/icons";
import dooshima from "@/public/trusted-by/dooshima-anakaa.png";
import emmanuel from "@/public/trusted-by/emmanuel-uge.png";
import kunle from "@/public/trusted-by/kunle-fatimehin.png";
import lanre from "@/public/trusted-by/lanre-edun.png";
import { type IconType } from "@/types/navigation";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";


export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs))
}

export const IconElement = (icon: IconType) => Icons[icon];

export const individualImages = {
    "lanre-edun": lanre,
    "kunle-fatimehin": kunle,
    "dooshima-anakaa": dooshima,
    "emmanuel-uge": emmanuel
}
