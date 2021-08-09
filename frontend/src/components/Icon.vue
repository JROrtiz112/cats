<template>
    <component :is="iconComponent"></component>
</template>
<script>
import {defineAsyncComponent} from 'vue'
  import {Str} from '../utils/StringHelpers.js'
  export default {
    name: 'Icon',
    props: {
      name: {
        type: String,
        require: true,
      }
    },
    computed: {
      // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
      iconComponent() {
        let componentName = Str(this.name).capitalize().concat('Icon');
        return defineAsyncComponent(() => import(`@/components/Icons/${componentName}`));
      }
    }
  }
</script>
