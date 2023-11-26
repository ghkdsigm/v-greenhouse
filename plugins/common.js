export default function ({app, store}) {
	app.router.beforeEach((to, from, next) => {
		store.dispatch('common/app/cancelTokens')
		next()
	})
}
