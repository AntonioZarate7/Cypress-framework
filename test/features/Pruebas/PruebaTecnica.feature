# language: es

Característica: Flujo de llenado de carrito

@PruebaTecnica
Escenario: Carrito de compras
  Dado que estoy en la pagina "https://www.saucedemo.com/v1/"
  Cuando ingreso "standard_user" en el campo "usuario" de la pantalla "Login"
  E ingreso "secret_sauce" en el campo "password" de la pantalla "Login"
  Y doy click en el boton "login" de la pantalla "Login"

# Seleccion del primer producto
  Entonces doy click en el primer producto "producto" de la pantalla "Productos"
  Y doy click en el boton "agregar" de la pantalla "Productos"
  Y doy click en el boton "atras" de la pantalla "Productos"

# Seleccion del segundo producto
  Entonces doy click en el tercer producto "producto" de la pantalla "Productos"
  Y doy click en el boton "agregar" de la pantalla "Productos"
  Y doy click en el boton "atras" de la pantalla "Productos"

  Entonces doy click en el boton "carrito" de la pantalla "Productos"
  Y valido que los productos sean los seleccionados
  Y doy click en el boton "checkout" de la pantalla "Productos"

  E ingreso "Antonio" en el campo "nombre" de la pantalla "Productos"
  E ingreso "Zarate" en el campo "apellido" de la pantalla "Productos"
  E ingreso "54715" en el campo "cp" de la pantalla "Productos"
  Y doy click en el boton "continuar" de la pantalla "Productos"

  Y doy click en el boton "finalizar" de la pantalla "Productos"

  Entonces doy click en el boton "menu" de la pantalla "Productos"
  Y doy click en el boton "cerrar sesion" de la pantalla "Productos"

  ernesto.ortega@spaymentservices.com
 

  
    