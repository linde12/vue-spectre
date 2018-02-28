<template>
  <div class="form-group">
    <label v-if="label" class="form-label" :for="id" v-text="label"></label>
    <input
      class="form-input"
      :id="id"
      :type="type"
      v-bind="$attrs"
      v-on="$listeners">
  </div>
</template>

<script>
/**
* The `spc-input` component is the input component of vue-spectre.
* It works just like the native `<input>` with the exception of a few added attributes
* which are documented in the props descriptions.
*/
export default {
  name: 'SpcInput',
  /* The input will inherit the attrs vi v-bind="$attrs" instead */
  inheritAttrs: false,
  props: {
    /**
    * The HTML id attribute to use for the field __and__ as `for` attribute on it's label.
    */
    id: String,
    /**
    * The label to use for the field.
    */
    label: String,
  },
}
</script>
