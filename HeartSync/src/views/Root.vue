<template>
    <div class="root">
        <router-view v-slot="{ Component, route }">
            <keep-alive>
                <component :is="Component" v-if="route.meta.keepAlive" />
            </keep-alive>
            <component :is="Component" v-if="!route.meta.keepAlive" />
        </router-view>
        <TabBar></TabBar>
    </div>
</template>

<script setup lang="ts">
import TabBar from '../components/home/TabBar.vue'
// 绑定default 子组件导出的数据
// 通过路由的meta属性，来判断组件是否需要缓存。
// 可以通过每个组件来v-if包裹起来，但是太麻烦了。
// 我是通过 router-view中使用v-slot解构出每个组件和路由，接着用路由的meta属性来判断组件是否需要缓存。
</script>

<style scoped></style>