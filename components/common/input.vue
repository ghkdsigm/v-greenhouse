<!-- eslint-disable prettier/prettier -->
<template>
	<input
		type="text"
		:class="`${width} ${height} ${color} ${background} ${focus} ${padding} ${border} ${rounded}`"
		:placeholder="`${placeholder}`"
		:value="msg"
		@input="inputMsg"
	/>
</template>

<script>
export default {
	props: {
		width: {
			type: String,
			default: 'w-full',
		},
		height: {
			type: String,
			default: 'h-full',
		},
		color: {
			type: String,
			default: 'text-white',
		},
		background: {
			type: String,
			default: 'primary01',
		},
		padding: {
			type: String,
			default: 'pa-0',
		},
		border: {
			type: String,
			default: 'box-border',
		},
		placeholder: {
			type: String,
			default: '',
		},
		rounded: {
			type: String,
			default: 'rounded-none',
		},
		focus: {
			type: String,
			default: '',
		},
		msg: {
			type: String,
			default: '',
		},
	},
	data: () => ({}),
	methods: {
		inputMsg(event) {
			this.internalValue = event.target.value
			this.$emit('input', this.internalValue)
		},
	},
}
</script>

<style></style>
