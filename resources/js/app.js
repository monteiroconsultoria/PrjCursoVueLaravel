/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import Vuex from 'Vuex';
Vue.use(Vuex);
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('painel-component', require('./components/Painel.vue').default);
Vue.component('topo-component', require('./components/Topo.vue').default);
Vue.component('caixa-component', require('./components/Caixa.vue').default);
Vue.component('pagina-component', require('./components/Pagina.vue').default);
Vue.component('tabela-lista-component', require('./components/TabelaLista.vue').default);
Vue.component('migalhas-component', require('./components/Migalhas.vue').default);
Vue.component('modal-component', require('./components/modal/Modal.vue').default);
Vue.component('modallink-component', require('./components/modal/ModalLink.vue').default);
Vue.component('formulario-component', require('./components/Formulario.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
