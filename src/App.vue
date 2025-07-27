<style>
body, #app, .app-root {
  background: #fff !important;
  color: #111;
}
</style>
<script lang="ts">
import Cabecalho from './components/Cabecalho.vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

export default {
  components: { Cabecalho },
  setup() {
    const route = useRoute();
    const mostrarCabecalho = computed(() =>
      route.path === '/consulta' ||
      route.path === '/cadastro' ||
      route.path.startsWith('/materia/')
    );
    return { mostrarCabecalho };
  }
}
</script>

<template>
  <Cabecalho v-if="mostrarCabecalho" />
  <router-view />
</template>
