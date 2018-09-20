# PROYECTO 2 - Documento 1<h1>


### Definición del equipo, proyecto y aplicación:
__Miembros del equipo y asignación de QA por miembros__

* Marco antonio Franco Montoya - Disponibilidad
* Juan Camilo Rodriguez Montoya - Rendimiento
* David Felipe Lemus Giraldo - Seguridad

__Selección de la aplicación basada en Proyecto1__

Al analizar los 3 proyectos, encontramos mayor facilidad trabajando con el  de David Lemus, considerando la facilidad de entender el proyecto y mayor cantidad de avances comparado con los otros. Las plataformas utilizadas no fueron preocupación, puesto que todos trabajamos usando node.js, docker, mongodb.

*El repositorio seleccionado fue:* https://github.com/dlemusg/proyecto1

__Descripción de la aplicación__

Aplicacion web de geolocalizacion, permite guardar la ubicacion en tiempo real cada intervalo de tiempo segun la ruta del usuario, ademas permite la visualizacion de ubicaciones a partir de mapas en google.

__Requisitos Funcionales de la aplicación:__

* Autenticación de usuarios y API REST
* Registro de eventos en tiempo real (se requiere tanto una aplicación que envíe los eventos desde un móvil y el servidor que recibe los eventos, la aplicación que envía los eventos puede ser una página web sencilla en HTML5-Geolocalización y google maps)
* Visualización de ruta previamente almacenada.
* Visualización de ruta en tiempo real

### Detalles técnicos del diseño e implementación funcional para el proyecto2.


### Definición de Tecnologia v1


### Marco-referencia-v1

#### Disponibilidad

Define la proporción del tiempo que el sistema es funcional y trabaja. Puede ser medido como un porcentaje del tiempo total en que el sistema estuvo caído en un periodo predefinido. La disponibilidad puede verse afectada por errores del sistema, problemas de infraestructura, ataques o carga del sistema.

Patrones:

1. Failover
2. Failback
3. Replication
4. Redudancy
5. Virtualization
6. Continuos Maintenance
7. Corrective Maintenance
8. Continuos Maintenance


#### Rendimiento
"Las pruebas de rendimiento son un conjunto de pruebas no funcionales que se realizan, para determinar la velocidad de ejecución de una tarea concreta en un sistema bajo condiciones particulares de trabajo." [1]

Los objetivos de estas pruebas son:

    Validar y verificar atributos de la calidad del sistema: uso de los recursos, escalabilidad y fiabilidad.
    Comparación de sistemas para encontrar cuál de ellos funciona mejor.
    Determinar qué componentes del sistema provocan que el conjunto .presente rendimientos bajos.

Tipos de Pruebas de Rendimiento

1. Prueba de Carga => Load Test

Prueba de rendimiento que se realiza para observar el comportamiento de una aplicación bajo una cantidad de peticiones esperada.

Objetivos:
    Mostrar los tiempos de respuesta de todas las transacciones importantes.
    Localizar los ‘cuellos de botella’ de una aplicación.

2. Pruebas de Estrés => Stress Test

Prueba de rendimiento que se realiza para observar el comportamiento de una aplicación bajo una cantidad de peticiones extrema.

Objetivos:

    ‘Romper’ la aplicación.
    Determinar cómo rendirá la aplicación si la carga real supera a la carga esperada

3.  Otras Pruebas: de picos, de estabilidad, …

A la hora de efectuar pruebas de rendimiento empleando herramientas de software, es necesario que el departamento de QA, defina un escenario lo más real posible, es decir, lo más semejante a las situaciones de funcionamiento en el entorno.

#### Seguridad

"Define la forma en que el sistema es protegido de perder o suministrar información y la posibilidad de éxito de un ataque. Un sistema seguro trata de proteger sus actives y previene la modificación de información de fuentes no autorizadas."

Deben comprender 3 aspectos:

* Confidencialidad: Los datos no pueden ser divulgadodos a usuarios no autorizados.

* Integridad: Los daton no pueden ser modificidos por terceros.

* Disponibilidad: Todos los servicios y daton deben funcionar todo el tiempo.



### Refererencias 

1. https://geeks.ms/jkpelaez/2009/05/30/definiciones-atributos-de-calidad-para-aplicaciones-distribuidas-y-de-alta-disponibilidad/
