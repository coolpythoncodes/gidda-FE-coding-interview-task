import { cn } from '@/lib/utils';
import { type PropsWithChildren } from 'react';

type Props = {
    className?: string;
};

const PageWrapper = ({ children, className }: PropsWithChildren<Props>) => {
    return <div className={cn('layout-container', className)}>{children}</div>;
};

export default PageWrapper;
