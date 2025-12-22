<template>
	<div
		class="bg-gray-900/3 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
		<h3 class="text-xl font-bold text-white mb-8 flex items-center gap-3">
			<span class="w-3 h-3 rounded-full bg-linear-to-r from-purple-500 to-violet-500"></span>
			{{ title }}
		</h3>
		<div class="space-y-6">
			<SkillBar v-for="(skill, index) in skills" :key="index" :percentage="skill.level" :percent-name="skill.name" />
		</div>

	</div>
</template>

<script setup lang="ts">
import SkillBar from '@/components/ui/SkillBar.vue';
import type { categorySkill } from '@/types/categorySkill';
defineProps<categorySkill>();
</script>
