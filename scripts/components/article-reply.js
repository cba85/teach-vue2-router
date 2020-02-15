export let ArticleReply = {
  props: ["articleId"],
  template: `
      <div class="article">
        <p>Reply to article {{ articleId }}</p>
      </div>
      `
};
