<template>
	<div class="m-4">
		<button
			class="relative inline-flex cursor-pointer select-none items-center rounded-lg bg-blue-600 px-4 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 hover:bg-blue-700"
		>
			<label for="dropdown-open" class="absolute left-0 block h-full w-full cursor-pointer"> </label>
			Dropdown button
			<svg
				class="ml-2 h-4 w-4"
				aria-hidden="true"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
			</svg>
		</button>
		<input id="dropdown-open" type="checkbox" class="peer hidden" checked />
		<!-- Dropdown menu -->
		<div class="peer-checked:block z-10 mt-2 hidden w-44 divide-y divide-gray-100 rounded border bg-white shadow">
			<ul class="py-1 text-sm text-gray-700" aria-labelledby="dropdownDefault">
				<li>
					<a href="#" class="block px-4 py-2 hover:bg-gray-100">Dashboard</a>
				</li>
				<li>
					<a href="#" class="block px-4 py-2 hover:bg-gray-100">Settings</a>
				</li>
				<li>
					<a href="#" class="block px-4 py-2 hover:bg-gray-100">Support</a>
				</li>
			</ul>
			<ul class="py-1 text-sm text-gray-700" aria-labelledby="dropdownDefault">
				<li>
					<a href="#" class="block px-4 py-2 hover:bg-gray-100">Sign out</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style></style>
