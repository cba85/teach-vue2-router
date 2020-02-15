export let Post = {
  //props: ["topicId", "postId"],
  props: {
    topicId: {
      type: String
    },
    postId: {
      type: String
    }
  },
  template: `
        <div class="post">Post</div>
      `,
  mounted() {
    console.log(this.$route.params);
    console.log(this.topicId, this.postId);
  }
};
