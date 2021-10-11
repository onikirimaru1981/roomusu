# *Prueba técnica Roomusu®*

## - Rest Api partiendo de una [Url json](http://feeds.spotahome.com/ads-housinganywhere.json) como base de datos.

## - *Tecnologías usadas:*

* Lenguaje de programación: **JavaScript**.
* Lenguaje: **HTML5**.
* Framework front: **Angular 12**.
* Framework back: **NodeJS**.
* Librerías: **Express,Axios,Chai,Chai-http,Compression,Cors,Dotenv,Mocha**.


## - *Instalación:*

### Descargar código fuente de [Gihub](https://github.com/onikirimaru1981/roomusu.git) en la carpeta deseada.
### Ejecutar en el terminal dentro del directorio de la carpeta del proyecto el siguiente comando para instalarla: `npm install`.


##   
## - *Inicio de la App* 
### - *Comandos:*

* Para correr la aplicación: `npm start`.
* Para correr los test de la aplicación: `npm run test`.

## - *Rutas de la App*

#### Ruta raíz que devuelve resultados paginados por defecto: ` http://localhost:8080`
#### Ruta con parámetros que devuelve resultados filtrados:`http://localhost:8080/api/homes?orderFor=City&page=1&limit=10&asc=1`

### - *Parámetros:*

* **orderFor**: Parámetro por el que filtraremos la búsqueda.
* **page**: Parámetro por el que elegiremos página de resultados.
* **limit**: Parámetro por el que limitaremos Nº de resultados por página.
* **asc**: Parámetro por el que ordenaremos en orden ascendente/descendente los resultados que nos muestre la página.



![meme](https://i.blogs.es/8c21c3/650_1000_vader/1366_2000.jpg)

# - Decisiones tomadas en el desarrollo del proyecto y resolución de problemas:

### - **Planteamiento de la APP:**
* Debe tener patrón **MVC**
* Creación de modelo Home donde se recogera los datos de la **Url Json**
* Debe tener una vista en la que se mostrará una tabla con: `Title,Link,Address,City,Images`.
* Debe tener un controlador con un método `get`.
* Capacidad de paginación(`page=1&limit=5`).
* Capacidad de ordenación ascente y descendente(`asc=1/asc=-1`).
* Capacidad para ordenar por campo(`orderFor=Title||Link||Address||City`)

### - **Decisiones importantes:**

* Siempre se página: Por criterio personal.
* Se utilizará patrón **MVC**: Separación del código para mejor mantenimiento cuando este va creciendo.
* Para generar la vista,se utilizará **Angular 12**: Posibilidad de generar la vista de forma más rápida y aprovechar las directivas de este Framework.
* Se utiliza la librería externa **Axios**: Librería de poco peso, en la cual hacer una petición http es sencilla y rápida.
* Los parámetros  de la petición **page** y **limit** tienen valores por defecto para evitar que si el usuario no los declara, la petición se resuelva satisfactoriamente.

### - **Problemas y resoluciones de los mismos:**

* **Problema**: Trabajando con la **url json**: Surge el problema de que al ser un archivo pesado(150mb aprox) la carga de este excede la memoria del navegador con la imposibilidad de trabajar la información del mismo. La descarga de este, para su guardado en un archivo local, imposibilita el trabajo fluido al bloquearse el editor de código al trabajar con el.
* **Solución**: Realizar una petición Http con la libreria axios para posteriormente ikguardarlo en una variable y trabajar con la información.

* **Problema**: Tiempo de carga excesivo en la respuesta del servidor para proveer los datos a la vista(4s aprox).

* **Solución**: Implementar un singleton en el modelo `Home`,el cual sera llamado en el modelo del `server` para para evitar tiempo de carga excesivo,por motivo de que el json de origen es de gran tamaño,consiguiendo que el archivo sea cargado una única vez y su información sea almacenada en una variable con el método `init()` de la clase `Home`.

* **Problema**: Imposibilidad de utilizar el método `init()`que es asincrono dentro del contructor, ya que este no puede pasar a ser async.

* **Solución**: Llamar al método `init()` de la clase `Home` en el modelo del servidor, declarar este asincrono,y alojar la llamada del método en el contructor del servidor.


# Despedida

 ![meme](https://i.pinimg.com/originals/ab/87/7b/ab877b3bcb0605d2685d96e2304be08b.jpg)



