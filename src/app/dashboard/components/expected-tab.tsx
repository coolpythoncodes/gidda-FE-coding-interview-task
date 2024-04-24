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
import { getExpected } from '@/lib/helpers/api.helper';
import { formatDate, formatFigures } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';

const ExpectedTab = () => {
    const { access_token } = useStoreContext();
    const { data, isLoading } = useQuery({
        queryKey: ['getExpected'],
        queryFn: () => getExpected(),
        enabled: !!access_token,
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="mt-[19px]">
            <Card
                title="Expected Transactions"
                value={`${data?.value?.totalRecords}`}
                className="w-[330px]"
            />
            <div className="mb-[19px] mt-[55px] font-redHatDisplay text-base font-normal leading-[26px] text-[#2C2C2C]">
                <p className="w-[804px]">
                    Expected transactions involve payments awaiting the payment due date,
                    anticipated to be fulfilled by customers, and primarily representing
                    future repayments.
                </p>
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
                    {data?.value?.data?.map((item, index) => (
                        <TableRow
                            key={`${item?.customer?.customerId}-${index}`}
                            className="font-redHatDisplay text-xl font-normal leading-[30px] text-black"
                        >
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{item?.customer?.firstName} {item?.customer?.lastName}</TableCell>
                            <TableCell>
                                <p>N970,000</p>
                            </TableCell>
                            <TableCell>
                                <p>N{formatFigures(item?.amount)}</p>
                            </TableCell>
                            <TableCell>
                                <p>N970,000</p>
                            </TableCell>
                            <TableCell>{item?.house?.address ?? "-"}</TableCell>
                            <TableCell>{formatDate(item?.dueDate)}</TableCell>
                            <TableCell>{item?.transactionType}</TableCell>
                            <TableCell>{formatDate(item?.dateOfPayment)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default ExpectedTab;
