<template>
    <div class="flex flex-col items-center justify-start w-full">
        <div class="main flex flex-col h-1/2 w-full bg-gradient-to-b from-[#8B6B43] to-[#C4A484] pb-[10px]">
            <div class="flex justify-between w-full p-4">
                <van-icon name="bars" size="24" class="text-white" />
                <div class="flex">
                    <van-icon name="scan" size="24" class="text-white" />
                    <van-icon name="share" size="24" class="text-white ml-4" />
                </div>
            </div>
            <div class="my flex flex-col">
                <div class="flex  justify-between items-center">
                    <div class="flex px-4 py-2">
                        <img src="" alt="111" class="w-12 h-12 rounded-full border border-white object-cover">
                        <div class="flex flex-col ml-2">
                            <div class="text-sm text-white flex items-center">
                                小蜜蜂yWWWW
                                <van-icon name="edit" size="14" class="text-white ml-1" />
                            </div>
                            <div class="text-[10px] text-gray-300 flex items-center">
                                蜜蜂号: 22222
                                <van-icon name="copy" size="12" class="text-gray-300 ml-1" />
                            </div>
                            <div
                                class="text-xs text-yellow-400 border border-yellow-400 bg-yellow-400/20 rounded-[20px] px-2 flex items-center justify-between w-full">
                                <span>去认证身份</span>
                                <van-icon name="cross" size="12" class="text-yellow-400" />
                            </div>
                        </div>

                    </div>
                    <div class="flex items-center h-fit bg-[rgba(0,0,0,0.3)] rounded-l-[9999px] rounded-r-[4px]">
                        <van-icon name="qr" size="24" class="text-white p-2" />
                    </div>
                </div>
                <div class="flex  items-center justify-start ml-4">
                    <span class="text-white text-sm">介绍一下自己吧~</span>
                    <van-icon name="edit" size="12" class="text-white ml-1" />
                </div>
            </div>
            <div class="flex items-center justify-start ml-4 mt-2">
                <div class="text-white text-xs border border-white rounded-[20px] px-2 bg-white/20">江西</div>
                <div class="text-white text-xs border border-white rounded-[20px] px-2 ml-2 bg-white/20">信用分62分</div>
            </div>

            <div class="flex items-center justify-between ml-4 mt-4">
                <div class="flex items-center justify-start">
                    <div class="flex flex-col items-center justify-start">
                        <div class="text-white text-sm">关注</div>
                        <div class="text-white text-sm">100</div>
                    </div>
                    <div class="flex flex-col items-center justify-start ml-4">
                        <div class="text-white text-sm">粉丝</div>
                        <div class="text-white text-sm">100</div>
                    </div>
                    <div class="flex flex-col items-center justify-start ml-4">
                        <div class="text-white text-sm">获赞</div>
                        <div class="text-white text-sm">100</div>
                    </div>
                </div>
                <div class="flex items-center justify-start ml-4 mt-2 mr-4">
                    <div class="text-white text-xs border border-white rounded-[20px] px-2 py-1 bg-white/10">编辑资料</div>
                    <van-icon name="setting" size="14" class="text-white ml-2 border border-white rounded-[20px] p-1 bg-white/10" />
                </div>
            </div>
            
            <div class="flex items-center justify-between w-full mt-4 px-4">
                <div class="flex flex-col items-center justify-center w-[22%] h-16 bg-white/10 rounded-lg">
                    <div class="flex items-center justify-center w-full">
                        <van-icon name="chat" size="14" class="text-white mb-1" />
                        <div class="text-white text-xs ml-1">群聊</div>
                    </div>
                    <div class="text-white text-[10px]">查看详情</div>
                </div>
                <div class="flex flex-col items-center justify-center w-[22%] h-16 bg-white/10 rounded-lg">
                    <div class="flex items-center justify-center w-full">   
                        <van-icon name="clock" size="14" class="text-white mb-1" />
                        <div class="text-white text-xs ml-1">浏览历史</div>
                    </div>
                    <div class="text-white text-[10px]">查看详情</div>
                </div>
                <div class="flex flex-col items-center justify-center w-[22%] h-16 bg-white/10 rounded-lg">
                    <div class="flex items-center justify-center w-full">
                        <van-icon name="balance-o" size="14" class="text-white mb-1" />
                        <div class="text-white text-xs ml-1">钱包</div>
                    </div>
                    <div class="text-white text-[10px]">查看详情</div>
                </div>
                <div class="flex flex-col items-center justify-center w-[22%] h-16 bg-white/10 rounded-lg">
                    <div class="flex items-center justify-center w-full">
                        <van-icon name="notes-o" size="14" class="text-white mb-1" />
                        <div class="text-white text-xs ml-1">草稿箱</div>
                    </div>
                    <div class="text-white text-[10px]">查看详情</div>
                </div>
            </div>
        </div>

        <div class="content h-1/2 w-full">
            <div class="flex justify-around items-center w-1/2 py-4 relative">
                <div v-for="(tab, index) in tabs" 
                     :key="index"
                     @click="activeTab = index"
                     class="flex flex-col items-center cursor-pointer">
                    <span class="text-sm font-bold text-gray-500" 
                          :class="{ 'text-black': activeTab === index }">
                        {{ tab }}
                    </span>
                    <div v-if="activeTab === index" 
                         class="absolute bottom-0 w-12 h-0.5 bg-yellow-400 transition-all duration-300"
                         :style="{ left: `calc(${index * 33.33}% + (16.67% - 24px))` }">
                    </div>
                </div>
            </div>
            
            <!-- 内容区域 -->
            <div class="tab-content mt-4">
                <div v-if="activeTab === 0">
                    <!-- 笔记内容 -->
                     笔记内容
                </div>
                <div v-if="activeTab === 1">
                    <!-- 收藏内容 -->
                     收藏内容
                </div>
                <div v-if="activeTab === 2">
                    <!-- 赞过内容 -->
                     赞过内容
                </div>
            </div>
        </div>
        <div class="main">
            
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const tabs = ['笔记', '收藏', '赞过']
const activeTab = ref(0)
</script>

<style scoped>
.tab-content {
    min-height: 200px;
}
</style>