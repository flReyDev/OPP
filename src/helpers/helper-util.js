
/**
 * Función que establece la fecha al iniciar la pagina
 * 
 */
export function fecha(){
    let fecha = document.querySelector('#fecha');
    fecha.value = new Date().toISOString().substring(0, 10);
}

/**
 * Función que permite agregar un nuevo dato de analitica 
 * dentro de la sección inferiro derecha de analitica de 
 * datos 
 * 
 * Pendiente programar funcionalidad
 */
export function addProduct(){
    let btn =document.querySelector('.btn_add_product');
    btn.addEventListener('click', ()=>{
        alert('Vamos a gregar un nuevo datos de analisis')
    })
}

/**
 * Función que permite abrir el drop menu de la parte superior derecha
 * Permite abrir el drop list de notificaciones etc
 * dando click en la foto de perfil
 */
export function dropMenu(){
    let menu        = document.querySelector('.drop-menu'),
        profile     = document.querySelector('.profile-photo'),
        btn_notify  = document.querySelector('.theme-notify'),
        list_notify = document.querySelector('.list_notify');

        profile.addEventListener('click', ()=>{
            menu.classList.toggle('show-menu');
            list_notify.classList.remove('show-notify');
        })

        btn_notify.addEventListener('click', ()=>{
            list_notify.classList.toggle('show-notify');
            menu.classList.remove('show-menu');
        })
}

/**
 * Función que permite abrir y cerrar el menu lateral
 * Función que permite cambiar el tema de la pagina
 */
export function menuBurger(){

    let btn_menu      = document.querySelector('#btn_menu'),
        aside_menu    = document.querySelector('.aside_menu'),
        btn_close     = document.querySelector('#btn-close'),
        changue_theme = document.querySelector('.theme-toogler');

    //abrir menu
    btn_menu.addEventListener('click', ()=>{
        aside_menu.style.display = 'block'
    })

    //Cerrar menu
    btn_close.addEventListener('click', ()=>{
        aside_menu.style.display = 'none'
    })

    // cambiar tema
    changue_theme.addEventListener('click', function(e){
        document.body.classList.toggle('theme-dark');
        this.childNodes[1].classList.toggle('active');
        this.childNodes[3].classList.toggle('active');
    })


}