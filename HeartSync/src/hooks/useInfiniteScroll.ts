import { onMounted, onUnmounted, ref } from 'vue'

export function useInfiniteScroll(callback: () => void, options = {
    threshold: 100,
    immediate: true
}) {
    const containerRef = ref<HTMLElement | null>(null)
    const isLoading = ref(false)

    const checkScroll = () => {
        if (!containerRef.value || isLoading.value) return

        const container = containerRef.value
        const scrollHeight = container.scrollHeight
        const scrollTop = container.scrollTop
        const clientHeight = container.clientHeight

        if (scrollHeight - scrollTop - clientHeight < options.threshold) {
            isLoading.value = true
            Promise.resolve(callback()).finally(() => {
                isLoading.value = false
            })
        }
    }

    onMounted(() => {
        if (options.immediate) {
            checkScroll()
        }
        containerRef.value?.addEventListener('scroll', checkScroll)
    })

    onUnmounted(() => {
        containerRef.value?.removeEventListener('scroll', checkScroll)
    })

    return {
        containerRef,
        isLoading
    }
} 