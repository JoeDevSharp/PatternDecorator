# Patrón Decorator: ampliación dinámica de clases
Si quieres ampliar las funcionalidades de una clase en un software orientado a objetos, tienes dos opciones. La opción más fácil es implementar subclases que complementen a la clase base. Sin embargo, esta opción puede volverse confusa. Como alternativa, puedes usar una entidad decoradora según el llamado patrón de diseño Decorador (Decorator Design Pattern)

## ¿Qué es un patrón Decorator?

El patrón de diseño Decorador es una estrategia de diseño revelada en 1994 para expandir la funcionalidad de las clases dinámicamente en el software de computación orientado a objetos. Según este patrón, cualquier objeto puede complementarse con un comportamiento deseado sin influir en las funcionalidades de otros objetos de la misma clase. Desde el punto de vista estructural, el patrón Decorador tiene mucho en común con el patrón Cadena de Responsabilidad (Chain of Responsibility), aunque, en contraste con este, con un procesador central, todas las clases reciben las peticiones.

El componente de software que hay que ampliar se “decora” con una o más clases decoradoras, que lo envuelven completamente, siguiendo el patrón de diseño Decorador. Cada decorador es del mismo tipo que el componente al que envuelve y, por lo tanto, tiene la misma interfaz. De esta manera, las llamadas de método entrantes pueden delegarse fácilmente al componente adjunto mientras lleva a cabo una funcionalidad. Las llamadas también pueden procesarse dentro del decorador.

## ¿Cuál es la finalidad del patrón de diseño Decorator?

Al igual que otros patrones GoF, como, por ejemplo, el patrón Strategy o el Builder, el patrón Decorator tiene como objetivo hacer que los componentes del software orientado a objetos sean más flexibles y fáciles de reutilizar. Con este fin, el enfoque permite a los desarrolladores añadir y eliminar las dependencias de un objeto de manera dinámica y, cuando sea necesario, durante el tiempo de ejecución. Esto convierte al nombrado patrón en una buena alternativa al uso de subclases, las cuales pueden complementar a una clase, pero no permiten hacer ajustes durante el tiempo de ejecución.

## El patrón Decorador como diagrama UML
El decorador, o las clases decorador (ConcreteDecorator), tiene la misma interfaz que el componente de software a decorar (ConcreteComponent) y es del mismo tipo. Estos son requisitos importantes a la hora de manejar las llamadas, que pueden remitirse con o sin cambios en función de si el decorador no se encarga de procesarlas. En este concepto, esta interfaz elemental, que es esencialmente una superclase abstracta, recibe el nombre de “componente”.

La interacción entre el componente básico y el decorador es fácilmente visible si se ilustra con un diagrama de clases UML. Hemos utilizado este lenguaje de modelado para la programación orientada a objetos en el diagrama UML a continuación para entender el patrón Decorator:

![](/images/patternDecoratorUML.png)
