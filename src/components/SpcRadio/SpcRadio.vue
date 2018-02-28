<template>
  <label class="form-radio">
    <input
      type="radio"
      :value="value"
      :checked="isChecked"
      @change="change"
      v-bind="$attrs"
      v-on="$listeners">
    <i class="form-icon"></i> {{ label }}
  </label>
</template>

<script>
/**
* The `spc-radio` is a radio button styled with Spectre CSS.
* Can be put into an `spc-radio-group` to group radio buttons together.
* Works like the native `<input type="radio">` does in Vue except of The
* documented changes which can be seen in the props description.
*
*
* Also the `checked` attribute  won't work, instead use
* `v-model` which can also be used with boolean values.
* (E.g. `<spc-radio :value="true" v-model="checked"></spc-radio>`)
*/
export default {
  name: 'SpcRadio',
  /* The input will inherit the attrs vi v-bind="$attrs" instead */
  inheritAttrs: false,
  model: {
    prop: 'checked',
    event: 'input',
  },
  props: {
    /**
    * The value the radio button represents.
    */
    value: null,

    /**
    * The value of the radio that is to be selected.
    * This is used by `v-model`.
    */
    checked: null,

    /**
    * The label to use for the field.
    */
    label: String,
  },
  computed: {
    isChecked() {
      if (
        typeof this.checked === 'boolean' &&
        typeof this.value === 'undefined'
      ) {
        return this.checked
      }

      return this.checked === this.value
    },
  },
  methods: {
    change() {
      this.$emit('input', this.value)
    },
  },
}
</script>
