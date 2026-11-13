# III. Fundamentos y análisis de mecanismos

## Fundamentos de mecanismos

### Conceptos básicos

### Diagramas cinemáticos

### Grados de libertad

### Inversión cinemática

### Análisis vs síntesis

## Análisis cinemático de mecanismos

### Vectores en la forma compleja exponencial

### Análisis de posición

El análisis de posición de un mecanismo plano se puede realizar estableciendo un lazo vectorial cerrado, donde cada vector representa la posición relativa entre dos puntos del mecanismo. Para un lazo de $n$ vectores, la ecuación vectorial de posición del mecanismo está dada por: 

$$
\sum_{i=1}^n \vec{r}_i = \vec{0}
$$ (eq-position-loop)

Cada uno de los vectores $\vec{r}_i$ se puede escribir en la forma compleja exponencial:

$$
\vec{r}_i = r_i e^{j\theta_i}
$$

La ecuación {eq}`eq-position-loop` se puede separar en sus componentes reales e imaginarias, y resultan dos ecuaciones escalares:

$$
\text{Re} \rightarrow \quad r_1 \cos\theta_1 + r_2 \cos\theta_2 + \cdots + r_n \cos\theta_n  = 0
$$

$$
\text{Im} \rightarrow \quad r_1 \sin\theta_1 + r_2 \sin\theta_2 + \cdots + r_n \sin\theta_n  = 0
$$

Estas ecuaciones se pueden resolver para, como mucho, dos valores desconocidos de posición.

#### Un ejemplo: mecanismo de manivela-biela-corredera

A continuación, se describe el análisis de posición de un mecanismo de manivela-biela-corredera, considerando conocidas las dimensiones de la manivela $OA$ y de la biela $AB$, así como el ángulo $\phi$ formado por la manivela con respecto a la horizontal.
 
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
(r_3 \cos\theta_3)^2 + (r_3 \sin\theta_3)^2 = (r_1 - r_2 \cos\theta_2)^2 + (-r_2 \sin\theta_2)^2
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
\boxed{ r_1 = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} }
$$ (eq-slider-crank-sol-r1)

Donde:

* $a = 1$
* $b = -2 r_2 \cos\theta_2$
* $c = r_2^2 - r_3^2 $

De lo anterior se obtienen dos soluciones para $r_1$, que corresponden a las dos posibles maneras en que se puede ensamblar un mecanismo de este tipo para un valor específico de $\theta_2$ (ver {ref}`slider-crank-two-solutions`).

```{figure} figures/u3/slider-crank-two-solutions.svg
:name: slider-crank-two-solutions
:align: center

Dos maneras de ensamblar el mecanismo de manivela-biela-corredera para una misma posición de entrada de la manivela.
```

Para $\theta_3$ podemos dividir las ecuaciones {eq}`eq-slider-crank-pos-re` y {eq}`eq-slider-crank-pos-im`:

$$
\frac{r_3\sin\theta_3}{r_3\cos\theta_3} = \frac{-r_2\sin\theta_2}{r_1 - r_2\cos\theta_2}
$$

Por lo tanto:

$$
\boxed{ \theta_3 = \text{arctan2}\left( -r_2\sin\theta_2,\, r_1 - r_2\cos\theta_2 \right) }
$$ (eq-slider-crank-sol-theta3)

##### Solución usando la función $\arcsin$:

Las ecuaciones de posición {eq}`eq-slider-crank-pos-re` y {eq}`eq-slider-crank-pos-im` se pueden resolver despejando directamente $\theta_3$ de la ecuación {eq}`eq-slider-crank-pos-im` y usando la función $\arcsin$: 

$$
\boxed{ \theta_3 = \arcsin\left( \frac{-r_2 \sin\theta_2}{r_3} \right) }
$$

Una vez determinado $\theta_3$, $r_1$ se calcula de {eq}`eq-slider-crank-pos-re`:

$$ 
\boxed{r_1 = r_2 \cos\theta_2 + r_3 \cos\theta_3 }
$$

Hay que considerar que $\arcsin$ tiene un rango de $\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$, por lo cual si la solución de $\theta_3$ es un ángulo fuera de ese intervalo no se podrá determinar de forma adecuada. De manera general, en una vuelta completa existe otra solución para {eq}`eq-slider-crank-pos-im` y está dada por:

$$
\theta_{3}^{(2)} = \pi - \arcsin\left( \frac{-r_2 \sin\theta_2}{r_3} \right) 
$$

##### Poniéndole numeritos:

Consideremos que para este mecanismo $\overline{OA}=100 \text{ mm}$, $\overline{AB}=300 \text{ mm}$ y $\theta_2 = 60°$.

Sustituyendo valores en {eq}`eq-slider-crank-sol-r1` y {eq}`eq-slider-crank-sol-theta3`:

$$
r_1 = 337.23 \text{ mm} \\
\theta_3 = -16.78°
$$

Usando la otra solución para $r_1$:

$$
r_1 = -237.23 \text{ mm} \\
\theta_3 = -163.22°
$$

Se puede corroborar que en este caso la solución principal dada por $\arcsin$ es la misma que la primera que obtuvimos.

#### Un ejemplo: mecanismo de cuatro barras

Resolveremos el análisis de posición de un mecanismo de cuatro barras, considerando que se conocen las longitudes de todos los eslabones y el ángulo de entrada del eslabón motriz $OA$.

```{figure} figures/u3/four-bar.svg
:name: four-bar
:align: center

Mecanismo de cuatro barras.
```

Un lazo vectorial que representa el mecanismo de cuatro se puede observar en la {ref}`four-bar-loop`.

```{figure} figures/u3/four-bar-loop.svg
:name: four-bar-loop
:align: center

Lazo vectorial de un mecanismo de cuatro barras.
```

La ecuación de lazo vectorial se puede escribir como:

$$
\vec{r}_2 + \vec{r}_3 - \vec{r}_4 - \vec{r}_1 = \vec{0}
$$

Escribimos los vectores en la forma compleja exponencial:

$$
r_2 e^{j\theta_2} + r_3 e^{j\theta_3} - r_4 e^{j\theta_4} - r_1 e^{j\theta_1} = 0
$$


### Análisis de posición usando métodos numéricos



### Análisis de velocidad 



### Análisis de aceleración