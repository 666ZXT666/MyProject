<template>
    <div>
        <van-tabbar v-model="active" class="shadow-black shadow-2xl opacity-90 z-50">
            <van-tabbar-item to="/home">
                首页
            </van-tabbar-item>
            <van-tabbar-item to="/square">
                广场
            </van-tabbar-item>
            <van-tabbar-item to="/upload">
                <div class="bg-yellow-500 rounded-full w-10 h-7 flex items-center justify-center">
                    <van-icon name="plus" />

                </div>
            </van-tabbar-item>
            <van-tabbar-item to="/message">
                消息
            </van-tabbar-item>
            <van-tabbar-item to="/mine">
                我的
            </van-tabbar-item>
        </van-tabbar>

    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';

const route = useRoute();

const active = ref<number>(0);

onMounted(() => {
    if (route.fullPath === "/home") {
        active.value = 0;
    } else if (route.fullPath === "/message") {
        active.value = 1;
    } else if (route.fullPath === "/square") {
        active.value = 2;
    } else if (route.fullPath === "/mine") {
        active.value = 3;
    }

})


</script>


<style scoped>
:deep(.van-tabbar-item--active) {
    color: #000;
    font-weight: bold;

}

:deep(.van-tabbar) {
    z-index: 100 !important;
}

:deep(.van-tabbar) {
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
}
</style>