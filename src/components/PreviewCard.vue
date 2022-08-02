<template>
  <section>
    <div class="content-wrapper">
      <article>
        <div class="detail-wrapper">
          <div class="details">
            <h2>{{ article.title }}</h2>
            <b>{{ article.username }}</b> | <time>{{ parseTime(article.publish_date) }}</time>
          </div>
          <div>
            <p>{{ article.short_description }}</p>
          </div>
        </div>
      </article>
    </div>
    <img :src="article.image" />
  </section>
</template>

<style lang="scss" scoped>
  section {
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 5px 5px 9px rgba(0, 0, 0, 0.392);
    border: 1px solid rgba(255, 255, 255, 0.72);
    img {
      width: 100%;
      height: 100%;
    }
    .content-wrapper {
      height: 0;
      font-size: 1.2em;
      article {
        background: linear-gradient(0, transparent, mix($blue, transparent, 70%));
        color: #000000;
        position: relative;
        padding: 10%;
        margin: auto;
        bottom: 0;
        .detail-wrapper {
          background: $orange-light;
          border-left: 5px solid $blue-light;
          box-shadow: 10px 10px 0 $orange-dark;
          padding: 10px;
          .details {
            h2 {
              text-align: center;
              margin-bottom: 10px;
            }
          }
        }
      }
    }
  }
</style>

<script lang="ts">
  import { defineComponent } from "vue";
  import day from "dayjs";

  export default defineComponent({
    setup() {},
    props: ["article"],
    methods: {
      parseTime(time: string) {
        return day(time).format("DD MMM, YYYY");
      }
    }
  });
</script>
