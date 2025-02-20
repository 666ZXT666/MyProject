import { computed, type Ref } from 'vue'

export function useWaterfall<T>(list: Ref<T[]> | T[], columns: number = 2) {
    const columnItems = computed(() => {
        const data = Array.isArray(list) ? list : list.value
        const result: T[][] = Array.from({ length: columns }, () => [])
        
        data.forEach((item, index) => {
            result[index % columns].push(item)
        })
        
        return result
    })

    return {
        columnItems
    }
} 