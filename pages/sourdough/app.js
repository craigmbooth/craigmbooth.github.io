const Counter = {
  data() {
    return {
      weight: 2000
    }
  },
  computed: {
    fac() {
      return this.weight / 2000
    }
  }
}

Vue.createApp(Counter).mount('#main')
