import { Icons } from '@/components/common/icons';
import PageWrapper from '@/components/containers/page-wrapper';
import { Button } from '@/components/ui/button';
import { IconElement, cn } from '@/lib/utils';
import { siteContent } from 'next.json';
import { createElement } from 'react';
import { v4 as uuidv4 } from 'uuid';

const HowItWorks = () => {
    return (
        <section className="pb-10 pt-10 md:pb-[386px] md:pt-[128px]">
            <PageWrapper className="space-y-10 lg:space-y-[78px]">
                <div className="relative">
                    <h1 className="text-xl text-primary md:text-5xl md:leading-[80px]">
                        How It Works
                    </h1>
                    <Icons.underline className="absolute left-6 w-[90px] md:bottom-2  md:left-10 md:w-[220px]" />
                </div>
                <div className="grid gap-x-5 gap-y-[41px] md:grid-cols-2 xl:grid-cols-3">
                    {siteContent?.howItWorks?.map((item, index) => (
                        <div
                            key={uuidv4()}
                            className="flex items-start gap-x-2 text-primary 2xl:gap-x-4 [&:nth-child(1)&>.first]:bg-lightAccentGreen [&:nth-child(1)&>div>.first-text]:text-white"
                        >
                            <div className="relative hidden h-20 w-10 md:block xl:h-[81px] xl:w-[61px]">
                                {createElement(IconElement(item?.icon), {
                                    className: 'h-20 w-10 xl:w-14 xl:h-20 2xl:w-[61px] 2xl:h-[81px]',
                                })}
                                <p className="first-text absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-millik text-primary md:text-xl lg:text-[30px]">
                                    {index + 1}
                                </p>
                            </div>
                            <div className="first space-y-4 rounded-[20px]  py-6 pl-[31px] pr-6 md:pl-4 md:pr-4 lg:pl-[31px] lg:pr-6 xl:pl-4 xl:pr-6 2xl:pl-[31px] 2xl:pr-6 xl:w-fit">
                                <h3 className="font-millik text-2xl leading-[34px] xl:text-xl text-primary 2xl:text-2xl 2xl:leading-[34px]">
                                    {item?.title}
                                </h3>
                                <p className="font-redHatDisplay text-sm font-normal leading-[30px] text-black 2xl:w-[336px]">
                                    {item?.text}
                                </p>
                                <Button className="rounded-[100px] border border-primary bg-white font-redHatDisplay text-xs font-medium leading-[23px] text-primary hover:text-white">
                                    <Icons.videoIcon className="mr-[6px] h-7 w-7 md:h-3 md:w-3 lg:h-7 lg:w-7" />{' '}
                                    WATCH THE VIDEO TO LEARN MORE
                                </Button>
                            </div>
                        </div>
                    ))}

                    <div key={uuidv4()} className="flex items-start gap-x-2 2xl:gap-x-4">
                        <div className="relative hidden h-20 w-10 md:block xl:h-[81px] xl:w-[61px]">
                            {createElement(IconElement('numbersBackground'), {
                                className: 'h-20 w-10 xl:w-14 xl:h-20 2xl:w-[61px] 2xl:h-[81px]',
                            })}
                            <p
                                className={cn(
                                    `absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-millik text-primary md:text-xl lg:text-[30px]`
                                )}
                            >
                                5
                            </p>
                        </div>
                        <div
                            className={cn(
                                `space-y-4 rounded-[20px] bg-lightAccentGreen py-6 pl-[31px] pr-6 md:bg-white md:pl-4 md:pr-4 lg:pl-[31px] lg:pr-6 xl:w-fit`
                            )}
                        >
                            <h3 className="font-millik text-2xl leading-[34px] xl:text-xl text-primary">
                                Wait For Application Processing
                            </h3>
                            <p className="font-redHatDisplay text-sm font-normal leading-[30px] text-black 2xl:w-[336px]">
                                The partner (
                                <span className="font-bold">Developer or Bank</span>) you
                                applied to will process your application and the submitted
                                documents. You will be notified if your application is accepted
                                or not.
                            </p>
                            <Button className="rounded-[100px] border border-primary bg-white font-redHatDisplay text-xs font-medium leading-[23px] text-primary hover:text-white">
                                <Icons.videoIcon className="mr-[6px] h-7 w-7 md:h-3 md:w-3 lg:h-7 lg:w-7" />{' '}
                                WATCH THE VIDEO TO LEARN MORE
                            </Button>
                        </div>
                    </div>

                    <div className="flex items-start gap-x-2 2xl:gap-x-4">
                        <div className="relative hidden h-20 w-10 md:block xl:h-[81px] xl:w-[61px]">
                            {createElement(IconElement('numbersBackground'), {
                                className: 'h-20 w-10 xl:w-14 xl:h-20 2xl:w-[61px] 2xl:h-[81px]',
                            })}
                            <p
                                className={cn(
                                    `absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-millik text-primary md:text-xl lg:text-[30px]`
                                )}
                            >
                                6
                            </p>
                        </div>
                        <div
                            className={cn(
                                `space-y-4 rounded-[20px] bg-lightAccentGreen py-6 pl-[31px] pr-6 md:bg-white md:pl-4 md:pr-4 lg:pl-[31px] lg:pr-6 xl:w-fit`
                            )}
                        >
                            <h3 className="font-millik text-2xl leading-[34px] xl:text-xl text-primary 2xl:leading-[34px] 2xl:text-2xl">
                                Accept Terms & Make Payment
                            </h3>
                            <p className="font-redHatDisplay text-sm font-normal leading-[30px] text-black 2xl:w-[336px]">
                                If the partner accepts your application, they will submit the
                                terms of your <span className="font-bold">application</span> and
                                an offer letter or a term sheet for you to review. If you accept
                                the terms, you can then proceed to make payment and create a
                                mandate for repayment, if it is a mortgage or payment plan.
                            </p>
                            <Button className="rounded-[100px] border border-primary bg-white font-redHatDisplay text-xs font-medium leading-[23px] text-primary hover:text-white">
                                <Icons.videoIcon className="mr-[6px] h-7 w-7 md:h-3 md:w-3 lg:h-7 lg:w-7" />{' '}
                                WATCH THE VIDEO TO LEARN MORE
                            </Button>
                        </div>
                    </div>
                </div>
            </PageWrapper>
        </section>
    );
};

export default HowItWorks;
