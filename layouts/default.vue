<!-- eslint-disable prettier/prettier -->
<template>
	<div>
		<LayoutAppHeader :menuitems="menuitems" />
		<!--메인섹션-->
		<div class="relative py-6 sm:py-10">
			<div class="container mx-auto">
				<Nuxt />
			</div>
		</div>
		<LayoutFooter />
	</div>
</template>

<script>
export default {
	name: 'DefaultLayout',
	data: () => ({
		menuitems: [
			{title: '내차 찾기', to: '/ui'},
			{title: '전기차', to: ''},
			{title: '신차급', to: ''},
			{
				title: '매매가이드',
				to: '/guide/checklist',
				subMenu: [
					{title: '체크리스트', to: '/guide/checklist'},
					{title: '중고차구매법', to: '/guide/howtobuy'},
					{title: '상사/종사원', to: '/guide/expert'},
				],
			},
			{
				title: '단지안내',
				to: '/information/company',
				subMenu: [
					{title: '단지소개', to: '/information/company'},
					{title: '시설안내', to: '/information/facility'},
					{title: '오시는길', to: '/information/directions'},
				],
			},
		],
	}),
}
</script>

<style></style>
