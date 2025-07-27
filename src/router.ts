import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const materias = [
  'Ingles', 'Português', 'Matemática', 'Física', 'Química', 'Biologia', 'História', 'Geografia', 'Filosofia'
];

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('./pages/HomePage.vue')
  },
  {
    path: '/perfil',
    component: () => import('./pages/PerfilPage.vue')
  },
  {
    path: '/consulta',
    component: () => import('./App.vue')
  },
  {
    path: '/cadastro',
    component: () => import('./App.vue')
  },
  ...materias.map((nome) => ({
    path: `/materia/${nome.toLowerCase()}`,
    name: nome,
    component: () => import('./pages/MateriaPage.vue'),
    props: { nome }
  }))
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
