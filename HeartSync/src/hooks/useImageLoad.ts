import { ref } from 'vue'

export function useImageLoad() {
    const isLoading = ref(true)
    const hasError = ref(false)

    const handleLoad = () => {
        isLoading.value = false
    }

    const handleError = () => {
        isLoading.value = false
        hasError.value = true
    }

    return {
        isLoading,
        hasError,
        handleLoad,
        handleError
    }
} 