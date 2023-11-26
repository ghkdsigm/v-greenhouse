<!-- eslint-disable prettier/prettier -->
<template>
	<div class="search">
		<input
			ref="inputtype03"
			class="inputType02"
			type="text"
			:class="`${width} ${height} ${color} ${background} ${focus} ${padding} ${border} ${rounded} ${fontsize} ${fontweight}`"
			:placeholder="`${placeholder}`"
			:value="test"
			@input="inputMsg"
		/>
		<label for="">
			<svg
				v-if="checktexting && checkvalidation <= 6"
				height="18"
				viewBox="0 0 18 18"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative hover:cursor-pointer"
				preserveAspectRatio="none"
				@click="deletetxt"
			>
				<circle cx="9" cy="9" r="9" fill="#D8D8D8"></circle>
				<path
					d="M4.5 5.22958L5.22958 4.5L13.5 12.7704L12.7704 13.5L4.5 5.22958Z"
					fill="white"
				></path>
				<path
					d="M13.5 5.22958L12.7704 4.5L4.5 12.7704L5.22958 13.5L13.5 5.22958Z"
					fill="white"
				></path>
			</svg>

			<svg
				v-if="checkvalidation >= 7"
				width="14"
				height="10"
				viewBox="0 0 14 10"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="none"
			>
				<path
					d="M4.75 8.1275L2.1475 5.525C1.855 5.2325 1.3825 5.2325 1.09 5.525C0.797496 5.8175 0.797496 6.29 1.09 6.5825L4.225 9.7175C4.5175 10.01 4.99 10.01 5.2825 9.7175L13.2175 1.7825C13.51 1.49 13.51 1.0175 13.2175 0.724998C12.925 0.432498 12.4525 0.432498 12.16 0.724998L4.75 8.1275Z"
					fill="#00CE7D"
				></path>
			</svg>
		</label>
	</div>
</template>

<script>
export default {
	name: 'CommonInputType03',
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
		test: {
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
	data: () => ({
		checktxt: false,
	}),
	computed: {
		checktexting: {
			get() {
				return this.test
			},
			set(newvalue) {
				if (newvalue) {
					return (this.checktxt = true)
				}
				return (this.checktxt = false)
			},
		},
		checkvalidation: {
			get() {
				return this.checktexting.length
			},
			set(newvalue) {
				if (newvalue > 7) {
					return true
				}
				return false
			},
		},
	},
	methods: {
		inputMsg(event) {
			this.internalValue = event.target.value
			this.$emit('input', this.internalValue)
			// console.log(this.internalValue.length)
			// this.checktxt = this.test.length > 0
		},
		// submit() {
		// 	this.$emit('input', this.internalValue)
		// },
		deletetxt() {
			this.$refs.inputtype03.value = ''
			this.checktxt = false
			this.$emit('input', (this.internalValue = ''))
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
	top: 12px;
	right: 12px;
	margin: 0;
}
</style>
