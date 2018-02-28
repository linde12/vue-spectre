Simple examples:

```vue
  <template>
    <form>
      <spc-radio label="Male" name="gender" value="male"></spc-radio>
      <spc-radio label="Female" name="gender" value="female"></spc-radio>
<br>
      <spc-radio label="Male" value="male" v-model="gender"></spc-radio>
      <spc-radio label="Female" value="female" v-model="gender"></spc-radio>
<br>
      <spc-radio label="I agree" :value="true" v-model="agree"></spc-radio>
      <spc-radio label="I disagree" :value="false" v-model="agree"></spc-radio>
<br>
    State: {{ JSON.stringify(this.$data, null, 4) }}
    </form>

  </template>
  <script>
  export default {
    name: 'RadioExample',
    data() {
      return {
        agree: false,
        gender: "female",
        drink: "fanta",
      }
    },
  }
  </script>
```
