<template>
	<div :class="`group relative ${project.featured ? 'md:col-span-2' : ''}`">
		<div
			class="relative overflow-hidden rounded-3xl bg-gray-900/50 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-500">
			<div class="relative h-64 md:h-80 overflow-hidden">
				<img :src="project.image" :alt="project.title"
					class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 object-top" />
			</div>
			<div class="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/50 to-transparent" />
			<div
				class="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
		</div>
		<div class="absolute bottom-0 left-0 right-0 p-6 md:p-8">
			<div class="flex flex-wrap gap-2 mb-4">
				<Badge v-for="(tag, tagIndex) in project.tags" :key="tagIndex" :label="tag" variant="outlined"
					class="text-sm text-purple-300 border-purple-300/50 bg-purple-900/75 group-hover:bg-amber-900 group-hover:text-white transition-all duration-300">
					{{ tag }}
				</Badge>
			</div>
			<h3
				class="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-amber-500 group-hover:shadow-2xl group-hover:text-shadow-purple-900 transition-all duration-400">
				{{ project.title }}
			</h3>
			<p class="text-gray-400 text-sm md:text-base mb-4 line-clamp-2">
				{{ project.description }}
			</p>
			<div v-if="project.github || project.live"
				class="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
				<a v-if="project.github" :href="project.github"
					class="flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition-colors" target="_blank"
					rel="noopener noreferrer">
					<i class="font-medium pi pi-github" />
					Código
				</a>
				<a v-if="project.live" :href="project.live"
					class="flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition-colors" target="_blank"
					rel="noopener noreferrer">
					<i class="font-medium pi pi-external-link" />
					Demo
				</a>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import Badge from '@/volt/Badge.vue';
import type { Project } from '@/types/project';

defineProps<{
	project: Project;
}>();
</script>
