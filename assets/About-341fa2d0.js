import{N as e}from"./NavBarTemplate-6834bf39.js";import{_ as a,o as s,a as i,h as d,F as o,B as c}from"./index-d5b7420c.js";const t=c('<div class="main-container" data-v-c28d509e><h1 data-v-c28d509e>Algoritmos de Gestión de Recursos del Computador</h1><div class="section" data-v-c28d509e><h2 data-v-c28d509e>1. Algoritmos de Planificación de Código</h2><div class="subsection" data-v-c28d509e><p class="subsection-title" data-v-c28d509e>a) FCFS (First-Come, First-Served):</p><p data-v-c28d509e> Es un algoritmo de planificación de procesos donde los procesos se ejecutan según el orden en el que llegaron a la cola de listos. El primero en llegar es el primero en ser atendido, lo que significa que no se tiene en cuenta el tiempo de ejecución o la prioridad de los procesos. </p></div><div class="subsection" data-v-c28d509e><p class="subsection-title" data-v-c28d509e>b) SJN (Shortest Job Next):</p><p data-v-c28d509e> También conocido como Shortest Job First (SJF), este algoritmo prioriza los procesos más cortos en la cola de listos. Busca ejecutar primero los procesos que requieren menos tiempo de CPU, lo que puede minimizar el tiempo de espera promedio. </p></div><div class="subsection" data-v-c28d509e><p class="subsection-title" data-v-c28d509e>c) SRT (Shortest Remaining Time):</p><p data-v-c28d509e> Es una variante del algoritmo SJN donde, si llega un proceso con un tiempo de ejecución más corto que el proceso en ejecución, se interrumpe la ejecución actual y se ejecuta el nuevo proceso. </p></div></div><div class="section" data-v-c28d509e><h2 data-v-c28d509e>2. Algoritmos de Planificación del Disco</h2><div class="subsection" data-v-c28d509e><p class="subsection-title" data-v-c28d509e>a) FCFS (First-Come, First-Served):</p><p data-v-c28d509e> En el contexto del disco, FCFS realiza el acceso a los bloques de datos en el orden en que fueron solicitados. Los datos se leen o escriben en el disco según el orden de llegada de las peticiones. </p></div><div class="subsection" data-v-c28d509e><p class="subsection-title" data-v-c28d509e>b) SCAN:</p><p data-v-c28d509e> Este algoritmo de planificación del disco se mueve a través de los sectores del disco en una dirección específica, atendiendo las solicitudes en esa dirección. Una vez que llega al extremo, invierte la dirección y continúa atendiendo las solicitudes en esa nueva dirección. </p></div><div class="subsection" data-v-c28d509e><p class="subsection-title" data-v-c28d509e>c) C-SCAN (Circular SCAN):</p><p data-v-c28d509e> Similar a SCAN, pero en lugar de volver al principio del disco una vez que alcanza el extremo, C-SCAN retorna al inicio solo después de completar todas las solicitudes en la dirección actual. Esto reduce la variabilidad en los tiempos de acceso. </p></div></div><div class="section" data-v-c28d509e><h2 data-v-c28d509e>3. Políticas de Reemplazo</h2><div class="subsection" data-v-c28d509e><p class="subsection-title" data-v-c28d509e>a) FIFO (First In, First Out):</p><p data-v-c28d509e> Es una política de reemplazo de páginas donde la primera página que entra en la memoria es la primera en ser eliminada si es necesario liberar espacio. No considera el uso actual de la página. </p></div><div class="subsection" data-v-c28d509e><p class="subsection-title" data-v-c28d509e>b) LRU (Least Recently Used):</p><p data-v-c28d509e> Esta política elimina la página que no se ha utilizado durante el período más prolongado. Mantiene un registro de cuándo se accedió por última vez a cada página y descarta la que no se ha utilizado recientemente. </p></div><div class="subsection" data-v-c28d509e><p class="subsection-title" data-v-c28d509e>c) Segunda Oportunidad:</p><p data-v-c28d509e> Es una variante de FIFO que otorga una &quot;segunda oportunidad&quot; a las páginas antes de eliminarlas. Funciona manteniendo un bit de referencia para cada página y al eliminar, busca páginas con bit de referencia no activado. </p></div></div><p class="end-text" data-v-c28d509e>Estos conceptos son fundamentales en la gestión de recursos del computador y ayudan a optimizar el uso de la CPU, el disco y la memoria para mejorar el rendimiento del sistema.</p></div>',1),n={__name:"About",setup(l){return(r,p)=>(s(),i(o,null,[d(e,{class:"block"}),t],64))}},m=a(n,[["__scopeId","data-v-c28d509e"]]);export{m as default};
