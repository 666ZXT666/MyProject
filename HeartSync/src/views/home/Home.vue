<template>
    <div class="flex flex-col items-center justify-start w-full">
        <div class="flex w-full header fixed top-0 justify-between flex items-center  bg-white py-2 z-10">
            <img src="@/assets/Home.svg" alt="logo" class="w-8 h-8 flex">
            <div class="items">
                <van-tabs v-model:active="active" class="w-full custom-tabs">
                    <van-tab title="关注" name="follow" to="/home/follow">
                    </van-tab>
                    <van-tab title="发现" name="discover" to="/home/discover">
                    </van-tab>
                </van-tabs>
            </div>
            <van-icon name="search" size="20" class="ml-2 right-0" />
        </div>
        
        <div class="content mt-16 w-full pb-14">
            <router-view v-slot="{ Component }">
                <keep-alive include="Discover">
                    <component 
                        :is="Component" 
                        :key="$route.fullPath"
                    />
                </keep-alive>
            </router-view>
        </div>
    </div>

</template>


<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';

defineOptions({
    name: 'Home'  // 确保设置组件名称
})

const route = useRoute()
const active = ref('discover')

if (route.fullPath === "/home/follow") {
    active.value = 'follow'
} else if (route.fullPath === "/home/discover") {
    active.value = 'discover'
}

</script>


<style scoped>

.custom-tabs :deep(.van-tabs__nav) {
    gap: 32px;
    /* 可以根据需要调整间距大小 */
    justify-content: center;
}

.custom-tabs :deep(.van-tabs__line) {
    background-color: #FFB800;  /* 黄色下划线 */
}
</style>