<template>
  <div class="not-found">
    <img alt="Vue logo page not found" src="@/assets/img/logo.png" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { i18n } from '@/plugins';
@Component({
  head: { title: { inner: i18n.t('titles.not_found').toString() } },
})
export default class NotFoundPage extends Vue {}
</script>
