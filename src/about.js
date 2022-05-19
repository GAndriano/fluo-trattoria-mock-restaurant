function loadAbout () {
    const aboutBox = document.createElement('div')
    aboutBox.classList.add('aboutbox')

    const header = document.createElement('h1')
    header.textContent = "Our Story"

    const aboutText = document.createElement('div')
    aboutText.classList.add('abouttext')
    aboutText.textContent = "The concept of Fluo Trattoria was started in 2018 by owner Gianni Andriano. After graduating high school, Gianni decided to embark on a journey to redefine Italian-American cuisine. With the help of his friend and Executive Chef, Mario Rossi, a menu fusing traditional Italian cuisine with New American influences was born. Here at Fluo, our menu is based on simple yet creative dishes using only the finest quality ingredients. In 2020, we were fortunate enough to have renowned Pastry Chef Alessia Azzuri join us at Fluo to curate our seasonal dessert menu. In the same year, our Lead Sommelier, Marco Verde, joined our crew. Marco has brought with him an extensive Italian wine list. At Fluo, we are a family, and we invite you to join us here to become a part of our family."


    aboutBox.appendChild(header)
    aboutBox.appendChild(aboutText)

    return aboutBox
}




export default loadAbout