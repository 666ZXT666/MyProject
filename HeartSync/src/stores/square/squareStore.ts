import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { TopButton, RankingItem, RankingBoard } from '@/types/square'

export const useSquareStore = defineStore('square', () => {
  // state
  const rankingBoards = ref<RankingBoard[]>([
    {
      id: 1,
      title: '实假最想干的事情',
      avatar: '/images/rankings/activity.png',
      participants: 3.27,
      items: [
        { id: 1, name: '蔡依林', score: 8.9, avatar: '/images/avatars/user1.png' },
        { id: 2, name: '林依晨', score: 8.4, avatar: '/images/avatars/user2.png' },
        { id: 3, name: '陈乔恩', score: 8.0, avatar: '/images/avatars/user3.png' }
      ]
    },
    {
      id: 2,
      title: '最受欢迎的电影',
      avatar: '/images/rankings/movie.png',
      participants: 5.8,
      items: [
        { id: 4, name: '泰坦尼克号', score: 9.5, avatar: '/images/movies/titanic.png' },
        { id: 5, name: '肖申克的救赎', score: 9.3, avatar: '/images/movies/shawshank.png' },
        { id: 6, name: '阿甘正传', score: 9.1, avatar: '/images/movies/forrest.png' }
      ]
    },
    {
      id: 3,
      title: '年度最佳歌曲',
      avatar: '/images/rankings/music.png',
      participants: 4.2,
      items: [
        { id: 7, name: '起风了', score: 9.2, avatar: '/images/music/song1.png' },
        { id: 8, name: '光年之外', score: 8.8, avatar: '/images/music/song2.png' },
        { id: 9, name: '句号', score: 8.6, avatar: '/images/music/song3.png' }
      ]
    }
  ])

  const topButtons = ref<TopButton[]>([
    {
      id: 1,
      title: '创作扶持计划',
      subtitle: '开学派对',
      bg: 'bg-yellow-300',
      route: '/creative-support',
      icon: '/images/square/creative.png'
    },
    {
      id: 2,
      title: '过年红包帮你送',
      subtitle: '贺卡送礼',
      bg: 'bg-red-400',
      route: '/newyear-gift',
      icon: '/images/square/gift.png'
    },
    {
      id: 3,
      title: '招聘合集',
      subtitle: '热门岗位',
      bg: 'bg-pink-400',
      route: '/jobs',
      icon: '/images/square/jobs.png'
    }
  ])

  // getters
  const getAllBoards = computed(() => rankingBoards.value)
  const getBoardById = (id: number) => rankingBoards.value.find(board => board.id === id)
  const getTopBoard = computed(() => rankingBoards.value[0])
  const getTopButtons = computed(() => topButtons.value)

  // actions
  async function fetchRankingBoards() {
    // TODO: 实现从后端API获取榜单数据
  }

  async function updateBoard(boardId: number, data: Partial<RankingBoard>) {
    const index = rankingBoards.value.findIndex(board => board.id === boardId)
    if (index !== -1) {
      rankingBoards.value[index] = { ...rankingBoards.value[index], ...data }
    }
  }

  async function updateTopButtons(buttons: TopButton[]) {
    topButtons.value = buttons
  }

  async function updateTopButton(buttonId: number, data: Partial<TopButton>) {
    const index = topButtons.value.findIndex(btn => btn.id === buttonId)
    if (index !== -1) {
      topButtons.value[index] = { ...topButtons.value[index], ...data }
    }
  }

  return {
    // state
    rankingBoards,
    topButtons,
    // getters
    getAllBoards,
    getBoardById,
    getTopBoard,
    getTopButtons,
    // actions
    fetchRankingBoards,
    updateBoard,
    updateTopButtons,
    updateTopButton
  }
})
