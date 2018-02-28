Simple examples:

```vue
  <template>
    <div>
      <spc-btn primary @click="load" :loading="loading">Push Me</spc-btn>
      <spc-btn>Example button</spc-btn>
      <spc-btn link>Example link</spc-btn>
      <spc-btn fab><i class="icon icon-arrow-left"></i></spc-btn>
      <spc-btn action><i class="icon icon-arrow-left"></i></spc-btn>
      <spc-btn disabled>Example disabled</spc-btn>
      <spc-btn :badge="5">Notifications</spc-btn>
    </div>
  </template>
  <script>
  export default {
    name: 'ButtonExample',
    methods: {
      load() {
        this.loading = true
        setTimeout(() => this.loading = false, 1000)
      },
    },
    data() {
      return {
        loading: false,
      }
    },
  }
  </script>
```
