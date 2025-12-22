<template>
	<div class="group">
		<div v-if="percentName" class="flex justify-between items-center mb-2">
			<span class="text-gray-300 font-medium group-hover:text-purple-300 transition-all">
				{{ percentName }}
			</span>
			<span class="text-sm text-gray-500">
				{{ percentage }}%
			</span>
		</div>
		<div class="h-2 bg-gray-800 rounded-full overflow-hidden">
			<div ref="progressBarRef"
				class="h-full bg-linear-to-r from-purple-600 to-violet-500 rounded-full relative transition-[width] duration-1000 ease-out"
				:style="{ width: currentWidth }" v-animateonscroll="{
					enterClass: 'animate-enter animate-duration-1000 shimmer-delay-200',
					leaveClass: 'animate-leave'
				}">
				<div class="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer">
				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import type { progressBar } from '@/types/progressBar';
import { onMounted, onUnmounted, ref } from 'vue';

const props = defineProps<progressBar>();

const currentWidth = ref('0%');
const progressBarRef = ref<HTMLElement | null>(null);

let observer: IntersectionObserver | null = null;

onMounted(() => {
	if (!progressBarRef.value) return;

	observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setTimeout(() => {
						currentWidth.value = `${props.percentage}%`;
					}, 100);
				} else {
					currentWidth.value = '0%';
				}
			});
		},
		{
			threshold: 0.1
		}
	);

	observer.observe(progressBarRef.value);
});

onUnmounted(() => {
	if (observer && progressBarRef.value) {
		observer.unobserve(progressBarRef.value);
		observer.disconnect();
	}
});
</script>
