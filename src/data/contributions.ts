import type { LocaleText } from '@/types/i18n'

interface Contribution {
	name: string;
	role: LocaleText;
	time: LocaleText;
	img_path: string;
	// Optional optical size correction for the logo, see components/LogoBox.vue.
	logo_scale?: number;
	description: LocaleText;
	link: string;
}

const contributions: Contribution[] = [
	{
		name: "InferenceX",
		time: {
			en: "2026.11 - Present",
			zh: "2026.11 - 至今"
		},
		role: {
			en: "Outside Collaborator",
			zh: "外部协作者（Outside Collaborator）"
		},
		img_path: "images/logos/inferencex.png",
		description: {
			en: `An open source AI accelerator research platform by <a href="https://semianalysis.com/" target="_blank">SemiAnalysis</a>, continuously benchmarking LLM inference across hardware and software stacks.
			<ul class="bio-list">
				<li>Contributing vLLM benchmark recipes on AMD GPUs for agentic workloads.</li>
			</ul>`,
			zh: `<a href="https://semianalysis.com/" target="_blank">SemiAnalysis</a> 推出的开源 AI 加速器研究平台，持续评测不同硬件与软件栈上的大模型推理性能。
			<ul class="bio-list">
				<li>贡献 vLLM 在 AMD GPU 上面向 Agentic 场景的基准测试配置。</li>
			</ul>`
		},
		link: "https://github.com/SemiAnalysisAI/InferenceX"
	},
	{
		name: "vLLM",
		time: {
			en: "2025.01 - Present",
			zh: "2025.01 - 至今"
		},
		role: {
			en: "Maintainer",
			zh: "维护者（Maintainer）"
		},
		img_path: "images/logos/vllm.png",
		logo_scale: 0.88,
		description: {
			en: `A high-throughput and memory-efficient inference and serving engine for LLMs.
			<ul class="bio-list">
				<li>Performance optimization on AMD GPUs, multimodal inference and hardware portability.</li>
				<li>Contributed <a href="https://github.com/vllm-project/vllm/pulls?q=is%3Apr+state%3Amerged+author%3Ashen-shanshan" target="_blank">62 merged PRs</a> so far.</li>
			</ul>`,
			zh: `高吞吐、显存高效的大模型推理与服务引擎。
			<ul class="bio-list">
				<li>聚焦 AMD GPU 性能优化、多模态推理与硬件可移植性；</li>
				<li>截至目前已贡献（合入）<a href="https://github.com/vllm-project/vllm/pulls?q=is%3Apr+state%3Amerged+author%3Ashen-shanshan" target="_blank">62 个 PR</a>。</li>
			</ul>`
		},
		link: "https://github.com/vllm-project/vllm"
	},
	{
		name: "vLLM-Ascend",
		time: {
			en: "2025.01 - 2026.03",
			zh: "2025.01 - 2026.03"
		},
		role: {
			en: "Core Contributor",
			zh: "核心贡献者（Core Contributor）"
		},
		img_path: "images/logos/vllm-ascend.png",
		description: {
			en: `Community maintained hardware plugin for vLLM on Huawei Ascend.
			<ul class="bio-list">
				<li>Project incubation, multimodal module and structured output support.</li>
				<li>Contributed <a href="https://github.com/vllm-project/vllm-ascend/pulls?q=is%3Apr+state%3Amerged+author%3Ashen-shanshan" target="_blank">111 merged PRs</a> so far.</li>
			</ul>`,
			zh: `社区维护的 vLLM 昇腾 NPU 硬件插件。
			<ul class="bio-list">
				<li>参与项目孵化，负责多模态模块与 Structured Output 特性；</li>
				<li>截至目前已贡献（合入）<a href="https://github.com/vllm-project/vllm-ascend/pulls?q=is%3Apr+state%3Amerged+author%3Ashen-shanshan" target="_blank">111 个 PR</a>。</li>
			</ul>`
		},
		link: "https://github.com/vllm-project/vllm-ascend"
	}
]

export {contributions, type Contribution}
