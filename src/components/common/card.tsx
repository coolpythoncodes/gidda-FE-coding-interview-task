import { cn } from '@/lib/utils';
import { CircleAlert } from 'lucide-react';
import { type ReactNode } from 'react';

type Props = {
    title: string | ReactNode;
    value: string;
    className?: string;
};

const Card = ({ title, value, className }: Props) => {
    return (
        <div
            className={cn(
                'rounded-lg border-2 border-[#F0F0F0] bg-white px-2 pb-[39px] pt-[19px] text-center font-redHatDisplay shadow-[0_3px_6px_#0000001A]',
                className
            )}
        >
            <CircleAlert className="ml-auto text-black" />
            <p className="text-[40px] font-bold leading-[53px] text-black whitespace-nowrap overflow-hidden text-overflow-ellipsis">{value}</p>
            <p className="text-sm font-medium leading-8">{title}</p>
        </div>
    );
};

export default Card;
