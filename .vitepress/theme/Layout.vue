<script setup lang="ts">
import { useData } from 'vitepress'
import Home from './Home.vue'
import Article from './Article.vue'
import NotFound from './NotFound.vue'

const { page, frontmatter } = useData()
</script>

<template>
  <div class="antialiased dark:bg-blue-950">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <nav class="flex justify-between items-center py-10 font-bold">
        <a class="text-xl" href="/" aria-label="Below The Benthic">
          <img
            class="inline-block mr-2"
            style="height: 31px"
            alt="logo"
            src="/logo.svg"
          />
          <span
            v-if="!frontmatter.index"
            class="hidden md:inline dark:text-white"
            >Below The Benthic</span
          >
        </a>
        <div class="text-sm text-gray-500 dark:text-white leading-5">
          <a
            class="hover:text-gray-700 dark:hover:text-gray-200"
            href="https://github.com/danhogan/"
            target="_blank"
            rel="noopener"
            >GitHub</a
          >
          <span class="mr-2 ml-2">·</span>
          <a
            class="hover:text-gray-700 dark:hover:text-gray-200"
            href="https://www.linkedin.com/in/iamdanhogan/"
            target="_blank"
            rel="noopener"
            >LinkedIn</a
          >
          <span class="mr-2 ml-2">·</span>
          <a
            class="hover:text-gray-700 dark:hover:text-gray-200"
            href="https://twitter.com/BelowTheBenthic"
            target="_blank"
            rel="noopener"
            >Twitter</a
          >
        </div>
      </nav>
    </div>
    <main class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <Home v-if="frontmatter.index" />
      <NotFound v-else-if="page.isNotFound" />
      <Article v-else />
    </main>
  </div>
</template>
