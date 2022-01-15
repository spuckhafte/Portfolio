let welcome_text_elem = document.getElementById('welcome-message')
let about_me_elem = document.getElementById('about-me')
let welcome_message_complete = false

window.onload = () => {
    let welcome_text = 'Hi, this is Rakshit                     '
    let i = 0
    setTimeout(() => {
        const write_message = setInterval(() => {
            welcome_text_elem.innerHTML += welcome_text.charAt(i)
            i++;
            if (i == welcome_text.length) {
                welcome_text_elem.innerHTML = '~'
                i = 0;
                if (about_me_elem.style.display === 'none') about_me_elem.style.display = 'block'
            }
        }, 100);
    }, 500)
}