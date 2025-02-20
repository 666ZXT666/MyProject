<template>
    <header class="px-4 py-2 flex justify-between items-center">
        <van-icon name="plus" />
        <span class="text-xl">消息</span>
        <button>
            <van-icon name="setting" />
        </button>
    </header>

    <div class="flex flex-row justify-between px-8 py-4 text-sm h-32">
        <div class="flex flex-col items-center justify-center h-full">
            <i class="iconfont icon-zanheshoucang"></i>
            <span class="py-2">赞和收藏</span>
        </div>
        <div class="flex flex-col items-center justify-center h-full">
            <i class="iconfont icon-xinzengguanzhu"></i>
            <span class="py-2">新增关注</span>
        </div>
        <div class="flex flex-col items-center justify-center h-full">

          <i class="iconfont icon-pinglun"></i>
            <span class="py-2">评论和@</span>
        </div>
    </div>

    <div class="px-4 py-2 space-y-4">
        <div v-for="item in message" :key="item.id" class="flex flex-row items-start space-x-4">
            <img :src="item.picture" alt="" class="w-10 h-10 rounded-full">
            <div class="flex flex-col w-full">
                <div class="flex flex-row items-center space-x-2 justify-between">
                    <span class="text-sm">{{ item.userName }}</span>
                    <span class="text-xs text-gray-500">{{ item.time }}</span>
                </div>
                <div class="text-sm text-gray-500">{{ item.message }}</div>
                <div class="h-px bg-gray-200 my-4"></div>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import { useMessageStore } from '@/stores/message/messageStore'
const { message } = useMessageStore()

</script>

<style scoped>
.icon {
    width: 2rem;
    height: 2rem;
}
</style>