import type { LocaleText } from '@/types/i18n'

interface Experience {
	title: LocaleText;
	role: LocaleText;
	time: LocaleText;
	img_path: string;
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
			en: "Senior Software Engineer · ROCm",
			zh: "高级软件工程师 · ROCm"
		},
		time: {
			en: "2026.07 - Present",
			zh: "2026.07 - 至今"
		},
		img_path: "images/logos/amd.png",
		description: {
			en: `Building the <b>vLLM</b> inference engine for the <a href="https://www.amd.com/en/products/software/rocm.html" target="_blank">AMD ROCm</a> GPU software ecosystem. <br />
			Leading the performance optimization of <b>DeepSeek-V4-Pro</b> on <b>MI355X</b> GPUs (fused kernels, multi-stream overlap, etc.), and reviewing <b>90+</b> AMD-related PRs as a vLLM maintainer.`,
			zh: `致力于为 <a href="https://www.amd.com/en/products/software/rocm.html" target="_blank">AMD ROCm</a> GPU 构筑高效易用的 <b>vLLM</b> 推理软件开源生态。<br />
			负责 <b>DeepSeek-V4-Pro</b> 在 <b>MI355X</b> GPU 上的性能优化（融合算子、多流并行等），并作为 vLLM Maintainer Review 了 <b>90+</b> 个 AMD 相关 PR。`
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
			en: `<b>Ascend Computing</b> (2024.08 - 2026.06): built the vLLM inference engine for the <a href="https://www.hiascend.com/" target="_blank">Ascend NPU</a> software ecosystem. Helped design vLLM's hardware plugin mechanism and incubate <b>vLLM-Ascend</b>, owned its multimodal module, and led ViT Full CUDA Graph support in vLLM. <br />
			<b>Corporate IT</b> (2023.07 - 2024.08): Java backend developer of the BI module for the PSI (purchase-sale-inventory) system in the MetaERP project.`,
			zh: `<b>昇腾计算</b>（2024.08 - 2026.06）：致力于为<a href="https://www.hiascend.com/" target="_blank">昇腾 NPU</a> 构筑高效易用的 vLLM 推理软件开源生态。参与设计 vLLM 硬件插件化能力并推动孵化 <b>vLLM-Ascend</b>，负责其多模态模块的整体设计与看护，主导了 vLLM 中 ViT Full CUDA Graph 特性的集成。<br />
			<b>集团 IT</b>（2023.07 - 2024.08）：MetaERP 国产化替代项目中 PSI（进销存）BI 模块的核心 Java 后端开发人员。`
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
