import Recommend from 'view/recommend/recommend'
import Personal from 'view/personal/personal'
import MV from 'view/mv/mv'
import Personality from 'view/recommend/personality'
import RadioStation from 'view/recommend/radio-station'
import Friend from 'view/recommend/friend'
import songListDetails from 'view/song-list-details/song-list-details'

export let RouteConfig = [
  {
    path: '/recommend',
    component: Recommend,
    name: 'recommend',
    title: '推荐',
    children: [
      {
        path: 'personality',
        name: 'personality',
        title: '个型推荐',
        component: Personality,
        children: [
          {
            path: ':id',
            name: 'songListDetails',
            component: songListDetails
          }
        ]
      },
      {
        path: 'radioStation',
        name: 'radioStation',
        title: '主播电台',
        component: RadioStation
      },
      {
        path: 'friend',
        name: 'friend',
        title: '朋友',
        component: Friend
      }
    ]
  },
  {
    path: '/mv',
    name: 'mv',
    title: '好友动态',
    component: MV
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
