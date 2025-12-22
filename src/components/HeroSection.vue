<template>
	<section class="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-6">
		<div class="absolute top-1/4 -left-24 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
		<div class="absolute bottom-1/4 -right-24 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"></div>
		<div
			class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl">
		</div>
		<motion.div :initial="{ opacity: 0, y: 30 }" :animate="{ opacity: 1, y: 0 }"
			:transition="{ duration: 0.8, ease: 'easeOut' }"
			class="text-center z-10 max-w-4xl animate-enter fade-in-10 slide-in-from-b-12 animate-duration-1000">
			<motion.img :initial="{ opacity: 0, scale: 0.9 }" :animate="{ opacity: 1, scale: 1 }" :transition="{ delay: 0.2 }"
				:src="imgProfile" alt="Emerson Bruno"
				class="mt-24 shadow-lg shadow-purple-500/25 transition-all duration-300 rounded-full mb-16 w-40 h-40 hover:scale-105 self-center mx-auto animate-enter fade-in-5 slide-in-from-t-12 animate-duration-2000" />
			<motion.h1 :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }"
				:transition="{ delay: 0.3, duration: 0.8 }"
				class="text-shadow-2xs text-5xl md:text-7xl font-extrabold text-white mb-6 animate-enter fade-in-10 slide-in-from-t-12 animate-duration-1000">
				Olá, eu sou <span
					class="bg-linear-to-r from-purple-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">Emerson</span>
			</motion.h1>
			<p :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }" :transition="{ delay: 0.5, duration: 0.8 }"
				class="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-enter fade-in-15 slide-in-from-t-12 animate-duration-1000">
				Desenvolvedor Full Stack apaixonado por criar
				<span className="text-purple-400"> experiências digitais </span>
				únicas e inovadoras
			</p>
			<div
				v-animateonscroll="{ enterClass: 'animate-enter fade-in-15 slide-in-from-t-12 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }"
				class="flex items-center justify-center gap-4 mb-16 animate-enter fade-in-15 slide-in-from-t-12 animate-duration-1000">
				<a variant="outlined" href="https://github.com/emersonart" target="_blank" rel="noopener noreferrer"
					size="large"
					class="flex align-center flex-row gap-4  justify-center px-6 font-bold py-3 border-2 rounded-full cursor-pointer bg-transparent border-purple-500/30 text-white hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 group w-full">
					<i class="pi pi-github text-2xl group-hover:text-purple-400 transition-colors"></i>
					<span class="text-md">Github</span>
				</a>
				<a variant="outlined" size="large" href="https://www.linkedin.com/in/emerson-bd-silva/" target="_blank"
					rel="noopener noreferrer"
					class="flex align-center flex-row gap-4  justify-center px-6 font-bold py-3 border-2 rounded-full cursor-pointer bg-transparent border-purple-500/30 text-white hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 group w-full">
					<i class="pi pi-linkedin text-2xl group-hover:text-purple-400 transition-colors"></i>
					<span class="text-md">Linkedin</span>
				</a>
				<a variant="outlined" size="large" href="mailto:emersonbruno_@hotmail.com" target="_blank"
					rel="noopener noreferrer"
					class="flex align-center flex-row gap-4  justify-center px-6 font-bold py-3 rounded-full cursor-pointer bg-linear-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white border-0 shadow-lg shadow-purple-500/25 transition-all duration-300 group w-full">
					<i class="pi pi-inbox text-2xl group-hover:text-purple-400 transition-colors"></i>
					<span class="text-md">Contato</span>
				</a>
			</div>
		</motion.div>
		<div class="flex flex-col items-center gap-2 mt-20">
			<span class="text-sm font-medium text-purple-100 opacity-30">SCROLL</span>
			<span
				class="animate-bounce h-8 w-8 bg-primary text-primary-contrast rounded-full inline-flex items-center justify-center">
				<i class="pi pi-angle-double-down text-purple-100 opacity-30" />
			</span>
		</div>

	</section>
</template>
<script lang="ts" setup>
import imgProfile from '@/assets/images/emerson.jpg';
import { motion } from 'motion-v';
</script>
