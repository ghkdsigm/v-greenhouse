<!-- eslint-disable prettier/prettier -->
<template>
	<button
		:class="`${width} ${height} ${hover} ${color} ${background} ${padding} ${border} ${rounded}`"
		data-ripple-light="true"
	>
		{{ text }}
	</button>
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
		text: {
			type: String,
			default: '',
		},
		hover: {
			type: String,
			default: '',
		},
		rounded: {
			type: String,
			default: 'rounded-none',
		},
	},
	data: () => ({}),
}
</script>

<style></style>
