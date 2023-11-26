<!-- eslint-disable prettier/prettier -->
<template>
	<div>
		<nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
			<div
				class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
			>
				<div id="navbar-dropdown" class="hidden w-full md:block md:w-auto">
					<ul
						class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
					>
						<li v-for="(menu, i) in menuitems" :key="i">
							<button
								id="dropdownNavbarLink"
								data-dropdown-toggle="dropdownNavbar"
								class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
								@click="menu.to !== '' ? $router.push(`${menu.to}`) : ''"
							>
								{{ menu.title }}
								<svg
									v-show="menu.subMenu"
									class="w-2.5 h-2.5 ms-2.5"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 10 6"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="m1 1 4 4 4-4"
									/>
								</svg>
							</button>
							<!-- Dropdown menu -->
							<div
								v-show="menu.subMenu"
								id="dropdownNavbar"
								class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
							>
								<ul
									class="py-2 text-sm text-gray-700 dark:text-gray-400"
									aria-labelledby="dropdownLargeButton"
								>
									<li v-for="(sub, j) in menu.subMenu" :key="j" li :to="sub.to">
										<a
											href="#"
											class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
											>{{ sub.title }}</a
										>
									</li>
								</ul>
								<!-- <div class="py-1">
									<a
										href="#"
										class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
										>Sign out</a
									>
								</div> -->
							</div>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
export default {
	props: {
		menuitems: {
			type: Array,
			default: () => [],
		},
	},
}
</script>

<style></style>
