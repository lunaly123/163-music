// import Recommend from 'views/recommend/recommend'
// import Personal from 'views/personal/personal'
// import MV from 'views/mv/mv'
// import Personality from 'views/recommend/personality'
// import RadioStation from 'views/recommend/radio-station'
// import Friend from 'views/recommend/friend'
// import songListDetails from 'views/song-list-details/song-list-details'
// import search from 'views/search/search'

export let RouteConfig = [
  {
    path: '/recommend',
    component: () => import('views/recommend/recommend'),
    name: 'recommend',
    title: '推荐',
    children: [
      {
        path: 'personality',
        name: 'personality',
        title: '个型推荐',
        component: () => import('views/recommend/personality'),
        meta: {
          tabIndex: 0
        }
      },
      {
        path: 'radioStation',
        name: 'radioStation',
        title: '主播电台',
        component: () => import('views/recommend/radio-station'),
        meta: {
          tabIndex: 2
        }
      },
      {
        path: 'friend',
        name: 'friend',
        title: '朋友',
        component: () => import('views/recommend/friend'),
        meta: {
          tabIndex: 1
        }
      }
    ]
  },
  {
    path: '/songListDetails/:id',
    name: 'songListDetails',
    title: '歌单详情',
    component: () => import('views/song-list-details/song-list-details')
  },
  {
    path: '/mv',
    name: 'mv',
    title: '好友动态',
    component: () => import('views/mv/mv')
  },
  {
    path: '/personal',
    name: 'personal',
    title: '个人',
    component: () => import('views/personal/personal')
  },
  {
    path: '/search',
    name: 'search',
    title: '搜索',
    component: () => import('views/search/search')
  },
  {
    path: '/',
    redirect: '/recommend/personality'
  }
]
