import bell from '@/public/bell.png';
import giddaLogo from '@/public/logo.png';
import { Search } from 'lucide-react';
import { siteNavigation } from 'next.json';
import Image from 'next/image';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import HambugerMenu from '../hambuger-menu';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import PageWrapper from './page-wrapper';

const Navbar = () => {
    return (
        <header className="fixed z-50 h-16 w-full bg-[#F2F2F2] shadow-[0_3px_6px_#00000005] md:h-24">
            <PageWrapper className="flex h-full items-center justify-between">
                <div className="flex items-center">
                    <Image
                        src={giddaLogo}
                        alt="gidda logo"
                        className="h-10 w-10 object-cover md:h-[50px] md:w-[50px]  lg:h-[66px] lg:w-[69px]"
                    />
                    <div className="ml-[35px] hidden h-12 w-[350px] items-center rounded-[100px] bg-white pl-3 pr-5 shadow-[0_3px_6px_#00000005] md:flex lg:w-[481px]">
                        <Input
                            placeholder="Search For Properties, Developers, Banks"
                            className="flex-1 border-none font-serif text-base  font-normal leading-8 shadow-none outline-none ring-transparent"
                        />
                        <Search className="text-primary" />
                    </div>
                    <nav className="text-darkGrey ml-[55px] hidden items-center gap-x-[68px] font-redHatDisplay text-base font-normal xl:flex ">
                        {siteNavigation?.navbarNavigation?.map((navLink) => (
                            <div key={uuidv4()} className="[&:nth-child(1)&>.dot]:block relative first:font-bold first:text-primary">
                                <Link
                                    href={navLink.link}
                                    className="transition duration-300 ease-in-out hover:text-primary"
                                >
                                    {navLink?.label}
                                </Link>
                                <div className="dot absolute left-1/2 -translate-x-1/2 hidden hover:block w-3 h-3 bg-primary rounded-full" />
                            </div>
                        ))}
                    </nav>
                </div>
                <div className="hidden items-center gap-x-10 xl:flex">
                    <Image src={bell} alt="" className="size-[55px] object-contain" />
                    <Link href="/login">
                        <Button>Login</Button>
                    </Link>
                </div>
                <HambugerMenu />
            </PageWrapper>
        </header>
    );
};

export default Navbar;
