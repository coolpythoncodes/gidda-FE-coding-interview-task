import PageWrapper from '@/components/containers/page-wrapper';
import { Button } from '@/components/ui/button';
import heroImage from "@/public/hero.png";
import { siteContent } from 'next.json';
import Image from 'next/image';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';


const HomePage = () => {
    return (
        <main>
            {/* Hero section */}
            <section className='error lg:h-screen'>
                <PageWrapper className='space-y-10 lg:space-y-0 lg:grid grid-cols-[40%_60%]  lg:mr-0 lg:ml-auto lg:w-[95%] error'>
                    <div className='pt-[64px] lg:pt-0 text-black space-y-3 md:space-y-6'>
                        <h1 className='text-4xl font-millik font-normal md:text-[54px] lg:text-4xl lg:leading-10 md:leading-[80px]'>Securely and Affordably Own a Home in Nigeria. <span className="text-primary">We Serve Nigerians Across the Globe.</span></h1>
                        <p className="font-redHatDisplay text-sm font-medium md:text-xl lg:text-lg lg:leading-8">Experience confidence when buying a home in Nigeria whether you’re in Nigeria or <span className="font-bold">Abroad!</span> Enjoy peace of mind with legitimate transactions, straightfoward processes, and a variety of flexible payment options directly from top developers and banks.</p>
                        <div className="flex items-center gap-x-5 md:gap-x-[42px]">
                            <Button className='font-redHatDisplay text-sm md:w-[148px] md:h-[64px] font-bold md:text-xl md:leading-[26px] rounded-[40px]'>Find a Home</Button>
                            <div className="flex items-center h-10 w-full max-w-[484px] justify-center border-2 border-primary rounded-[10px] text-primary text-xs  md:h-[81px] md:text-xl md:leading-8 font-bold font-redHatDisplay">10,000 People Have Seen This</div>
                        </div>
                    </div>
                    <Image src={heroImage} alt="" />
                </PageWrapper>
            </section>

            {/* stats */}
            <section className='bg-lightAccentGreen flex justify-evenly h-[175px] items-center error'>
                {siteContent?.stats?.map((stat) => (
                    <div key={uuidv4()} className='text-center'>
                        <h1 className="text-primary text-sm lg:text-[64px] lg:leading-[80px] font-millik font-normal">{stat?.figures}</h1>
                        <p className="text-[8px] md:text-sm  font-redHatDisplay font-semibold">{stat?.text}</p>
                    </div>
                ))}
            </section>

            {/* Why Giddaa? */}
            <section className='bg-lightAccentGreen'>
                <div className='space-y-7'>
                    <h1 className='text-center text-primary font-millik text-2xl md:text-5xl md:leading-[80px]'>Here’s Why!</h1>
                    <PageWrapper>
                        <div className='flex flex-col gap-y-[17px]'>
                            {
                                siteContent?.why?.map((item) => <div className='pl-[19px] pr-[9px] pt-4 pb-[49px] bg-white rounded-[20px] border border-[#D8D8D8]'>
                                    <h4 className='text-center text-primary text-2xl leading-[40px] font-normal'>{item?.title}</h4>
                                    <p className="text-black font-redHatDisplay font-normal">{item?.text}</p>
                                </div>)
                            }
                        </div>
                    </PageWrapper>
                </div>
            </section>

            {/* Get Started */}
            <section className="bg-lightAccentGreen pb-10 pt-10 md:pb-[79px] md:pt-[78px]">
                <PageWrapper className="max-w-[722px] md:w-3/4">
                    <div className="mx-auto flex flex-col items-center text-center">
                        <h1 className="font-millik text-xl font-normal md:text-5xl md:leading-[80px]">
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
