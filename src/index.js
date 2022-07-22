import './style.css'
import './css/dashboard.css'
import 'material-icons/iconfont/material-icons.css'
import { fecha, addProduct, dropMenu, menuBurger } from './helpers/helper-util'
import Alpine from 'alpinejs'
import './Router/routes'


fecha();
addProduct();
dropMenu();
menuBurger();


window.Alpine = Alpine
Alpine.start()
