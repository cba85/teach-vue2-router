export let Articles = {
  props: ["topicId"],
  template: `
      <div class="articles">
        <p>Articles for topic {{ topicId }}</p>
      </div>
      `
};
