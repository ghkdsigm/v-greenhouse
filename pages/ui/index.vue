<template>
	<div>
		<Tutorial />
		<div class="my-4">
			<swiper class="swiper" :options="swiperOption">
				<swiper-slide v-for="(item, idx) in 11" :key="idx">
					<CommonCard01 />
				</swiper-slide>
				<div slot="pagination" class="swiper-pagination"></div>
				<div slot="button-prev" class="swiper-button-prev"></div>
				<div slot="button-next" class="swiper-button-next"></div>
			</swiper>
		</div>
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

		<CommonToggleType01 :test="'토글버튼'" />
		<div style="w-full h-4">ddd</div>

		<div class="p-3">
			<button class="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white focus:outline-none" @click="openpop">
				팝업클릭1
			</button>
		</div>
		<CommonModalType01 v-if="modaltype01" :modaltype01="!modaltype01" @close="closepop" />
		<div style="w-full h-4">ddd</div>

		<CommonCard01 />

		<CommonSelectType01 :test="'토글버튼'" />
		<div style="w-full h-4">ddd</div>

		<!-- <CommonSelectType02 :test="'토글버튼'" />
		<div style="w-full h-4">ddd</div> -->

		<CommonBadgesType01 :test="'토글버튼'" />
		<div style="w-full h-4">ddd</div>

		<Login />
		<div style="w-full h-4">ddd</div>

		<CommonTab />
		<p>{{ msg }} {{ test }}</p>
	</div>
</template>

<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
	name: 'IndexPage',
	components: {
		Swiper,
		SwiperSlide,
	},
	data: () => ({
		msg: '',
		test: '',
		swiperOption: {
			slidesPerView: 4,
			spaceBetween: 30,
			loop: true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		},
		modaltype01: false,
	}),
	methods: {
		openpop() {
			this.modaltype01 = true
		},
		closepop(e) {
			this.modaltype01 = e
		},
	},
}
</script>
