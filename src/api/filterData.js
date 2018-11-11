class Song {
  constructor({ id, singer, name, imageUrl }) {
    this.id = id
    this.singer = singer
    this.name = name
    this.imageUrl = imageUrl
  }
}

function singerName(arr) {
  let name = []
  name = arr.map(item => {
    return item.name
  })
  return name.join('/')
}

function createRecommendSongList(music) {
  return new Song({
    id: music.id,
    singer: singerName(music.song.artists),
    name: music.name,
    imageUrl: music.song.album.picUrl
  })
}

function createRecommendPrBCStationList(music) {
  return new Song({
    id: music.id,
    singer: music.program.mainSong.artists[0].name,
    name: music.name,
    imageUrl: music.picUrl
  })
}

export default function response(data) {
  let obj = {}
  let list = []
  if (data.banners) {
    obj.banner = data.banners
    obj.origin = '个性推荐-轮播'
  } else if (data.category === 0) {
    list = data.result.slice(0, 6)
    obj.list = list
    obj.origin = '个性推荐-推荐歌单'
  } else if (data.category === 5) {
    list = data.result.map(item => {
      return createRecommendSongList(item)
    })
    obj.origin = '个性推荐-推荐歌曲'
    list = list.slice(0, 6)
    obj.list = list
  } else if (data.name === '独家放送') {
    obj.list = data.result
    obj.origin = '个性推荐-独家放送'
  } else if (data.category === 3) {
    obj.list = data.result
    obj.origin = '个性推荐-推荐MV'
  } else if (data.category === 4) {
    list = data.result.map(item => {
      return createRecommendPrBCStationList(item)
    })
    obj.list = list
    obj.origin = '个性推荐-主播电台'
  } else {
    obj = data
  }
  console.log(obj)
  return obj
}
