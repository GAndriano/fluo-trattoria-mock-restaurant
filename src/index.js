import loadAbout from "./about"
import './style.css'
import Icon from './restaurant.jpg'
import loadMenu from "./menu"
import loadContact from "./contact"

//allows for easy rendering of the tabs
const controlSite = (() => {
    const page = document.getElementById('content')
    const renderFirstLoad = () => {
        page.appendChild(createHeader())
        page.appendChild(createNavbar())
        page.appendChild(createBody())
    }

    const renderTab = (tab) => {
        page.appendChild(createHeader())
        page.appendChild(createNavbar())
        page.appendChild(tab)
    }


    const clearSite = () => {
        page.innerHTML = ""
    }

    return {renderFirstLoad, clearSite, renderTab}
})()

function createHeader() {
    const header = document.createElement('div')
        const title = document.createElement('span')
        header.appendChild(title)
        title.textContent = "Fluo Trattoria"
        header.classList.add('header')
        title.addEventListener('click', () => {
            controlSite.clearSite()
            controlSite.renderFirstLoad()
        })

    return header
}

function createNavbar() {
    const navBox = document.createElement('div')
    navBox.classList.add('navbox')

    const aboutTab = document.createElement('div')
        aboutTab.textContent = "about"
        aboutTab.classList.add('abouttab')
        aboutTab.addEventListener('click', () => {
            controlSite.clearSite()
            controlSite.renderTab(loadAbout())
        })
    const menuTab = document.createElement('div')
        menuTab.textContent = "menu"
        menuTab.classList.add('menutab')
        menuTab.addEventListener('click', () => {
            controlSite.clearSite()
            controlSite.renderTab(loadMenu())
        })
    const contactTab = document.createElement('div')
        contactTab.textContent = "contact"
        contactTab.classList.add('contacttab')
        contactTab.addEventListener('click', () => {
            controlSite.clearSite()
            controlSite.renderTab(loadContact())
        })

    navBox.appendChild(aboutTab)
    navBox.appendChild(menuTab)
    navBox.appendChild(contactTab)



    return navBox
}

function createBody() {
    const bodyBox = document.createElement('div')
        bodyBox.classList.add('bodybox')

    const leftBox = document.createElement('div')
        leftBox.classList.add('leftbox')
        const resText = document.createElement('div')
            resText.classList.add('restext')
            resText.textContent = "Benventui a Fluo! To make a reservation please call (123)-456-7890, or click below to reserve through OpenTable."
        const resBtn = document.createElement('button')
            resBtn.textContent = "Make Reservation" 

        const desc = document.createElement('div')
            desc.classList.add('desc')
            desc.textContent = "Fluo is a modern, Italian-American restaurant that offers dishes inspired by southern Italian cuisine. We have a curated wine list featuring imported Italian wine, as well as in-house, seasonal dessert menus."

        leftBox.appendChild(resText)
        leftBox.appendChild(resBtn)
        leftBox.appendChild(desc)

    const restaurant = new Image()
        restaurant.src = Icon;
        restaurant.classList.add('restaurant')

    bodyBox.appendChild(leftBox)
    bodyBox.appendChild(restaurant)

    return bodyBox

}






controlSite.renderFirstLoad();







