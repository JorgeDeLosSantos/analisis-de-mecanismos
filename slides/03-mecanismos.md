---
theme: default
title: III. Fundamentos y análisis de mecanismos
---

# Análisis de mecanismos

## III. Fundamentos y análisis de mecanismos

Universidad Politécnica de Guanajuato

Ingeniería Mecatrónica

<div class="absolute bottom-4 right-6 text-sm opacity-60">
Pedro Jorge De Los Santos
</div>

---

# Propósito de la unidad

Que el estudiante sea capaz de modelar y analizar cinemáticamente mecanismos planos articulados, particularmente mecanismos de cuatro barras y biela-manivela, mediante criterios estructurales, ecuaciones de cierre y herramientas de simulación, incorporando una introducción aplicada a la síntesis.


---
layout: section
---

# Fundamentos de mecanismos

---

# Mecanismos y máquinas

Un **mecanismo** es un conjunto de elementos rígidos o cuerpos conectados entre sí mediante juntas que permiten transmitir o transformar un movimiento de entrada en un movimiento de salida determinado, de acuerdo con las restricciones geométricas y cinemáticas de sus componentes.

Una **máquina** es un conjunto de mecanismos, elementos y componentes que trabajan de manera coordinada para transmitir o transformar energía y realizar un trabajo útil, aprovechando el movimiento de sus partes para cumplir una función específica.

<img src="https://victoryepes.blogs.upv.es/wp-content/uploads/2016/12/motor-combustion.gif" width="260px">

---

# Sobre el diseño cinemático

El **diseño cinemático** se centra en satisfacer los requerimientos de movimiento de un mecanismo, considerando la posición, la velocidad y la aceleración de sus componentes, sin analizar las fuerzas y los pares de torsión necesarios para producir dicho movimiento.

---

# Eslabones

Un eslabón es un componente rígido con geometría definida que está conectado a otros elementos mediante
pares o juntas. Los eslabones, de acuerdo al número de conexiones con otros elementos, se pueden clasificar en binarios,
ternarios, cuaternarios, etc.

<img src="/images/u3/eslabones.png" width="500px">

---

# Juntas o pares cinemáticos

Una junta (o par cinemático) es una conexión entre dos o más eslabones (en sus nodos), la cual permite algún movimiento, o movimiento potencial, entre los eslabones conectados. *

De acuerdo con la naturaleza del contacto entre las superficies de los eslabones involucrados, los pares cinemáticos se clasifican en pares inferiores y pares superiores. En los pares inferiores, el contacto se produce a través de una superficie, como ocurre entre una corredera y su guía. En cambio, en los pares superiores, el contacto idealizado se establece en un punto o a lo largo de una línea, como sucede entre los dientes de dos engranes en contacto.

<div class="grid grid-cols-3 gap-4 items-start">
    <img src="https://media.printables.com/media/prints/1503557/rich_content/1106b4d9-be7b-4cb5-95ce-c4d26056cb20/theojansen.gif" width="200px">
    <img src="https://upload.wikimedia.org/wikipedia/commons/5/58/Cam-disc-3_3D_animated.gif" width="100px">
    <img src="https://mechtics.com/wp-content/uploads/2018/04/mechanism-1.gif" width="300px">
</div>


<Footnote>
* Fuente: Norton, 2009
</Footnote>

---

# Pares inferiores

Existen seis pares inferiores:

<img src="/images/u3/lower_pairs.png" width="600px">

---

# Fuentes de información

- Norton, R. L. (2009). Diseño de maquinaria: Síntesis y análisis de máquinas y mecanismos (4.ª ed.). McGraw-Hill Interamericana. 
- Erdman, A. G., Sandor, G. N., & Kota, S. (2001). Mechanism design: Analysis and synthesis (4th ed.). Prentice Hall.

---

#     