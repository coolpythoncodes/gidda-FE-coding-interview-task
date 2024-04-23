import Card from "@/components/common/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

const ExpectedTab = () => {
    return (
        <div className="mt-[19px]">
            <Card title="Expected Transactions" value="234" className="w-[330px]" />
            <div className="mb-[19px] mt-[55px] font-redHatDisplay text-base font-normal leading-[26px] text-[#2C2C2C]">
                <p className="w-[804px]">Expected transactions involve payments awaiting the payment due date, anticipated to be fulfilled by customers, and primarily representing future repayments.</p>
                <p className="flex justify-end">Show all Fields</p>
            </div>
            <Table className="border ">
                <TableHeader className="rounded-tl-lg rounded-tr-lg bg-lightGrey font-redHatDisplay text-base font-bold leading-[21px] text-black">
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>CUSTOMER</TableHead>
                        <TableHead>TOTAL DUE</TableHead>
                        <TableHead>TOTAL PAID</TableHead>
                        <TableHead>BALANCE</TableHead>
                        <TableHead>PROPERTY</TableHead>
                        <TableHead>NEXT PAYMENT</TableHead>
                        <TableHead>PAYMENT TRACKER</TableHead>
                        <TableHead>PAYMENT DATE</TableHead>
                        <TableHead>ACTION</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow className="font-redHatDisplay text-xl font-normal leading-[30px] text-black">
                        <TableCell>7686</TableCell>
                        <TableCell>Ngutor Ikpaahindi</TableCell>
                        <TableCell>
                            <p>N970,000</p>
                        </TableCell>
                        <TableCell>
                            <p>N970,000</p>
                        </TableCell>
                        <TableCell>
                            <p>N970,000</p>
                        </TableCell>
                        <TableCell>No 23 Joseph Waku street</TableCell>
                        <TableCell>4th October 2023</TableCell>
                        <TableCell>Repayment</TableCell>
                        <TableCell>Family Plan</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}

export default ExpectedTab