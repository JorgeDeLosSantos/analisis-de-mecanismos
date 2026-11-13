# III. Fundamentos y análisis de mecanismos


## Análisis cinemático de mecanismos

### Análisis de posición

El análisis de posición de un mecanismo plano se puede realizar estableciendo un lazo vectorial cerrado, donde cada vector representa la posición relativa entre dos puntos del mecanismo. Para un lazo de $n$ vectores, la ecuación vectorial de posición del mecanismo está dada por: 

$$
\sum_{i=1}^n \vec{r}_i = \vec{0}
$$ (eq-position-loop)

Cada uno de los vectores $\vec{r}_i$ se puede escribir en la forma compleja exponencial:

$$
\vec{r}_i = r_i e^{j\theta_i}
$$

La ecuación {eq}`eq-position-loop` se puede separar en su componentes reales e imaginarias, y resultan dos ecuaciones escalares:

$$
\text{Re} \rightarrow \quad r_1 \cos\theta_1 + r_2 \cos\theta_2 + \cdots + r_n \cos\theta_n  = 0
$$

$$
\text{Im} \rightarrow \quad r_1 \sin\theta_1 + r_2 \sin\theta_2 + \cdots + r_n \sin\theta_n  = 0
$$

Estas ecuaciones se pueden resolver para, como mucho, dos valores desconocidos de posición.

#### Un ejemplo: mecanismo de manivela-biela-corredera

En lo subsiguiente se describe el análisis de posición de un mecanismo de manivela biela corredera, asumiendo conocidas las dimensiones de la manivela $OA$ y de la biela $AB$, así como el ángulo $\phi$ formado por la manivela con respecto a la horizontal.
 
<img src="/figures/u3/slider-crank.svg">

Un lazo vectorial que representa el mecanismo se puede observar en la siguiente figura. El vector $\vec{r}_{2}$ representa la posición de $A$ con respecto de $O$, $\vec{r}_3$ la posición de $B$ con respecto de $A$ y $\vec{r}_1$ la posición de $B$ con respecto de $O$.

<img src="/figures/u3/slider-crank-loop.svg">

Si recorremos el lazo en sentido horario obtenemos la ecuación vectorial:

$$
\vec{r}_2 + \vec{r}_3 - \vec{r}_1 = \vec{0}
$$

Esta ecuación puede escribirse en la forma compleja exponencial como:

$$
r_2 e^{j\theta_2} + r_3 e^{j\theta_3} - r_1 e^{j\theta_1} = 0
$$

Separando en componentes reales e imaginarias:

$$
\text{Re} \rightarrow \quad r_2 \cos\theta_2 + r_3 \cos\theta_3 - r_1 \cos\theta_1 = 0
$$
$$
\text{Im} \rightarrow \quad r_2 \sin\theta_2 + r_3 \sin\theta_3 - r_1 \sin\theta_1 = 0
$$

Considerando que $\theta_1=0°$ y aislando los términos de $\theta_3$, podemos reescribir las ecuaciones como:

$$
r_3 \cos\theta_3 = r_1 - r_2 \cos\theta_2
$$ (eq-slider-crank-pos-re)
$$
r_3 \sin\theta_3 = - r_2 \sin\theta_2 
$$ (eq-slider-crank-pos-im)

Los valores de $r_2$, $r_3$ y $\theta_2$ se conocen, por lo tanto las ecuaciones anteriores deben resolverse para determinar $\theta_3$ y $r_1$.

Podemos calcular $r_1$ si elevamos al cuadrado ambas ecuaciones y las sumamos:

$$
(r_3 \cos\theta_3)^2 + (r_3 \sin\theta_3)^2 = (r_1 - r_2 \cos\theta_2)^2 + (-r_2^2 \sin\theta_2)^2
$$
$$
r_3^2 (\cos^2\theta_3 + \sin^2\theta_3) = r_1^2 + r_2^2 \cos^2\theta_2 - 2 r_1 r_2 \cos\theta_2 + r_2^2 \sin^2\theta_2
$$

Simplificando se tiene:

$$
r_1^2 - 2r_1 r_2 \cos\theta_2 + r_2^2 - r_3^2 = 0
$$

Por lo tanto:

$$
\boxed{ r_1 = \frac{-B \pm \sqrt{B^2 - 4AC}}{2A} }
$$

Donde:

* $A = 1$
* $B = -2r_1 r_2 \cos\theta_2$
* $C = r_2^2 - r_3^2 $

Para $\theta_3$ podemos dividir las ecuaciones {eq}`eq-slider-crank-pos-re` y {eq}`eq-slider-crank-pos-im`:

$$
\frac{r_3\sin\theta_3}{r_3\cos\theta_3} = \frac{-r_2\sin\theta_2}{r_1 - r_2\cos\theta_2}
$$

Por lo tanto:

$$
\boxed{ \theta_3 = \text{arctan2}\left( -r_2\sin\theta_2,\, r_1 - r_2\cos\theta_2 \right) }
$$


### Análisis de velocidad 



### Análisis de aceleración