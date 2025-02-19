import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { MessageItem } from '@/types/message'

export const useMessageStore = defineStore('message', () => {
    const message = ref<MessageItem[]>([
        {
            id: '1',
            picture: 'https://img.xhscdn.com/avatar/1040g2jo3112dscbcmi6g5p7g22v1ma22lvnq10g?imageView2/2/w/80/format/jpg',
            userName: '张三',
            message: '你好，我是张三',
            time: '2021-01-01'
        },
        {
            id: '2',
            picture: 'https://img.xhscdn.com/avatar/1040g2jo3112dscbcmi6g5p7g22v1ma22lvnq10g?imageView2/2/w/80/format/jpg',
            userName: '李四',
            message: '你好，我是李四',
            time: '2021-01-01'
        }
    ])
    return { message }
})