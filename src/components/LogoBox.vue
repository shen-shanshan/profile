<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(defineProps<{
	src: string
	alt: string
	// Optical correction for logos that look heavier or lighter than their area suggests.
	scale?: number
}>(), { scale: 1 })

// Every logo gets the same visual area regardless of its aspect ratio, so a
// wide wordmark is not dwarfed by a compact one (fitting all logos into the
// same box would make the squarer ones look much larger).
const LOGO_AREA = 5600

const size = ref<{ width: string; height: string } | null>(null)

function onLoad(e: Event) {
	const img = e.target as HTMLImageElement
	const ratio = img.naturalWidth / img.naturalHeight
	const area = LOGO_AREA * props.scale * props.scale
	size.value = {
		width: `${Math.sqrt(area * ratio)}px`,
		height: `${Math.sqrt(area / ratio)}px`,
	}
}
</script>

<template>
	<div class="logo-box">
		<img
		:src="src"
		:alt="alt"
		:style="size ?? { visibility: 'hidden' }"
		@load="onLoad" />
	</div>
</template>
