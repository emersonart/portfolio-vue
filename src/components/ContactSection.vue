<template>
	<section id="contact" class="py-24 px-6 relative">
		<div
			class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/10 rounded-full blur-3xl" />
		<div class="max-w-5xl mx-auto relative">
			<motion.div :initial="{ opacity: 0, y: 20 }" :whileInView="{ opacity: 1, y: 0 }" :viewport="{ once: true }"
				class="text-center mb-20">
				<span class="text-purple-400 text-sm font-medium uppercase tracking-widest mb-4 block">
					Contato
				</span>
				<h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
					Vamos trabalhar
					<span class="bg-linear-to-tl from-amber-800 to-amber-300 bg-clip-text text-transparent"> juntos</span>
				</h2>
				<p class="text-gray-400 text-lg max-w-2xl mx-auto">
					Tem um projeto em mente? Entre em contato através dos canais abaixo
				</p>
			</motion.div>
			<div class="flex flex-wrap justify-center gap-6 mb-16">
				<motion.div v-for="(info, index) in contactInfos" :key="index" :initial="{ opacity: 0, y: 30 }"
					:whileInView="{ opacity: 1, y: 0 }" :viewport="{ once: true }"
					:transition="{ delay: index * 0.1, duration: 0.6 }" class="group w-full md:w-[calc(50%-1rem)] max-w-md">
					<a v-if="info.href && info.href != '#' && info.href != 'javascript:;'" :href="info.href">
						<div
							class="h-full bg-gray-900/30 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/10 group-hover:border-purple-500/30 transition-all duration-300 hover:transform hover:-translate-y-2">
							<div
								class="w-16 h-16 rounded-2xl bg-linear-to-br from-purple-600/20 to-violet-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
								<span :class="'text-purple-400 ' + info.icon" />
							</div>
							<h3 class="text-white font-semibold text-lg mb-2 group-hover:text-amber-400">{{ info.label }}</h3>
							<p class="text-purple-300 font-medium mb-2 ">{{ info.value }}</p>
							<p class="text-gray-500 text-sm">{{ info.description }}</p>
						</div>
					</a>
					<div v-else
						class="h-full bg-gray-900/30 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:-translate-y-2">
						<div
							class="w-16 h-16 rounded-2xl bg-linear-to-br from-purple-600/20 to-violet-600/20 flex items-center justify-center mb-6">
							<span :class="'text-purple-400 ' + info.icon" />
						</div>
						<h3 class="text-white font-semibold text-lg mb-2">{{ info.label }}</h3>
						<p class="text-purple-300 font-medium mb-2">{{ info.value }}</p>
						<p class="text-gray-500 text-sm">{{ info.description }}</p>
					</div>
				</motion.div>
			</div>
		</div>
	</section>
</template>
<script setup lang="ts">
import type { contactInfo } from '@/types/contactInfo';
import { motion } from 'motion-v';
const contactInfos: contactInfo[] = [
	{
		icon: 'pi pi-envelope',
		label: 'E-mail',
		value: 'emersonbruno_@hotmail.com',
		href: 'emersonbruno_@hotmail.com',
		description: 'Me envie um email'
	},
	{
		icon: 'pi pi-linkedin',
		label: 'Linkedin',
		value: 'Emerson Bruno',
		href: 'https://linkedin.com/in/emerson-bd-silva/',
		description: 'Disponível no linkedin'
	},
	{
		icon: 'pi pi-github',
		label: 'Github',
		value: 'Emerson Bruno',
		href: 'https://github.com/emersonart/',
		description: 'Disponível no github'
	},
	{
		icon: 'pi pi-map',
		label: 'Localização',
		value: 'RN, Brasil',
		description: 'Disponível para remoto',
	},
]
</script>
