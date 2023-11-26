<template>
	<div>
		<Tutorial />
		<CommonButton
			:width="''"
			:height="'h-12'"
			:color="'text-white'"
			:background="'bg-primary02'"
			:padding="'px-12'"
			:rounded="'rounded'"
			:text="'확인'"
		/>

		<CommonButton
			:width="''"
			:height="'h-12'"
			:color="'text-primary02'"
			:background="'bg-white'"
			:hover="'hover:bg-primary02 hover:text-white'"
			:padding="'px-12'"
			:border="'box-border border border-primary02'"
			:rounded="'rounded'"
			:text="'확인'"
		/>

		<CommonInput
			v-model="msg"
			:width="''"
			:height="'h-12'"
			:color="'text-primary02'"
			:background="'bg-white'"
			:padding="'px-2'"
			:border="'box-border border border-primary02'"
			:rounded="'rounded'"
			:focus="'focus:outline-none focus:border-accentcolor_pink focus:ring-1 focus:ring-accentcolor_pink'"
			:placeholder="'입력해주셔요'"
		/>

		<div style="w-full h-4">ddd</div>

		<CommonInputType02
			v-model="msg"
			:inputtype="'search'"
			:width="'w-[260px]'"
			:height="'h-[42px]'"
			:color="'text-primary02'"
			:padding="'pl-2 pr-12 py-[11px]'"
			:rounded="'rounded'"
			:border="'border border-primary02 focus:border-accentcolor_pink focus:outline-none'"
			:placeholder="'검색어를 입력해주셔요'"
			:fontsize="'font-semibold'"
		/>
		<div style="w-full h-4">ddd</div>

		<CommonInputType03
			v-model="test"
			:test="test"
			:inputtype="'texting'"
			:width="'w-[260px]'"
			:height="'h-[42px]'"
			:color="'text-primary02'"
			:padding="'pl-2 pr-12 py-[11px]'"
			:rounded="'rounded'"
			:border="'border border-primary02 focus:border-accentcolor_pink focus:outline-none'"
			:placeholder="'검색어를 입력해주셔요'"
			:fontsize="'font-normal'"
		/>
		<div style="w-full h-4">ddd</div>
		<CommonCard01 />

		<CommonTab />
		<p>{{ msg }} {{ test }}</p>
	</div>
</template>

<script>
export default {
	name: 'IndexPage',
	data: () => ({
		msg: '',
		test: '',
	}),
}
</script>
