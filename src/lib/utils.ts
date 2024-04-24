import { Icons } from '@/components/common/icons';
import dooshima from '@/public/trusted-by/dooshima-anakaa.png';
import emmanuel from '@/public/trusted-by/emmanuel-uge.png';
import kunle from '@/public/trusted-by/kunle-fatimehin.png';
import lanre from '@/public/trusted-by/lanre-edun.png';
import { type IconType } from '@/types/navigation';
import { clsx, type ClassValue } from 'clsx';
import numeral from 'numeral';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs));
};

export const IconElement = (icon: IconType) => Icons[icon];

export const individualImages = {
    'lanre-edun': lanre,
    'kunle-fatimehin': kunle,
    'dooshima-anakaa': dooshima,
    'emmanuel-uge': emmanuel,
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
export const formatFigures = (figure: number) => numeral(figure).format('0,0.00');

export const formatDate = (dateString: string | Date): string => {
    // Parse the date string to a Date object
    const date = new Date(dateString);

    // Create an array of month names
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    // Function to get the day suffix (st, nd, rd, th)
    function getDaySuffix(day: number): string {
        if (day === 1 || day === 21 || day === 31) {
            return 'st';
        } else if (day === 2 || day === 22) {
            return 'nd';
        } else if (day === 3 || day === 23) {
            return 'rd';
        } else {
            return 'th';
        }
    }

    // Get the day, month, and year components from the date object
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    // Format the date in the desired format
    const formattedDate = `${day}${getDaySuffix(day)} ${monthNames[month]} ${year}`;

    return formattedDate;
};


export const calculateDaysOverdue = (dueDateString: string | Date): number => {
    // Parse the due date string to a Date object
    const dueDate = new Date(dueDateString);

    // Get the current date
    const currentDate = new Date();

    // Calculate the difference in time (in milliseconds)
    const timeDifference = currentDate.getTime() - dueDate.getTime();

    // Calculate the difference in days
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    // Return the number of days overdue if the due date is in the past
    return daysDifference > 0 ? daysDifference : 0;
}