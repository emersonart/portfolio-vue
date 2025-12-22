<script setup lang="ts">
import { useScroll, motion } from "motion-v"
import BackgroundNoise from '@/components/ui/BackgroundNoise.vue';
import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import SkillsSection from './components/SkillsSection.vue';
import ContactSection from "./components/ContactSection.vue";
import FooterSection from "./components/FooterSection.vue";
const { scrollYProgress } = useScroll()
</script>

<template>
	<motion.div :style="{ scaleX: scrollYProgress, originX: 0, }"
		class="fixed h-[2px] bg-amber-400 inset-x-0 top-0 z-10" />
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
			<AboutSection />
			<ProjectsSection />
			<SkillsSection />
			<ContactSection />
			<FooterSection />
		</div>
	</div>
</template>
