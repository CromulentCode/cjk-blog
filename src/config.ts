import type { PostHideElements } from '~/content/config';

export const Site = 'https://cjk-blog.vercel.app/';
export const SiteLanguage = 'jp';
export const SiteTitle = 'すやすやすやすや';
export const SiteDescription = ''//'alway rember happy day';
export const FooterDescription = '尽く書を信ずれば書なきに如かず';
export const AdminName = 'Olaf';
export const PageSize = 15;

socialPlatform => userName
// check components/Header.astro socialConfig for more info
export const Socials: Record<string, Record<string, string>> = {
    discord: { url: 'https://discordapp.com/users/999363475111415840' },
};

// doc: https://giscus.app
// data-theme is auto changed between noborder_light / noborder_gray
export const GiscusConfig: Record<string, string> = {
	'data-repo': 'CromulentCode/cjk-blog',
	'data-repo-id': '908716926',
	'data-category': 'Announcements',
	'data-category-id': 'DIC_kwDOLgobXc4Cd_N6',
	'data-mapping': 'pathname',
	'data-strict': '0',
	'data-reactions-enabled': '1',
	'data-emit-metadata': '0',
	'data-input-position': 'top',
	'data-lang': 'en',
	'data-loading': 'lazy',
	crossorigin: 'anonymous',
	async: '',
};

export type HideElements =
	| PostHideElements
	| 'logo'
	| 'search'
	| 'themeToggler'
	| 'siteDescription'
	| 'footerDescription';
// Always hide elements from site
export const Hide: HideElements[] = [];
