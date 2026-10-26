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
layout: two-cols-example-wide-right
---

Diagrama de cuerpo libre del eslabón 1:

<img src="/images/u2/slider_crank_dcl_link_01.png" width="160px">

::right::

Ecuaciones de Newton-Euler:

$$ \sum F_x = m_1 a_{G_{1x}} $$
$$ A_x + O_x =  m_1 a_{G_{1x}} \tag{1} $$
$$ \sum F_y = m_1 a_{G_{1y}} $$
$$ O_y + A_y - m_1 g = m_1 a_{G_{1y}} \tag{2} $$
$$ \sum M_O = I_O \alpha_1 $$
$$ - A_x (0.3) + \tau = I_O \alpha_1 \tag{3} $$

---
layout: two-cols-example-wide-right
---

Diagrama de cuerpo libre del eslabón 2:

<img src="/images/u2/slider_crank_dcl_link_02.png" width="390px">

::right::

Ecuaciones de Newton-Euler:

$$ \sum F_x = m_2 a_{G_{2x}} $$
$$ - A_x + B_x =  m_2 a_{G_{2x}} \tag{4} $$
$$ \sum F_y = m_2 a_{G_{2y}} $$
$$ -A_y + B_y - m_2 g = m_2 a_{G_{2y}} \tag{5} $$
$$ \sum M_{G_2} = I_{G_2} \alpha_2 $$
<div class="text-sm">

$$ A_x(0.15) + A_y(0.2) + B_x(0.15) + B_y(0.2) = I_{G_2} \alpha_2 \tag{6} $$
</div>


---
layout: two-cols-example-wide-right
---

Diagrama de cuerpo libre del eslabón 3:

<img src="/images/u2/slider_crank_dcl_link_03.png" width="180px">

::right::

Ecuaciones de Newton-Euler:

$$ \sum F_x = m_3 a_{G_{3x}} $$
$$ F_N - B_x =  m_3 a_{G_{3x}} \tag{7} $$
$$ \sum F_y = m_3 a_{G_{3y}} $$
$$ - B_y - m_3 g = m_3 a_{G_{3y}} \tag{8} $$

---
layout: two-cols-example
---

# Ejemplo

En el instante mostrado, la barra $OA$ gira con una velocidad angular $\omega_2=10\,\text{rad/s}$ y una aceleración angular $\alpha_2=5\,\text{rad/s}^2$, ambas en sentido antihorario. Determine las componentes de las reacciones en las uniones de pasador, así como el torque $\tau$ que debe aplicarse a la barra $OA$ para producir dicho movimiento.

Los eslabones son barras delgadas y homogéneas, cuyos centros de masa se encuentran en sus respectivos puntos medios. Considere que las articulaciones son ideales, sin fricción, y que la aceleración de la gravedad está dirigida verticalmente hacia abajo. La tabla proporciona las masas, aceleraciones angulares y aceleraciones de los centros de masa de los eslabones en el instante mostrado.

::right::

<img src="/images/u2/four_bar.svg" width="320px">

<div class="text-sm">

| Eslabón | Masa (kg) | $\alpha$ (rad/s$^2$) | $\vec{a}_{G}$ (m/s$^2$)|
|:--------:|:------:|:--------:|:-------:|
| $2$ | $0.672$ | $5$  | $-0.5\ihat - 10\jhat$ |
| $3$ | $1.608$ | $30$ | $-5.5\ihat-14\jhat$ |
| $4$ | $1.608$ | $20$ | $-5\ihat - 4\jhat$ |

</div>

---
layout: two-cols-example-wide-right
---

Diagrama de cuerpo libre del eslabón 2:

<img src="/images/u2/four_bar_dcl_link_02.png" width="200px">

::right::

Ecuaciones de Newton-Euler:

$$ \sum F_x = m_2 a_{G_{2x}} $$
$$ O_x + A_x = m_2 a_{G_{2x}} \tag{1} $$
$$
\sum F_y = m_2 a_{G_{2y}} 
$$
$$
O_y + A_y - m_2 g = m_2 a_{G_{2y}} \tag{2}
$$
$$
\sum M_{G_2} = I_{G_2} \alpha_2  
$$
$$
O_x(0.1) - A_x(0.1) + \tau = I_{G_2} \alpha_2  \tag{3}
$$

Momento de inercia del eslabón 2:

$$ I_{G_2} = \frac{1}{12}(0.672)(0.2^2) = 2.24\times 10^{-3} \text{ kg}\cdot\text{m}^2 $$

---
layout: two-cols-example-wide-right
---

Diagrama de cuerpo libre del eslabón 3:

<img src="/images/u2/four_bar_dcl_link_03.png" width="350px">

::right::

Ecuaciones de Newton-Euler:

$$ \sum F_x = m_3 a_{G_{3x}} $$
$$ -A_x + B_x = m_3 a_{G_{3x}} \tag{4} $$
$$ \sum F_y = m_3 a_{G_{3y}} $$
$$ -A_y + B_y - m_3 g = m_3 a_{G_{3y}}  \tag{5} $$
$$ \sum M_{G_3} = I_{G_3} \alpha_3 $$ 
$$ \begin{aligned} -A_x(0.15) + A_y(0.2) - \\ B_x(0.15) + B_y(0.2) = I_{G_3} \alpha_3 \tag{6} \end{aligned} $$

Momento de inercia del eslabón 3:

$$ I_{G_3} = \frac{1}{12}(1.608)(0.5^2) = 33.5\times 10^{-3} \text{ kg}\cdot\text{m}^2 $$

---
layout: two-cols-example-wide-right
---

Diagrama de cuerpo libre del eslabón 4:

<img src="/images/u2/four_bar_dcl_link_04.png" width="180px">

::right::

Ecuaciones de Newton-Euler:

$$ \sum F_x = m_4 a_{G_{4x}} $$
$$ C_x - B_x = m_4 a_{G_{4x}}   \tag{7} $$
$$ \sum F_y = m_4 a_{G_{4y}} $$
$$ C_y - B_y - m_4 g = m_4 a_{G_{4y}} \tag{8} $$
$$ \sum M_{G_4} = I_{G_4} \alpha_4 $$ 
$$ C_x(0.25) + B_x(0.25) = I_{G_4} \alpha_4  \tag{9} $$

Momento de inercia del eslabón 4:

$$ I_{G_4} = \frac{1}{12}(1.608)(0.5^2) = 33.5\times 10^{-3} \text{ kg}\cdot\text{m}^2 $$

---
layout: two-cols-example
---

Sustituyendo valores y reescribiendo las ecuaciones:

<div class="text-sm">

$$ O_x + A_x = -0.336 \tag{1} $$
$$ O_y + A_y = -0.1277 \tag{2} $$
$$ 0.1 O_x - 0.1 A_x + \tau = 0.0112 \tag{3} $$
$$ - A_x + B_x = -8.844 \tag{4} $$
$$ -A_y + B_y = -6.738 \tag{5} $$
$$ -0.15 A_x + 0.2 A_y - 0.15 B_x + 0.2 B_y = 1.005 \tag{6} $$
$$ C_x - B_x = -8.04 \tag{7} $$
$$ C_y - B_y = 9.342 \tag{8} $$
$$ C_x + B_x = 2.68 \tag{9} $$
</div>

::right::

<div class="text-sm">

De (7) y (9):

$$
-8.04 + B_x = 2.68 - B_x \rightarrow \quad \boxed{ B_x = 5.36 \text{ N} }
$$
$$
\boxed{ C_x = -2.68 \text{ N} }
$$

De (4):

$$
\boxed{ A_x = 14.204 \text{ N} }
$$

Resolviendo (5) y (6) para $A_y$ y $B_y$:

$$ B_y + 6.738 = 19.698 - B_y  \rightarrow \quad \boxed{ B_y = 6.48 \text{ N} } $$
$$ \boxed{ A_y = 13.218 \text{ N} } $$

De (1), (2) y (8):

$$ 
\boxed{O_x = -14.54 \text{ N} } \quad \boxed{O_y = -13.346 \text{ N}} \quad \boxed{C_y = 15.822 \text{ N}}
$$

De (3):

$$ 
\boxed{ \tau = 2.8856 \text{ N}\cdot\text{m} }
$$

</div>
---

# Fuentes de información

- Hibbeler, R. C. (2015). Engineering mechanics: Dynamics (14th ed.). Pearson Education.
- Meriam, J. L., Kraige, L. G., y Bolton, J. N. (2015). Engineering mechanics: Dynamics (8.ª ed.). Wiley.
- Beer, F. P., Johnston, E. R. & Cornwell, P. J.(2010). Mecánica vectorial para ingenieros: Dinámica (9.ª ed.). McGraw-Hill.


---

#     