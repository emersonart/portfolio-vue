<template>
	<section id="about" class="pt-14 pb-32 px-6 relative">
		<div class="max-w-6xl mx-auto">
			<div class="grid lg:grid-cols-2 gap-16 items-center">
				<div class="relative">
					<div class="aspect-square max-w-md mx-auto relative"
						v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-20 animate-duration-1000', leaveClass: 'animate-leave slide-out-from-t-20 fade-out-0 animate-duration-1000' }">
						<div
							v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1500', leaveClass: 'animate-leave fade-out-0 slide-out-from-l-8' }"
							class="absolute inset-0 bg-linear-to-br from-purple-600/20 to-violet-600/20 rounded-3xl rotate-6" />
						<div
							v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-r-8 animate-duration-1500', leaveClass: 'animate-leave fade-out-0 slide-out-from-r-8' }"
							class="absolute inset-0 bg-linear-to-br from-purple-500/10 to-transparent rounded-3xl -rotate-3" />
						<div
							v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 animate-duration-1000', leaveClass: 'animate-leave fade-out-0 animate-duration-1000' }"
							class="relative bg-linear-to-br from-gray-900/80 to-gray-900/40 backdrop-blue-xl rounded-3x-l p-8 border border-purple-500/20 h-full flex flex-col justify-center">
							<div class="space-y-6">
								<div class="font-mono text-sm space-y-2"
									v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-l-20 animate-duration-1000', leaveClass: 'animate-leave slide-out-from-l-20 fade-out-0 animate-duration-1000' }">
									<p class="text-gray-500">// About me</p>

									<p>
										<span class="text-purple-400">const</span>
										<span class="text-white"> dev</span>
										<span class="text-gray-500"> = </span>
										<span class="text-purple-300">{</span>
									</p>
									<p className="pl-4">
										<span className="text-violet-300">country</span>
										<span className="text-gray-500">: </span>
										<span className="text-green-400">"brazil"</span>
									</p>
									<p className="pl-4">
										<span className="text-violet-300">passion</span>
										<span className="text-gray-500">: </span>
										<span className="text-green-400">"clean code"</span>
										<span className="text-gray-500">,</span>
									</p>
									<p className="pl-4">
										<span className="text-violet-300">focus</span>
										<span className="text-gray-500">: </span>
										<span className="text-green-400">"learning and results"</span>
										<span className="text-gray-500">,</span>
									</p>
									<p className="pl-4">
										<span className="text-violet-300">energy_drink</span>
										<span className="text-gray-500">: </span>
										<span className="text-amber-400">Infinity</span>
									</p>
									<p className="pl-4">
										<span className="text-violet-300">hobby</span>
										<span className="text-gray-500">: </span>
										<span className="text-green-400">"motorcycle"</span>
									</p>
									<p>
										<span className="text-purple-300">}</span>
										<span className="text-gray-500">;</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<span
						v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-20 animate-duration-500 animate-delay-100', leaveClass: 'animate-leave slide-in-from-t-20 fade-out-0 animate-duration-1000 animate-delay-400' }"
						class="text-purple-400 text-sm font-medium uppercase tracking-widest mb-4 block">
						Sobre Mim
					</span>
					<h2
						v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-20 animate-duration-1000 animate-delay-300', leaveClass: 'animate-leave slide-in-from-t-20 fade-out-0 animate-duration-1000 animate-delay-300' }"
						class="
						text-4xl md:text-5xl font-extrabold text-white mb-6">
						Transformando ideias em <span
							class="bg-linear-to-tr from-green-800 to-green-300 bg-clip-text text-transparent">código</span>
					</h2>
					<p v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-r-20 animate-duration-1500 animate-delay-600 animate-ease-in-out', leaveClass: 'animate-leave slide-out-from-l-20 fade-out-60 animate-duration-1000 animate-delay-500' }"
						class="text-gray-400 text-lg leading-relaxed mb-8">
						Sou um desenvolvedor full stack com mais de 5 anos de experiência
						criando aplicações web modernas e escaláveis. Minha missão é
						transformar problemas complexos em soluções elegantes e intuitivas.
					</p>
					<p v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-r-20 animate-duration-1700 animate-delay-1000 animate-ease-in-out', leaveClass: 'animate-leave slide-out-from-l-20 fade-out-60 animate-duration-1000 animate-delay-500' }"
						class="text-gray-400 text-lg leading-relaxed mb-8">
						Especializado em PHP, HTML, CSS, JS (jQuery), desenvolvendo habilidades em Vue.js e React,
						assim como também em back-end com Node.js, e automações com N8N + IA, busco sempre
						as melhores práticas e tecnologias de ponta para entregar
						experiências excepcionais.
					</p>
					<div class="grid grid-cols-2 md:grid-cols-4 gap-6">
						<div v-for="(detail, index) in devDetails" :key="index"
							v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-10 animate-duration-1000 animate-delay-' + (index * 200), leaveClass: 'animate-leave slide-out-from-t-10 fade-out-0 animate-duration-1000' }"
							class="break-word flex flex-col justify-between text-center p-2 rounded-2xl bg-purple-500/5 hover:scale-110 transition-all duration-300 group border border-purple-500/10 hover:border-purple-500/30">
							<i
								:class="detail.icon + ' text-3xl text-purple-400/40 group-hover:text-purple-400 group-hover:scale-110 transition-all duration-300 mx-auto mb-4 mt-2'" />
							<div class="flex flex-col gap-1 mb-2">
								<span class="text-white font-semibold">{{ detail.value }}</span>
								<span class="text-sm text-gray-500">{{ detail.label }}</span>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script setup lang="ts">
interface devInfo {
	icon: string;
	label: string;
	value: string;
}

const devDetails: devInfo[] = [
	{ icon: 'pi pi-map-marker', label: 'Projetos', value: '20+' },
	{ icon: 'pi pi-code', label: 'Anos Exp.', value: '5+' },
	{ icon: 'pi pi-briefcase', label: 'Especialidade', value: 'Full Stack' },
	{ icon: 'pi pi-cog', label: 'Foco', value: 'Resultados' },
];
</script>
