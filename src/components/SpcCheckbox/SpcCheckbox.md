Simple examples:

```vue
  <template>
    <div>
      Simple example:
      <spc-checkbox id="name" label="Remember me" @change="remember = !remember" :checked="remember"></spc-checkbox>
      <br>

      Bound to boolean via v-model:
      <spc-checkbox toggle id="name" label="Sign up for our newsletter" v-model="newsletter"></spc-checkbox>
      <br>

      Bound to array via v-model:
      <spc-checkbox id="name" label="Philip" v-model="names" value="philip"></spc-checkbox>
      <spc-checkbox id="name" label="Oscar" v-model="names" value="oscar"></spc-checkbox>
      <br>

      State: {{ JSON.stringify(this.$data, null, 4) }}
    </div>
  </template>
  <script>
  export default {
    name: 'CheckboxExample',
    data() {
      return {
        names: ["oscar"],
        newsletter: true,
        remember: true,
      }
    }
  }
  </script>
```
