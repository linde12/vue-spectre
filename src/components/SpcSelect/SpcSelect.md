Simple examples:

```vue
  <template>
    <div>
      <spc-select label="Choose an option" v-model="single">
        <option value="beer">Beer</option>
        <option value="pepsi">Pepsi</option>
        <option value="fanta">Fanta</option>
      </spc-select>
      <br>

      <spc-select label="Choose some options" multiple v-model="multiple">
        <option value="beer">Beer</option>
        <option value="pepsi">Pepsi</option>
        <option value="fanta">Fanta</option>
      </spc-select>
      <br>

      <pre>{{ JSON.stringify(this.$data, null, 4) }}</pre>
    </div>
  </template>
  <script>
  export default {
    name: 'SelectExample',
    data() {
      return {
        single: "pepsi",
        multiple: ["beer", "pepsi"],
      }
    },
  }
  </script>
```
