import { cn } from '@/lib/utils';
import groupAvatars from '@/public/group-avatars.png';
import whatsappIcon from '@/public/whatsapp.png';
import { type IconType } from '@/types/navigation';
import { ArrowRight } from 'lucide-react';
import { siteNavigation } from 'next.json';
import Image from 'next/image';
import Link from 'next/link';
import { createElement } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Icons } from '../common/icons';
import PageWrapper from './page-wrapper';

const Footer = () => {
    const isBold = (category: string) =>
        category === 'developers' || category === 'banks';

    const IconElement = (icon: IconType) => Icons[icon];
    return (
        <footer className="border-t-[10px] border-[#D8D8D8]">
            <div className="bg-primary pb-[33px] pt-[42px]">
                <PageWrapper>
                    {/* join whatsapp group */}
                    <div className="text-secondary mx-auto max-w-[507px] rounded-[100px] border-2 border-[#335F32] bg-white py-6">
                        <Image
                            src={groupAvatars}
                            alt=""
                            className="mx-auto h-[35px] w-[101px]"
                        />
                        <div className="flex items-center justify-center gap-x-4">
                            <Image
                                src={whatsappIcon}
                                alt=""
                                className="h-8 w-8 md:h-12 md:w-12"
                            />
                            <p className=" font-millik text-sm font-normal md:text-xl">
                                Join Our WhatsApp Community
                            </p>
                            <ArrowRight className="w-4 " />
                        </div>
                    </div>
                    {/* footer links */}
                    <div className="mb-10 mt-[60px] grid grid-cols-2 gap-y-5 md:mb-[101px] md:grid-cols-3 xl:grid-cols-5">
                        {siteNavigation?.footerLinks?.categories?.map((category) => (
                            <div key={uuidv4()} className="space-y-1 xl:space-y-[15px]">
                                <h3 className="font-millik  text-base font-normal capitalize text-[#FCFCFC] md:text-2xl md:leading-7">
                                    {category?.heading}
                                </h3>
                                <div className="space-y-4 font-redHatDisplay text-xs font-normal  text-white md:text-base md:leading-[21px]">
                                    <ul className="space-y-2 md:space-y-4">
                                        {category?.links?.map((link) => (
                                            <li key={uuidv4()}>
                                                <Link
                                                    href={link.link}
                                                    className={cn({
                                                        'font-bold': isBold(category?.heading),
                                                    })}
                                                >
                                                    {link?.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                    {category?.heading === 'contact us' && (
                                        <ul className="space-y-2 font-bold md:space-y-4">
                                            <li>Book a Meeting</li>
                                            <li>+234 809 762 1791</li>
                                        </ul>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* social links */}
                    <ul className="flex gap-x-2 md:gap-x-5">
                        {siteNavigation?.socialLinks?.map((item) => (
                            <li key={uuidv4()}>
                                <Link href={item?.link}>
                                    {createElement(IconElement(item?.icon), {
                                        className: 'w-6 h-6',
                                    })}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </PageWrapper>
            </div>
            <div className="bg-tertiaryYellow py-[13px] text-center">
                <p className="font-redHatDisplay text-xs font-bold uppercase text-primary md:text-sm">
                    PROPERTY OF GIDDAA INC.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
