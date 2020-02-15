export let NotFound = {
  template: `
      <div>
      <p>404</p>
      <a href="#" @click.prevent="back">Go back</a>
      </div>
      `,
  methods: {
    back() {
      //console.log("back");
      this.$router.go(-1);
    }
  }
};
