<template>
  <div class="home-page">
    <h2>Bem-vindo(a)!</h2>
    <div class="home-opcoes">
      <button @click="irPara('perfil')">Perfil</button>
      <button @click="irPara('consulta')">Consulta</button>
      <button @click="irPara('cadastro')">Cadastro</button>
    </div>
  </div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router';
export default {
  setup() {
    const router = useRouter();
    function irPara(destino: string) {
      if (destino === 'perfil') router.push('/perfil');
      else if (destino === 'consulta') router.push('/consulta');
      else if (destino === 'cadastro') router.push('/cadastro');
    }
    return { irPara };
  }
}
</script>

<style scoped>
.home-page {
  padding: 80px 24px 24px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.home-opcoes {
  display: flex;
  gap: 24px;
  margin-top: 32px;
}
.home-opcoes button {
  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 16px 32px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.2s;
}
.home-opcoes button:hover {
  background: #1565c0;
}
</style>
