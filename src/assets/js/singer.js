// 歌手数据封装成类
// 热门歌手头像和其他头像歌手头像拼接方式一样

export default class Singer {
  constructor({id, name}) {
    this.id = id
    this.name = name
    this.avatar = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${id}.jpg?max_age=2592000`
  }
}
