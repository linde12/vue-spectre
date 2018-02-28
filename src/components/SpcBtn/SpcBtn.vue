<template>
  <button
    :type="type"
    v-bind="$attrs"
    v-on="$listeners"
    :class="classes"
    :data-badge="badge">
    <!-- @slot Button contents -->
    <slot></slot>
  </button>
</template>

<script>
/**
* The `spc-btn` component is the button component of vue-spectre.
*/
export default {
  name: 'SpcBtn',
  props: {
    /**
    * Whether the button should be primary button.
    */
    primary: Boolean,
    /**
    * Whether the button should be link button.
    */
    link: Boolean,
    /**
    * Whether the button should be success button.
    */
    success: Boolean,
    /**
    * Whether the button should be error button.
    */
    error: Boolean,
    /**
    * Whether the button should be large.
    */
    large: Boolean,
    /**
    * Whether the button should be small.
    */
    small: Boolean,
    /**
    * Whether the button should be an action button. Action buttons
    * can only contain an icon.
    */
    action: Boolean,
    /**
    * Whether the button should be an floating action button. Floating action buttons
    * are round and can only contain an icon.
    */
    fab: Boolean,
    /**
    * Whether the button should be pressed.
    */
    active: Boolean,
    /**
    * Whether the button should be disabled.
    */
    disabled: Boolean,
    /**
    * Whether the button should display a spinner instead of the text.
    */
    loading: Boolean,
    /**
    * The HTML button type attribute to apply to the button.
    */
    type: {
      type: String,
      default: 'button',
    },
    /**
    * A number to set as a badge number to the button.
    */
    badge: Number,
  },
  computed: {
    classes() {
      return {
        'btn': true,
        'btn-primary': this.primary,
        'btn-link': this.link,
        'btn-success': this.success,
        'btn-error': this.error,
        'btn-lg': this.large,
        'btn-sm': this.small,
        'btn-action': this.action,
        'btn-action circle': this.fab,
        'active': this.active,
        'disabled': this.disabled,
        'loading': this.loading,
        'badge': typeof this.badge !== 'undefined',
      }
    },
  },
}
</script>
