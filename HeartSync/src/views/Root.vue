<template>
    <div class="root">
        <router-view v-slot="{ Component }">
            <keep-alive>
                <component :is="Component"/>
            </keep-alive>
        </router-view>
        <TabBar></TabBar>
    </div>
</template>

<script setup lang="ts">
import TabBar from '../components/home/TabBar.vue'
</script>

<style scoped>

</style>