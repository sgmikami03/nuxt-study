import {Ref} from 'vue'

export const useCounter = ()=> {
    const count = useState<number>('count', ()=> 0)
    const addCount = (count: Ref<number>) => (value: number) => {
        count.value = count.value + 1
    }
    const removeCount = (count: Ref<number>) => (value: number) => {
        if (0 < count.value) {
            count.value = count.value - 1   
        }
    }
    return {
        count: readonly(count),
        addCount: addCount(count),
        removeCount: removeCount(count)
    }
}