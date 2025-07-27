<template>
  <div class="materia-page">
    <h2>{{ nome }}</h2>
    <div class="conteudo">
      <slot>
        Conteúdo de <b>{{ nome }}</b> aqui.
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    nome: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.materia-page {
  background: #fff;
  color: #111;
  min-height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  padding: 80px 0 0 0;
  box-sizing: border-box;
  overflow-y: auto;
}
.conteudo {
  margin-top: 24px;
}
</style>
