let loggedIn = false; // Change value to test redirection

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

export let App = {
  template: `
          <div>
          <h1>Vue Router</h1>
          <navigation></navigation>
          <router-view></router-view>
          </div>
        `,
  components: { Navigation }
};

let router = new VueRouter({
  //mode: "hash",
  mode: "history",
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      component: Home,
      name: "home"
    },
    {
      path: "/about",
      component: About,
      name: "about"
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
    }
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
  ]
});

let app = new Vue({
  el: "#app",
  router: router,
  components: { App }
});
