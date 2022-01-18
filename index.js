let main_elem = document.getElementById('main')
let more = document.getElementById('more')
let skills = document.getElementById('skills')
let body = document.body

let welcome_text_1_elem = document.getElementById('welcome-message-1'); let welcome_text_1 = 'Person:  '
let welcome_text_2_elem = document.getElementById('welcome-message-2'); let welcome_text_2 = '⠀⠀initialize(self):'
let welcome_text_3_elem = document.getElementById('welcome-message-3'); let welcome_text_3 = '⠀⠀⠀⠀self.name = Rakshit'
let welcome_text_4_elem = document.getElementById('welcome-message-4'); let welcome_text_4 = '⠀⠀⠀⠀self.age = 17'
let welcome_text_5_elem = document.getElementById('welcome-message-5'); let welcome_text_5 = '⠀⠀⠀⠀self.status = student'

window.onload = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    body.style.overflow = 'hidden'
    setTimeout(() => {
        runWelcome()
    }, 10)
}

function runWelcome() {
    var count;
    count += typing_animation(welcome_text_1_elem, welcome_text_1, 50, false, more, 'welcomeAnimation')
    count += typing_animation(welcome_text_2_elem, welcome_text_2, 50, false, more, 'welcomeAnimation')
    count += typing_animation(welcome_text_3_elem, welcome_text_3, 50, false, more, 'welcomeAnimation')
    count += typing_animation(welcome_text_4_elem, welcome_text_4, 50, false, more, 'welcomeAnimation')
    count += typing_animation(welcome_text_5_elem, welcome_text_5, 50, true, more, 'welcomeAnimation')

    return count;
}

function typing_animation(elem, text, interval, end, input, type) {
    let i = 0;
    if (type == 'skillsAnimation') elem.innerHTML = ''
    const write_message = setInterval(() => {
        elem.innerHTML += text.charAt(i)
        i++;
        if (i == text.length) {
            clearTimeout(write_message)
            if (end) {
                if (input.style.opacity == 0) {
                    input.style.opacity = '1';
                    input.style.transition = '0.2s ease-in'
                }
            }
            return 1;
        }
    }, interval);
}

more.onclick = function () {
    if (more.innerHTML == './more') {
        more.innerHTML = './less'
        main_elem.style.opacity = 1;
        main_elem.style.transition = '0.1s ease-in'
        body.style.overflow = 'visible'
        animate_skill()
    } else {
        more.innerHTML = './more'
        main_elem.style.opacity = 0;
        main_elem.style.transition = '0.1s ease-in'
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        body.style.overflow = 'hidden'
    }
}

function animate_skill() {
    // py, react, js, htm/css, c#, java
    const skills = [15, 9, 14, 12, 11, 4]

    const langs = document.getElementsByClassName('box-progress')
    var i
    for (i = 0; i < langs.length; i++) {
        let hashtags = '#'.repeat(skills[i])
        typing_animation(langs[i], hashtags, 20, false, langs[i], 'skillsAnimation')
    }
}
