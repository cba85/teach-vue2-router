// Default props using data
/*
let News = {
  props: ["type"],
  data() {
    return {
      newsType: this.type
    };
  },
  template: `
  <div class="news">News {{ newsType }}</div>
    `,
  mounted() {
    if (!this.type) {
      this.newsType = "all";
    }
  }
};
*/

export let News = {
  props: {
    type: {
      default: "all"
    }
  },
  template: `
    <div class="news">News {{ type }}</div>
      `
};
