import { Icons } from '@/components/common/icons';
import PageWrapper from '@/components/containers/page-wrapper';
import { Button } from '@/components/ui/button';
import { IconElement } from '@/lib/utils';
import heroImage from '@/public/hero.png';
import underline from '@/public/underline.svg';
import { type IconType } from '@/types/navigation';
import { siteContent } from 'next.json';
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import { createElement } from 'react';
import Marquee from 'react-fast-marquee';
import { FaQuoteLeft } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import HowItWorks from './components/how-it-works';
import PurchaseOptions from './components/purchase-options';
import Testimonials from './components/testimonials';
import WhoWeServe from './components/who-we-serve';

const HomePage = () => {
    return (
        <main className="pt-16 md:pt-24">
            {/* Hero section */}
            <section className="overflow-hidden lg:min-h-[100vh_-_96px]">
                <PageWrapper className="grid-cols-[40%_60%] gap-x-[27px] space-y-10 lg:ml-auto  lg:mr-0 lg:grid lg:w-[95%] lg:space-y-0">
                    <div className="space-y-3 pt-5 text-black md:space-y-6 md:pt-[64px] lg:space-y-5 xl:space-y-6">
                        <h1 className="font-millik text-4xl font-normal md:text-[54px] md:leading-[80px] lg:text-2xl lg:leading-8 xl:text-[54px] xl:leading-[80px]">
                            Securely and Affordably Own a Home in Nigeria.{' '}
                            <span className="text-primary lg:block xl:inline">
                                We Serve Nigerians Across the Globe.
                            </span>
                        </h1>
                        <p className="font-redHatDisplay text-sm font-medium md:text-xl lg:text-sm xl:text-lg xl:leading-8">
                            Experience confidence when buying a home in Nigeria whether you’re
                            in Nigeria or <span className="font-bold">Abroad!</span> Enjoy
                            peace of mind with legitimate transactions, straightfoward
                            processes, and a variety of flexible payment options directly from
                            top developers and banks.
                        </p>
                        <div className="flex items-center gap-x-5 md:gap-x-[42px]">
                            <Button className="rounded-[40px] font-redHatDisplay text-sm font-bold md:h-16 md:w-[148px] md:text-xl md:leading-[26px] lg:h-10 lg:text-sm xl:h-16 xl:w-[148px] xl:text-xl xl:leading-[26px]">
                                Find a Home
                            </Button>
                            <div className="flex h-10 w-full max-w-[484px] items-center justify-center rounded-[10px] border-2 border-primary font-redHatDisplay text-xs font-bold text-primary  md:h-[81px] md:text-xl md:leading-8 lg:h-10 lg:w-full lg:text-xs xl:h-[81px] xl:text-xl xl:leading-8">
                                10,000 People Have Seen This
                            </div>
                        </div>
                    </div>
                    <Image src={heroImage} alt="" />
                </PageWrapper>
            </section>

            {/* stats */}
            <section className="flex flex-col items-center justify-evenly gap-y-5 bg-lightAccentGreen py-5 lg:h-[175px] lg:flex-row lg:gap-y-0 lg:py-0">
                {siteContent?.stats?.map((stat) => (
                    <div key={uuidv4()} className="text-center">
                        <h1 className="font-millik text-3xl font-bold text-primary lg:text-[64px] lg:leading-[80px]">
                            {stat?.figures}
                        </h1>
                        <p className="font-redHatDisplay text-[8px]  font-semibold md:text-sm">
                            {stat?.text}
                        </p>
                    </div>
                ))}
            </section>

            {/* trusted by */}
            <section className="relative space-y-5 bg-tertiaryYellow pb-[39px] pt-[41px] md:space-y-[42px]">
                <PageWrapper>
                    <div className="relative">
                        <h1 className="font-millik text-2xl text-primary md:text-5xl md:leading-[80px]">
                            Trusted By
                        </h1>
                        <Image
                            src={underline as StaticImageData}
                            alt=""
                            className="absolute left-4 w-[100px] md:bottom-2  md:left-8 md:w-[200px]"
                        />
                        {/* <Icons.underline className="absolute left-4 w-[100px] md:bottom-2  md:left-5 md:w-[220px]" /> */}
                    </div>
                </PageWrapper>
                <Marquee>
                    <div className="mr-10 flex items-center gap-x-10 md:gap-x-[98px]">
                        {siteContent?.trustedByCompanies?.map((item) => (
                            <>
                                {createElement(IconElement(item?.id), {
                                    className: 'w-10 h-10 md:w-[63px] md:h-[65px]',
                                })}
                            </>
                        ))}
                    </div>
                </Marquee>
                <div className="absolute -bottom-[60px] left-1/2 right-1/2 mx-auto flex h-12 w-[65%] max-w-[341px] -translate-x-1/2 -translate-y-1/2 -rotate-[5deg] transform items-center justify-center gap-x-[13px] rounded-[100px] border-2 border-primary bg-white shadow-[0_3px_6px_#335F32] md:h-[50px] md:-rotate-[5deg] lg:-rotate-[4deg] xl:-bottom-[70px] xl:h-[54px] xl:-rotate-[5deg]">
                    <Icons.handshake className="w-8" />
                    <p className="font-millik text-xs font-bold text-primary md:text-base  md:leading-[80px]">
                        If They Trust Us, So Can You
                    </p>
                </div>
            </section>

            <Testimonials />
            <PurchaseOptions />

            {/* Why Giddaa? */}
            <section className="bg-lightAccentGreen pb-[68px] pt-10 md:pt-12 lg:pt-20">
                <PageWrapper>
                    <div className="relative mb-5 md:mb-10">
                        <h1 className="font-millik text-xl text-primary md:text-5xl md:leading-[80px]">
                            Why Giddaa?
                        </h1>
                        {/* <Image
                            src={underline as StaticImageData}
                            alt=""
                            className="absolute left-6 w-[90px] md:bottom-2  md:left-0 md:w-[340px]"
                        /> */}

                        <Icons.underline className="absolute left-6 w-[90px] md:bottom-2  md:left-14 md:w-[220px]" />
                    </div>
                </PageWrapper>
                <div className="space-y-7">
                    <div className="space-y-5 md:space-y-[62px]">
                        <PageWrapper>
                            <p className="mx-auto max-w-[890px] text-center font-redHatDisplay text-base font-normal text-black md:text-xl md:leading-8">
                                Too many Nigerians at home and abroad have complained about
                                scams, inavailabilty of flexible payment options, how stressful,
                                ambiguous, and manual the property purchase process is, we heard
                                you all, over <span className="font-black">100+ of you!</span>
                            </p>
                        </PageWrapper>
                        <Marquee>
                            <div className="flex items-center divide-x-2 divide-gray-200">
                                {siteContent?.peopleStories?.map((item) => (
                                    <div
                                        key={uuidv4()}
                                        className="flex items-start gap-x-2 px-2 md:px-5 xl:px-[25px]"
                                    >
                                        <FaQuoteLeft className="hidden md:block" />
                                        <div className="w-[200px] md:w-[300px] xl:w-[400px]">
                                            <p className="font-millik text-xs lg:text-lg">
                                                {item?.text}
                                            </p>
                                            <p className="md:tex-xs font-redHatDisplay text-[10px] font-semibold">
                                                {item?.person}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Marquee>
                    </div>
                    <h1 className="text-center font-millik text-2xl text-primary md:text-5xl md:leading-[80px]">
                        Here’s Why!
                    </h1>
                    <PageWrapper>
                        <div className="grid grid-cols-1 gap-y-[17px] md:grid-cols-2 md:gap-x-[17px] xl:grid-cols-4 xl:gap-x-[52px]">
                            {siteContent?.why?.map((item) => (
                                <div
                                    key={uuidv4()}
                                    className="transform cursor-pointer rounded-[20px] border border-[#D8D8D8] bg-white pb-[49px] pl-[19px] pr-[9px] pt-4 transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-tertiaryYellow"
                                >
                                    {createElement(
                                        IconElement(item?.defaultIcon as unknown as IconType),
                                        {
                                            className:
                                                'mx-auto transition-transform duration-300 ease-in-out transform hover:scale-110',
                                        }
                                    )}
                                    <h4 className="mt-4 text-center text-lg font-normal text-primary transition-colors duration-300 ease-in-out  md:text-xl lg:text-2xl lg:leading-[40px]">
                                        {item?.title}
                                    </h4>
                                    <p className="font-redHatDisplay text-sm font-normal text-black transition-colors duration-300 ease-in-out hover:text-gray-700 md:text-base md:leading-[26px]">
                                        {item?.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </PageWrapper>
                </div>
            </section>

            <WhoWeServe />

            {/* how it works */}
            <HowItWorks />

            {/* Get Started */}
            <section className="bg-lightAccentGreen pb-10 pt-10 md:pb-[79px] md:pt-[78px]">
                <PageWrapper className="max-w-[722px] md:w-3/4">
                    <div className="mx-auto flex flex-col items-center text-center">
                        <h1 className="font-millik text-xl text-primary font-normal md:text-5xl md:leading-[80px]">
                            Get Started
                        </h1>
                        <p className="font-redHatDisplay text-sm font-normal text-black md:text-base md:leading-[30px]">
                            We are on a mission to empower income earning Nigerians to own
                            their first homes before they turn 50 years old. Create an account
                            and join the mission. It’s gonna be a long but fulfilling ride.{' '}
                            <span className="font-bold text-primary">Let’s Go!</span> 🏎️
                        </p>
                        <Link href="#">
                            <Button className="mt-[22px] rounded-[40px] font-redHatDisplay text-sm font-bold leading-[18px] shadow-[3px_3px_6px_#0000000D] md:h-[50px] md:w-[154px]">
                                Create an Account
                            </Button>
                        </Link>
                    </div>
                </PageWrapper>
            </section>
        </main>
    );
};

export default HomePage;
