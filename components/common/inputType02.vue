<!-- eslint-disable prettier/prettier -->
<template>
	<div class="search">
		<input
			class="inputType02"
			type="text"
			:class="`${width} ${height} ${color} ${background} ${focus} ${padding} ${border} ${rounded} ${fontsize} ${fontweight}`"
			:placeholder="`${placeholder}`"
			:value="msg"
			@input="inputMsg"
		/>
		<label for="">
			<svg
				v-if="inputtype === 'search'"
				width="23"
				height="23"
				viewBox="0 0 23 23"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="xMidYMid meet"
			>
				<path
					d="M20.625 22.375L13.625 15.375C13 15.875 12.2812 16.2708 11.4687 16.5625C10.6562 16.8542 9.79167 17 8.875 17C6.60417 17 4.6825 16.2137 3.11 14.6412C1.53667 13.0679 0.75 11.1458 0.75 8.875C0.75 6.60417 1.53667 4.68208 3.11 3.10875C4.6825 1.53625 6.60417 0.75 8.875 0.75C11.1458 0.75 13.0679 1.53625 14.6412 3.10875C16.2137 4.68208 17 6.60417 17 8.875C17 9.79167 16.8542 10.6562 16.5625 11.4687C16.2708 12.2812 15.875 13 15.375 13.625L22.4063 20.6562C22.6354 20.8854 22.75 21.1667 22.75 21.5C22.75 21.8333 22.625 22.125 22.375 22.375C22.1458 22.6042 21.8542 22.7188 21.5 22.7188C21.1458 22.7188 20.8542 22.6042 20.625 22.375ZM8.875 14.5C10.4375 14.5 11.7658 13.9533 12.86 12.86C13.9533 11.7658 14.5 10.4375 14.5 8.875C14.5 7.3125 13.9533 5.98417 12.86 4.89C11.7658 3.79667 10.4375 3.25 8.875 3.25C7.3125 3.25 5.98417 3.79667 4.89 4.89C3.79667 5.98417 3.25 7.3125 3.25 8.875C3.25 10.4375 3.79667 11.7658 4.89 12.86C5.98417 13.9533 7.3125 14.5 8.875 14.5Z"
					fill="#78C046"
				></path>
			</svg>
		</label>
	</div>
</template>

<script>
export default {
	name: 'CommonInputType02',
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
		fontsize: {
			type: String,
			default: 'text-base',
		},
		fontweight: {
			type: String,
			default: 'font-normal',
		},
		inputtype: {
			type: String,
			default: 'normal',
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

<style scoped>
.search {
	position: relative;
	width: 300px;
}

.inputType02 {
	width: 100%;
	border-radius: 8px;
	font-size: 14px;
}

svg {
	position: absolute;
	top: 8px;
	right: 12px;
	margin: 0;
}
</style>
