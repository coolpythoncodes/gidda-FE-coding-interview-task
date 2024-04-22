import { CircleChevronDown } from 'lucide-react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '../ui/tooltip';
import { Icons } from './icons';

type Props = {
    content: string;
};

const CustomTooltip = ({ content }: Props) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger className="group">
                    <div className="flex items-center gap-x-[10px]">
                        <div className="flex items-center gap-x-[11px]">
                            <CircleChevronDown className="text-primary transition-transform duration-300 ease-in-out  group-data-[state=closed]:rotate-180" />
                            <p className="text-sm text-primary md:text-base md:leading-8">
                                View Another Explanation
                            </p>
                            <Icons.bulb />
                        </div>
                    </div>
                </TooltipTrigger>
                <TooltipContent
                    side="bottom"
                    align="start"
                    sideOffset={8}
                    className="w-[478px] rounded-[20px] border border-[#D8D8D8] bg-white py-[17px] pl-[17px] pr-[9px] pt-[17px] font-redHatDisplay text-sm font-normal leading-6 shadow-[0_3px_6px_#0000000D]"
                >
                    <p>{content}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export default CustomTooltip;
