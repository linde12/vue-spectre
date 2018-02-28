Simple examples:

```vue
  <template>
    <div>
      Regular field with label and id:
      <spc-input id="name" label="Name" placeholder="Name"></spc-input>
      <br>

      A SpcInput can be passed regular input attributes such as `disabled`:
      <spc-input id="lastname" label="Lastname" disabled></spc-input>
      <br>

      A field without a label:
      <spc-input></spc-input>
      <br>

      A field with a bound input:
      <spc-input :value="myvalue"></spc-input>
    </div>
  </template>
  <script>
  export default {
    name: 'InputExample',
    data() {
      return {
        myvalue: 'example',
      }
    }
  }
  </script>
```
