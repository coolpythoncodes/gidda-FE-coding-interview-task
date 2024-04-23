'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TabsType } from '@/types/content';
import { siteContent } from 'next.json';
import { useRouter, useSearchParams } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import DefaultsTab from './defaults-tab';
import ExpectedTab from './expected-tab';
import SuccessTab from './success-tab';
import SummaryTab from './summary-tab';

const Tab = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const routePath = '/dashboard';

    let defaultTab = (searchParams.get('type') as TabsType) || TabsType.Summary;
    defaultTab =
        defaultTab === TabsType.Summary ||
            defaultTab === TabsType.Success ||
            defaultTab === TabsType.Expected ||
            defaultTab === TabsType.Defaults
            ? defaultTab
            : TabsType.Summary;

    const handleChange = (value: string) => {
        router.push(`${routePath}?type=${value}`);
    };
    return (
        <Tabs
            defaultValue={defaultTab}
            onValueChange={(value) => handleChange(value)}
        >
            <TabsList className="space-x-4">
                {siteContent?.transactionTabs?.map((item) => (
                    <TabsTrigger
                        key={uuidv4()}
                        value={item?.value}
                        className="font-redHatDisplay text-sm font-bold uppercase text-[#707070] hover:text-primary  data-[state=active]:border-b data-[state=active]:border-primary  data-[state=active]:text-primary"
                    >
                        {item?.label}
                    </TabsTrigger>
                ))}
            </TabsList>
            <TabsContent value={TabsType.Summary}>
                <SummaryTab />
            </TabsContent>
            <TabsContent value={TabsType.Success}>
                <SuccessTab />
            </TabsContent>
            <TabsContent value={TabsType.Expected}>
                <ExpectedTab />
            </TabsContent>
            <TabsContent value={TabsType.Defaults}>
                <DefaultsTab />
            </TabsContent>
        </Tabs>
    );
};

export default Tab;
