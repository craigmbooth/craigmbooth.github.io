const KillerSudoku = {
  data() {
    return {
        message: 'Hello Vue.js!',
        combos: '',
        select_n: '',
        select_t: '',
        ns: [2, 3, 4, 5, 6, 7, 8, 9],
        ts: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
    }
  },
  methods: {
      showCombos() {
          if(typeof this.select_t.t === 'undefined' || typeof this.select_n.n === 'undefined') {
              this.message = "Select a target and a number of things to sum to it"
              return;
          };

          this.combos = combos[this.select_n.n][this.select_t.t];
          this.is_checked = [false, false, false, false, false, false, false, false, false]
          for (const c of this.combos) {
              c.clicked = false;
              c.excluded = false;
          }
      },

      toggle: function (index) {
          this.combos[index].clicked = !this.combos[index].clicked;
      },

      excludeNumber(event, number) {
         this.is_checked[number-1] = event.target.checked
         for (const c of this.combos) {
             for (let i=0; i<=8; i++) {
                 if (this.is_checked[i] && c.includes(i+1)) {
                     c.excluded = true;
                     break;
                 }
                 if (i == 8) {
                     c.excluded = false;
                 }
             }
         }
      }
  }
}

Vue.createApp(KillerSudoku).mount('#app')
