# PROYECTO 2 - Documento 2<h1>
# Análisis y diseño para escalabilidad<h2>


### Definición del equipo, proyecto y aplicación:
__Miembros del equipo y asignación de QA por miembros__

* Marco antonio Franco Montoya - Disponibilidad
    @manfranco
* Juan Camilo Rodriguez Montoya - Rendimiento
    @jrodri92
* David Felipe Lemus Giraldo - Seguridad
    @dlemusg

### Análisis

Para identificar los escenarios de calidad se seguirá la siguiente estructura:

 1. Fuente del estímulo: quien o que genera el estímulo. 
 2. Estímulo: lo que se quiere llevar a cabo.
 3. Entorno: condiciones dentro de las cuales se presenta el estímulo.
 4. Artefacto: parte del sistema que recibe el estímulo.
 5. Respuesta: actividad que ocurre luego de la llegada del estímulo.
 6. Medida de la Respuesta: criterio para testear el requerimiento.
 7. Atributo de calidad afectado: Atributo de calidad relacionado con el escenario

__Escenario de Disponibilidad__
* __Fuente del estímulo:__
* __Estímulo:__
* __Ambiente:__
* __Artefacto:__
* __Respuesta:__
* __Medida de respuesta:__

__Escenario de Rendimiento__
* __Fuente del estímulo:__
* __Estímulo:__
* __Ambiente:__
* __Artefacto:__
* __Respuesta:__
* __Medida de respuesta:__

__Escenario de Seguridad__
* __Fuente del estímulo:__
* __Estímulo:__
* __Ambiente:__
* __Artefacto:__
* __Respuesta:__
* __Medida de respuesta:__



### Diseño

__Vistas de arquitectura__

__Patrones de arquitectura__
* __Patrón Modelo-Vista-Controlador(MVC):__ Como su nombre lo indica, este patrón se estructura en 3 capas logicas que interactuan separando la presentacion e iteración con los datos. La capa del *modelo* gestiona los datos, conexiones a BD y los metodos que interactuen sobre ellos, la *vista* es la engarcada de la presentación de la información al usuario, es decir "es la capa con la que el usuario interactua con el sistema" y la capa del *controlador* es la orquestadora de las interacciones del usuario con las funcion del sistema, es el engargado de gestionar el acceso al modelo y la presentación de los datos en la vista. 

__Best Practices__

__Tacticas__

__Herramientas__

### Definición de Tecnología v2


### Marco-referencia-v2

#### Disponibilidad




__Patrones y mejores prácticas__
.
.
.


#### Rendimiento

Concepto

* __Patrones y mejores prácticas__

.
.



#### Seguridad

La seguridad de aplicaciones web es una rama de la Seguridad Informática que se encarga específicamente de la seguridad de sitios web, aplicaciones web y servicios web.

A un alto nivel, la seguridad de aplicaciones web se basa en los principios de la seguridad de aplicaciones pero aplicadas específicamente a la World Wide Web.
*https://es.wikipedia.org/wiki/Seguridad_de_aplicaciones_web*

* __Patrones y mejores prácticas__

    * __Balancear riesgo y usabilidad:__ A mayor complejidad de nuestro sitio, aumenta el riesgo de que se sufra un ataque debido a sus características más elaboradas, es por eso que deben considerarse opciones de seguridad necesarias y sencillas pero eficientes, que ayuden a mitigar cualquier característica que la haga vulnerable.

    * __Rastrear el paso de los datos:__  En las aplicaciones web, existen maneras de distinguir los orígenes de los datos y poder así reconocer cuando los datos pueden ser dignos de confianza y cuando no.

    * __Filtrar entradas:__ El filtrado es una de las piedras angulares de la seguridad en aplicaciones web. Es el proceso por el cual se prueba la validez de los datos. Si nos aseguramos que los datos son filtrados apropiadamente al entrar, podemos eliminar el riesgo de que datos contaminados sean usados para provocar funcionamientos no deseados en la aplicación.

    * __Escapado de salidas:__ Codificar o decodificar caracteres especiales de tal forma que su significado original sea preservado. Si llegamos a utilizar una codificación en particular es necesario conocer los caracteres reservados los cuales serán necesarios escapar.