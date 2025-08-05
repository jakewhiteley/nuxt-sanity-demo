<script setup>
const query = groq`*[_type == "siteSettingsSchema"][0]{ defaultTitle }`

const { data } = await useSanityQuery(query)

console.log(1)
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />

  </div>
</template>
