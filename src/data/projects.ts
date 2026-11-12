import type { LocaleText } from '@/types/i18n'

interface Project {
	repo: string;
	description: LocaleText;
	language: string;
	languageColor: string;
}

// Stars and forks are fetched from the GitHub API at runtime.
const projects: Project[] = [
	{
		repo: "shen-shanshan/cs-self-learning",
		description: {
			en: "This repo is used for archiving my notes, codes and materials of CS learning.",
			zh: "用于归档我的计算机科学学习笔记、代码和资料。"
		},
		language: "Jupyter Notebook",
		languageColor: "#DA5B0B"
	},
	{
		repo: "shen-shanshan/vllm-dev-skills",
		description: {
			en: "A curated collection of Claude Code agent skills that accelerate the entire vLLM development lifecycle.",
			zh: "精心整理的 Claude Code Agent Skills 合集，加速 vLLM 开发的全流程。"
		},
		language: "Python",
		languageColor: "#3572A5"
	},
	{
		repo: "shen-shanshan/vllm-maintainer-shepherd-dashboard",
		description: {
			en: "A dashboard for vLLM maintainers to efficiently shepherd PRs, reviews, CI, and community contributions.",
			zh: "帮助 vLLM Maintainer 高效跟进 PR、Review、CI 和社区贡献的看板。"
		},
		language: "JavaScript",
		languageColor: "#f1e05a"
	}
]

export {projects, type Project}
