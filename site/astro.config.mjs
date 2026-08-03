// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const SITE_URL = 'https://braintrailz.com';
const BASE = '/recruiter';
const GITHUB_REPO = 'https://github.com/codemarc/i-built-my-own-recruiter';

// https://astro.build/config
export default defineConfig({
	site: SITE_URL,
	base: BASE,
	integrations: [
		starlight({
			title: 'I Built My Own Recruiter',
			description:
				'A field guide to running your job search like a software project. Part memoir, part manual — Braintrailz pillar three.',
			favicon: '/favicon.svg',
			social: [
				{ icon: 'github', label: 'GitHub', href: GITHUB_REPO },
			],
			customCss: ['./src/styles/custom.css'],
			components: {
				ThemeSelect: './src/components/ThemeSelect.astro',
			},
			head: [
				{
					// Apply larger-text preference before paint to avoid a size flash.
					tag: 'script',
					content: `(function(){try{var s=localStorage.getItem('starlight-text-size');if(s==='large')document.documentElement.dataset.textSize='large';}catch(e){}})();`,
				},
			],
			sidebar: [
				{
					label: 'The Book',
					items: [{ autogenerate: { directory: 'book' } }],
				},
				{
					label: 'Fork & Adapt',
					items: [
						{
							label: 'Templates',
							link: `${GITHUB_REPO}/tree/main/templates`,
							attrs: { target: '_blank', rel: 'noopener' },
						},
						{
							label: 'Examples',
							link: `${GITHUB_REPO}/tree/main/examples`,
							attrs: { target: '_blank', rel: 'noopener' },
						},
						{
							label: 'GitHub repo',
							link: GITHUB_REPO,
							attrs: { target: '_blank', rel: 'noopener' },
						},
					],
				},
			],
			pagination: true,
			lastUpdated: false,
		}),
	],
});
