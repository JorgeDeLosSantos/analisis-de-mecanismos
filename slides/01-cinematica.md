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
\omega = \frac{d\theta}{dt}
$$

**Aceleración angular:** es una medida de qué tan rápido cambia la velocidad angular con respecto al tiempo.

$$
\alpha = \frac{d\omega}{dt}
$$

::right::

<img src="/images/u1/pure_rotation.svg" class="mx-auto">

<v-click>

<Callout type="note" title="Unidades de medición">

- La velocidad angular $\omega$ se mide en $rad/s$. 
- Es común que la velocidad angular se conozca en $\text{rpm}$, para convertir a $rad/s$ debes multiplicar por un factor de $\frac{2\pi}{60}$.
- La aceleración angular se mide en $rad/s^2$
</Callout>

</v-click>

---
layout: two-cols
---

# Rotación

Consideremos un punto $A$ que pertenece a un cuerpo rígido en rotación. La distancia $ds$ que recorre el punto $A$ está dada por:

$$
ds = r_A d \theta 
$$

Si consideramos que el desplazamiento ocurre en un tiempo $dt$:

$$
\frac{ds}{dt} = r_A \frac{d\theta}{dt}
$$

Entonces:

$$
\color{blue}{v_A = r_A \omega}
$$



::right::

<img src="/images/u1/pure_rotation_sys.svg" class="mx-auto" width="350px">

---
layout: two-cols
---

# Rotación

En la figura se observa que el punto $A$ experimenta un desplazamiento infinitesimal $d\vec{r}_A$. Para un desplazamiento angular infinitesimal ($d\theta \to 0$), $d\vec{r}_A$ es tangente a la trayectoria circular, mientras que el vector $\vec{r}_A$ es radial, por lo tanto:

$$
\vec{r}_A \perp d\vec{r}_A
$$

Si dividimos $d\vec{r}_A$ por el tiempo $dt$ se obtiene:

$$
\vec{v}_A = \frac{d\vec{r}_A}{dt}
$$

Puesto que $dt$ es un escalar, lo anterior implica que $\vec{v}_A$ es un vector que apunta en la misma dirección que $d\vec{r}_A$. 

::right::

<img src="/images/u1/rotation_dr.svg" class="mx-auto" width="300px">

---
layout: two-cols
---

# Rotación: velocidad 

La velocidad de un punto $A$ cualquiera en un cuerpo rígido en rotación se puede determinar vectorialmente utilizando el producto cruz:

$$
\color{blue}{\vec{v}_A = \vec{\omega} \times \vec{r}_A}
$$

Donde $\vec{\omega}$ es el vector de velocidad angular y $\vec{r}_A$ es un vector de posición que va desde un punto del eje de rotación hasta el punto $A$. 

::right::

<img src="/images/u1/velocity_rotation.png" class="mx-auto" width="300px">


---
layout: two-cols-example
---

# Rotación: ejemplo

La barra mostrada en la figura rota con velocidad angular constante de $60 \text{ rpm}$, en sentido antihorario. Calcula $\vec{v}_A$ para cuando:

a) $\theta=0°$
b) $\theta=30°$
c) $\theta=90°$

<img src="/images/u1/rotation_bar.svg" class="mx-auto" width="250px">

Considera que $\overline{OA}=150 \text{ mm}$.

::right::
<div class="text-sm">

<v-click>

En todos los casos $\vec{\omega} = \left( 2\pi \, \khat \right) \text{ rad/s}$.
</v-click>

<v-click>

Para $\theta=0°$:

$$
\vec{v}_A = \vec{\omega} \times \vec{r}_A = 
\begin{vmatrix} 
\ihat &  \jhat & \khat \\
0 & 0 & 2\pi \\
150 & 0 & 0 \\
\end{vmatrix} = 
\left( 942.5 \jhat \right) \text{ mm/s}
$$
</v-click>

<v-click>

Para $\theta=30°$:

$$
\vec{v}_A = \vec{\omega} \times \vec{r}_A = 
\begin{vmatrix} 
\ihat &  \jhat & \khat \\
0 & 0 & 2\pi \\
129.9 & 75 & 0 \\
\end{vmatrix}
$$
$$
\vec{v}_A = \left( -471.2\ihat + 816.2 \jhat \right) \text{ mm/s}
$$
</v-click>

<v-click>

Para $\theta=90°$:

$$
\vec{v}_A = \vec{\omega} \times \vec{r}_A = 
\begin{vmatrix} 
\ihat &  \jhat & \khat \\
0 & 0 & 2\pi \\
0 & 150 & 0 \\
\end{vmatrix} = 
\left( -942.5 \ihat \right) \text{ mm/s}
$$
</v-click>

</div>


---
layout: two-cols-example
transition: slide-left
---

# Rotación: ejemplo

La placa plana rectangular mostrada en la figura está rotando a velocidad angular constante de $10 \text{ rad/s}$ en sentido antihorario. Calcula $\vec{v}_A$ y $\vec{v}_C$. Considera que $\overline{OC} = 100 \text{mm}$ y $\overline{OA} = 200 \text{ mm}$.

<img src="/images/u1/rectangular_plate.svg" class="mx-auto">

::right:: 

<v-click>

Calculando $\vec{v}_C$: 

$$
\vec{v}_C = \vec{\omega} \times \vec{r}_C = 
\begin{vmatrix}
\ihat & \jhat & \khat \\
0 & 0 & 10 \\
-50 & 86.6 & 0 
\end{vmatrix} 
$$

$$
\vec{v}_C = \left( -866\ihat - 500 \jhat \right) \text{ mm/s}
$$

</v-click>

<v-click>

Calculando $\vec{v}_A$:

$$
\vec{v}_A = \vec{\omega} \times \vec{r}_A = 
\begin{vmatrix}
\ihat & \jhat & \khat \\
0 & 0 & 10 \\
173.2 & 100 & 0 
\end{vmatrix} 
$$

$$
\vec{v}_A = \left( -1000\ihat + 1732 \jhat \right) \text{ mm/s}
$$

</v-click>

---
layout: two-cols
---

# Rotación: aceleración

La aceleración del punto $A$ se puede determinar derivando $\vec{v}_A$ con respecto al tiempo:

$$
\vec{a}_A = \frac{d\vec{v}_A}{dt} = \frac{d}{dt}\left( \vec{\omega} \times \vec{r}_A \right)
$$
$$
= \frac{d\vec{\omega}}{dt} \times \vec{r}_A + \vec{\omega} \times \frac{d\vec{r}_A}{dt} 
$$

$$
\vec{a}_A = \vec{\alpha} \times \vec{r}_A + \vec{\omega} \times \vec{v}_A
$$

$$
\vec{a}_A = \vec{\alpha} \times \vec{r}_A + \vec{\omega} \times \left( \vec{\omega} \times \vec{r}_A \right)
$$

Para una rotación en el plano se cumple que $\vec{r}_A$ es perpendicular a $\vec{\omega}$ y en consecuencia:

<EquationBox>

$$
\color{blue}{\vec{a}_A = \vec{\alpha} \times \vec{r}_A - \omega^2 \vec{r}_A}
$$

</EquationBox>

::right::

<img src="/images/u1/acceleration_rotation.png" class="mx-auto" width="300px">

<!-- This is a **note** -->

---
layout: two-cols-example
transition: slide-left
---

# Ejemplo: aceleración

La placa plana rectangular mostrada en la figura está rotando a velocidad angular constante de $2 \text{ rad/s}$ en sentido horario. Calcula $\vec{a}_B$. Considera que $\overline{OC} = 100 \text{mm}$ y $\overline{OA} = 200 \text{ mm}$.

<img src="/images/u1/rectangular_plate.svg" class="mx-auto">

::right:: 

<v-click>

La aceleración de $B$ está dada por:

$$
\vec{a}_B = \vec{\alpha} \times \vec{r}_B - \omega^2 \vec{r}_B
$$

Como $\omega$ es constante, $\alpha=0$.

$$
\vec{a}_B = - (2)^2 \left( 123.2 \ihat + 186.6 \right) 
$$

$$
\color{green}{\vec{a}_B = \left( -492.8\ihat - 746.4 \jhat \right) \text{ mm/s}^2}
$$

</v-click>

---
layout: two-cols
---

# Movimiento plano general

El movimiento plano general de un cuerpo rígido se puede entender como un movimiento de traslación seguida por una rotación alrededor de un *punto base* del cuerpo.

Para el diagrama de la figura se observa que los puntos $A$ y $B$ de la barra se desplazan una cantidad $d\vec{r}_A$, seguida de una rotación $d\theta$ alrededor del punto $A$, el punto $B$ experimenta un desplazamiento relativo $d\vec{r}_{B/A}$. Es sencillo ver que:

$$
d\vec{r}_B = d\vec{r}_A + d\vec{r}_{B/A}
$$


::right::

<img src="/images/u1/general_plane_analysis_01.png" class="mx-auto" width="260px">

<img src="/images/u1/general_plane_analysis_02.png" class="mx-auto" width="320px">

---
layout: default
---

# MPG: velocidad

Para determinar la relación de velocidad de los puntos $A$ y $B$ basta con dividir la ecuación del desplazamiento por $dt$:

$$
\frac{d\vec{r}_B}{dt} = \frac{d\vec{r}_A}{dt} + \frac{d\vec{r}_{B/A}}{dt}
$$

De lo cual resulta:

$$
\color{blue}{\vec{v}_B = \vec{v}_A + \vec{v}_{B/A}}
$$

El término $\vec{v}_{B/A}$ corresponde a un movimiento de rotación alrededor del punto $A$, entonces:

$$
\vec{v}_{B/A} = \vec{\omega} \times \vec{r}_{B/A}
$$

La ecuación de velocidad para un cuerpo rígido en movimiento plano general podemos escribirla como:

$$
\color{blue}{\vec{v}_B = \vec{v}_A + \vec{\omega} \times \vec{r}_{B/A}}
$$

---
layout: default
---

# MPG: velocidad

$$
\color{blue}{\vec{v}_B = \vec{v}_A + \vec{v}_{B/A}}
$$

<img src="/images/u1/velocity_general_plane.png" class="mx-auto">

---
layout: default
---

# MPG: velocidad

La ecuación de velocidad puede utilizarse de manera práctica para estudiar el movimiento plano general de un cuerpo rígido que está articulado mediante un pasador o en contacto con otros cuerpos en movimiento. Al aplicar esta ecuación, los puntos $A$ y $B$ generalmente deben seleccionarse como puntos del cuerpo que estén articulados a otros cuerpos, o como puntos en contacto con cuerpos adyacentes que tengan un movimiento conocido.


<div class="flex items-center justify-center gap-8">
  <img src="/images/u1/velocity_general_plane_constraints_01.png" width="280px">
  <img src="/images/u1/velocity_general_plane_constraints_02.png" width="250px">
</div>