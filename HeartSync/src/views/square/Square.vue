<template>
    <div class="flex flex-col w-full min-h-screen bg-gray-50 pb-[56px]">
        <div class="text-center text-xl text-gray-500 bg-gray-50">广场</div>
        
        <!-- 内容区域 -->
        <div class="w-full flex-1">
            <!-- 顶部按钮组 -->
            <div class="flex gap-2 w-full p-2">
                <div 
                    v-for="btn in topButtons"
                    :key="btn.id"
                    :class="[btn.bg, 'rounded-[10px] px-2 py-3 text-sm flex flex-col w-1/3 cursor-pointer hover:scale-[98%] transition-transform']"
                    @click="handleButtonClick(btn.route)">
                    <div class="font-bold">{{ btn.title }}</div>
                    <div class="text-xl font-bold">{{ btn.subtitle }}</div>
                </div>
            </div>

            <!-- 热门榜单区域: 确保不会超出底部 -->
            <div class="px-2 w-full overflow-y-auto">
                <div class="w-full bg-white rounded-lg mt-2 px-4 shadow-md">
                    <div class="flex justify-between items-center mb-4">
                        <span class="font-bold">热门排行榜单</span>
                        <span class="text-gray-500 text-sm cursor-pointer hover:text-blue-500 transition-colors" @click="viewAll">查看全部 ></span>
                    </div>

                    <!-- 榜单列表 -->
                    <div class="space-y-4">
                        <!-- 每个榜单项 -->
                        <div v-for="(board, index) in rankingBoards" 
                             :key="board.id"
                             class="relative bg-white overflow-hidden rounded-lg p-3 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                             @click="handleBoardClick(board)">
                            <div :class="[
                                'absolute top-0 left-0 w-2/3 h-2/3 bg-gradient-to-br',
                                getBoardGradient(index)
                            ]"></div>
                            <div class="relative z-10">
                                <div class="flex items-center gap-2 mb-2">
                                    <img :src="board.avatar" class="w-8 h-8 rounded-full object-cover" alt="榜单图标"/>
                                    <div class="flex items-center">
                                        <span class="text-sm font-medium">{{ board.title }}</span>
                                        <span class="ml-1 text-gray-400">></span>
                                    </div>
                                    <span class="text-xs text-gray-500 ml-auto">{{ board.participants }}万人参与</span>
                                </div>
                                <!-- 排名列表 -->
                                <div class="space-y-3">
                                    <div v-for="(item, idx) in board.items" 
                                         :key="item.id"
                                         class="flex items-center justify-between hover:bg-gray-50/80 p-1 rounded transition-colors">
                                        <div class="flex items-center gap-3">
                                            <span :class="['font-bold min-w-[20px]', getRankClass(idx + 1)]">{{ idx + 1 }}</span>
                                            <span class="text-gray-700">{{ item.name }}</span>
                                        </div>
                                        <span class="text-sm text-gray-600">{{ item.score }}分</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useSquareStore } from '../../stores/square/squareStore'
import type { RankingBoard, TopButton } from '../../stores/square/squareStore'
import { useRouter } from 'vue-router'

defineOptions({
    name: 'Square'
})

const router = useRouter()
const squareStore = useSquareStore()

// 获取榜单数据
const rankingBoards = computed(() => squareStore.getAllBoards)
// 获取顶部按钮数据
const topButtons = computed(() => squareStore.getTopButtons)

// 定义渐变色组合
const gradientClasses = [
    'from-pink-100/70 via-pink-50/40',
    'from-blue-100/70 via-blue-50/40',
    'from-purple-100/70 via-purple-50/40',
    'from-green-100/70 via-green-50/40',
    'from-yellow-100/70 via-yellow-50/40',
    'from-orange-100/70 via-orange-50/40',
]

// 获取渐变背景样式
const getBoardGradient = (index: number): string => {
    return `${gradientClasses[index % gradientClasses.length]} via-transparent to-transparent`
}

// 获取排名样式
const getRankClass = (rank: number): string => {
    switch (rank) {
        case 1: return 'text-red-500';
        case 2: return 'text-orange-500';
        case 3: return 'text-yellow-500';
        default: return 'text-gray-500';
    }
}

// 点击榜单
const handleBoardClick = (board: RankingBoard) => {
    // TODO: 处理榜单点击，比如跳转到详情页
    console.log('点击榜单:', board.title)
}

// 查看全部
const viewAll = () => {
    // TODO: 处理查看全部事件
    console.log('查看全部榜单')
}

// 处理按钮点击
const handleButtonClick = (route: string) => {
    router.push(route)
}
</script>

<style scoped>
.hover\:shadow-md:hover {
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

/* 添加渐变动画效果 */
.bg-gradient-to-br {
    transition: opacity 0.3s ease;
}

.hover\:shadow-md:hover .bg-gradient-to-br {
    opacity: 0.8;
}
</style>