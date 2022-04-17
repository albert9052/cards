<template>
  <div class="ctn ctn-input-field">
    <h6 class="ctn-input-field-field-name">{{ fieldName }}:</h6>
    <input
      class="ctn-input-field-input"
      :type="type"
      :placeholder="placeHolder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "MyInputField",
  props: {
    type: String,
    fieldName: String,
    placeholder: String,
    modelValue: String,
  },
  emits: ["update:modelValue"],
};
</script>
