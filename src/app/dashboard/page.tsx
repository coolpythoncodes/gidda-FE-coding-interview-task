"use client"

import { Icons } from '@/components/common/icons';
import notification from '@/public/bell.png';
import logo from '@/public/logo.png';
import { LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import { Suspense } from 'react';
import Tab from './components/tab';

const Dashboard = () => {
    return (
        <main className="grid h-screen grid-cols-[350px_auto] overflow-hidden">
            <div className="flex  flex-col bg-lightGrey pb-3 pl-[23px] pt-[50px] shadow-[0_3px_6px_#00000029]">
                <Image src={logo} alt="Gidda logo" className="h-[104px] w-[108px]" />
                <div className="h-full flex-1">
                    <div className="mt-4 flex items-center">
                        <div className="flex items-center gap-x-3">
                            <Icons.moneyBag />
                            <p className="font-redHatDisplay text-base font-bold leading-[21px] text-primary">
                                TRANSACTIONS & EARNINGS
                            </p>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-200 pt-5">
                    <button
                        onClick={() => signOut({ callbackUrl: '/login' })}
                        className="flex items-center gap-x-[30px] font-redHatDisplay text-sm font-bold leading-[18px] text-[#C11111]"
                    >
                        <p>LOGOUT</p>
                        <LogOut />
                    </button>
                </div>
            </div>
            <div className="min-h-screen overflow-auto pb-[171px] pl-[51px] pr-[60px] pt-[57px]">
                <div className="mb-8 flex items-start justify-between">
                    <div>
                        <h1 className="font-millik text-[64px] leading-[80px] text-black">
                            Transactions & Earnings
                        </h1>
                        <p className="font-redHatDisplay text-sm leading-8 text-[#4B4B4B]">
                            View all your transactions and how much you have earned from
                            customers
                        </p>
                    </div>
                    <Image src={notification} alt="" />
                </div>
                <Suspense fallback={<div>loading</div>}>
                    <Tab />
                </Suspense>
            </div>
        </main>
    );
};

export default Dashboard;
