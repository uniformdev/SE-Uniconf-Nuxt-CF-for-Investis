<script lang="ts" setup>
import { resolveRenderer } from '../components/componentMapping';
import { useCompositionInstance, createApiEnhancer } from '@uniformdev/canvas-vue';

const route = useRoute();

const fullSlug = `/${route.params.slug ?? ''}`;
const { $useComposition } = useNuxtApp();
const slug = fullSlug;
const { data: rawComposition } = await $useComposition({ slug });
const { data: enhancedComposition, pending, error } = await useEnhance(
  rawComposition.value?.composition,
  slug as string 
);

const { composition } = useCompositionInstance({
  composition: enhancedComposition.value.composition,
  enhance: createApiEnhancer({
    apiUrl: "/api/enhance",
  }),
});



const pageTitle = computed(() => composition.value?._name);
</script>

<template>
  <main>
    <Head>
      <Title>{{ pageTitle }}</Title>
    </Head>

    <Composition
      v-if="composition"
      :data="composition"
      :resolve-renderer="resolveRenderer"
    >
      <SlotContent name="header" />
      <SlotContent name="content" />
      <SlotContent name="footer" />
    </Composition>
    <div v-else-if="pending">Loading...</div>
    <div v-else="error">Couldn't fetch the composition: {{ error }}</div>
  </main>
</template>
