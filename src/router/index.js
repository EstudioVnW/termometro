import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import comentario from '@/components/comentario'
import aluno from '@/components/aluno'
import Hello from '@/components/Hello'
import Chamada from '@/components/Chamada'
import Tela7 from '@/components/Tela7'
import Tela9 from '@/components/Tela-9'



Vue.use(Router)

let isLogged = false;

export const login = (email, senha) => {
  isLogged = true;
}

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      props: {
        login: login
      }
    },
    {
      path: '/comentario',
      name: 'comentario',
      component: comentario
    },
    {
      path: '/aluno',
      name: 'aluno',
      component: aluno
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Chamada',
      name: 'Chamada',
      component: Chamada
    },
    {
      path: '/Tela7',
      name: 'Tela7',
      component: Tela7
    },
    {
      path: '/Tela9',
      name: 'Tela-9',
      component: Tela9
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === "/") {
    next();
  } else {
    if (isLogged) {
      next();
    } else {
      next({path: '/'})
    }
  }
})

export default router