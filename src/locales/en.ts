export default {
  nav: {
    name: 'Shanshan Shen',
    home: 'Home',
    experience: 'Experience',
    openSource: 'Open Source',
    projects: 'Projects',
    toggleTheme: 'Toggle light / dark mode',
    toggleLocale: '切换到中文',
  },

  home: {
    bio: `I am currently a <b>Senior Software Engineer</b> at <a href="https://www.amd.com/en/products/software/rocm.html" target="_blank">AMD ROCm</a> (previously at <a href="https://www.hiascend.com/" target="_blank">Huawei Ascend</a>), building the <b>vLLM</b> inference engine for the GPU/NPU software ecosystem.
      <br /><br />
      I am also a <b>maintainer</b> of <a href="https://github.com/vllm-project" target="_blank">vllm-project</a>, mainly focusing on:
      <ul class="bio-list">
        <li>Performance optimization for <b>AMD Instinct GPUs</b> (especially the DeepSeek model family).</li>
        <li><b>Multimodal inference</b> (especially ViT execution optimization).</li>
        <li><b>Hardware portability</b> (especially out-of-tree device extensibility).</li>
      </ul>
      Before this, I studied at <a href="https://en.bjtu.edu.cn/" target="_blank">Beijing Jiaotong University</a> (B.Eng. / M.Eng.), majoring in communication engineering.`,
    email: 'Email',
  },

  sections: {
    experience: 'Experience',
    openSource: 'Open Source Contributions',
    openSourceSummary: 'Overall, I have contributed <a href="{link}" target="_blank"><b>{count}+ merged PRs</b></a> to the vLLM ecosystem.',
    projects: 'My Projects',
  },

  footer: {
    builtWith: 'Built on <a href="https://vuejs.org/" target="_blank">Vue 3</a> and <a href="https://vuetifyjs.com/" target="_blank">Vuetify</a>, based on the homepage template by <a href="https://github.com/interestingLSY/interestingLSY.github.io" target="_blank">interestingLSY</a>',
    sourceCode: 'Source code available at <a href="https://github.com/shen-shanshan/profile" target="_blank">GitHub</a>',
  },
}
