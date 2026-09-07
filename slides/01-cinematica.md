---
theme: default
title: I. Cinemática de cuerpo rígido
---

# Análisis de mecanismos

## I. Cinemática de cuerpo rígido

Universidad Politécnica de Guanajuato

Ingeniería Mecatrónica

<div class="absolute bottom-4 right-6 text-sm opacity-60">
Pedro Jorge De Los Santos
</div>

---

# ¿Qué aprenderemos?

Al finalizar la unidad, el estudiante deberá ser capaz de identificar el tipo de movimiento de un cuerpo rígido, relacionar la velocidad y la aceleración de distintos puntos del cuerpo y plantear y resolver ecuaciones vectoriales para problemas de movimiento plano general.

<br>

<v-click>
<img src="https://grabcad.com/screenshots/pics/0b4b55e825b38bc59f5a137740018502/large.gif" width="400px" class="mx-auto"/>
</v-click>

---

# Cinemática vs cinética

| **Cinemática**   | **Cinética**      |
| --------------- | ------------------ |
| ¿Cómo se mueve? | ¿Por qué se mueve? |
| Posición        | Fuerzas            |
| Velocidad       | Momentos           |
| Aceleración     | Masa e inercia     |

---

# Repaso: cinemática de la partícula

La cinemática estudia el movimiento de una partícula sin analizar sus causas. 

La posición de una partícula se representa mediante:

$$
\vec{r}(t) = x(t) \ihat + y(t) \jhat + z(t) \khat
$$

La velocidad instantánea está dada por:

$$
\vec{v} = \frac{d\vec{r}}{dt}
$$

La aceleración se determina derivando con respecto al tiempo el vector de velocidad:

$$
\vec{a} = \frac{d\vec{v}}{dt}
$$

---

# Repaso: cinemática de la partícula

## Un ejemplo ...

La posición de una partícula está dada por el vector:

$$
\vec{r} = \left( 1.5t \right) \ihat + 
\left( 2.6t - 4.905t^2 \right) \jhat
$$

Determina su velocidad y aceleración.

<v-click>
Velocidad:

$$
\vec{v} = \frac{d\vec{r}}{dt} = 1.5 \ihat + \left( 2.6 - 9.81t \right) \jhat
$$

Aceleración:

$$
\vec{a} = \frac{d\vec{v}}{dt} = -9.81 \jhat
$$
</v-click>

---

# Repaso: movimiento circular



---

# Repaso: producto cruz

Sean $\vec{u}$ y $\vec{v}$ vectores dados por:

$$
\vec{u} = u_x \ihat + u_y \jhat + u_z \khat
$$
$$
\vec{v} = v_x \ihat + v_y \jhat + v_z \khat 
$$

El producto cruz $\vec{u} \times \vec{v}$ está dado por:

$$
\vec{u} \times \vec{v} = 
\begin{vmatrix}
\ihat & \jhat & \khat \\
u_x & u_y & u_z \\
v_x & v_y & v_z 
\end{vmatrix} = 
(u_y v_z - u_z v_y) \ihat - (u_x v_z - u_z v_x) \jhat + (u_x v_y - u_y v_x) \khat
$$

---
layout: center
class: text-center
---

# Introducción al movimiento de cuerpo rígido


---

# Idealización y modelado

<Question>
¿Qué tan detalladamente necesitamos describir un objeto para estudiar su movimiento?
</Question>

Piensa en los siguientes casos:

- Un automóvil que viaja de Celaya a Salamanca.
- Una barra o una rueda que gira.

---

# La partícula

Una partícula es un modelo idealizado en el que las dimensiones del cuerpo son despreciables para el problema que se estudia. Cuando modelamos un cuerpo como partícula, nos interesa principalmente la posición de un punto representativo.

<br> <br>

<Callout type="tip" title="Para recordar...">
Modelar como partícula no significa que el objeto sea pequeño; significa que su tamaño y orientación no son relevantes para el análisis.
</Callout>

---

# Cuerpo rígido

Un cuerpo rígido es un modelo idealizado formado por un conjunto de partículas cuya distancia relativa permanece constante durante el movimiento.

Si tomamos dos puntos cualesquiera $A$ y $B$:

$$
|| \vec{r}_A - \vec{r}_B || = constante
$$

<img src="/images/rigid_body.svg" class="mx-auto">

---

# Partícula y Cuerpo rígido

| Partícula                             | Cuerpo rígido                               |
| ------------------------------------- | ------------------------------------------- |
| Se representa mediante un punto       | Tiene extensión espacial                    |
| Interesa su posición                  | Interesan posición y orientación            |
| Tamaño y forma no afectan el análisis | Tamaño y geometría sí afectan el movimiento |
| Se considera únicamente traslación    | Puede trasladarse y rotar                   |

---

# Cuerpo rígido: posición y orientación

<div class="grid grid-cols-3 gap-4 items-center">
  <img src="/images/gdl_particle.svg">
  <img src="/images/gdl_rigid_body.svg">
  <img src="/images/gdl_rigid_body_space.svg">
</div>

---

# Movimiento de un cuerpo rígido

<Question>
Si la configuración de un cuerpo rígido depende de su posición y su orientación, ¿de qué maneras pueden cambiar estas cantidades?
</Question>

<v-click>

- Traslación
- Rotación
- Movimiento plano general

</v-click>

<v-click>
<img src="/gifs/slider-crank.gif" width="300px" class="mx-auto">
</v-click>

---

# Traslación

Un cuerpo rígido está en traslación cuando todos sus puntos se desplazan manteniendo constante la orientación del cuerpo.


<div class="grid grid-cols-2 gap-4 items-center">
<img src="/images/translation.png" class="mx-auto">
<img src="/images/curvilinear_translation.png" class="mx-auto">
</div>