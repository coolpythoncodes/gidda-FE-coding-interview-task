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
import { getSuccessfull } from '@/lib/helpers/api.helper';
import { formatDate, formatFigures } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';

const SuccessTab = () => {
    const { access_token } = useStoreContext();
    const { data, isLoading } = useQuery({
        queryKey: ['getSuccessfull'],
        queryFn: () => getSuccessfull(),
        enabled: !!access_token,
    });
    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div className="mt-[19px] ">
            <Card
                title="Successful Transactions"
                value={`${data?.value?.totalRecords}`}
                className="w-[330px]"
            />
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
                    {data?.value?.data?.map((item, index) => (
                        <TableRow
                            key={`${item?.customer?.customerId}-${index}`}
                            className="font-redHatDisplay text-xl font-normal leading-[30px] text-black"
                        >
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>
                                {item?.customer?.firstName} {item?.customer?.lastName}
                            </TableCell>
                            <TableCell>
                                <p>N{formatFigures(item?.amount)}</p>
                                <p className="font-bold text-primary">(97%)</p>
                            </TableCell>
                            <TableCell>
                                <p>N{formatFigures(item?.organizationAmount)}</p>
                                <p className="font-bold text-primary">(97%)</p>
                            </TableCell>
                            <TableCell>
                                <p>N{formatFigures(item?.giddaaAmount)}</p>
                                <p className="font-bold text-primary">(97%)</p>
                            </TableCell>
                            <TableCell>{item?.transactionType}</TableCell>
                            <TableCell>{item?.house?.address ?? "-"}</TableCell>
                            <TableCell>{item?.mortgagePlan?.name}</TableCell>
                            <TableCell>{formatDate(item?.dateOfPayment)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div >
    );
};

export default SuccessTab;
