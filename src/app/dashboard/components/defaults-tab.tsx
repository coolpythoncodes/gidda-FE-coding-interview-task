import Card from '@/components/common/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

const DefaultsTab = () => {
    return (
        <div className="mt-[25px]">
            <div className="grid grid-cols-4 gap-x-8">
                <Card title="Expected Earnings" value="N112,000,000" />
                <Card title="Total Default Amount" value="N112,000,000" />
                <Card title="Missed Payments" value="N112,000,000" />
                <Card title="Customers who’ve missed payment" value="N112,000,000" />
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
                    <TableRow className="font-redHatDisplay text-xl font-normal leading-[30px] text-black">
                        <TableCell>7686</TableCell>
                        <TableCell>Ngutor Ikpaahindi</TableCell>
                        <TableCell>N460,700</TableCell>
                        <TableCell>Repayment</TableCell>
                        <TableCell>No 23 Joseph Waku street</TableCell>
                        <TableCell>Family Plan</TableCell>
                        <TableCell>4th October 2023</TableCell>
                        <TableCell>5 Days</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
};

export default DefaultsTab;
