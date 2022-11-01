<script lang="ts" setup>
import type { ComponentInstance } from '@uniformdev/canvas';

let props = defineProps<{
  component: ComponentInstance;
  title: string;
  text: string;
  buttonText?: string;
  buttonLink?: string;
  image?: string;
  entry?: any;
}>();

const entry = props.entry;
let title = props.title;
let text = props.text;
let buttonText = props.buttonText;
let buttonLink = props.buttonLink;
let image;

if (entry) {
  title = entry.fields.title;
  text = entry.fields.description;
  buttonText = entry.fields.buttonText;
  buttonLink = entry.fields.buttonLink;
  image = entry.fields.image;
  image = image?.fields.file.url;
}
</script>

<template>
  <div>
    <div class="pt-24 text-white">
      <div
        class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center"
      >
        <div
          class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left min-h-500"
        >
          <p class="uppercase tracking-loose w-full">This is Uniform demo</p>
          <h1 class="my-4 text-5xl font-bold leading-tight">{{ title }}</h1>
          <p class="leading-normal text-2xl mb-8">{{ text }}</p>
          <NuxtLink
            v-if="buttonText"
            :to="buttonLink ? buttonLink : '#'"
            class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
          >
            {{ buttonText }}
          </NuxtLink>
        </div>
        <div class="w-full md:w-3/5 py-6 text-center">
          <img
            v-if="image"
            :key="image"
            class="w-full md:w-4/5 z-50 min-h-500 max-h-500"
            :height="560"
            :width="560"
            :src="image"
            :alt="buttonText"
          />
        </div>
      </div>
    </div>
    <Splitter />
  </div>
</template>
