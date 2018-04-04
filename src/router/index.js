import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import comentario from '@/components/comentario'
import aluno from '@/components/aluno'
import Hello from '@/components/Hello'
import Chamada from '@/components/Chamada'
import ProfessorDuvida from '@/components/ProfessorDuvida'
import DuvidaAluno from '@/components/DuvidaAluno'
import TelaAvaliacaoAula from '@/components/TelaAvaliacaoAula'
import aula from '@/components/aula'
import aulatermino from '@/components/aulatermino'



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
    },
    {
      path: '/DuvidaAluno',
      name: 'DuvidaAluno',
      component: DuvidaAluno
    },
    {
      path: '/ProfessorDuvida',
      name: 'ProfessorDuvida',
      component: ProfessorDuvida
    },
    {
      path: '/TelaAvaliacaoAula',
      name: 'TelaAvaliacaoAula',
      component: TelaAvaliacaoAula
    },   
    {
      path: '/aula',
      name: 'aula',
      component: aula
    },
    {
      path: '/aulatermino',
      name: 'aulatermino',
      component: aulatermino
    }
  ]
})
