<template>
  <div class="form-group">
    <label v-if="label" class="form-label" :for="id" v-text="label"></label>
    <textarea
      class="form-input"
      :id="id"
      :placeholder="placeholder"
      v-bind="$attrs"
      v-on="$listeners"></textarea>
  </div>
</template>

<script>
/**
* The `spc-textarea` component is a textarea form component.
* Works like a normal `textarea` and takes the same attributes.
*/
export default {
  name: 'SpcTextarea',
  /* The textarea will inherit the attrs vi v-bind="$attrs" instead */
  inheritAttrs: false,
  props: {
    /**
    * The HTML id attribute to use for the textarea.
    */
    id: String,
    /**
    * The label to use for the textarea.
    */
    label: String,
    /**
    * The placeholder to use for the textarea.
    */
    placeholder: String,
  },
}
</script>
