<template>
    <div class="h-screen overflow-auto" ref="containerRef">
        <div class="p-4">
            <div class="flex gap-4">
                <div v-for="(column, columnIndex) in columnItems" 
                     :key="columnIndex"
                     class="flex-1 flex flex-col gap-4">
                    <div v-for="item in column" 
                         :key="item.id" 
                         class="bg-white rounded-lg overflow-hidden shadow-md">
                        <div class="relative">
                            <img v-lazy="item.cover.url" 
                                 :alt="item.title" 
                                 class="w-full h-auto block"
                                 @load="handleLoad"
                                 @error="handleError">
                                 
                            <div v-if="isLoading" 
                                 class="absolute inset-0 bg-gray-100 animate-pulse">
                            </div>
                        </div>
                        <div class="p-3">
                            <h3 class="text-sm leading-tight mb-0 line-clamp-2">{{ item.title }}</h3>
                            <div class="flex items-center mt-2 gap-2">
                                <img v-lazy="item.user.image" 
                                     :alt="item.user.nickname" 
                                     class="w-6 h-6 rounded-full">
                                <span class="text-xs text-gray-600">{{ item.user.nickname }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="isLoading" class="flex justify-center py-4">
                <div class="animate-spin rounded-full h-8 w-8 border-4 border-primary border-t-transparent"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useHomeStore } from '@/stores/home/homeStore'
import { useWaterfall } from '@/hooks/useWaterfall'
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll'
import { useImageLoad } from '@/hooks/useImageLoad'

const homeStore = useHomeStore()

// 使用瀑布流 hook，直接传入 discover
const { columnItems } = useWaterfall(homeStore.discover)

// 使用图片加载 hook
const { isLoading, handleLoad, handleError } = useImageLoad()

// 使用无限滚动 hook
const { containerRef } = useInfiniteScroll(() => {
    // 这里添加加载更多数据的逻辑
    console.log('加载更多数据')
})
</script>