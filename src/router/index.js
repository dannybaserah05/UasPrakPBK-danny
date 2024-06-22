// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Meeting1 from '../views/Meeting1.vue';
import Meeting2 from '../views/Meeting2.vue';
import Meeting3 from '../views/Meeting3.vue';
import Meeting4 from '../views/Meeting4.vue';
import Meeting5 from '../views/Meeting5.vue';
import Meeting6 from '../views/Meeting6.vue';
import Meeting7 from '../views/Meeting7.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/meeting1',
    name: 'Meeting1',
    component: Meeting1,
  },
  {
    path: '/meeting2',
    name: 'Meeting2',
    component: Meeting2,
  },
  {
    path: '/meeting3',
    name: 'Meeting3',
    component: Meeting3,
  },
  {
    path: '/meeting4',
    name: 'Meeting4',
    component: Meeting4,
  },
  {
    path: '/meeting5',
    name: 'Meeting5',
    component: Meeting5,
  },
  {
    path: '/meeting6',
    name: 'Meeting6',
    component: Meeting6,
  },
  {
    path: '/meeting7',
    name: 'Meeting7',
    component: Meeting7,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
