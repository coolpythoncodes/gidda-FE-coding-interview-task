import { cn } from '@/lib/utils';
import { CircleAlert } from 'lucide-react';

type Props = {
    title: string;
    value: string;
    className?: string;
};

const Card = ({ title, value, className }: Props) => {
    return (
        <div
            className={cn(
                'rounded-lg border-2 border-[#F0F0F0] bg-white px-[33px] pb-[39px] pt-[19px] text-center font-redHatDisplay shadow-[0_3px_6px_#0000001A]',
                className
            )}
        >
            <CircleAlert className="ml-auto text-black" />
            <p className="text-[40px] font-bold leading-[53px] text-black">{value}</p>
            <p className="text-sm font-medium leading-8">{title}</p>
        </div>
    );
};

export default Card;
