// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const SITE_URL = 'https://recruiter.braintrailz.com';
const GITHUB_REPO = 'https://github.com/codemarc/i-built-my-own-recruiter';

// https://astro.build/config
export default defineConfig({
	site: SITE_URL,
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
			head: [
				{
					tag: 'link',
					attrs: {
						rel: 'preconnect',
						href: 'https://fonts.googleapis.com',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'preconnect',
						href: 'https://fonts.gstatic.com',
						crossorigin: true,
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'stylesheet',
						href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,600;0,9..40,700;1,9..40,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&display=swap',
					},
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
