<script setup lang="ts">
import { useLocale } from '@/composables/useLocale'
import { useThemeMode } from '@/composables/useThemeMode'

const { toggleLocale, locale } = useLocale()
const { isDark, toggleTheme } = useThemeMode()

const sections = [
	{ to: '/#card-overview', icon: 'mdi-home', key: 'nav.home' },
	{ to: '/#card-experience', icon: 'mdi-briefcase', key: 'nav.experience' },
	{ to: '/#card-open-source', icon: 'mdi-source-branch', key: 'nav.openSource' },
	{ to: '/#card-projects', icon: 'mdi-hammer-screwdriver', key: 'nav.projects' },
]
</script>

<template>
	<v-app-bar :border=10 flat>
		<template #default>
			<v-btn
			to="/#card-overview"
			class="ml-2 ml-md-4 mr-2"
			rounded="0"
			variant="flat"
			:active="false"
			style="display: flex; align-items: center; height: 100%">
				<span class="nav-name">{{ $t('nav.name') }}</span>
			</v-btn>
			<v-divider vertical class="mr-4 d-none d-md-flex"></v-divider>
			<v-btn
			v-for="section in sections"
			:key="section.to"
			:to="section.to"
			class="mr-2 d-none d-md-flex"
			:prepend-icon="section.icon"
			:active="false"
			>
				{{ $t(section.key) }}
			</v-btn>
			<v-spacer></v-spacer>
			<v-btn
			icon
			variant="text"
			:title="$t('nav.toggleTheme')"
			:aria-label="$t('nav.toggleTheme')"
			@click="toggleTheme"
			>
				<v-icon :icon="isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'"></v-icon>
			</v-btn>
			<v-btn
			class="mr-2 mr-md-4"
			variant="text"
			prepend-icon="mdi-translate"
			:title="$t('nav.toggleLocale')"
			@click="toggleLocale"
			>
				{{ locale === 'zh' ? 'EN' : '中文' }}
			</v-btn>
		</template>
	</v-app-bar>
</template>

<style scoped>
.nav-name {
	font-size: 20px;
	text-transform: none;
	letter-spacing: normal;
}
</style>
