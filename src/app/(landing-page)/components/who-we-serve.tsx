'use client';

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Icons } from '@/components/common/icons';
import PageWrapper from '@/components/containers/page-wrapper';
import { IconElement, cn } from '@/lib/utils';
import privateImage from '@/public/private-image.png';
import publicImage from '@/public/public-image.png';
import remoteWorker from '@/public/remote-worker.png';
import whoWeServe from '@/public/who-we-serve.png';
import { CircleChevronDown } from 'lucide-react';
import { siteContent } from 'next.json';
import Image from 'next/image';
import { createElement } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { v4 as uuidv4 } from 'uuid';

const sectorImages = {
  'private-image': privateImage,
  'public-image': publicImage,
};

const WhoWeServe = () => {
  return (
    <main>
      {/* The Diaspora */}
      <section className="py-10 xl:py-[90px]">
        <PageWrapper>
          <div className="relative">
            <h1 className="text-xl text-primary md:text-5xl md:leading-[80px]">
              Who We Serve
            </h1>
            <Icons.underline className="absolute left-5 w-[100px] md:bottom-2  md:left-14 md:w-[220px]" />
          </div>
          <div className="mt-[57px] grid gap-y-10 lg:grid-cols-2 lg:items-center lg:gap-x-10  xl:items-start 2xl:gap-x-[144px]">
            <Parallax speed={10}>
              <div className="space-y-4 md:space-y-8">
                <Icons.aeroplane className="h-14 w-14 md:h-20 md:w-20 lg:h-14 lg:w-14 xl:h-20 xl:w-20 2xl:h-[125px] 2xl:w-[125px]" />
                <h1 className="font-millik text-2xl text-secondary/30 md:text-6xl lg:text-5xl 2xl:text-[80px]">
                  The Diaspora
                </h1>
                <p className="font-redHatDisplay text-sm text-black md:text-lg md:leading-8 lg:text-sm 2xl:text-lg 2xl:leading-8">
                  Living outside Nigeria? Thinking about buying a place{' '}
                  <span className="font-bold">Back Home</span> for viists (No
                  need for hotels, Airbnbs, or your parent’s house), Investment,
                  or is it a personal goal of yours? Or maybe you see yourself
                  spending more time back home . If any of those sounds like
                  you, we can help you along your home purchase journey.
                </p>
                <ul className="*:grid:md:grid-cols-[20px_auto] grid grid-cols-2  gap-y-5 text-xs text-primary *:grid *:grid-cols-[16px_auto] *:items-center *:gap-x-3 md:text-base  md:leading-8 *:md:grid-cols-[20px_auto] *:md:gap-x-5 lg:gap-y-5 lg:text-xs xl:items-start 2xl:gap-y-[47px] 2xl:text-base 2xl:leading-8">
                  <li>
                    <CircleChevronDown className="h-4 w-4 md:h-5 md:w-5" />
                    No Agency Fees, Giddaa Is Free!
                  </li>
                  <li>
                    <CircleChevronDown className="h-4 w-4 md:h-5 md:w-5" />
                    We Eliminate Price Discrimination
                  </li>
                  <li>
                    <CircleChevronDown className="h-4 w-4 md:h-5 md:w-5" />
                    Giddaa Is Scam Proof!
                  </li>
                  <li>
                    <CircleChevronDown className="h-4 w-4 md:h-5 md:w-5" />
                    Relevant Information To Boost Your Confidence!
                  </li>
                  <li>
                    <CircleChevronDown className="h-4 w-4 md:h-5 md:w-5" />
                    We Are Responsive!
                  </li>
                </ul>
              </div>
            </Parallax>
            <Parallax speed={-10} scale={[0.8, 1, 'easeInQuad']}>
              <Image src={whoWeServe} alt="" />
            </Parallax>
          </div>
        </PageWrapper>
      </section>

      {/* Naija Remote Workers */}
      <section className="bg-lightAccentGreen py-10 xl:py-[90px]">
        <PageWrapper>
          <div className="mt-[57px] grid gap-y-10 lg:grid-cols-2 lg:items-center lg:gap-x-10  xl:items-start 2xl:gap-x-[144px]">
            <Parallax speed={10}>
              <div className="space-y-4 md:space-y-8">
                <Icons.remoteWorkerIcon className="h-14 w-14 md:h-20 md:w-20 lg:h-14 lg:w-14 xl:h-20 xl:w-20 2xl:h-[125px] 2xl:w-[125px]" />
                <h1 className="font-millik text-2xl text-secondary/30 md:text-6xl lg:text-5xl 2xl:text-[80px]">
                  Naija Remote Workers
                </h1>
                <p className="font-redHatDisplay text-sm text-black md:text-lg md:leading-8 lg:text-sm 2xl:text-lg 2xl:leading-8">
                  Do you work from{' '}
                  <span className="font-bold line-through">home?</span> Your own
                  Home? With Giddaa, that’s possible. You don’t need to have all
                  the money at once to buy a house to become a homeowner.
                  Leverage your job flexibility working remotely and your
                  current earning capacity to build equity in a home of your
                  own.
                </p>
                <ul className="*:grid:md:grid-cols-[20px_auto] grid grid-cols-2  gap-y-5 text-xs text-primary *:grid *:grid-cols-[16px_auto] *:items-center *:gap-x-3 md:text-base  md:leading-8 *:md:grid-cols-[20px_auto] *:md:gap-x-5 lg:gap-y-5 lg:text-xs xl:items-start 2xl:gap-y-[47px] 2xl:text-base 2xl:leading-8">
                  <li>
                    <CircleChevronDown className="h-4 w-4 md:h-5 md:w-5" />
                    Work From “Your Own Home”
                  </li>
                  <li>
                    <CircleChevronDown className="h-4 w-4 md:h-5 md:w-5" />
                    Invest In Man’s Greatest Asset Class
                  </li>
                  <li>
                    <CircleChevronDown className="h-4 w-4 md:h-5 md:w-5" />
                    Don’t Let Rent Go Up On You, Again!!
                  </li>
                  <li>
                    <CircleChevronDown className="h-4 w-4 md:h-5 md:w-5" />
                    No Agency Fees. Giddaa Is Free!
                  </li>
                </ul>
              </div>
            </Parallax>
            <Parallax speed={-10} scale={[0.8, 1, 'easeInQuad']}>
              <Image src={remoteWorker} alt="" />
            </Parallax>
          </div>
        </PageWrapper>
      </section>

      <div>
        {siteContent?.sectors?.map((sector) => (
          <section
            key={uuidv4()}
            className={cn(`py-10 xl:py-[90px]`, {
              'bg-lightAccentGreen': sector?.sectorName === 'public',
            })}
          >
            <PageWrapper>
              <div className="mt-[57px] grid gap-y-10 lg:grid-cols-2 lg:items-center lg:gap-x-10  xl:items-start 2xl:gap-x-[144px]">
                <Parallax speed={10}>
                  <div className="space-y-4 md:space-y-8">
                    {createElement(IconElement(sector?.icon), {
                      className:
                        'h-14 w-14 md:h-20 md:w-20 lg:h-14 lg:w-14 xl:h-20 xl:w-20 2xl:h-[125px] 2xl:w-[125px]',
                    })}
                    {/* <Icons.aeroplane className="h-14 w-14 md:h-20 md:w-20 lg:h-14 lg:w-14 xl:h-[125px] xl:w-[125px]" /> */}
                    <h1
                      className={cn(
                        `font-millik text-2xl text-secondary/30 md:text-6xl lg:text-5xl 2xl:text-[80px]`,
                        {
                          'text-primary': sector?.sectorName === 'public',
                        }
                      )}
                    >
                      {sector?.heading}
                    </h1>
                    <p className="font-redHatDisplay text-sm text-black md:text-lg md:leading-8 lg:text-sm 2xl:text-lg 2xl:leading-8">
                      {sector?.description}
                    </p>
                    <ul className="*:grid:md:grid-cols-[20px_auto] grid grid-cols-2  gap-y-5 text-xs text-primary *:grid *:grid-cols-[16px_auto] *:items-center *:gap-x-3 md:text-base xl:gap-x-2  md:leading-8 *:md:grid-cols-[20px_auto] *:md:gap-x-5 lg:gap-y-5 lg:text-xs xl:items-start 2xl:gap-y-[47px] 2xl:text-base 2xl:leading-8">
                      {sector?.extras?.map((item) => (
                        <li key={uuidv4()}>
                          <CircleChevronDown className="h-4 w-4 md:h-5 md:w-5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Parallax>
                <Parallax
                  speed={-10}
                  scale={[0.8, 1, 'easeInQuad']}
                >
                  {/* @ts-expect-error unknown error */}
                  <Image src={sectorImages[sector?.image]} alt="" />
                </Parallax>
              </div>
            </PageWrapper>
          </section>
        ))}
      </div>
    </main>
  );
};

export default WhoWeServe;
