<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { experiences } from "@/data/experiences"
import { contributions } from "@/data/contributions"
import { projects } from "@/data/projects"
import { email, links } from "@/data/links"
import { asset } from "@/utils/asset"
import LogoBox from "@/components/LogoBox.vue"

const { locale } = useI18n()

const year = new Date().getFullYear()

// Live star / fork counts; the cards simply omit them if the API call fails.
const repoStats = reactive<Record<string, { stars: number; forks: number }>>({})

onMounted(() => {
  for (const project of projects) {
    fetch(`https://api.github.com/repos/${project.repo}`)
      .then(res => res.ok ? res.json() : Promise.reject(res.status))
      .then(data => {
        repoStats[project.repo] = { stars: data.stargazers_count, forks: data.forks_count }
      })
      .catch(() => {})
  }
})
</script>

<template>
  <v-row class="mt-4" justify="center" id="card-overview">
    <v-col cols="6" md="3" align-self="center">
      <v-row justify="center">
        <div style="width: 80%">
          <v-img
            :src="asset('images/photo.jpg')"
            class="d-none d-md-block w photo">
          </v-img>
        </div>
        <v-avatar
          size="150"
          class="d-md-none"
          style="">
          <v-img
            :src="asset('images/photo.jpg')"
            cover>
          </v-img>
        </v-avatar>
      </v-row>
    </v-col>
    <v-col cols="12" md="9" align-self="center">
      <v-card variant="text">
        <v-card-item>
          <v-card-title class="pb-2 pt-2">
            <h2 style="text-align: center;">Shanshan Shen | 申杉杉</h2>
          </v-card-title>
          <v-card-text class="mt-4 text-main">
            <div class="bio" style="margin-top: 14px;" v-html="$t('home.bio')">
            </div>
            <div class="mt-6" style="text-align: center">
              <p style="font-size: 15px;">
                {{ $t('home.email') }}: <a :href="`mailto:${email}`">{{ email }}</a><br />
              </p>
              <p class="profile-links">
                <template v-for="(link, i) in links" :key="link.href">
                  <a :href="link.local ? asset(link.href) : link.href" target="_blank">
                    <v-icon :icon="link.icon" size="small"></v-icon> {{ link.label[locale] || link.label.en }}
                  </a>
                  <span v-if="i < links.length - 1"> / </span>
                </template>
              </p>
            </div>
          </v-card-text>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
  <v-divider class="mt-10 mb-4"></v-divider>

  <v-card variant="text" class="mt-4" id="card-experience">
    <v-card-item>
      <v-card-title>
        <h2 class="card-title">{{ $t('sections.experience') }}</h2>
      </v-card-title>
      <v-card-item>
        <v-row v-for="experience in experiences" :key="experience.title.en + experience.time.en" class="mt-4">
          <v-col cols="12" md="3" class="d-flex align-center justify-center">
            <LogoBox :src="asset(experience.img_path)" :alt="experience.title.en" :scale="experience.logo_scale" />
          </v-col>
          <v-divider vertical></v-divider>
          <v-col cols="12" md="9" class="text-main">
            <a :href="experience.link[locale] || experience.link.en" target="_blank" v-html="experience.title[locale] || experience.title.en" class="entry-title"></a>
            <p v-html="experience.role[locale] || experience.role.en" style="font-size: 15px; font-weight: bold; margin-top: 5px;"></p>
            <p v-html="experience.time[locale] || experience.time.en" style="font-size: 14px; margin-top: 2px;"></p>
            <div v-html="experience.description[locale] || experience.description.en" style="font-size: 16px; margin-top: 5px;"></div>
          </v-col>
        </v-row>
      </v-card-item>
    </v-card-item>
  </v-card>

  <v-card variant="text" class="mt-4" id="card-open-source">
    <v-card-item>
      <v-card-title>
        <h2 class="card-title">{{ $t('sections.openSource') }}</h2>
      </v-card-title>
      <v-card-item>
        <v-row v-for="contribution in contributions" :key="contribution.name" class="mt-4">
          <v-col cols="12" md="3" class="d-flex align-center justify-center">
            <LogoBox :src="asset(contribution.img_path)" :alt="contribution.name" :scale="contribution.logo_scale" />
          </v-col>
          <v-divider vertical></v-divider>
          <v-col cols="12" md="9" class="text-main">
            <a :href="contribution.link" target="_blank" class="entry-title">{{ contribution.name }}</a>
            <p v-html="contribution.role[locale] || contribution.role.en" style="font-size: 15px; font-weight: bold; margin-top: 5px;"></p>
            <p v-html="contribution.time[locale] || contribution.time.en" style="font-size: 14px; margin-top: 2px;"></p>
            <div v-html="contribution.description[locale] || contribution.description.en" style="font-size: 16px; margin-top: 5px;"></div>
          </v-col>
        </v-row>
      </v-card-item>
    </v-card-item>
  </v-card>

  <v-card variant="text" class="mt-2" id="card-projects">
    <v-card-item>
      <v-card-title>
        <h2 class="card-title">{{ $t('sections.projects') }}</h2>
      </v-card-title>
      <v-card-text class="mt-3">
        <v-row>
          <v-col v-for="project in projects" :key="project.repo" cols="12" md="4">
            <v-card
              variant="outlined"
              class="project-card h-100 d-flex flex-column"
              :href="`https://github.com/${project.repo}`"
              target="_blank">
              <v-card-item>
                <p class="project-name">
                  <v-icon icon="mdi-github" size="small"></v-icon> {{ project.repo.split('/')[1] }}
                </p>
              </v-card-item>
              <v-card-text class="text-main flex-grow-1">
                <p style="font-size: 14px;">{{ project.description[locale] || project.description.en }}</p>
              </v-card-text>
              <v-card-text class="text-main pt-0" style="font-size: 13px;">
                <span class="lang-dot" :style="{ backgroundColor: project.languageColor }"></span>
                {{ project.language }}
                <template v-if="repoStats[project.repo]">
                  <v-icon icon="mdi-star-outline" size="small" class="ml-3"></v-icon> {{ repoStats[project.repo].stars }}
                  <v-icon icon="mdi-source-fork" size="small" class="ml-3"></v-icon> {{ repoStats[project.repo].forks }}
                </template>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card-item>
  </v-card>

  <v-divider class="mt-10"></v-divider>
  <v-row class="mt-1 mb-4" justify="center">
    <v-col align-self="center">
      <p class="text-main" style="text-align: center; font-size: 12px; line-height: 1.6;">
        &copy; {{ year }} Shanshan Shen <br />
        <span v-html="$t('footer.builtWith')"></span> <br />
        <span v-html="$t('footer.sourceCode')"></span>
      </p>
    </v-col>
  </v-row>
</template>
