<!-- eslint-disable prettier/prettier -->
<template>
	<div>
		<div class="flex flex-col items-center gap-4">
			<button
				class="flex select-none items-center gap-3 rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-blue-gray-900 shadow-md shadow-blue-gray-500/10 transition-all hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
				type="button"
				data-ripple-dark="true"
			>
				<img
					src="https://www.material-tailwind.com/icons/metamask.svg"
					alt="metamask"
					class="h-6 w-6"
				/>
				Connect Wallet
			</button>
			<button
				class="flex select-none items-center gap-3 rounded-lg border border-blue-gray-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-blue-gray-500 transition-all hover:opacity-75 focus:ring focus:ring-blue-gray-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
				type="button"
				data-ripple-dark="true"
			>
				<img
					src="https://www.material-tailwind.com/icons/google.svg"
					alt="metamask"
					class="h-6 w-6"
				/>
				Continue with Google
			</button>
			<button
				class="group relative flex select-none items-center gap-3 overflow-hidden rounded-lg bg-gradient-to-tr from-light-blue-600 to-light-blue-400 py-3.5 px-7 pr-[72px] text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-light-blue-500/20 transition-all hover:shadow-lg hover:shadow-light-blue-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
				type="button"
				data-ripple-light="true"
			>
				Sign in with Twitter
				<span
					class="absolute right-0 grid h-full w-12 place-items-center bg-light-blue-600 transition-colors group-hover:bg-light-blue-700"
				>
					<img
						src="https://www.material-tailwind.com/icons/twitter.svg"
						alt="metamask"
						class="h-6 w-6"
					/>
				</span>
			</button>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style></style>
