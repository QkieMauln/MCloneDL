<template>
  <div class="page-layout">
    <div class="card-wrapper" v-if="data.status == 'success'">
      <PreviewCard v-for="cool in data.data" :key="cool.submission_id" :article="cool"></PreviewCard>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import $axios from "@/lib/axios";
  import PreviewCard from "./PreviewCard.vue";

  const data = ref({ status: "no" });
  $axios.get("/submissions").then((response) => {
    data.value = response.data;
  });
</script>

<style lang="scss" scoped>
  .page-layout {
    width: 100%;
    max-width: 720px;
    .card-wrapper {
      display: grid;
      gap: 20px;
      padding: 20px;
    }
  }
</style>
