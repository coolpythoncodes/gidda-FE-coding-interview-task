import Card from '@/components/common/card';

const SummaryTab = () => {
    return (
        <div className="mt-8 space-y-6">
            <div className="space-y-4">
                <p className="font-redHatDisplay text-lg font-medium leading-8 text-[#4B4B4B]">
                    Earnings Breakdown
                </p>
                <div className="grid grid-cols-4 gap-x-8">
                    <Card title="Expected Earnings" value="N112,000,000" />
                    <Card title="Total Earned" value="N112,000,000" />
                    <Card title="Left To Earn" value="N112,000,000" />
                    <Card title="Average Amount Earned" value="N112,000,000" />
                </div>
            </div>
            <div className="space-y-4">
                <p className="font-redHatDisplay text-lg font-medium leading-8 text-[#4B4B4B]">
                    Frequency Breakdown
                </p>
                <div className="grid grid-cols-4 gap-x-8">
                    <Card title="Expected Number of Transactions" value="N112,000,000" />
                    <Card title="Total Transactions" value="N112,000,000" />
                    <Card title="Number of Transactions Left" value="N112,000,000" />
                    <Card title="Average No of Transaction/ Month" value="N112,000,000" />
                </div>
            </div>
            <div className="space-y-4">
                <p className="font-redHatDisplay text-lg font-medium leading-8 text-[#4B4B4B]">
                    Default Breakdown
                </p>
                <div className="grid grid-cols-4 gap-x-8">
                    <Card title="Missed Payments" value="N112,000,000" />
                    <Card title="Transaction Default Rate" value="N112,000,000" />
                    <Card title="Customers who’ve missed payment" value="N112,000,000" />
                </div>
            </div>
        </div>
    );
};

export default SummaryTab;
