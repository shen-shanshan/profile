import type { LocaleText } from '@/types/i18n'

interface Contribution {
	name: string;
	role: LocaleText;
	img_path: string;
	description: LocaleText;
	link: string;
}

const contributions: Contribution[] = [
	{
		name: "InferenceX",
		role: {
			en: "Outside Collaborator",
			zh: "外部协作者（Outside Collaborator）"
		},
		img_path: "images/logos/inferencex.png",
		description: {
			en: `An open source AI accelerator research platform by <a href="https://semianalysis.com/" target="_blank">SemiAnalysis</a>, continuously benchmarking LLM inference across hardware and software stacks.`,
			zh: `<a href="https://semianalysis.com/" target="_blank">SemiAnalysis</a> 推出的开源 AI 加速器研究平台，持续评测不同硬件与软件栈上的大模型推理性能。`
		},
		link: "https://github.com/SemiAnalysisAI/InferenceX"
	},
	{
		name: "vLLM",
		role: {
			en: "Maintainer",
			zh: "维护者（Maintainer）"
		},
		img_path: "images/logos/vllm.png",
		description: {
			en: `A high-throughput and memory-efficient inference and serving engine for LLMs. <br />
			Mainly focusing on <b>performance optimization for AMD Instinct GPUs</b> (especially the DeepSeek model family), <b>multimodal inference</b> (especially ViT execution) and <b>hardware portability</b> (especially out-of-tree device extensibility).`,
			zh: `高吞吐、显存高效的大模型推理与服务引擎。<br />
			主要聚焦于：<b>AMD Instinct GPU 上的性能优化</b>（尤其是 DeepSeek 系列模型）、<b>多模态推理</b>（尤其是 ViT 执行优化）以及<b>硬件可移植性</b>（尤其是树外硬件插件扩展）。`
		},
		link: "https://github.com/vllm-project/vllm"
	},
	{
		name: "vLLM-Ascend",
		role: {
			en: "Core Contributor",
			zh: "核心贡献者（Core Contributor）"
		},
		img_path: "images/logos/vllm-ascend.png",
		description: {
			en: `Community maintained hardware plugin for vLLM on Huawei Ascend. <br />
			Helped incubate the project from scratch under vllm-project, and owned its <b>multimodal</b> module and <b>structured output</b> support, along with bug fixes, docs, reviews and releases.`,
			zh: `社区维护的、让 vLLM 运行在华为昇腾 NPU 上的硬件插件。<br />
			在 vllm-project 下从零到一参与了项目孵化，负责<b>多模态</b>模块和 <b>Structured Output</b> 特性，并参与 Bugfix、文档、PR Review、版本发布等社区工作。`
		},
		link: "https://github.com/vllm-project/vllm-ascend"
	}
]

// Merged PRs across the vllm-project organization.
const contributionStats = {
	prCount: 170,
	prLink: "https://github.com/pulls?q=is%3Apr+author%3Ashen-shanshan+is%3Amerged+is%3Apublic+org%3Avllm-project",
}

export {contributions, contributionStats, type Contribution}
