# Deploy LOCAL

Git clone del proyecto

Ejecutar npm install

Ejecutar npm start

# Deploy PROD

npm run build

fetch del server ==> build/index.html

# Consideraciones generales del challenge

## Se hicieron las siguientes historias de usuario:

• Como admin quiero saber cuantas cajas de birras tengo que comprar para poder aprovisionar la meetup.
• Como admin y usuario quiero conocer la temperatura del dia de la meetup para saber si va a hacer calor o no.
• Como admin quiero armar una meetup para poder invitar a otras personas.
• Como usuario quiero inscribirme en una meetup para para asistir (tambien lo puede hacer el admin)
## Ramas 

Se utilizo la rama master como desarrollo por que el fin del proyecto es una prueba tecnica y el desarrollo lo realiza una sola persona. (Se podria haber utilizado una rama dev y luego mergear con master y generar un tag con su versión)

## Desarrollo

Se desarrollo front y no back, pero si, se simulo un back en memoria con redux utilizando el store. Se utilizo un persistor en cache para que guarde la informacion, pero la app, al primer inicio, no tendra informacion. Si estara la informacion de los usuarios para poder loguearse.
Con respecto a Test, conozco sobre el concepto testing de unidad y realice algunos test con Jest en algunos back que tengo con node js, pero no llegue a realizarlo por temas de tiempo.

## Lista de usuarios:

username: ADMIN
password: 123456

username: COMMON
password: 654321

username: COMMON2
password: 654321

username: COMMON3
password: 654321

# Consideraciones generales técnicas

## Solución 

Para el problema de las cervezas se dicidio utilizar 2 patrones:

Un strategy para manejar el calculo de la cantidad de cervezas que necesita la meet.
Un factory para instanciar a la strategy correspondiente segun la temperatura.

Se podria haber utilizado un state, o simplemente herencia, dado que el codigo de los strategy, en este caso, es igual. Pero se dicidio utilizarlo para dejar el conocimiento del patron y ademas es una buena practica por si el calculo de la cantidad de cervezas en un futuro evoluciona.

## Persistencia de datos 

Se utilizo el store con redux y persistor para mantenerlo en cache.

## Maquetado e interfaz grafica 

Se utilizo Material ui y Reactstrap. Sinceramente no me gusto como quedo el maquetado. La documentacion de Material ui no es muy buena y por temas de tiempo y trabajo personal no pude mejorarlo. Pero entiendo y reconozco que no es la mejor forma de hacerlo. 

