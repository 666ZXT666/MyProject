// 封面图片类型
interface Cover {
    url: string
    width: number
    height: number
}

// 用户信息类型
interface User {
    id: string
    image: string
    nickname: string
}

// 单个发现项的类型
interface DiscoverItem {
    id: string
    title: string
    type: 'video' | 'normal'
    likes?: number
    cover: Cover
    user: User
    xsecToken: string
}

// 导出类型
export type {
    Cover,
    User,
    DiscoverItem
}
