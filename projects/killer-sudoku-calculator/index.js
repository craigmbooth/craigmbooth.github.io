let default_message = "Input values to the form above to see combinations.";
const KillerSudoku = {
  data() {
    return {
        message: default_message,
        combos: '',
        select_n: '',
        select_t: '',
        is_checked: [false, false, false, false, false, false, false, false, false],
        ns: [2, 3, 4, 5, 6, 7, 8, 9],
        ts: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
    }
  },
  methods: {
    showCombos() {
        /*
         * The boxes contain new numbers.  Set up the new list of combos
         */
        if(typeof this.select_t.t === 'undefined' || typeof this.select_n.n === 'undefined') {
            this.message = default_message;
            return;
        };

        this.combos = combos[this.select_n.n][this.select_t.t];

        if (this.combos === undefined) {
            this.message = `No combos of ${this.select_n.n} unique digits that sum to ${this.select_t.t} found.`
            return
        }

        this.message = undefined;

        for (const c of this.combos) {
            c.clicked = false;
            c.excluded = false;
        }

        this.doExcludes();
    },
    toggleExclude: function (index) {
        /*
         * Method called when a checkbox is clicked.
         */
        this.combos[index].clicked = !this.combos[index].clicked;
    },
    doExcludes() {
        /*
         * Loops over all combos and tags the ones that include excluded
         * numbers
         */
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
    },
    excludeNumber(event, number) {
        /*
         * Called when a number in the exclusion list is checked
         */
        this.is_checked[number-1] = event.target.checked;
        this.doExcludes()
    }
  }
}

Vue.createApp(KillerSudoku).mount('#app')
