import { Home } from "./components/home.js";
import { Course } from "./components/course.js";
import { About } from "./components/about.js";
import { Faq } from "./components/faq.js";
import { Contact } from "./components/contact.js";
import { Navigation } from "./components/navigation.js";
import { User } from "./components/user.js";
import { Post } from "./components/post.js";
import { NotFound } from "./components/notfound.js";
import { Redirect } from "./components/redirect.js";
import { Login } from "./components/login.js";
import { News } from "./components/news.js";
import { Account } from "./components/account.js";
import { AccountHome } from "./components/account-home.js";
import { AccountProfile } from "./components/account-profile.js";
import { AccountPassword } from "./components/account-password.js";
import { Topic } from "./components/topic.js";
import { Articles } from "./components/articles.js";
import { Article } from "./components/article.js";
import { ArticleReply } from "./components/article-reply.js";
import { NavigationCustom } from "./components/navigation-custom.js";
import { Library } from "./components/library.js";
import { Courses } from "./components/courses.js";
import { Admin } from "./components/admin.js";
import { UserProfile } from "./components/user-profile.js";

// Loader
let bus = new Vue();

export let Filters = {
  data() {
    return {
      //sort: "",
      //limit: "",
      filter: {
        sort: this.$route.query.sort,
        limit: this.$route.query.limit
      }
    };
  },
  template: `
        <form>
            <select v-model="filter.sort">
                <option value="">Sort by</option>
                <option value="latest">Latest</option>
                <option value="popular">Popular</option>
            </select>
            <select v-model="filter.limit">
                <option value="">Show</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
        </form>
    `,
  watch: {
    filter: {
      handler(filter) {
        //console.log(filter);
        this.$router.push({
          query: filter
        });
      },
      deep: true
    }
  }
  /*
  methods: {
    change() {
      //console.log("change");
      this.$router.push({
        query: {
          sort: this.sort,
          limit: this.limit
        }
      });
    }
  }
  */
};

export let Topics = {
  components: {
    Filters
  },
  data() {
    return {
      //name: "clement",
      topics: []
    };
  },
  template: `
    <div class="topics">
        <p>Filters</p>
        <filters></filters>
        <p>Topics</p>
        {{ topics }}
    </div>
    `,
  watch: {
    $route(to, from) {
      console.log("watch route");
      this.getTopics(this.$route.query);
    }
    /*
    name(value) {
      console.log(value);
    }
    */
  },
  /*
  mounted() {
    setTimeout(() => {
      this.name = "Jacques";
    }, 2000);
  },
  */
  methods: {
    getTopics(query) {
      //console.log(query);
      //this.topics.push(Date.now());
    }
  },
  mounted() {
    this.getTopics(this.$route.query);
  }
};

export let Loader = {
  data() {
    return {
      loading: false
    };
  },
  template: `
        <div v-if="loading" class="loader">Loading... Please wait...</div>
      `,
  mounted() {
    bus.$on("loading", loadingOrNot => {
      this.loading = loadingOrNot;
    });
  }
};

export let Page = {
  props: ["name"],
  data() {
    return {
      page: null
    };
  },
  template: `
    <div class="page" v-if="page">
        {{ page }}
        <a href="#" @click.prevent="switchPage">Change page</a>
    </div>
    `,
  /*
  mounted() {
    setTimeout(() => {
      axios.get("/data/page.json").then(response => {
        //console.log(response);
        this.page = response.data;
      });
    }, 1000);
  }
  */
  beforeRouteEnter(to, from, next) {
    //console.log(to);
    bus.$emit("loading", true);
    setTimeout(() => {
      axios.get("/data/page.json").then(response => {
        bus.$emit("loading", false);
        //console.log(response);
        next(vm => {
          vm.setPage(response.data);
        });
      });
    }, 1000);
  },
  beforeRouteUpdate() {
    //console.log("before route update");
    bus.$emit("loading", true);
    setTimeout(() => {
      axios.get("/data/page2.json").then(response => {
        this.page = response.data;
        bus.$emit("loading", false);
      });
    }, 1000);
  },
  methods: {
    setPage(page) {
      this.page = page;
    },
    switchPage() {
      this.$router.push({ params: { name: "new" } });
    }
  }
};

// Mixin
Vue.mixin({
  data() {
    return {
      head: {
        defaultTitle: "Vue Router",
        complement: {
          separator: "|",
          title: "Vue Routeur"
        }
      }
    };
  },
  created() {
    //console.log("mixin");
    let head = this.$options.head;
    //console.log(head);
    if (typeof head == "function") {
      head = head.bind(this)();
      //console.log(head);
      if (!head) {
        return;
      }
      //document.title = "Mixin";
      //document.title = head.title;
      document.title = `${head.title} ${this.head.complement.separator} ${this.head.complement.title}`;
      return;
    }

    document.title = this.head.defaultTitle;
  }
});

// Authentication simulation
let loggedIn = false;

// App component
export let App = {
  template: `
          <div>
          <loader></loader>
          <h1>Vue Router</h1>
          <navigation></navigation>
          <hr>
          <navigation-custom></navigation-custom>
          <hr>
          <transition name="fade">
          <router-view></router-view>
          </transition>
          </div>
        `,
  components: { Navigation, NavigationCustom, Loader }
};

// Router
let router = new VueRouter({
  //mode: "hash",
  mode: "history",
  linkActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        offset: { x: 0, y: 10 }
      };
    }

    if (savedPosition) {
      return savedPosition;
    }
    //console.log(savedPosition);
    return {
      x: 0,
      y: 0
    };
  },
  routes: [
    {
      path: "/",
      component: Home,
      name: "home",
      meta: {
        title: "Home"
      }
    },
    {
      path: "/about",
      component: About,
      name: "about",
      meta: {
        title: "About"
      }
    },
    {
      path: "/faq",
      component: Faq,
      name: "faq"
    },
    {
      path: "/contact",
      component: Contact,
      name: "contact"
    },
    {
      path: "/redirect",
      component: Redirect,
      name: "redirect"
    },
    {
      path: "/courses/:id",
      component: Course,
      name: "course"
    },
    {
      path: "/courses",
      component: Courses,
      name: "courses"
    },
    /*
    {
      path: "/library",
      component: Library,
      name: "library"
    },
    */
    {
      path: "/library",
      /*
      redirect: {
        name: "courses"
        //path: "/courses"
      }
      */
      redirect(to) {
        //console.log(to)
        return {
          name: "courses"
        };
      }
    },
    {
      path: "/library/:id",
      redirect(to) {
        return {
          name: "course",
          //params: to.params,
          params: {
            id: to.params.id
          }
        };
      }
    },
    {
      path: "/login",
      component: Login,
      name: "login"
    },
    {
      path: "/404",
      component: NotFound,
      name: "404"
    },
    {
      path: "/users/:id",
      component: User,
      props: true
    },
    {
      path: "/topics/:topicId/posts/:postId",
      component: Post,
      props: true
      /*
          props: (route) => {
              return {
                  topicId: parseInt(route.params.topicId),
                  postId: parseInt(route.params.postId)
              }
          }
          */
    },
    {
      path: "/news/:type",
      component: News,
      name: "news"
    },
    {
      path: "/news",
      component: News,
      name: "news:all"
    },
    {
      path: "/account",
      component: Account,
      children: [
        {
          path: "",
          component: AccountHome,
          name: "account.home"
        },
        {
          path: "profile",
          component: AccountProfile,
          name: "account.profile"
        },
        {
          path: "password",
          component: AccountPassword,
          name: "account.password"
        }
      ]
    },
    {
      path: "/topics/:topicId",
      component: Topic,
      children: [
        {
          path: "articles",
          component: Articles,
          props: true
        },
        {
          path: "articles/:articleId",
          component: Article,
          props: true,
          children: [
            {
              path: "reply",
              component: ArticleReply,
              props: true
            }
          ]
        }
        /*
            {
              path: "articles/:articleId/reply",
              component: ArticleReply,
              props: true
            }
            */
      ]
    },
    /*
        {
          path: "/account/profile",
          component: AccountProfile,
        },
        {
          path: "/account/password",
          component: AccountPassword,
        }
        */
    {
      path: "/admin",
      component: Admin,
      name: "admin",
      meta: {
        auth: true
      }
    },
    {
      path: "/user/:username",
      component: UserProfile,
      name: "user:profile",
      props: true,
      meta: (to, from) => {
        return {
          title: to.params.username
        };
      }
    },
    {
      path: "/pages/:name",
      name: "page",
      component: Page,
      props: true
    },
    {
      path: "/topics",
      name: "topics",
      component: Topics
    },
    {
      path: "*",
      component: NotFound
    }
  ]
});

// Middlewares
router.beforeEach((to, from, next) => {
  // Authentication
  //console.log(to);
  if (to.meta.auth && !loggedIn) {
    next({ name: "login", query: { redirect: to.name } });
    return;
  }

  // Page title
  //  document.title = to.meta.title || "Vue Router";
  /*
  let title = to.meta.title;
  if (typeof title === "undefined") {
    document.title = "Vue Router";
  } else {
    document.title = `${title} | Vue Router`;
  }
*/

  let meta = {};
  if (typeof to.meta === "function") {
    meta = to.meta(to, from);
  }
  //console.log(meta);
  let title = meta.title;
  if (typeof title === "undefined") {
    document.title = "Vue Router";
  } else {
    document.title = `${title} | Vue Router`;
  }

  next();
});

router.afterEach((to, from) => {
  //console.log("after");
});

// Vue app
let app = new Vue({
  el: "#app",
  router: router,
  components: { App }
});
