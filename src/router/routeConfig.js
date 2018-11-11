import Recommend from 'view/recommend/recommend'
import Friend from 'view/friend/friend'
import Personal from 'view/personal/personal'
import Rank from 'view/recommend/rank'
import Personality from 'view/recommend/personality'
import RadioStation from 'view/recommend/radioStation'
import SongList from 'view/recommend/songList'

export let RouteConfig = [
  {
    path: '/recommend',
    component: Recommend,
    name: 'recommend',
    title: '推荐',
    children: [
      {
        path: 'rank',
        name: 'rank',
        title: '排行榜',
        component: Rank
      },
      {
        path: 'personality',
        name: 'personality',
        title: '个型推荐',
        component: Personality
      },
      {
        path: 'radioStation',
        name: 'radioStation',
        title: '主播电台',
        component: RadioStation
      },
      {
        path: 'songList',
        name: 'songList',
        title: '歌单',
        component: SongList
      }
    ]
  },
  {
    path: '/friend',
    name: 'friend',
    title: '好友动态',
    component: Friend
  },
  {
    path: '/personal',
    name: 'personal',
    title: '个人',
    component: Personal
  },
  {
    path: '/',
    redirect: '/recommend/personality'
  }
]
