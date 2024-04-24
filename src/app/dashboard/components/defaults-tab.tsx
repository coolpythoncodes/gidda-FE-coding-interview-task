/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useStoreContext } from '@/app/store';
import Card from '@/components/common/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { getDefaults, getSummary } from '@/lib/helpers/api.helper';
import { calculateDaysOverdue, formatDate, formatFigures } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';

const DefaultsTab = () => {
    const { access_token } = useStoreContext();

    const { data: _data, isLoading: _isLoading } = useQuery({
        queryKey: ['getSummary'],
        queryFn: () => getSummary(),
        enabled: !!access_token,
    });

    const { data, isLoading } = useQuery({
        queryKey: ['getDefaults'],
        queryFn: () => getDefaults(),
        enabled: !!access_token,
    });

    if (isLoading || _isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div className="mt-[25px]">
            <div className="grid grid-cols-4 gap-x-8">
                <Card
                    title="Expected Earnings"
                    value={`N${formatFigures(_data?.value?.expectedEarnings as unknown as number)}`}
                />
                <Card title="Total Default Amount" value="N112,000,000" />
                <Card
                    title="Missed Payments"
                    value={_data?.value?.totalMissedTransactions as unknown as string}
                />
                <Card
                    title="Customers who’ve missed payment"
                    // @ts-expect-error unknown error
                    value={
                        <>
                            <span className="text-[#C11111]">
                                {_data?.value?.totalMissedTransactions}
                            </span>{' '}
                            of{' '}
                            {/* @ts-expect-error unknown */}
                            {_data?.value?.totalMissedTransactions + _data?.value?.totalPaidTransactions}
                        </>
                    }
                />
            </div>
            <p className="mb-4 mt-10 font-redHatDisplay text-base font-normal leading-[26px] text-[#2C2C2C]">
                Data on payments that should have beeen made but weren’t and the
                customers who should have paid
            </p>
            <p className="mb-4 flex justify-end font-redHatDisplay text-base font-normal leading-[26px] text-[#2C2C2C]">
                Show all Fields
            </p>
            <Table className="border ">
                <TableHeader className="rounded-tl-lg rounded-tr-lg bg-lightGrey font-redHatDisplay text-base font-bold leading-[21px] text-black">
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>CUSTOMER</TableHead>
                        <TableHead>AMOUNT</TableHead>
                        <TableHead>TYPE</TableHead>
                        <TableHead>PROPERTY</TableHead>
                        <TableHead>PLAN</TableHead>
                        <TableHead>DUE DATE</TableHead>
                        <TableHead>DAYS OVERDUE</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data?.value?.data?.map((item, index) => (
                        <TableRow
                            key={item?.customer?.customerId}
                            className="font-redHatDisplay text-xl font-normal leading-[30px] text-black"
                        >
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>
                                {item?.customer?.firstName} {item?.customer?.lastName}
                            </TableCell>
                            <TableCell>N{formatFigures(item?.amount)}</TableCell>
                            <TableCell>{item?.transactionType}</TableCell>
                            <TableCell>{item?.house?.address ?? '-'}</TableCell>
                            <TableCell>{item?.mortgagePlan?.name}</TableCell>
                            <TableCell>{formatDate(item?.dueDate)}</TableCell>
                            <TableCell>
                                {calculateDaysOverdue(item?.dueDate) === 0
                                    ? null
                                    : `${calculateDaysOverdue(item?.dueDate)}Day(s)`}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default DefaultsTab;
