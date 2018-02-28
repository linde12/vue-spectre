<template>
  <div class="form-group">
    <label v-if="label" class="form-label" :for="id" v-text="label"></label>
    <select
      :id="id"
      class="form-select"
      v-model="model"
      :value="value"
      v-bind="$attrs"
      v-on="$listeners">
      <!-- @slot Contents of the select. (`<option>` elements) -->
      <slot></slot>
    </select>
  </div>
</template>

<script>
/**
* The `spc-select` component is a simple HTML select with Spectre styling.
*/
export default {
  name: 'SpcSelect',
  /* The select will inherit the attrs vi v-bind="$attrs" instead */
  inheritAttrs: false,
  props: {
    /**
    * The HTML id attribute to use for the field.
    */
    id: String,
    /**
    * The label to use for the field.
    */
    label: String,
    /**
    * The currently selected option(s)
    */
    value: [ Array, String ],
  },
  computed: {
    model: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  },
}
</script>
