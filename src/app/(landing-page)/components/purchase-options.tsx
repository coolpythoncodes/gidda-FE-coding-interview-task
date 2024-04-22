import CustomTooltip from '@/components/common/custom-tooltip';
import { Icons } from '@/components/common/icons';
import PageWrapper from '@/components/containers/page-wrapper';
import { Button } from '@/components/ui/button';
import horse from '@/public/horse.svg';
import rabbit from '@/public/rabbit.svg';
import slowTurtle from '@/public/slow-turtle.svg';
import underline from "@/public/underline.svg";
import Image, { type StaticImageData } from 'next/image';

const PurchaseOptions = () => {
    return (
        <section className="py-10 md:py-20">
            <PageWrapper className="space-y-[41px]">
                <div>
                    <div className="relative">
                        <h1 className="text-xl text-primary md:text-5xl md:leading-[80px]">
                            Your Purchase Options
                        </h1>
                        <Image src={underline as StaticImageData} alt="" className='absolute left-10 w-[155px]  md:bottom-2 md:left-24 md:w-[370px]' />
                    </div>
                    <p className="mx-auto mb-[41px] mt-10 max-w-[763px] text-center font-redHatDisplay text-sm font-semibold md:mt-[88px] md:text-xl md:leading-8">
                        Buying a home isn’t a one-size fits all kind of purchase — we know!.
                        So…we give you all the options the market has to offer to choose
                        from!
                    </p>
                </div>
                <div className="grid gap-x-[84px] gap-y-10 lg:grid-cols-2 xl:grid-cols-3">
                    {/* Mortgages */}
                    <div className="rounded-[30px] bg-lightAccentGreen py-6 pl-[19px] pr-[15px] transition duration-300 hover:cursor-pointer hover:border-[3px] hover:border-primary">
                        <div className="flex items-center">
                            <Image src={slowTurtle as StaticImageData} alt="" />
                            <div className="flex-1 text-center">
                                <h1 className="font-millik text-lg text-primary md:text-[32px] md:leading-[37px]">
                                    Mortgages
                                </h1>
                                <p className="font-redHatDisplay text-xs font-medium text-black md:text-sm md:leading-8">
                                    THE SLOW TURTLE
                                </p>
                            </div>
                        </div>
                        <div className="mt-4 space-y-5 md:space-y-10">
                            <p className="font-redHatDisplay text-sm font-normal text-black md:w-11/12 md:leading-8">
                                Imagine you want to buy a house, but you don’t have all the
                                money upfront. A mortgage is like a loan from a bank or a lender
                                that helps you buy the house now, and you pay back the loan over
                                time, usually with interest. It’s a way to spread out the cost
                                of buying a house over several years instead of paying for it
                                all at once. Once you pay off the mortgage, you own the house
                                outright.
                            </p>
                            {/* view extension */}
                            <div>
                                <CustomTooltip content="Picture getting a mortgage as a turtle competing against a rabbit: though the rabbit may dash ahead initially, reflecting short-term plans, the turtle’s steady but gradual pace, similar to mortgage payments, ensures stability and the ability to own a home without stressing your finances by coughing a large amount of money at once to buy a home." />
                            </div>

                            <div className="space-y-[9px]">
                                <h3 className="text-center text-lg text-primary md:text-2xl md:leading-10">
                                    Features of Mortgages
                                </h3>
                                <ul className="space-y-[17px] font-redHatDisplay text-sm font-normal text-black *:grid *:grid-cols-[10px_auto] *:items-start *:space-x-2 md:leading-[27px]">
                                    <li>
                                        <Icons.arrowRight />
                                        <p>
                                            For budget conscious people without the money to make
                                            large payments.
                                        </p>
                                    </li>
                                    <li>
                                        <Icons.arrowRight />
                                        <p>Mostly offered by banks & financial institutions</p>
                                    </li>
                                    <li>
                                        <Icons.arrowRight />
                                        <p>Typically attracts payment of interest</p>
                                    </li>
                                    <li>
                                        <Icons.arrowRight />
                                        <p>
                                            Payment periods are usually long term{' '}
                                            <span className="font-bold">
                                                (Typically between 10 - 30 years)
                                            </span>
                                        </p>
                                    </li>
                                    <li>
                                        <Icons.arrowRight />
                                        <p>
                                            Monthly Payments are fixed, meaning it remains the same
                                            throughout the payment period. For example, you pay
                                            N150,000 in Month 1, you’ll pay N150,000 in Month 70. The
                                            payment remains the same over time.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Button className="mt-[26px] h-[57px] rounded-[100px] border border-primary bg-white font-redHatDisplay text-xs font-medium leading-[23px] text-primary hover:text-white md:w-[319px] lg:mt-[160px]">
                                <Icons.videoIcon className="mr-[6px] h-7 w-7 md:h-[37px] md:w-[37px]" />
                                WATCH THE VIDEO TO LEARN MORE
                            </Button>
                        </div>
                    </div>
                    {/* Payment Plans */}
                    <div className="rounded-[30px]  bg-tertiaryYellow py-6 pl-[19px] pr-[15px] transition duration-300 hover:cursor-pointer hover:border-[3px] hover:border-primary">
                        <div className="flex items-center">
                            <Image src={horse as StaticImageData} alt="" />
                            <div className="flex-1 text-center">
                                <h1 className="font-millik text-lg text-primary md:text-[32px] md:leading-[37px]">
                                    Payment Plans
                                </h1>
                                <p className="font-redHatDisplay text-xs font-medium text-black md:text-sm md:leading-8">
                                    THE GALLOPING HORSE
                                </p>
                            </div>
                        </div>
                        <div className="mt-4 space-y-5 md:space-y-10">
                            <p className="font-redHatDisplay text-sm font-normal text-black md:w-11/12 md:leading-8">
                                Imagine you’re looking to buy your dream house, but you don’t
                                have all the money saved up. A payment plan is a structured
                                arrangement where you agree to pay for your home over a period
                                of time instead of all at once. It allows you to split the cost
                                into smaller, manageable payments spread out over months, or
                                years until the full amount is paid off. This makes the purchase
                                of your dream home more affordable and accessible by breaking
                                down the total cost into more managable payments, usually
                                monthly.
                            </p>
                            {/* view extension */}
                            <div>
                                <CustomTooltip content="Picture a horse galloping with a rabbit and a turtle. It is not quite as fast as the rabbit, but not nearly as slow as the turtle. It wants to get to the finish line quickly, but won’t beat the rabbit, but will beat the turtle, Similarly, a payment plan allows you to purchase a property over a short period of time, but not as short as an outright purchase, but not as long as mortgage. You make periodic payments over a short period of time." />
                            </div>

                            <div className="space-y-[9px]">
                                <h3 className="text-center text-lg text-primary md:text-2xl md:leading-10">
                                    Features of Payment Plans
                                </h3>
                                <ul className="space-y-[17px] font-redHatDisplay text-sm font-normal text-black *:grid *:grid-cols-[10px_auto] *:items-start *:space-x-2 md:leading-[27px]">
                                    <li>
                                        <Icons.arrowRight />
                                        <p>
                                            For people who have the ability to make large purchases at
                                            once.
                                        </p>
                                    </li>
                                    <li>
                                        <Icons.arrowRight />
                                        <p>Mostly offered by property Developers</p>
                                    </li>
                                    <li>
                                        <Icons.arrowRight />
                                        <p>
                                            Usually zero (0%) interest. Payment plans usally don’t
                                            attract interest.
                                        </p>
                                    </li>
                                    <li>
                                        <Icons.arrowRight />
                                        <p>
                                            There are no payment periods. This requires a one-time
                                            payment.
                                        </p>
                                    </li>
                                    <li>
                                        <Icons.arrowRight />
                                        <p>
                                            This requires one lump sum payment, upon which the
                                            property is fully yours.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Button className="mt-[26px] h-[57px] rounded-[100px] border border-primary bg-white font-redHatDisplay text-xs font-medium leading-[23px] text-primary hover:text-white md:w-[319px] lg:mt-[150px]">
                                <Icons.videoIcon className="mr-[6px] h-7 w-7 md:h-[37px] md:w-[37px]" />
                                WATCH THE VIDEO TO LEARN MORE
                            </Button>
                        </div>
                    </div>
                    {/* Ouright Purchase */}
                    <div className="rounded-[30px]  bg-lightGrey py-6 pl-[19px] pr-[15px] transition duration-300 hover:cursor-pointer hover:border-[3px] hover:border-primary">
                        <div className="flex items-center">
                            <Image src={rabbit as StaticImageData} alt="" />
                            <div className="flex-1 text-center">
                                <h1 className="font-millik text-lg text-primary md:text-[32px] md:leading-[37px]">
                                    Ouright Purchase
                                </h1>
                                <p className="font-redHatDisplay text-xs font-medium text-black md:text-sm md:leading-8">
                                    THE SWIFT RABBIT
                                </p>
                            </div>
                        </div>
                        <div className="mt-4 space-y-5 md:space-y-10">
                            <p className="font-redHatDisplay text-sm font-normal text-black md:w-11/12 md:leading-8">
                                The outright purchase of a house refers to buying a home
                                directly without the need for financing through a mortgage or
                                creation of flexible payment plans by developers. In this
                                scenario, you pay the entire purchase price upfront using your
                                own funds or savings, without relying on a loan from a bank or
                                flexible payment options from developers. This means that once
                                the transaction is complete, the you own the property outright,
                                without any debt or ongoing payments to a lender or property
                                developer.
                            </p>
                            {/* view extension */}
                            <div>
                                <CustomTooltip content="Picture getting a mortgage as a turtle competing against a rabbit: though the rabbit may dash ahead initially, reflecting short-term plans, the turtle’s steady but gradual pace, similar to mortgage payments, ensures stability and the ability to own a home without stressing your finances by coughing a large amount of money at once to buy a home." />
                            </div>

                            <div className="space-y-[9px]">
                                <h3 className="text-center text-lg text-primary md:text-2xl md:leading-10">
                                    Features of Outright Purchase
                                </h3>
                                <ul className="space-y-[17px] font-redHatDisplay text-sm font-normal text-black *:grid *:grid-cols-[10px_auto] *:items-start *:space-x-2 md:leading-[27px]">
                                    <li>
                                        <Icons.arrowRight />
                                        <p>
                                            For budget conscious people without the money to make
                                            large payments.
                                        </p>
                                    </li>
                                    <li>
                                        <Icons.arrowRight />
                                        <p>Mostly offered by banks & financial institutions</p>
                                    </li>
                                    <li>
                                        <Icons.arrowRight />
                                        <p>Typically attracts payment of interest</p>
                                    </li>
                                    <li>
                                        <Icons.arrowRight />
                                        <p>
                                            Payment periods are usually short term{' '}
                                            <span className="font-bold">(6 Months - 3 Years)</span>
                                        </p>
                                    </li>
                                    <li>
                                        <Icons.arrowRight />
                                        <p>
                                            Monthly Payments are fixed, meaning it remains the same
                                            throughout the payment period. For example, you pay
                                            N150,000 in Month 1, you’ll pay N150,000 in Month 70. The
                                            payment remains the same over time.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Button className="mt-[26px] h-[57px] rounded-[100px] border border-primary bg-white font-redHatDisplay text-xs font-medium leading-[23px] text-primary hover:text-white md:w-[319px] lg:mt-[101px]">
                                <Icons.videoIcon className="mr-[6px] h-7 w-7 md:h-[37px] md:w-[37px]" />
                                WATCH THE VIDEO TO LEARN MORE
                            </Button>
                        </div>
                    </div>
                </div>
            </PageWrapper>
        </section>
    );
};

export default PurchaseOptions;
