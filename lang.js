// DEFAULT LANGUAGE
const DEFAULT_LANG = 'id';

// TRANSLATION DATA
const LANG = {
    id: {
        login: "Login",
        register: "Daftar",
        forgot: "Lupa kata sandi ?",
        email_phone: "Email / No. Hp",
        password: "Kata Sandi",
        about: "Tentang Kami",
        about_desc: "Disini , aku mau buat deskripsi semua tentang perusahaan"
    },
    en: {
        login: "Login",
        register: "Register",
        forgot: "Forgot password ?",
        email_phone: "Email / Phone",
        password: "Password",
        about: "About us",
        about_desc: "Here we describe everything about the company"
    }
};

// GET LANGUAGE
function getLang(){
    return localStorage.getItem('lang') || DEFAULT_LANG;
}

// SET LANGUAGE
function setLangGlobal(lang){
    localStorage.setItem('lang', lang);
    applyLang();
}

// APPLY LANGUAGE
function applyLang(){
    const lang = getLang();
    document.querySelectorAll('[data-lang]').forEach(el=>{
        const key = el.getAttribute('data-lang');
        if(LANG[lang][key]){
            el.innerText = LANG[lang][key];
            if(el.tagName==="INPUT"){
                el.placeholder = LANG[lang][key];
            }
        }
    });

    // update flag & code
    const flag = lang === 'id' ? 'id.png' : 'en.png';
    const code = lang.toUpperCase();

    document.querySelectorAll('.lang-flag').forEach(img=>img.src = flag);
    document.querySelectorAll('.lang-code').forEach(span=>span.innerText = code);
}

// AUTO APPLY
document.addEventListener('DOMContentLoaded', applyLang);
