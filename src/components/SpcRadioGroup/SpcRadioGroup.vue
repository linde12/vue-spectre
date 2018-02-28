<template>
  <div class="form-group">
    <label v-if="label" class="form-label" v-text="label"></label>
    <slot></slot>
  </div>
</template>

<script>
/**
* The `spc-radio-group` is a wrapper for `spc-radio` components belonging to the same group.
*/
export default {
  name: 'SpcRadioGroup',
  props: {
    /**
    * The label to use for the group.
    */
    label: String,
  },
}
</script>
