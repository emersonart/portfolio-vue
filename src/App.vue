<script setup lang="ts">
import BackgroundNoise from '@/components/ui/BackgroundNoise.vue';
import HeroSection from './components/HeroSection.vue';
</script>

<template>
	<div class="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
		<!-- Gradient mesh background -->
		<div class="fixed inset-0 pointer-events-none">
			<div
				class="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,40,200,0.15),transparent)]" />
		</div>

		<!-- Noise texture overlay -->
		<BackgroundNoise />

		<!-- content-->
		<div class="relative">
			<HeroSection />
		</div>
	</div>
</template>


<style scoped>
@keyframes shimmer {
	0% {
		transform: translateX(-100%);
	}

	100% {
		transform: translateX(100%);
	}
}

.animate-shimmer {
	animation: shimmer 2s infinite;
}
</style>
