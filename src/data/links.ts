import type { LocaleText } from '@/types/i18n'

interface ProfileLink {
	label: LocaleText;
	icon: string;
	href: string;
	// Files under public/ are resolved against the deploy base.
	local?: boolean;
}

const email = "shanshanshen333@gmail.com"

const links: ProfileLink[] = [
	{ label: { en: "LinkedIn", zh: "LinkedIn" }, icon: "mdi-linkedin", href: "https://www.linkedin.com/in/shanshan-shen-b15278343/" },
	{ label: { en: "GitHub", zh: "GitHub" }, icon: "mdi-github", href: "https://github.com/shen-shanshan" },
	{ label: { en: "Zhihu", zh: "知乎" }, icon: "mdi-alpha-z-box", href: "https://www.zhihu.com/people/sss-53-26" },
	{ label: { en: "WeChat Official Account", zh: "微信公众号" }, icon: "mdi-wechat", href: "wechat-official-account-qrcode.png", local: true },
	{ label: { en: "WeChat", zh: "微信" }, icon: "mdi-wechat", href: "wechat-qrcode.png", local: true },
	{ label: { en: "Resume", zh: "简历" }, icon: "mdi-file-account", href: "resume.pdf", local: true },
]

export {email, links, type ProfileLink}
