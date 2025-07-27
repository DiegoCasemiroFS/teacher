<script lang="ts">
import { materias } from '../http/Index';

export default {
    data() {
        return {
            materias: materias()
        }
    },
    methods: {
        abrirMateria(materia: string) {
            this.$router.push(`/materia/${materia.toLowerCase()}`);
        }
    }
}
</script>

<template>
    <section>
        <div class="lista-materias">
            <button 
                v-for="materia in materias[0].nome" 
                :key="materia" 
                class="botao-materia"
                @click="abrirMateria(materia)"
            >
                {{ materia }}
            </button>
        </div>
    </section>
</template>

<style scoped>
.lista-materias {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 0;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #f5f5f5;
    z-index: 10;
    padding: 0 8px;
    box-sizing: border-box;
}

section {
    background: #fff;
    min-height: unset;
    width: 100%;
    margin: 0;
    padding: 0;
}
.botao-materia {
    flex: 1 1 0;
    border-radius: 8px 8px 8px 8px;
    border-right: 1px solid #e0e0e0;
    margin: 0 2px;
    min-width: 0;
    white-space: nowrap;
    background: #1976d2;
    color: #fff;
    border: none;
    padding: 12px 0;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.2s;
    outline: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0);
}
.botao-materia:last-child {
    border-right: none;
}
.botao-materia:hover {
    background: #1565c0;
}
</style>