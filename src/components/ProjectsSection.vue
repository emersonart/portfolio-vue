<template>
	<section id="projects" class="py-32 px-6 relative">
		<div class="absolute top-1/2 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />
		<div class="max-w-6xl mx-auto relative">
			<div class="text-center mb-16">
				<span class="text-purple-400 text-sm font-medium uppercase trackin-widest mb-4 block">
					Portfólio
				</span>
				<h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
					Projetos em <span class="bg-linear-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
						Destaque</span>
				</h2>
				<p class="text-gray-400 text-lg max-w-2xl mx-auto">
					Uma seleção de alguns dos meus trabalhos e estudos
				</p>
			</div>
			<div class="grid md:grid-cols-2 gap-6">
				<ProjectCard v-for="(project, index) in Projects" :key="index" :project="project" />
			</div>

		</div>
	</section>

</template>
<script setup lang="ts">
import ProjectCard from './Cards/ProjectCard.vue';
import type { Project } from '@/types/project';

import rockPaperScissorsImage from '@/assets/images/projects/rock-paper-scissors.jpg';
import essenza from '@/assets/images/projects/essenza.jpg';
import praiaShopping from '@/assets/images/projects/praiashopping.jpg';
import npsObar from '@/assets/images/projects/npsobar.jpg';
const Projects: Project[] = [
	{
		title: 'Rock, Paper and Scissors',
		description: 'Projeto de estudos de vue para testar conceitos básicos.',
		image: rockPaperScissorsImage,
		tags: ['Vue', 'Tailwindcss', 'Vite'],
		github: 'https://github.com/emersonart/rock-paper-scissors',
		live: null,
		featured: true,
	},
	{
		title: 'Essenza Saúde e Bem-estar',
		description: 'Site institucional da clínica Essenza Sáude e Bem Estar',
		image: essenza,
		tags: ['PHP', 'Codeigniter 4', 'MySQL', 'jQuery', 'HTML', 'CSS', 'Swiper.js', 'Bootstrap 5'],
		github: null,
		live: 'https://essenzasaudebemestar.com.br',
		featured: true,
	},
	{
		title: 'Praia Shopping',
		description: 'Site institucional do Praia Shopping (Natal-RN)',
		image: praiaShopping,
		tags: ['PHP', 'Codeigniter 3', 'MySQL', 'jQuery', 'HTML', 'CSS', 'Swiper.js', 'Bootstrap 5'],
		github: null,
		live: 'https://praiashopping.com.br',
		featured: false,
	},
	{
		title: 'Ôbar Restaurante (Natal-RN)',
		description: 'Simples sistema NPS para avaliação de atendimento em balcão.',
		image: npsObar,
		tags: ['PHP', 'CodeIgniter 3', 'MySQL', 'HTML', 'CSS', 'jQuery', 'Bootstrap 5'],
		github: 'https://github.com/emersonart/nps-project/',
		live: null,
		featured: false,
	},
]
</script>
