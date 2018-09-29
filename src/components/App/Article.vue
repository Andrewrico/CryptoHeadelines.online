<template>

  <aside>
    <div v-if="article" id="Article">

      <span>{{moment(article.pubDate).format('llll')}}</span>

      <h2>{{article.title}}</h2>

      <div v-html="article.contentSnippet" />

      <a class="link-article" :href="article.link" target="_blank" rel="noopener">
        View Original
      </a>
    </div>
  </aside>

</template>

<script>
import moment from 'moment'

export default {
    name: 'Article',
    props: ['article'],
      watch: {
    article: {
      immediate: true,
      handler() {
        if (this.article) {
          this.$nextTick(() => {
            this.$el.focus()
            window.scroll(0, 0)
          })
        }
      }
    }
  }   
}
</script>