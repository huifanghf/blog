import type {
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
	TwikooConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Huifang's blog",
	subtitle: "回放",
	lang: "zh_CN", // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
	themeColor: {
		hue: 250, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true,
		src: "assets/images/banner.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		// {
		//   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
		//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
		//   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		LinkPreset.Friends, 
		{
			name: "GitHub",
			url: "https://github.com/huifanghf", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "Huifang",
	bio: "达到目的我就忘本，达不到目的我就翻脸",
	links: [
		{
			name: "Mail",
			icon: "material-symbols:mail", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "mailto:huif@wzwzx.cn",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/huifanghf",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const twikooConfig: TwikooConfig = {
	enable: true, // 设置为 true 启用 Twikoo 评论系统
	envId: "https://docs.wzwzx.cn/", // 您的环境 ID，Vercel 部署填写完整 URL，如 https://your-twikoo.vercel.app
	region: "", // 腾讯云地域，默认 ap-shanghai
	path: (slug: string) => `/posts/${slug}/`, // 自定义页面路径
	lang: "zh-CN", // 语言设置
	placeholder: "欢迎评论...", // 评论框占位符
	avatar: "https://cravatar.cn/avatar/", // 头像 CDN
	pageSize: 10, // 评论分页大小
	maxNestLevel: 3, // 最大嵌套层级
	showImage: true, // 显示图片
	showReply: true, // 显示回复按钮
	showLike: true, // 显示点赞按钮
	showAdmin: true, // 显示管理员标识
	showLevel: true, // 显示等级标识
	readMore: true, // 显示"阅读更多"按钮
	recent: true, // 显示最近评论
	recent_num: 5, // 最近评论数量
};
