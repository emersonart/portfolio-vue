<template>
	<section id="skills" class="py-32 px-6 relative overflow-hidden">
		<div class="absolute top-1/4 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
		<div class="absolute bottom-1/4 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />

		<div class="max-w-6xl mx-auto relative">
			<motion.div :initial="{ opacity: 0, y: 20 }" :whileInView="{ opacity: 1, y: 0 }" :viewport="{ once: true }"
				class="text-center mb-16">
				<span class="text-purple-400 text-sm font-medium uppercase tracking-widest mb-4 block">
					Habilidades
				</span>
				<h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
					Minhas
					<span class="bg-linear-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
						Tecnologias</span>
				</h2>
				<p class="text-gray-400 text-lg max-w-2xl mx-auto">
					Ferramentas e tecnologias que domino para criar soluções incríveis
				</p>
			</motion.div>
			<div class="grid md:grid-cols-3 gap-12 mb-20">
				<MotionSkillCard v-for="(category, index) in skillCategories" :key="index" :skills="category.skills"
					:initial="{ opacity: 0, y: 30 }" :whileInView="{ opacity: 1, y: 0 }" :viewport="{ once: true }"
					:transition="{ duration: 0.6, delay: index * 0.2 }" :title="category.title" />
			</div>
			<div class="text-center">
				<h3 class="text-xl font-semibold text-white mb-8">Stacks</h3>
				<div class="flex flex-wrap justify-center gap-3">
					<motion.span v-for="(tech, index) in techs" :key="tech" :initial="{ opacity: 0, scale: 0.8 }"
						:whileInView="{ opacity: 1, scale: 1 }" :viewport="{ once: true }" :transition="{ delay: index * 0.03 }"
						:whileHover="{ scale: 1.1, backgroundColor: 'rgba(139, 92, 246, 0.2)' }"
						class="px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700/50 text-gray-400 text-sm hover:text-purple-300 hover:border-purple-500/50 transition-all duration-300 cursor-default">
						{{ tech }}
					</motion.span>
				</div>
			</div>
		</div>
	</section>
</template>
<script setup lang="ts">
import { motion } from "motion-v"

import SkillCard from './Cards/SkillCard.vue';
const MotionSkillCard = motion.create(SkillCard);
import type { categorySkill } from '@/types/categorySkill';
const techs: string[] = [
	'PHP', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Node.js',
	'Python', 'PostgreSQL', 'MySQL', 'Redis', 'FlutterFlow', 'cPanel/WHM', 'Cordova', 'Framework7',
	'Bootstrap', 'CodeIgniter', 'WordPress', 'Jenkins',
	'Docker', 'Git', 'REST API',
	'Tailwind', 'N8N'
]
const skillCategories: categorySkill[] = [
	{
		title: 'Frontend',
		skills: [
			{ name: 'HTML', level: 90 },
			{ name: 'Javascript', level: 85 },
			{ name: 'jQuery', level: 90 },
			{ name: 'Tailwind CSS', level: 45 },
			{ name: 'Vue.js', level: 50 },
			{ name: 'React', level: 30 },
		]
	}, {
		title: 'Backend',
		skills: [
			{ name: 'PHP', level: 90 },
			{ name: 'REST', level: 78 },
			{ name: 'MySQL', level: 85 },
			{ name: 'Node.js', level: 45 },
			{ name: 'Redis', level: 35 },

			{ name: 'Python', level: 30 },
		]
	},
	{
		title: 'DevOps & Tools',
		skills: [
			{ name: 'N8N', level: 80 },
			{ name: 'cPanel/Whm', level: 70 },
			{ name: 'Linux', level: 55 },
			{ name: 'Git', level: 50 },
			{ name: 'Docker', level: 40 },
			{ name: 'CI/CD', level: 25 },

		]
	},
]
</script>
