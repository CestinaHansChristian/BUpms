export default defineNuxtRouteMiddleware(async (to, from) => {
  const { $pb } = useNuxtApp();

  const model = $pb.authStore.model

  // console.log(from.path)
  console.log(to.path)
  if ( model?.role === 'officer2' && to.path === '/officer2/projects' && from.path === '/officer2/archive' || from.path.startsWith('/officer2/project/')) {
    await navigateTo('/officer2/projects')
    console.log('Redirect To:',to.path)
    console.log('From path:',from.path)
  } else {
    console.log('Invalid path')
    abortNavigation()
  }
})
