
const resolveRoutes = (route) => {
    if (route.length <=3 ) {
        let validRoute = route === '/' ? route : '/Home'
        return validRoute
    } else if (route === '/Product') {
        let validRoute = '/Product'
        return validRoute
    }
    return `/${route}`
}

export default resolveRoutes