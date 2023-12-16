<!-- eslint-disable prettier/prettier -->
<template>
	<div>
		<LayoutHeader />
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
			{title: 'ABOUT', to: '/ui'},
			{title: 'PRODUCTS', to: ''},
			{title: 'NEWS & RESOURCES', to: ''},
			{
				title: 'CAREER',
				to: '/guide/checklist',
				subMenu: [
					{title: '체크리스트', to: '/guide/checklist'},
					{title: '중고차구매법', to: '/guide/howtobuy'},
					{title: '상사/종사원', to: '/guide/expert'},
				],
			},
			{
				title: 'CONTACT',
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
