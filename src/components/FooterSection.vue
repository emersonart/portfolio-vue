<template>
	<footer class="py-12 px-6 border-t border-gray-800/50">
		<div class="max-w-6xl mx-auto">
			<div class="flex flex-col md:flex-row items-center justify-between gap-6">
				<div class="flex items-center gap-3">
					<div
						class="w-10 h-10 rounded-xl bg-linear-to-br from-purple-600 to-violet-600 flex items-center justify-center">
						<span class="text-white font-bold">EB</span>
					</div>
					<span class="text-white font-semibold">Emerson Bruno</span>
				</div>

				<p class="text-gray-500 text-sm flex items-center gap-1">
					{{ year }} - Feito com
					<i class="pi pi-heart-fill text-purple-500 fill-purple-500" />
					e muito café
				</p>

				<motion.button :whileHover="{ scale: 1.1 }" :whileTap="{ scale: 0.95 }" @click="scrollToTop"
					class="w-10 h-10 rounded-xl cursor-pointer bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 hover:bg-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
					aria-label="Voltar ao topo">
					<i class="pi pi-chevron-up" />
				</motion.button>
			</div>
		</div>
	</footer>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { motion } from 'motion-v';
const year = ref(new Date().getFullYear());
const scrollToTop = () => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>
