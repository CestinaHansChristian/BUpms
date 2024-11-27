export default defineNuxtRouteMiddleware(async (to, from) => {
    const { $pb } = useNuxtApp();
  
    const model = $pb.authStore.model
  
    // console.log(from.path)
    console.log(to.path)
    if ( model?.role === 'officer1' && to.path === '/officer1/projects' && from.path === '/officer1/archive' || from.path.startsWith('/officer1/project/')) {
      await navigateTo('/officer1/projects')
      console.log('Redirect To:',to.path)
      console.log('From path:',from.path)
    } else {
      console.log('Invalid path')
      abortNavigation()
    }
  })
  