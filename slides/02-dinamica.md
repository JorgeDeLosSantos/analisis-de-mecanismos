---
theme: default
title: II. Cinética de cuerpo rígido
---

# Análisis de mecanismos

## II. Cinética de cuerpo rígido

Universidad Politécnica de Guanajuato

Ingeniería Mecatrónica

<div class="absolute bottom-4 right-6 text-sm opacity-60">
Pedro Jorge De Los Santos
</div>


---

# ¿Cuál es el propósito?

Que el estudiante relacione el movimiento de un cuerpo rígido con las fuerzas y momentos que lo producen y sea capaz de plantear y resolver modelos dinámicos de sistemas mecánicos planos mediante Newton–Euler y trabajo–energía.

---

# -.-

---
layout: section
---

# Un recordatorio de cinética de la partícula

---

# Recordando: cinemática vs cinética

- **Cinemática**: describe el movimiento sin considerar sus causas.
- **Cinética**: relaciona el movimiento con las fuerzas que lo producen.

---

# Segunda ley de Newton

La aceleración que experimenta una partícula está determinada por la fuerza resultante que actúa sobre ella: 

$$
\sum \vec{F} = m \vec{a}
$$

En coordenadas cartesianas:

$$ \sum F_x = m a_x $$
$$ \sum F_y = m a_y $$
$$ \sum F_z = m a_z $$

En coordenadas normal y tangencial:

$$
\sum F_t = m a_t
$$

$$
\sum F_n = m a_n
$$

---
layout: two-cols-example
---

**Ejemplo.** Un bloque de $2\,\text{kg}$, mostrado en la figura, se encuentra sobre una superficie horizontal. Sobre el bloque actúa una fuerza horizontal de magnitud $F=5\,\text{N}$. Si el coeficiente de fricción cinética entre el bloque y la superficie es $\mu_k=0.3$, determina la distancia que recorre el bloque durante los primeros $2\,\text{s}$, suponiendo que parte del reposo.



<img src="/images/newton_exercise.svg" width="350px" class="mx-auto">

---
layout: section
---

# Propiedades de inercia

---

# Centro de masa

El centro de masa es el punto cuya posición representa el promedio ponderado de la distribución de masa de un cuerpo o sistema.

Para un sistema de partículas el CDM se determina mediante:

$$
\bar{x} = \frac{\sum x_i m_i }{\sum m_i} \quad;\qquad
\bar{y} = \frac{\sum y_i m_i }{\sum m_i} \quad;\qquad
\bar{z} = \frac{\sum z_i m_i }{\sum m_i}
$$

---

# Centro de masa de un cuerpo rígido

Para un cuerpo rígido el CDM está dado por:

$$
\bar{x} = \frac{\displaystyle\int_m x \, dm}{\displaystyle\int_m dm} \quad;\qquad
\bar{y} = \frac{\displaystyle\int_m y \, dm}{\displaystyle\int_m dm} \quad;\qquad
\bar{z} = \frac{\displaystyle\int_m z \, dm}{\displaystyle\int_m dm}
$$

La forma de $dm$ dependerá del tipo de cuerpo: 

- Para un sólido: $dm = \rho \, dV$
- Para una placa plana: $dm = \rho_A \, dA$
- Para un varilla o barra delgada: $dm = \rho_L \, dL$

---
layout: two-cols
---

# Centro de masa de cuerpos compuestos

Un cuerpo compuesto más complejo puede dividirse en varios cuerpos simples, de los cuales sea sencillo determinar la masa y ubicación del centro de masa. El CDM del cuerpo compuesto se determina mediante:


$$ \bar{x} = \frac{\sum \tilde{x_i} m_i }{\sum m_i} $$
$$ \bar{y} = \frac{\sum \tilde{y_i} m_i }{\sum m_i} $$
$$ \bar{z} = \frac{\sum \tilde{z_i} m_i }{\sum m_i} $$

::right::

<img src="/images/u2/beer_B.38.png" width="400px">

---
layout: two-cols-example
---

# Ejemplo

Calcula el CDM del cuerpo compuesto mostrado en la figura. El alambre tiene una densidad $\rho_L = 0.5 \text{ lbm/ft}$.

<img src="/images/u2/beer_B.38.png" width="400px">

---

# Momento de inercia de masa

El momento de inercia es una medida de la inercia rotacional de un cuerpo. El momento de inercia refleja la distribución de masa de un objeto o de un sistema de partículas en rotación, respecto a un eje de giro.*

Para un sola partícula de masa $m$, ubicada a una distancia perpendicular $r$ del eje, el momento de inercia $I$ está dado por:

$$
I = mr^2
$$

Para un cuerpo formado por varias partículas:

$$
I=\sum_i m_i r_i^2
$$

donde $r_i$ es la distancia perpendicular de cada partícula al eje considerado.

<Footnote>
[*] https://es.wikipedia.org/wiki/Momento_de_inercia
</Footnote>

---

# Momento de inercia de masa

En el caso de un cuerpo con una distribución continua de masa, podemos imaginarlo como un conjunto de partículas infinitesimalmente pequeñas. El momento de inercia se obtiene entonces mediante la integral:

$$
I = \int_m r^2 dm
$$

donde:

- $dm$: elemento diferencial de masa.
- $r$: distancia perpendicular desde el eje de rotación hasta el elemento de masa $dm$.
- $I$: momento de inercia de masa respecto al eje considerado.

---

# Momento de inercia de masa

<img src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Rolling_Racers_-_Moment_of_inertia.gif">


---

# Momento de inercia de masa

Los momentos de inercia de masa con respecto a los ejes de un sistema cartesiano se pueden expresar como:

$$
I_{x} = \int_m (y^2 + z^2) \, dm \, ; \quad
$$
$$
I_{y} = \int_m (x^2 + z^2) \, dm \, ; \quad
$$
$$
I_{z} = \int_m (x^2 + y^2) \, dm 
$$

---

# Teorema de ejes paralelos

Si se conoce el momento de inercia de un cuerpo respecto a un eje que pasa por su centro de masa, puede obtenerse respecto a cualquier eje paralelo mediante:

$$
I = \bar{I} + m d^2 
$$

- $\bar{I}$ → momento de inercia respecto al eje centroidal
- $I$ → momento de inercia respecto al nuevo eje
- $d$  → distancia perpendicular entre los ejes

---

# Momento de inercia de cuerpos compuestos



---
layout: section
---

# Cinética de cuerpo rígido

---

# Ecuaciones de Newton-Euler


---
layout: two-cols-example
---

# Ejemplo

En el instante mostrado, la barra $OA$ rota con una velocidad angular $\omega_1=2 \text{ rad/s}$ y una aceleración angular $\alpha_1=3 \text{ rad/s}^2$, ambas en sentido antihorario. Determine las componentes de la reacción en $O$ y el torque $\tau$ que debe aplicarse a la barra $OA$ para producir dicho movimiento.

Los centros de masa de las barras $OA$ y $AB$ se encuentran en sus respectivos puntos medios, mientras que el del bloque deslizante coincide con $B$. Considere que las articulaciones y la guía son ideales, sin fricción, y que la gravedad actúa verticalmente hacia abajo. Los momentos de inercia proporcionados están referidos a los ejes perpendiculares al plano del movimiento que pasan por los respectivos centros de masa.

::right::

<img src="/images/u2/slider_crank.svg" width="300px">

<div class="text-sm">

|   |  |  |
|--------|------|--------|
| $m_1 = 0.240 \text{ kg}$  | $I_{G_1} = 1.897\times 10^{-3} \text{ kg}\cdot\text{m}^2$ |
| $m_2 = 0.396 \text{ kg}$  | $I_{G_2} = 8.512\times 10^{-3} \text{ kg}\cdot\text{m}^2$ | 
| $m_3 = 0.110 \text{ kg}$  | $I_{G_3} = 9.926\times 10^{-6} \text{ kg}\cdot\text{m}^2$ |

</div>

---

# Fuentes de información

- Hibbeler, R. C. (2015). Engineering mechanics: Dynamics (14th ed.). Pearson Education.
- Meriam, J. L., Kraige, L. G., y Bolton, J. N. (2015). Engineering mechanics: Dynamics (8.ª ed.). Wiley.
- Beer, F. P., Johnston, E. R. & Cornwell, P. J.(2010). Mecánica vectorial para ingenieros: Dinámica (9.ª ed.). McGraw-Hill.


---

#     