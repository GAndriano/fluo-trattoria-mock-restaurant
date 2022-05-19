function loadMenu() {
    const menuBox = document.createElement('div')
    menuBox.classList.add('menubox')

    const appetizers = document.createElement('div')
        appetizers.classList.add('appetizers')
        const appetHeading = document.createElement('div')
            appetHeading.classList.add('menuheaders')
            appetHeading.textContent = "antipasti"
            appetizers.appendChild(appetHeading)
        const app1 = document.createElement('div')
            const appText1 = document.createElement('div')
            const appPrice1 = document.createElement('div')
            appText1.textContent = "calamari fritti with spicy marinara, garlic aioli"
            appPrice1.textContent = "15"
            app1.appendChild(appText1)
            app1.appendChild(appPrice1)
        const app2 = document.createElement('div')
            const appText2 = document.createElement('div')
            const appPrice2 = document.createElement('div')
            appText2.textContent = "mozzarella bufala with E.V.O.O, proscuitto di parma, bruschettini"
            appPrice2.textContent = "18"
            app2.appendChild(appText2)
            app2.appendChild(appPrice2)
        const app3 = document.createElement('div')
            const appText3 = document.createElement('div')
            const appPrice3 = document.createElement('div')
            appText3.textContent = "spiedini alla romana with a lemon, caper, anchovy sauce"
            appPrice3.textContent = "12"
            app3.appendChild(appText3)
            app3.appendChild(appPrice3)
        const app4 = document.createElement('div')
            const appText4 = document.createElement('div')
            const appPrice4 = document.createElement('div')
            appText4.textContent = "salumi and formaggi board"
            appPrice4.textContent = "24"
            app4.appendChild(appText4)
            app4.appendChild(appPrice4)
        const app5 = document.createElement('div')
            const appText5 = document.createElement('div')
            const appPrice5 = document.createElement('div')
            appText5.textContent = "grilled octopus with hummus, roasted potatoes"
            appPrice5.textContent = "17"
            app5.appendChild(appText5)
            app5.appendChild(appPrice5)
        
        appetizers.appendChild(app1)
        appetizers.appendChild(app2) 
        appetizers.appendChild(app3) 
        appetizers.appendChild(app4) 
        appetizers.appendChild(app5)  
    
    const pastas = document.createElement('div')
        pastas.classList.add("pastas")
        const pastaHeading = document.createElement('div')
            pastaHeading.classList.add('menuheaders')
            pastaHeading.textContent = "primi"
            pastas.appendChild(pastaHeading)
        const pasta1 = document.createElement('div')
            const pastaText1 = document.createElement('div')
            const pastaPrice1 = document.createElement('div')
            pastaText1.textContent = "bucatini all'amatriciana"
            pastaPrice1.textContent = "25"
            pasta1.appendChild(pastaText1)
            pasta1.appendChild(pastaPrice1)
        const pasta2 = document.createElement('div')
            const pastaText2 = document.createElement('div')
            const pastaPrice2 = document.createElement('div')
            pastaText2.textContent = "ramen cacio e pepe"
            pastaPrice2.textContent = "21"
            pasta2.appendChild(pastaText2)
            pasta2.appendChild(pastaPrice2)
        const pasta3 = document.createElement('div')
            const pastaText3 = document.createElement('div')
            const pastaPrice3 = document.createElement('div')
            pastaText3.textContent = "spaghetti pomodoro with calabrian pepper, polpettini"
            pastaPrice3.textContent = "23"
            pasta3.appendChild(pastaText3)
            pasta3.appendChild(pastaPrice3)
        const pasta4 = document.createElement('div')
            const pastaText4 = document.createElement('div')
            const pastaPrice4 = document.createElement('div')
            pastaText4.textContent = "fioretti alla boscaiola"
            pastaPrice4.textContent = "22"
            pasta4.appendChild(pastaText4)
            pasta4.appendChild(pastaPrice4)
        const pasta5 = document.createElement('div')
            const pastaText5 = document.createElement('div')
            const pastaPrice5 = document.createElement('div')
            pastaText5.textContent = "papardelle bolognese"
            pastaPrice5.textContent = "28"
            pasta5.appendChild(pastaText5)
            pasta5.appendChild(pastaPrice5)
         const pasta6 = document.createElement('div')
            const pastaText6 = document.createElement('div')
            const pastaPrice6 = document.createElement('div')  
            pastaText6.textContent = "spaghetti carbonara"
            pastaPrice6.textContent = "24"
            pasta6.appendChild(pastaText6)
            pasta6.appendChild(pastaPrice6)

        pastas.appendChild(pasta1)
        pastas.appendChild(pasta2) 
        pastas.appendChild(pasta3) 
        pastas.appendChild(pasta4) 
        pastas.appendChild(pasta5) 
        pastas.appendChild(pasta6)         

    const meats = document.createElement('div')
        meats.classList.add('meats')
        const meatHeading = document.createElement('div')
        meatHeading.classList.add('menuheaders')
        meatHeading.textContent = "secondi"
        meats.appendChild(meatHeading)
        const meat1 = document.createElement('div')
            const meatText1 = document.createElement('div')
            const meatPrice1 = document.createElement('div')
            meatText1.textContent = "roasted chicken with mashed potatoes, mushrooms"
            meatPrice1.textContent = "28"
            meat1.appendChild(meatText1)
            meat1.appendChild(meatPrice1)
        const meat2 = document.createElement('div')
            const meatText2 = document.createElement('div')
            const meatPrice2 = document.createElement('div')
            meatText2.textContent = "bone-in new york strip with chimichurri, black pepper"
            meatPrice2.textContent = "35"
            meat2.appendChild(meatText2)
            meat2.appendChild(meatPrice2)
        const meat3 = document.createElement('div')
            const meatText3 = document.createElement('div')
            const meatPrice3 = document.createElement('div')
            meatText3.textContent = "grilled salmon with seasonal vegetables, wild rice, garlic cream sauce"
            meatPrice3.textContent = "37"
            meat3.appendChild(meatText3)
            meat3.appendChild(meatPrice3)
        const meat4 = document.createElement('div')
            const meatText4 = document.createElement('div')
            const meatPrice4 = document.createElement('div')
            meatText4.textContent = "veal chop parmigiana"
            meatPrice4.textContent = "55"
            meat4.appendChild(meatText4)
            meat4.appendChild(meatPrice4)
        const meat5 = document.createElement('div')
            const meatText5 = document.createElement('div')
            const meatPrice5 = document.createElement('div')
            meatText5.textContent = "veal ossobuco with risotto"
            meatPrice5.textContent = "58"
            meat5.appendChild(meatText5)
            meat5.appendChild(meatPrice5)
        const meat6 = document.createElement('div')
            const meatText6 = document.createElement('div')
            const meatPrice6 = document.createElement('div')
            meatText6.textContent = "grilled lamb chop"
            meatPrice6.textContent = "45"
            meat6.appendChild(meatText6)
            meat6.appendChild(meatPrice6)
        const meat7 = document.createElement('div')
            const meatText7 = document.createElement('div')
            const meatPrice7 = document.createElement('div')
            meatText7.textContent = "grilled scallops with cherry tomatoes, garlic, lemon"
            meatPrice7.textContent = "42"
            meat7.appendChild(meatText7)
            meat7.appendChild(meatPrice7)

        meats.appendChild(meat1)
        meats.appendChild(meat2)    
        meats.appendChild(meat3)    
        meats.appendChild(meat4)    
        meats.appendChild(meat5)    
        meats.appendChild(meat6)    
        meats.appendChild(meat7)        

    const dessert = document.createElement('div')
        dessert.classList.add('dessert')
        const dessertHeading = document.createElement('div')
        dessertHeading.classList.add('menuheaders')
        dessertHeading.textContent = "dolci"
        const dessertText = document.createElement('div')
            dessertText.textContent = "please ask your server for our seasonal dessert specials"
        dessert.appendChild(dessertHeading)
        dessert.appendChild(dessertText)

    menuBox.appendChild(appetizers)
    menuBox.appendChild(pastas)
    menuBox.appendChild(meats)
    menuBox.appendChild(dessert)

    return menuBox
}











export default loadMenu