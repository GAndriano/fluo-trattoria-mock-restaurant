function loadContact() {
    const contactBox = document.createElement('div')
        contactBox.classList.add('contactbox')

        const header = document.createElement('div')
        header.textContent = "if you have any questions or comments, or would like to make a reservation, please feel free to reach us by any way listed below:"

        const phoneNum = document.createElement('div')
        phoneNum.textContent = "phone: (123)-456-7890"
        
        const email = document.createElement('div')
        email.textContent = "email: fluotrattoriany@gmail.com"

        const address = document.createElement('a')
        address.textContent = "300 Thompson St., New York, New York 10012"
        address.href = "https://www.google.com/maps/place/300+Thompson+St,+New+York,+NY+10012/@40.730011,-73.9981351,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25991a86809b3:0xe682907e6574ea0c!8m2!3d40.730011!4d-73.9981351"

        const hoursHeader = document.createElement('div')
        hoursHeader.textContent = "hours:"
        
        const mon = document.createElement('div')
        mon.textContent = "mon: closed"

        const days = document.createElement('div')
        days.textContent = "tues-sun: 4pm-11pm"
    
        hoursHeader.appendChild(mon)
        hoursHeader.appendChild(days)

        const socials = document.createElement('div')
        socials.textContent = "follow us on all socials: @fluonyc"

    contactBox.appendChild(header)
    contactBox.appendChild(phoneNum)
    contactBox.appendChild(email)
    contactBox.appendChild(address)
    contactBox.appendChild(hoursHeader)
    contactBox.appendChild(socials)

    return contactBox
}








export default loadContact