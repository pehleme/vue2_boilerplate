<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/img/logo.png" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { i18n } from '@/plugins';
@Component({
  head: { title: { inner: i18n.t('titles.home').toString() } },
})
export default class HomePage extends Vue {}
</script>
