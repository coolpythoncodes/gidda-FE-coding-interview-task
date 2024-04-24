'use client';

import { useStoreContext } from '@/app/store';
import Card from '@/components/common/card';
import { getSummary } from '@/lib/helpers/api.helper';
import { formatFigures } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';
import numeral from 'numeral';

const SummaryTab = () => {
    const { access_token } = useStoreContext();

    const { data, isLoading } = useQuery({
        queryKey: ['getSummary'],
        queryFn: () => getSummary(),
        enabled: !!access_token,
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div className="mt-8 space-y-6">
            <div className="space-y-4">
                <p className="font-redHatDisplay text-lg font-medium leading-8 text-[#4B4B4B]">
                    Earnings Breakdown
                </p>
                <div className="grid grid-cols-4 gap-x-8">
                    <Card
                        title="Expected Earnings"
                        value={`N${formatFigures(data?.value?.expectedEarnings as unknown as number)}`}
                    />
                    <Card
                        title="Total Earned"
                        value={`N${formatFigures(data?.value?.totalEarned as unknown as number)}`}
                    />
                    <Card
                        title="Left To Earn"
                        value={`N${formatFigures(data?.value?.leftToEarn as unknown as number)}`}
                    />
                    <Card
                        title="Average Amount Earned"
                        value={`N${formatFigures(data?.value?.averageAmountEarned as unknown as number)}`}
                    />
                </div>
            </div>
            <div className="space-y-4">
                <p className="font-redHatDisplay text-lg font-medium leading-8 text-[#4B4B4B]">
                    Frequency Breakdown
                </p>
                <div className="grid grid-cols-4 gap-x-8">
                    <Card
                        title="Expected Number of Transactions"
                        value={
                            data?.value.expectedNumberOfTransactions as unknown as string
                        }
                    />
                    <Card
                        title="Total Transactions"
                        value={data?.value?.totalTransactions as unknown as string}
                    />
                    <Card
                        title="Number of Transactions Left"
                        value={data?.value?.numberOfTransactionsLeft as unknown as string}
                    />
                    <Card
                        title="Average No of Transaction/ Month"
                        value={data?.value?.averageMonthlyTransactions as unknown as string}
                    />
                </div>
            </div>
            <div className="space-y-4">
                <p className="font-redHatDisplay text-lg font-medium leading-8 text-[#4B4B4B]">
                    Default Breakdown
                </p>
                <div className="grid grid-cols-4 gap-x-8">
                    <Card
                        title="Missed Payments"
                        value={data?.value?.totalMissedTransactions as unknown as string}
                    />
                    <Card
                        title="Transaction Default Rate"
                        value={`${numeral(data?.value?.transactionDefaultRate).format('0.00')}%`}
                    />
                    <Card
                        title="Customers who’ve missed payment"
                        // @ts-expect-error unknown error
                        value={
                            <>
                                <span className="text-[#C11111]">
                                    {data?.value?.totalMissedTransactions}
                                </span>{' '}
                                of{' '}
                                {/* @ts-expect-error unknown */}
                                {data?.value?.totalMissedTransactions + data?.value?.totalPaidTransactions}
                            </>
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default SummaryTab;
