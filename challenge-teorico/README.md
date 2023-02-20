##### Un caso en el que usarías procesos para resolver un problema y por qué?
se podría utilizar procesos para generar grandes cantidades de datos, tales como el análisis de grandes conjuntos de datos o la ejecución de cálculos complejos en paralelo. En este caso, se pueden dividir los datos en partes iguales y procesar cada parte en un proceso separado, lo que permitiría aprovechar los múltiples núcleos de CPU y acelerar el tiempo total de procesamiento.

##### Un caso en el que usarías threads para resolver un problema y por qué.

una aplicación que debe realizar varias descargas de datos (consumo de apis) desde diferentes servidores  y cada descarga puede llevar mucho tiempo, se podría crear un hilo para cada descarga y ejecutarlos en paralelo. De esta manera, se aprovecharía mejor los recursos del sistema y se reduciría el tiempo total necesario para completar todas las descargas.

##### Un caso en el que usarías corrutinas para resolver un problema y por qué.

se podría crear una corrutina para manejar cada solicitudes de http por lotes . Cada corrutina esperaría la llegada de los datos y, en lugar de bloquear la ejecución de la aplicación, se suspendería temporalmente mientras se espera la llegada de los datos. Mientras tanto, la CPU podría continuar procesando otras solicitudes.

Una vez que lleguen los datos, la corrutina se reanudaría y se procesaría la solicitud de manera normal. De esta manera, se pueden procesar múltiples solicitudes  simultáneamente sin bloquear la ejecución del programa y sin la necesidad de crear múltiples hilos.

##### Si tuvieras 1.000.000 de elementos y tuvieras que consultar para cada uno de
##### ellos información en una API HTTP. ¿Cómo lo harías? Explicar.

 utilizar un servicio de procesamiento en lotes que permita enviar varias solicitudes HTTP a la vez y recibir respuestas en bloque. Esto puede reducir el tiempo de espera para la obtención de resultados y aumentar la eficiencia del proceso.
en nodejs y express implentaria esta herramienta https://www.npmjs.com/package/batch-api-requests
