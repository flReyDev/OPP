import page from "page";

let render_content = document.querySelector('.render-pages'),
      title          = document.querySelector('.title');

page('/', async ()=>{
    render_content.innerHTML = '<h2> Home </h2>';

        fetch('http://localhost:8000/presupuestos/detail/1')
            .then( response => response.json())
            .then((data)=>{
                console.log( data )
            })
            .catch(error=> console.log( error ))

})

page('/messagues', function(){
    render_content.innerHTML = '<h2> Imbox </h2>';
})

page('/compras', ()=>{
    render_content.innerHTML = '<h2> Área de compras </h2>';
})

page('/presupuestos', ()=>{
    render_content.innerHTML = '<h2> Área de presupuestos </h2>';
})

page('/contratos', ()=>{
    render_content.innerHTML = '<h2> Área de contratos </h2>';
})
page('/proveedores', ()=>{
    render_content.innerHTML = '<h2> Área de proveedores </h2>';
})
page('/rrhh', ()=>{
    render_content.innerHTML = '<h2> Área de recursos humanos </h2>';
})
page('/inventarios', ()=>{
    render_content.innerHTML = '<h2> Área de inventarios </h2>';
})
page('/usuarios', ()=>{
    render_content.innerHTML = '<h2> Área de usuarios </h2>';
})
page('/salir', ()=>{
    render_content.innerHTML = '<h2> Su sesión termino </h2>';

    // leer documentación de la libreria para redireccionar
})
page.start();