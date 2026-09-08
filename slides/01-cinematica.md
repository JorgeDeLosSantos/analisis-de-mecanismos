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

# Repaso: componentes normal y tangencial de la aceleración

La aceleración puede separarse en componentes tangencial y normal a la trayectoria:

$$
\vec{a} = a_t \vec{\hat{e}}_t + a_n \vec{\hat{e}}_n
$$

La aceleración tangencial indica cómo cambia la rapidez:

$$
a_t = \frac{dv}{dt}
$$

La aceleración normal indica cómo cambia la dirección de la velocidad:

$$
a_n = \frac{v^2}{\rho}
$$

Donde $\rho$ es el radio de curvatura.


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
layout: section
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

<img src="/images/u1/rigid_body.svg" class="mx-auto">

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
  <img src="/images/u1/gdl_particle.svg">
  <img src="/images/u1/gdl_rigid_body.svg">
  <img src="/images/u1/gdl_rigid_body_space.svg">
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
<img src="/images/u1/translation.png" class="mx-auto">
<img src="/images/u1/curvilinear_translation.png" class="mx-auto">
</div>

---

# Rotación

Un cuerpo rígido realiza rotación alrededor de un eje fijo cuando todos sus puntos describen trayectorias circulares alrededor de ese eje.

<img src="/images/u1/rotation.png" class="mx-auto">


---

# Movimiento plano general

Un cuerpo rígido tiene movimiento plano general cuando simultáneamente cambia su posición y su orientación.

<img src="/images/u1/general_plane.png" class="mx-auto">

---
layout: section
---

# Análisis cinemático

---
layout: two-cols
---

# Traslación

Un sólido en traslación pura se mueve de una posición a otra sin cambiar su orientación. Si tomamos dos puntos cualesquiera $A$ y $B$ del cuerpo rígido:

$$
\vec{r}_B = \vec{r}_A + \vec{r}_{B/A}
$$

Como el cuerpo rígido no cambia de orientación, en traslación:

$$
\vec{r}_{B/A} = constante
$$

Derivando con respecto al tiempo:

$$
\vec{v}_B = \vec{v}_A
$$

y nuevamente:

$$
\vec{a}_B = \vec{a}_A
$$

::right::

<img src="/images/u1/translation_kinematic.svg" class="mx-auto">

<v-click>
<Callout type="note" title="Para recordar...">
En un cuerpo rígido que experimenta traslación, todos los puntos del cuerpo tienen la misma velocidad y la misma aceleración en cada instante.
</Callout>
</v-click>


---
layout: two-cols
---

# Rotación

**Posición angular:** el ángulo $\theta$ que forma la posición del objeto con respecto a una dirección de referencia.

**Desplazamiento angular:** un cambio en la posición angular $\Delta \theta = \theta_f - \theta_i$

**Velocidad angular:** indica qué tan rápido cambia la posición angular con respecto al tiempo. 

$$
\omega_{prom} = \frac{\Delta\theta}{\Delta t} \,  \qquad\qquad
\omega = \frac{d\theta}{dt}
$$

**Aceleración angular:** es una medida de qué tan rápido cambia la velocidad angular con respecto al tiempo.

$$
\alpha_{prom} = \frac{\Delta\omega}{\Delta t} \,  \qquad\qquad
\alpha = \frac{d\omega}{dt}
$$

::right::

<img src="/images/u1/pure_rotation.svg" class="mx-auto">

---
layout: two-cols
---

# Rotación

La distancia $\Delta s$ que recorre el punto $A$ está dada por:

$$
\Delta s = r_A \Delta \theta 
$$

Considerando que el desplazamiento ocurre en un tiempo $\Delta t$:

$$
\frac{\Delta s}{\Delta t} = r_A \frac{\Delta \theta}{\Delta t}
$$

Si analizamos para $\Delta t \to 0$, entonces:

$$
\frac{ds}{dt} = r_A \frac{d\theta}{dt}
$$

Es decir, la velocidad instantánea de $A$ es:

$$
v_A = r_A \omega
$$



::right::

<img src="/images/u1/pure_rotation_sys.svg" class="mx-auto">


---
layout: two-cols
---

# Rotación

La dirección del vector de velocidad $\vec{v}_A$ es la misma que el vector de desplazamiento. Esta dirección es perpendicular al vector $\vec{r}_A$:

<v-click>
<Callout type="note" title="Para recordar...">

</Callout>
</v-click>


::right::

<img src="/images/u1/pure_rotation_sys.svg" class="mx-auto">
