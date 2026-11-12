import type { LocaleText } from '@/types/i18n'

interface Experience {
	title: LocaleText;
	role: LocaleText;
	time: LocaleText;
	img_path: string;
	// Optional optical size correction for the logo, see components/LogoBox.vue.
	logo_scale?: number;
	description: LocaleText;
	link: LocaleText;
}

// Most recent first.
const experiences: Experience[] = [
	{
		title: {
			en: "AMD",
			zh: "AMD"
		},
		role: {
			en: "Senior Software Engineer",
			zh: "高级软件工程师"
		},
		time: {
			en: "2026.07 - Present",
			zh: "2026.07 - 至今"
		},
		img_path: "images/logos/amd.png",
		logo_scale: 0.88,
		description: {
			en: `Building the vLLM inference engine for the <a href="https://www.amd.com/en/products/software/rocm.html" target="_blank">AMD ROCm</a> GPU software ecosystem:
			<ul class="bio-list">
				<li>Performance optimization of DeepSeek models on MI355X GPUs.</li>
				<li>KV cache offloading and scheduling for agentic workloads.</li>
				<li>Reviewed 170+ AMD-related PRs as a vLLM maintainer.</li>
			</ul>`,
			zh: `致力于为 <a href="https://www.amd.com/zh-cn/products/software/rocm.html" target="_blank">AMD ROCm</a> GPU 构筑 vLLM 推理软件开源生态：
			<ul class="bio-list">
				<li>DeepSeek 系列模型在 MI355X GPU 上的性能优化；</li>
				<li>面向 Agentic 场景的 KV Cache 卸载与调度优化；</li>
				<li>作为 vLLM Maintainer Review 了 170+ 个 AMD 相关 PR。</li>
			</ul>`
		},
		link: {
			en: "https://www.amd.com/en/products/software/rocm.html",
			zh: "https://www.amd.com/zh-cn/products/software/rocm.html"
		}
	},
	{
		title: {
			en: "Huawei",
			zh: "华为"
		},
		role: {
			en: "Software Engineer",
			zh: "软件工程师"
		},
		time: {
			en: "2023.07 - 2026.06",
			zh: "2023.07 - 2026.06"
		},
		img_path: "images/logos/huawei.png",
		description: {
			en: `Ascend Computing (2024.08 - 2026.06), building the vLLM inference engine for the <a href="https://www.hiascend.com/" target="_blank">Ascend NPU</a> software ecosystem:
			<ul class="bio-list">
				<li>vLLM hardware plugin mechanism and the incubation of vLLM-Ascend.</li>
				<li>Multimodal inference, including ViT CUDA graph support in vLLM.</li>
			</ul>
			Corporate IT (2023.07 - 2024.08): Java backend development for the MetaERP project.`,
			zh: `昇腾计算（2024.08 - 2026.06），致力于为<a href="https://www.hiascend.com/" target="_blank">昇腾 NPU</a> 构筑 vLLM 推理软件开源生态：
			<ul class="bio-list">
				<li>vLLM 硬件插件化机制设计与 vLLM-Ascend 项目孵化；</li>
				<li>多模态推理优化，包括 vLLM 中的 ViT CUDA Graph 支持。</li>
			</ul>
			集团 IT（2023.07 - 2024.08）：MetaERP 项目的 Java 后端开发。`
		},
		link: {
			en: "https://www.huawei.com/en/",
			zh: "https://www.huawei.com/cn/"
		}
	},
	{
		title: {
			en: "Beijing Jiaotong University (M.Eng.)",
			zh: "北京交通大学（硕士）"
		},
		role: {
			en: "School of Electronic and Information Engineering",
			zh: "电子信息工程学院"
		},
		time: {
			en: "2021.09 - 2023.06",
			zh: "2021.09 - 2023.06"
		},
		img_path: "images/logos/bjtu.png",
		logo_scale: 1.08,
		description: {
			en: "Majored in communication engineering, focusing on NAS layer security of wireless communication.",
			zh: "通信工程专业，研究方向为无线通信 NAS 层安全。"
		},
		link: {
			en: "https://en.bjtu.edu.cn/",
			zh: "https://www.bjtu.edu.cn/"
		}
	},
	{
		title: {
			en: "Beijing Jiaotong University (B.Eng.)",
			zh: "北京交通大学（本科）"
		},
		role: {
			en: "School of Electronic and Information Engineering",
			zh: "电子信息工程学院"
		},
		time: {
			en: "2016.09 - 2020.06",
			zh: "2016.09 - 2020.06"
		},
		img_path: "images/logos/bjtu.png",
		logo_scale: 1.08,
		description: {
			en: "Majored in communication engineering.",
			zh: "通信工程专业。"
		},
		link: {
			en: "https://en.bjtu.edu.cn/",
			zh: "https://www.bjtu.edu.cn/"
		}
	}
]

export {experiences, type Experience}
