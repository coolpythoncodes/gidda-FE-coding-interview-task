
import { type SiteContent } from '@/types/content';
import { type SiteNavigation } from '@/types/navigation';
import _siteContent from './content.json';
import _siteNavigation from './navigation.json';

export const siteNavigation = _siteNavigation as SiteNavigation;

export const siteContent = _siteContent as SiteContent