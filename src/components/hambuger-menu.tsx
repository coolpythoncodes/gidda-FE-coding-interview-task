'use client';

import useWindowSize from '@/hooks/use-window-size.hook';
import useDisclosure from '@/hooks/useDisclosure.hook';
import giddaLogo from '@/public/logo.png';
import { Menu } from 'lucide-react';
import { siteNavigation } from 'next.json';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from './ui/sheet';

const HambugerMenu = () => {
    const { isOpen, onToggle, onClose } = useDisclosure();
    const { width } = useWindowSize();
    useEffect(() => {
        if (width && width > 1024) {
            onClose();
        }
    }, [width, onClose]);

    return (
        <Sheet onOpenChange={onToggle} open={isOpen}>
            <SheetTrigger onClick={onToggle} asChild>
                <Menu className="text-primary xl:hidden" />
            </SheetTrigger>
            <SheetContent className="bg-white">
                <SheetHeader>
                    <Image
                        src={giddaLogo}
                        alt="gidda logo"
                        className="h-10 w-10 md:h-[66px] md:w-[69px]"
                    />
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <nav className="flex flex-col gap-4 py-4 font-redHatDisplay text-base font-bold text-darkGrey">
                        {siteNavigation?.navbarNavigation?.map((link) => (
                            <Link
                                key={uuidv4()}
                                href={link?.link}
                                className="first:text-primary"
                            >
                                {link?.label}
                            </Link>
                        ))}
                    </nav>
                    <Link href="/login">
                        <Button className='w-full'>Login</Button>
                    </Link>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default HambugerMenu;
