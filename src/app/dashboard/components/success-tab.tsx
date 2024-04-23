import Card from '@/components/common/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

const SuccessTab = () => {
    return (
        <div className="mt-[19px] ">
            <Card title="Successful Transactions" value="234" className="w-[330px]" />
            <div className="mb-[19px] mt-[55px] flex items-center justify-between font-redHatDisplay text-base font-normal leading-[26px] text-[#2C2C2C]">
                <p>Successfull transactions made by customers in your organization </p>
                <p>Show all Fields</p>
            </div>
            <Table className="border ">
                <TableHeader className="rounded-tl-lg rounded-tr-lg bg-lightGrey font-redHatDisplay text-base font-bold leading-[21px] text-black">
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>CUSTOMER</TableHead>
                        <TableHead>TOTAL PAID</TableHead>
                        <TableHead>YOUR EARNINGS</TableHead>
                        <TableHead>GIDDAA</TableHead>
                        <TableHead>TYPE</TableHead>
                        <TableHead>PROPERTY</TableHead>
                        <TableHead>PLAN</TableHead>
                        <TableHead>PAYMENT DATE</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow className="font-redHatDisplay text-xl font-normal leading-[30px] text-black">
                        <TableCell>7686</TableCell>
                        <TableCell>Ngutor Ikpaahindi</TableCell>
                        <TableCell>
                            <p>N970,000</p>
                            <p className="font-bold text-primary">(97%)</p>
                        </TableCell>
                        <TableCell>
                            <p>N970,000</p>
                            <p className="font-bold text-primary">(97%)</p>
                        </TableCell>
                        <TableCell>
                            <p>N970,000</p>
                            <p className="font-bold text-primary">(97%)</p>
                        </TableCell>
                        <TableCell>Repayment</TableCell>
                        <TableCell>No 23 Joseph Waku street</TableCell>
                        <TableCell>Family Plan</TableCell>
                        <TableCell>4th October 2023</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
};

export default SuccessTab;
