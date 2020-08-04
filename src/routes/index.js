import Header from '../templates/Header'
import Banner from '../templates/Banner'
import Home from '../pages/Home'
import Product from '../pages/Product'
import Footer from '../templates/Footer'
import Error404 from '../pages/Error404'
import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'

// <--------APP ROUTES-------------->

const routes = {
    '/': Home,
    '/Product': Product,
    '/Error404': Error404,
}

const router = async () => {
    const header =  null || document.getElementById('header')
    // const banner =  null || document.getElementById('banner')
    const content = null || document.getElementById('content')
    const footer =  null || document.getElementById('footer')


    header.innerHTML = await Header()
    // banner.innerHTML = await Banner()
    let hash = getHash()
    let route = await resolveRoutes(hash)
    let render = routes [route] ? routes [route] : Error404

    content.innerHTML = await render
    footer.innerHTML = await Footer()
}

export default router