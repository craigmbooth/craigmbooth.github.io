const Counter = {
  data() {
    return {
      weight: 2000
    }
  },
  computed: {
    fac() {
      return this.weight / 2000
    },
    weight_kg() {
        return (this.weight/1000).toFixed(1)
    }
  }
}

Vue.createApp(Counter).mount('#main')
