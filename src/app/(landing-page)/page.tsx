import PageWrapper from '@/components/containers/page-wrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const HomePage = () => {
    return (
        <main>
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
