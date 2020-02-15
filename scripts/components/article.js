export let Article = {
  props: ["articleId"],
  template: `
      <div class="article">
        <p>Article {{ articleId }}</p>
        <router-view></router-view>
      </div>
      `
};
