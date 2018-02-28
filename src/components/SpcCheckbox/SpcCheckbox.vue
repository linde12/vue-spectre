<template>
  <div class="form-group">
    <label :class="type">
      <input
        type="checkbox"
        v-model="model"
        :value="value"
        v-bind="$attrs"
        v-on="$listeners">
      <i class="form-icon"></i> {{label}}
    </label>
  </div>
</template>

<script>
/**
* The `spc-checkbox` component is a checkbox component
* which also functions as a toggle.
*/
export default {
  name: 'SpcCheckbox',
  /* The input will inherit the attrs vi v-bind="$attrs" instead */
  inheritAttrs: false,
  model: {
    prop: 'checked',
    event: 'input',
  },
  props: {
    /**
    * Either a boolean or an Array. In the case of a boolean it checks or unchecks the checkbox.
    * If it's an array and the checbox's value is found within this array it will be checked.
    * You can use it with v-model and it has similar behavior to native checkboxes in Vue.
    */
    checked: [ Array, Boolean ],
    /**
    * Whether the checkbox should be displayed as a toggle.
    */
    toggle: Boolean,
    /**
    * The value the checkbox represents.
    */
    value: String,
    /**
    * The label of the checkbox.
    */
    label: String,
  },
  computed: {
    model: {
      get() {
        if (Array.isArray(this.checked)) {
          return this.checked.indexOf(this.value) !== -1
        }
        return this.checked
      },
      set() {
        if (Array.isArray(this.checked)) {
          const checked = [...this.checked]
          if (this.checked.includes(this.value)) {
            checked.splice(checked.indexOf(this.value), 1)
          } else {
            checked.push(this.value)
          }
          this.$emit('input', checked)
        } else {
          this.$emit('input', !this.checked)
        }
      }
    },

    type() {
      return {
        'form-switch': this.toggle,
        'form-checkbox': !this.toggle,
      }
    },
  },
}
</script>
