export const useCounterStore = defineStore('counter', () => {
  let count = ref(0)

  return { count }
})