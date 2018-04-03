import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import comentario from '@/components/comentario'
import aluno from '@/components/aluno'
import Hello from '@/components/Hello'
import Chamada from '@/components/Chamada'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
    }
  ]
})
