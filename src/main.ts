import './assets/css/main.css';
import 'primeicons/primeicons.css';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import Button from './volt/Button.vue';
import InputText from './volt/InputText.vue';
import AnimateOnScroll from 'primevue/animateonscroll';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.directive('animateonscroll', AnimateOnScroll);
app.use(PrimeVue, {
	unstyled: true,
	theme: {
		preset: Aura,
		options: {
			prefix: 'p',
			darkModeSelector: 'system',
			cssLayer: false
		}
	}
});
app.component('InputText', InputText);
app.component('pButton', Button);

app.mount('#app')
