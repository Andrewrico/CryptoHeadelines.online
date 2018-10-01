<template>
  <div id="app">
    <Loading :isLoading="isLoading" />

    <div v-if="!isLoading" id="display">

      <Header />

      <Channels :feeds="feeds" :selectedFeed="selectedFeed" @onSelectFeed="handleSelectFeed" />

      <News :articles="articles" :selectedArticle="selectedArticle" @onSelectArticle="handleSelectArticle" />

      <Article :article="selectedArticle" />

    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Header from './components/Header.vue'
import Channels from './components/Channels.vue'
import News from './components/News.vue'
import Article from './components/Article.vue'
import Loading from '@/components/Loading.vue'

export default {
  name:'app',
  components: {
   Header,
        Channels,
        News,
        Article,
        Loading
  },
  data() {
        return {
            isLoading: false,
            feeds: [],
            articles: [],
            selectedFeed: null,
            selectedArticle: null
        }
    },

    created() {
        this.getFeeds()
    },

    methods: {
        async getFeeds() {
            this.isLoading = true

            let {
                data
            } = await axios.get('/.netlify/functions/feeds')

            this.feeds = data
            this.isLoading = false
        },

        handleSelectFeed(feed) {

            this.selectedFeed = feed
            this.articles = feed.items
            this.selectedArticle = null
        },
        handleSelectArticle(article) {
            this.selectedArticle = article
        }
    }
};
</script>


<style>
html {
  height: auto;
  min-height: 100%;
  /* border: 1px solid red; */
}

body {
  height: auto;
  min-height: 100vh;
  /* border: 1px solid green; */
}

#display {
  height: 100%;
  /* border: 1px solid orange; */
}

html,
body {
  padding: 0;
  margin: 0;

}

/*---------------------------------------------------------

layout Small

-------------------------------------------------------- */

/*
#display sm
-------------------------------------- */
#Header {
  grid-area: h;
}

#Channels {
  grid-area: c;
}

#News {
  grid-area: n;
}

#Article {
  grid-area: a;
}

#display {
  width: 80%;
  height: 100%;
  margin: auto;
  display: grid;
  grid-row-gap: 32px;
  grid-template-columns: 1fr;
  grid-template-areas:
    'h h h'
    'c c c'
    'a a a'
    'n n n';
}

#Channels,
#Article {
  overflow: hidden;
  overflow-y: scroll;
  padding: 8px;
  margin: 0;
  height: auto;
  min-height: 200px;
  max-height: 33vh;
  filter: drop-shadow(0 0 10px rgb(1, 140, 145));
}

#News {
  overflow: hidden;
  overflow-y: scroll;
  padding: 8px;
  height: auto;
  min-height: 200px;
  max-height: 63vh;
  filter: drop-shadow(0 0 10px rgb(1, 140, 145));
}

/*
#Header sm
-------------------------------------- */
#Header {
  height: auto;
  height: 20vh;
  min-height: 100px;
  font-family: 'Space Mono', monospace;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  filter: drop-shadow(0 0 10px rgb(1, 140, 145));
}

/*
#Channels sm
-------------------------------------- */
#Channels {
  font-family: 'Space Mono', monospace;
  background: rgba(0, 0, 0, 0.137);

}

/*
#News sm
-------------------------------------- */
#News {
  font-family: 'Space Mono', monospace;
  background: rgba(0, 0, 0, 0.137);
  filter: drop-shadow(0 0 3px rgb(1, 140, 145));
}

/*
#Article sm
-------------------------------------- */
#Article {
  font-family: 'Raleway', sans-serif;
  background: rgba(0, 0, 0, 0.137);

}

#Article>* {
  line-height: 1.2;
  letter-spacing: 1px;
  margin: 12px 0;
}

/*---------------------------------------------------------

layout Large

-------------------------------------------------------- */
@media screen and (min-width: 1028px) {
  #display {
    grid-gap: 16px;
    grid-template-columns: 275px 1fr 275px;
    grid-template-areas: 'h h h'
      'c n a';
  }

  #Header {
    flex-direction: row;
    justify-content: space-between;
  }

  #Channels {
    height: auto;
    max-height: 60vh;
    min-height: 200px;
  }

  #News {
    height: auto;
    max-height: 78vh;
    min-height: 300px;
  }

  #Article {
    height: auto;
    max-height: 60vh;
    min-height: 200px;
  }
}


/*---------------------------------------------------------


styles


-------------------------------------------------------- */

body {
  overflow: hidden;
  overflow-y: scroll;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: Roboto, "Helvetica Neue", Arial, sans-serif;
  font-weight: 100;
  color: #FFF;
  background-color: #042a32;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxIDEiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjxyYWRpYWxHcmFkaWVudCBpZD0idnNnZyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGN4PSIwJSIgY3k9IjEwMCUiIHI9IjE0MS40MjEzNTYyMzczMDk1JSI+PHN0b3Agc3RvcC1jb2xvcj0iIzA3MzAzNiIgc3RvcC1vcGFjaXR5PSIxIiBvZmZzZXQ9IjAiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDAyMzJkIiBzdG9wLW9wYWNpdHk9IjEiIG9mZnNldD0iMSIvPjwvcmFkaWFsR3JhZGllbnQ+PHJlY3QgeD0iLTUwIiB5PSItNTAiIHdpZHRoPSIxMDEiIGhlaWdodD0iMTAxIiBmaWxsPSJ1cmwoI3ZzZ2cpIiAvPjwvc3ZnPg==);
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxIDEiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjxyYWRpYWxHcmFkaWVudCBpZD0idnNnZyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGN4PSIwJSIgY3k9IjEwMCUiIHI9IjE0MS40MjEzNTYyMzczMDk1JSI+PHN0b3Agc3RvcC1jb2xvcj0iIzA3MzAzNiIgc3RvcC1vcGFjaXR5PSIxIiBvZmZzZXQ9IjAiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDAyMzJkIiBzdG9wLW9wYWNpdHk9IjEiIG9mZnNldD0iMSIvPjwvcmFkaWFsR3JhZGllbnQ+PHJlY3QgeD0iLTUwIiB5PSItNTAiIHdpZHRoPSIxMDEiIGhlaWdodD0iMTAxIiBmaWxsPSJ1cmwoI3ZzZ2cpIiAvPjwvc3ZnPg==);
  background-image: -webkit-repeating-radial-gradient(left bottom, ellipse farthest-corner, rgb(7, 48, 54) 0%, rgb(0, 35, 45) 100%);
  background-image: repeating-radial-gradient(ellipse farthest-corner at left bottom, rgb(7, 48, 54) 0%, rgb(0, 35, 45) 100%);
  background-image: -ms-repeating-radial-gradient(left bottom, ellipse farthest-corner, rgb(7, 48, 54) 0%, rgb(0, 35, 45) 100%);
}

@media \0screen\,
screen\9 {
  body {
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff073036", endColorstr="#ff00232d", GradientType=0);
  }
}


/*
#Header 
-------------------------------------- */
#Header .title {
  display: flex;
  flex-direction: column;
}

#Header h1 {
  letter-spacing: 0.5px;
  font-size: 1.6em;
  margin: 0;
  padding: 0;
  text-shadow: 1px 1px rgb(0, 0, 0);
}

#Header p {
  text-align: center;
  border-top: 1px solid#fff;
  text-shadow: 1px 1px rgb(0, 0, 0);
  letter-spacing: 4.5px;
}

#Header .icons {
  margin: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 80px;
  align-items: flex-end;
}

#Header i {
  margin: 4px;
  padding: 4px;
  color: rgb(165, 253, 253);
  font-size: 1.2em;
}

@media screen and (min-width: 768px) {
  #Header h1 {
    font-size: 2.6em;
  }

  #Header p {
    letter-spacing: 12px;
    text-indent: 10px;
  }
}

/*
#Channels 
-------------------------------------- */
#Channels ul {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;
}

#Channels a {
  display: flex;
  align-items: center;
  padding: 6px;
}

/*
#News 
-------------------------------------- */
#News a {
  text-align: center;
  letter-spacing: 1px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

#News ul {
  display: grid;
  grid-gap: 16px;
  margin: 16px;
  grid-template-columns: 1fr;
}

#News li {
  text-align: center;
  height: 150px;
  overflow: hidden;
  background: rgb(0, 0, 0);
  border: 0.5px solid rgba(0, 255, 234, 0.575);
  border-radius: 2px;
}

@media screen and (min-width: 1268px) {
  #News ul {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (min-width: 1600px) {
  #News ul {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

/*
#Article 
-------------------------------------- */
#Article {
  color: rgb(165, 253, 253);
  letter-spacing: 1px;
}

#Article h2 {
  color: #fff;
  font-size: 1em;
  margin: 0 !important;
}

#Article p {
  font-size: 0.9em;
  color: aquamarine;
  font-weight: 900;
}

#Article .link-article {
  color: #00fff2 !important;
  padding: 8px;
  text-align: center;
  margin-right: auto;
  display: inline-flex;
  border: 1px solid #00fff2;
  border-radius: 32px;
}

#Article .link-article:hover {
  background: #00fff2;
  color: #000 !important;
}

/*
active
-------------------------- */
.active-1 {
  overflow: hidden;
  color: cyan;
}

.active-2 {
  overflow: hidden;
  color: #fff;
}

#Channels .active-1 {
  background: #000000be;
  color: aquamarine;
}

#Channels .active-1::before {
  content: ' \00BB';
  margin-right: 4px;
}

#News .active-1 {
  background: #00eeffbe;
  color: #000;
  filter: drop-shadow(0 0 0.75rem rgb(1, 140, 145));
}

#active-2 {
  color: rgb(255, 255, 255);
}

 </style>


