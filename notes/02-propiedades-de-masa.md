# Propiedades de masa del cuerpo rígido

Las propiedades de masa permiten describir cómo está distribuida la materia de un cuerpo y desempeñan un papel fundamental en su análisis dinámico. En este capítulo estudiaremos el **centro de masa** y el **momento de inercia de masa**, con énfasis en los cuerpos y eslabones que intervienen en mecanismos planos.

## 1. Centro de masa

El centro de masa permite representar la distribución de masa de un cuerpo mediante un punto característico. Su posición resulta de especial interés porque la resultante de las fuerzas externas determina la aceleración de ese punto, como veremos al estudiar las ecuaciones de movimiento de Newton–Euler.

### 1.1. Concepto de centro de masa

Consideremos un cuerpo cuya masa está distribuida en el espacio. Aunque sus partículas ocupan posiciones diferentes, podemos identificar un punto $G$ que caracteriza la distribución de masa del conjunto: el **centro de masa**.

La posición de $G$ depende tanto de la geometría como de la manera en que se distribuye la masa. Por ejemplo, si una región de un cuerpo concentra una mayor cantidad de masa, el centro de masa tiende a localizarse más cerca de ella.

Es importante distinguir tres conceptos relacionados:

- **Centro de masa:** punto determinado por la distribución de masa del cuerpo.
- **Centroide geométrico:** punto asociado a una distribución geométrica de longitud, área o volumen, independientemente de la masa.
- **Centro de gravedad:** punto de aplicación equivalente de la resultante de las fuerzas gravitatorias cuando dicha resultante puede representarse de ese modo.

En un cuerpo homogéneo, el centro de masa coincide con el centroide de la geometría correspondiente. Además, cuando el campo gravitatorio es uniforme, el centro de gravedad coincide con el centro de masa.

> **Observación.** El centro de masa no necesariamente se encuentra dentro del material del cuerpo. Por ejemplo, el centro de masa de un aro circular homogéneo está en su centro geométrico, donde no hay material.

### 1.2. Centro de masa de un sistema de partículas

Supongamos que un sistema está constituido por $n$ partículas de masas $m_1,m_2,\ldots,m_n$, cuyas posiciones respecto a un origen $O$ se describen mediante los vectores $\mathbf r_1,\mathbf r_2,\ldots,\mathbf r_n$.

La masa total del sistema es

$$
m=\sum_{i=1}^{n}m_i
$$

La posición del centro de masa se define como el **promedio de las posiciones ponderado por las masas**:

$$
\boxed{
\mathbf r_G=\frac{1}{m}\sum_{i=1}^{n}m_i\mathbf r_i
}
$$

Esta definición puede escribirse también como

$$
m\mathbf r_G=\sum_{i=1}^{n}m_i\mathbf r_i
$$

El término $m_i\mathbf r_i$ constituye el *primer momento de masa* de la partícula $i$ respecto al origen elegido. Así, la suma de los primeros momentos de masa del sistema equivale al primer momento de toda su masa concentrada en $G$.

**Interpretación mediante posiciones relativas.** Si definimos el vector desde $G$ hasta la partícula $i$ mediante nuestra notación habitual,

$$
\mathbf r_{i/G}=\mathbf r_i-\mathbf r_G
$$

se cumple que

$$
\begin{aligned}
\sum_{i=1}^{n}m_i\mathbf r_{i/G}
&=\sum_{i=1}^{n}m_i(\mathbf r_i-\mathbf r_G)\\
&=\sum_{i=1}^{n}m_i\mathbf r_i-m\mathbf r_G\\
&=\mathbf 0
\end{aligned}
$$

Por tanto,

$$
\boxed{\sum_{i=1}^{n}m_i\mathbf r_{i/G}=\mathbf 0}
$$

Esta propiedad expresa que los primeros momentos de masa respecto al centro de masa se compensan entre sí; también será útil al deducir las ecuaciones de movimiento del cuerpo rígido.

En coordenadas cartesianas, la definición vectorial equivale a

$$
\boxed{
\begin{aligned}
x_G&=\frac{\sum_i m_i x_i}{m}\\
y_G&=\frac{\sum_i m_i y_i}{m}\\
z_G&=\frac{\sum_i m_i z_i}{m}
\end{aligned}
}
$$

Para los problemas planos bastará utilizar las componentes $x_G$ y $y_G$.

**Ejemplo breve.** Dos partículas se encuentran sobre el eje $x$: $m_1=1\ \mathrm{kg}$ en $x_1=0$ y $m_2=3\ \mathrm{kg}$ en $x_2=0.40\ \mathrm m$. Su centro de masa está en

$$
x_G=\frac{1(0)+3(0.40)}{1+3}=0.30\ \mathrm m
$$

Como cabría esperar, $G$ queda más cerca de la partícula de mayor masa.

### 1.3. Centro de masa de cuerpos continuos

Un cuerpo real contiene una distribución continua de materia. Para determinar su centro de masa, podemos dividirlo conceptualmente en elementos diferenciales de masa $dm$.

Al pasar del sistema discreto a una distribución continua, la suma se convierte en una integral:

$$
\boxed{
\mathbf r_G=\frac{1}{m}\int_m\mathbf r\,dm
},
\qquad
m=\int_m dm
$$

En coordenadas cartesianas,

$$
\boxed{
\begin{aligned}
x_G&=\frac{1}{m}\int_m x\,dm\\
y_G&=\frac{1}{m}\int_m y\,dm\\
z_G&=\frac{1}{m}\int_m z\,dm
\end{aligned}
}
$$

Para evaluar estas integrales necesitamos expresar $dm$ en términos de la geometría y de la densidad de masa. Según el modelo utilizado, podemos escribir:

| Tipo de distribución | Elemento de masa | Densidad |
| --- | --- | --- |
| Lineal, como una barra delgada | $dm=\lambda\,ds$ | $\lambda$: masa por unidad de longitud |
| Superficial, como una placa delgada | $dm=\sigma\,dA$ | $\sigma$: masa por unidad de área |
| Volumétrica, como un sólido | $dm=\rho\,dV$ | $\rho$: masa por unidad de volumen |

Las densidades pueden depender de la posición. Cuando la distribución es **homogénea**, la densidad correspondiente es constante y se cancela entre el numerador y el denominador de la expresión del centro de masa. Por ejemplo, para una placa delgada homogénea,

$$
x_G=\frac{\int_A x\,dA}{\int_A dA},
\qquad
y_G=\frac{\int_A y\,dA}{\int_A dA}
$$

En este caso, el cálculo coincide con la determinación del centroide geométrico del área.

### 1.4. Simetría y simplificaciones

Antes de realizar una suma o una integral, conviene examinar si la distribución de masa presenta alguna simetría.

Si la geometría **y la distribución de densidad** son simétricas respecto a un eje, el centro de masa debe encontrarse sobre ese eje. Cuando existen dos ejes de simetría que se intersectan, su punto de intersección determina la posición de $G$ en el plano.

Por ejemplo, el centro de masa de una barra delgada homogénea de longitud $L$ se encuentra en su punto medio:

$$
x_G=\frac{L}{2}
$$

si uno de sus extremos se toma como origen y el eje $x$ sigue la dirección de la barra. Del mismo modo, el centro de masa de una placa circular homogénea coincide con su centro geométrico.

La simetría geométrica por sí sola no es suficiente si la densidad varía de manera asimétrica: un cuerpo de forma simétrica puede tener su centro de masa desplazado hacia la región más pesada.

**Relación con los mecanismos.** Al analizar un eslabón, conocer $G$ permite ubicar su peso en un campo gravitatorio uniforme y determinar la aceleración de su centro de masa a partir de las relaciones cinemáticas. En las secciones siguientes estudiaremos otra propiedad complementaria —el momento de inercia de masa— y después aprenderemos a calcular ambas propiedades en cuerpos compuestos.


## 2. Momento de inercia de masa

En la sección anterior determinamos la posición del centro de masa, que caracteriza la distribución de masa de un cuerpo mediante un punto. Sin embargo, para estudiar su movimiento de rotación necesitamos otra propiedad: el **momento de inercia de masa** respecto a un eje.

### 2.1. Interpretación física

La masa cuantifica la inercia asociada al movimiento de traslación. En el movimiento de rotación, además de la cantidad de masa, importa **a qué distancia del eje de rotación se encuentra distribuida**.

Consideremos dos cuerpos con la misma masa total, pero distribuciones diferentes respecto a un eje. Si una mayor proporción de su masa se encuentra lejos de ese eje, el cuerpo tendrá un momento de inercia mayor. En consecuencia, para una misma aceleración angular alrededor de un eje fijo, será necesario aplicar un momento resultante mayor, si las demás condiciones son equivalentes.

Esta dependencia de la distancia es cuadrática: una partícula situada a una distancia $2r$ de un eje contribuye cuatro veces más al momento de inercia que otra partícula de la misma masa situada a una distancia $r$.

> **Importante.** El momento de inercia de masa es una **propiedad del cuerpo respecto a un eje determinado**. Por ello, un mismo cuerpo puede tener distintos momentos de inercia cuando se consideran ejes diferentes.

### 2.2. Definición matemática

Consideremos un sistema de $n$ partículas. Sea $r_i$ la **distancia perpendicular** desde la partícula $i$ hasta el eje considerado. El momento de inercia de masa del sistema respecto a ese eje se define mediante

$$
\boxed{I=\sum_{i=1}^{n}m_i r_i^{\,2}}
$$

Para una distribución continua de masa, esta expresión se convierte en

$$
\boxed{I=\int_m r^2\,dm}
$$

donde $dm$ representa un elemento diferencial de masa y $r$ es la **distancia perpendicular** desde ese elemento hasta el eje respecto al cual se calcula el momento de inercia. Aquí $r$ es una distancia escalar, que no debe confundirse con un vector de posición como $\mathbf r_i$.

En el Sistema Internacional, el momento de inercia de masa se expresa en $\mathrm{kg\,m^2}$.

**Momentos de inercia respecto a ejes cartesianos.** Si los ejes $x$, $y$ y $z$ de un sistema cartesiano son los ejes respecto a los que deseamos calcular el momento de inercia, entonces

$$
\begin{aligned}
I_x&=\int_m(y^2+z^2)\,dm\\
I_y&=\int_m(x^2+z^2)\,dm\\
I_z&=\int_m(x^2+y^2)\,dm
\end{aligned}
$$

Cada expresión utiliza la distancia perpendicular al eje correspondiente. Así, para el eje $z$, esa distancia satisface $r^2=x^2+y^2$.

**Especialización a mecanismos planos.** En un mecanismo cuyo movimiento ocurre en el plano $xy$, nos interesa principalmente el momento de inercia respecto a un eje paralelo a $z$, perpendicular al plano del movimiento.

Si dicho eje pasa por el centro de masa $G$, emplearemos la notación $I_G$:

$$
\boxed{
I_G=\int_m\left[(x-x_G)^2+(y-y_G)^2\right]\,dm
}
$$

De manera equivalente, para un sistema de partículas,

$$
I_G=\sum_{i=1}^{n}m_i
\left(x_{i/G}^{\,2}+y_{i/G}^{\,2}\right)
$$

Aquí $x_{i/G}$ y $y_{i/G}$ son las componentes del vector relativo $\mathbf r_{i/G}$ definido en la sección anterior. La abreviatura $I_G$ siempre se referirá, en nuestro estudio del movimiento plano, al eje perpendicular al plano que pasa por $G$.

La importancia dinámica de esta propiedad aparecerá en las [ecuaciones de Newton–Euler para movimiento plano](02-cinetica-cuerpo-rigido.md), donde se utiliza la relación

$$
\sum M_G=I_G\alpha
$$

No es necesario extender esta relación escalar a la rotación tridimensional general: en ese caso, la descripción completa de la inercia rotacional requiere considerar también cómo se distribuye la masa respecto a distintas direcciones.

### 2.3. Cálculo por integración: barra delgada homogénea

Calculemos el momento de inercia de masa de una **barra delgada y homogénea**, de masa $m$ y longitud $L$, respecto al eje perpendicular a la barra que pasa por su centro de masa $G$.

Tomemos el eje $x$ sobre la barra, con el origen en $G$. Por simetría, sus extremos se encuentran en $x=-L/2$ y $x=L/2$.

**Paso 1. Definir el elemento de masa.** Al ser homogénea, la barra tiene densidad lineal constante

$$
\lambda=\frac{m}{L}
$$

Por tanto, un segmento diferencial de longitud $dx$ tiene una masa

$$
dm=\lambda\,dx=\frac{m}{L}\,dx
$$

**Paso 2. Expresar la distancia al eje.** Para el elemento situado en la coordenada $x$, la distancia perpendicular al eje que pasa por $G$ es $r=|x|$, de modo que $r^2=x^2$.

**Paso 3. Plantear e integrar.** Sustituyendo en la definición,

$$
\begin{aligned}
I_G
&=\int_{-L/2}^{L/2}x^2\,dm\\
&=\frac{m}{L}\int_{-L/2}^{L/2}x^2\,dx\\
&=\frac{m}{L}\left[\frac{x^3}{3}\right]_{-L/2}^{L/2}\\
&=\frac{m}{L}\left(\frac{L^3}{12}\right)
\end{aligned}
$$

Finalmente,

$$
\boxed{I_G=\frac{1}{12}mL^2}
$$

Esta expresión es válida en el **modelo de barra delgada** y para el eje especificado. Si el cuerpo tiene dimensiones transversales relevantes, su momento de inercia debe calcularse considerando la distribución tridimensional de masa.

**Ejemplo numérico.** Para una barra con $m=3\ \mathrm{kg}$ y $L=0.80\ \mathrm m$,

$$
I_G=\frac{1}{12}(3)(0.80)^2
=\boxed{0.16\ \mathrm{kg\,m^2}}
$$

Este valor corresponde al eje perpendicular que pasa por $G$. Si se requiere el momento de inercia respecto al eje de una articulación situada en un extremo, el resultado será distinto. En la siguiente sección estudiaremos cómo relacionar ambos mediante el **teorema de ejes paralelos**.

### 2.4. Radio de giro

El **radio de giro** $k$ respecto a un eje se define como la distancia a la cual podría concentrarse idealmente toda la masa del cuerpo para obtener el mismo momento de inercia respecto a ese eje:

$$
I=mk^2
$$

Despejando,

$$
\boxed{k=\sqrt{\frac{I}{m}}}
$$

El radio de giro tiene unidades de longitud y sirve como medida de la distribución de masa respecto al eje. **No debe confundirse con la distancia del centro de masa al eje:** aun cuando el eje pasa por $G$, el radio de giro es generalmente distinto de cero.

Para la barra delgada homogénea estudiada anteriormente,

$$
k_G=\sqrt{\frac{I_G}{m}}
=\sqrt{\frac{L^2}{12}}
=\boxed{\frac{L}{\sqrt{12}}}
$$

Para $L=0.80\ \mathrm m$, resulta $k_G\approx 0.231\ \mathrm m$.

> **Distinción de terminología.** El *momento de inercia de masa*, utilizado en dinámica, se expresa en $\mathrm{kg\,m^2}$. El *segundo momento de área*, frecuente en resistencia de materiales, se expresa en $\mathrm{m^4}$. Aunque sus expresiones matemáticas se parecen, corresponden a cantidades físicas diferentes.

**Relación con los mecanismos.** La masa $m$, la posición del centro de masa $G$ y el momento de inercia $I_G$ son datos esenciales para plantear las ecuaciones de movimiento de un eslabón plano. En la siguiente sección utilizaremos el teorema de ejes paralelos para obtener momentos de inercia respecto a otros ejes, como los que pasan por las articulaciones.


## 3. Teorema de ejes paralelos

El momento de inercia de masa depende del eje respecto al cual se calcula. En muchos problemas de mecanismos conocemos el momento de inercia de un eslabón respecto al eje que pasa por su centro de masa, pero necesitamos determinarlo respecto al eje de una articulación.

El **teorema de ejes paralelos**, también conocido como teorema de Steiner, permite relacionar ambas cantidades sin repetir la integración sobre toda la distribución de masa.

### 3.1. Formulación del teorema

Consideremos un cuerpo de masa $m$ y dos **ejes paralelos**: uno que pasa por el centro de masa $G$ y otro que pasa por un punto $O$. Sea $d$ la distancia perpendicular entre ambos ejes.

El teorema establece que

$$
\boxed{I_O=I_G+md^2}
$$

donde:

- $I_G$ es el momento de inercia de masa respecto al eje que pasa por $G$.
- $I_O$ es el momento de inercia de masa respecto al eje paralelo que pasa por $O$.
- $d$ es la distancia perpendicular entre los dos ejes.
- $m$ es la masa total del cuerpo.

En el **movimiento plano** que estudiaremos, ambos ejes son perpendiculares al plano del movimiento. Si $O$ y $G$ se ubican en dicho plano, entonces $d$ coincide con la distancia entre esos puntos:

$$
d^2=(x_G-x_O)^2+(y_G-y_O)^2
$$

Como $md^2\geq 0$, el momento de inercia respecto al eje que pasa por $G$ es el **mínimo entre los momentos de inercia respecto a los ejes paralelos a él**, y la igualdad ocurre cuando ambos ejes coinciden.

> **Condición esencial.** Los ejes deben ser paralelos, y uno de ellos debe pasar por el centro de masa del cuerpo. No puede utilizarse la expresión $I_O=I_P+md^2$ entre dos ejes arbitrarios sólo porque sean paralelos.

### 3.2. Deducción para ejes perpendiculares al plano

Retomemos el modelo de un sistema de $n$ partículas, con posiciones $(x_i,y_i)$ medidas desde $O$. Sea $(x_G,y_G)$ la posición del centro de masa respecto al mismo origen. Entonces podemos escribir las componentes de la posición relativa como

$$
x_{i/G}=x_i-x_G,
\qquad
y_{i/G}=y_i-y_G
$$

Por tanto,

$$
x_i=x_G+x_{i/G},
\qquad
y_i=y_G+y_{i/G}
$$

El momento de inercia respecto al eje perpendicular al plano que pasa por $O$ es

$$
I_O=\sum_{i=1}^{n}m_i(x_i^2+y_i^2)
$$

Al sustituir las expresiones anteriores y desarrollar los cuadrados:

$$
\begin{aligned}
I_O
={}&\sum_{i=1}^{n}m_i(x_{i/G}^2+y_{i/G}^2)\\
&+2x_G\sum_{i=1}^{n}m_i x_{i/G}
+2y_G\sum_{i=1}^{n}m_i y_{i/G}\\
&+(x_G^2+y_G^2)\sum_{i=1}^{n}m_i
\end{aligned}
$$

El primer término es precisamente $I_G$. Los dos términos intermedios se anulan, porque en la Sección 1 demostramos que

$$
\sum_{i=1}^{n}m_i\mathbf r_{i/G}=\mathbf 0
$$

Por último, $\sum_i m_i=m$ y, con el origen situado en $O$, se cumple $x_G^2+y_G^2=d^2$. Así obtenemos

$$
I_O=I_G+0+0+md^2
$$

es decir,

$$
\boxed{I_O=I_G+md^2}
$$

La deducción se extiende directamente a cuerpos con distribución continua de masa, sustituyendo las sumatorias por integrales. El hecho fundamental es el mismo: **los primeros momentos de masa respecto a $G$ son nulos**.

### 3.3. Aplicación: barra homogénea articulada en un extremo

En la Sección 2 calculamos el momento de inercia de una barra delgada homogénea, de masa $m$ y longitud $L$, respecto al eje perpendicular que pasa por su centro de masa:

$$
I_G=\frac{1}{12}mL^2
$$

Supongamos ahora que la barra está unida a una articulación en uno de sus extremos, al que llamaremos $O$. El centro de masa se encuentra en el punto medio de la barra, por lo que la distancia entre el eje de $O$ y el eje paralelo de $G$ es

$$
d=\frac{L}{2}
$$

Aplicando el teorema de ejes paralelos,

$$
\begin{aligned}
I_O
&=I_G+md^2\\
&=\frac{1}{12}mL^2+m\left(\frac{L}{2}\right)^2\\
&=\left(\frac{1}{12}+\frac{1}{4}\right)mL^2
\end{aligned}
$$

Por tanto,

$$
\boxed{I_O=\frac{1}{3}mL^2}
$$

**Ejemplo numérico.** Utilicemos la misma barra de la sección anterior, con $m=3\ \mathrm{kg}$ y $L=0.80\ \mathrm m$. Sabemos que $I_G=0.16\ \mathrm{kg\,m^2}$ y que $d=0.40\ \mathrm m$. Entonces,

$$
\begin{aligned}
I_O
&=0.16+3(0.40)^2\\
&=\boxed{0.64\ \mathrm{kg\,m^2}}
\end{aligned}
$$

El momento de inercia respecto al eje de la articulación es cuatro veces el correspondiente al eje paralelo que pasa por $G$.

**Conexión con Newton–Euler.** Si la barra gira alrededor de un **pivote fijo $O$** en un plano, el momento de inercia $I_O$ interviene en la ecuación

$$
\sum M_O=I_O\alpha
$$

Esta relación aparece en el [ejemplo de la barra con pivote fijo de los apuntes de cinética](02-cinetica-cuerpo-rigido.md). Conviene distinguir dos afirmaciones: el teorema de ejes paralelos es una relación **geométrica de propiedades de masa**, válida independientemente del movimiento; en cambio, para utilizar la ecuación dinámica $\sum M_O=I_O\alpha$ en esta forma se requiere que $O$ sea un punto fijo de rotación en un sistema de referencia inercial.

En la siguiente sección utilizaremos el teorema para calcular el momento de inercia de **cuerpos compuestos**, a partir de los momentos de inercia de sus componentes.


## 4. Centro de masa y momento de inercia de cuerpos compuestos

En el diseño de mecanismos es habitual encontrar eslabones formados por varias regiones geométricas: placas con salientes, barras unidas entre sí o piezas con perforaciones. Si conocemos las propiedades de masa de figuras sencillas, podemos combinarlas para obtener las del cuerpo completo, **sin integrar nuevamente sobre toda su geometría**.

El procedimiento consiste en calcular primero la masa y el centro de masa del conjunto y, después, su momento de inercia respecto al eje deseado.

### 4.1. Descomposición en componentes simples

Consideremos un cuerpo rígido que pueda representarse mediante $n$ componentes de geometría sencilla. Cada componente $i$ tiene:

- Masa $m_i$.
- Centro de masa $G_i$, situado en $(x_{G_i},y_{G_i})$ respecto a un mismo sistema de referencia.
- Momento de inercia $I_{G_i}$ respecto al eje perpendicular al plano que pasa por $G_i$.

Para comenzar su análisis, conviene identificar regiones **sin superposición**, de modo que ninguna porción de material se contabilice dos veces. Cuando sea más sencillo describir una pieza como una figura completa a la que se le retira material, podemos emplear el procedimiento de sustracción que estudiaremos en el apartado 4.4.

En una placa delgada homogénea, las masas se obtienen a partir del área de cada componente y de la densidad superficial común $\sigma$:

$$
m_i=\sigma A_i
$$

Si el espesor y la densidad volumétrica son uniformes, la densidad superficial puede expresarse como $\sigma=\rho t$, donde $t$ es el espesor. Si los componentes tienen materiales, espesores o densidades diferentes, **sus masas deben determinarse por separado**.

Algunas expresiones útiles para los componentes más habituales son:

| Componente homogéneo | Masa | Momento de inercia respecto al eje por $G_i$ |
| --- | --- | --- |
| Barra delgada de longitud $L$ | $m_i=\lambda L$ | $I_{G_i}=\frac{1}{12}m_iL^2$ |
| Placa rectangular de lados $b$ y $h$ | $m_i=\sigma bh$ | $I_{G_i}=\frac{1}{12}m_i(b^2+h^2)$ |
| Placa circular de radio $R$ | $m_i=\sigma\pi R^2$ | $I_{G_i}=\frac{1}{2}m_iR^2$ |

En todos los casos de la tabla, el eje es **perpendicular al plano de la figura** y pasa por el centro de masa correspondiente. Para utilizar las fórmulas es necesario que el componente se ajuste a la idealización geométrica indicada.

### 4.2. Centro de masa del cuerpo compuesto

Si todos los componentes representan material presente, la masa total es

$$
m=\sum_{i=1}^{n}m_i
$$

La posición del centro de masa $G$ del conjunto se obtiene sumando los primeros momentos de masa de sus componentes:

$$
\boxed{
\mathbf r_G=\frac{1}{m}\sum_{i=1}^{n}m_i\mathbf r_{G_i}
}
$$

Para una distribución plana, esta relación toma la forma

$$
\boxed{
\begin{aligned}
x_G&=\frac{\sum_{i=1}^{n}m_i x_{G_i}}{\sum_{i=1}^{n}m_i}\\
y_G&=\frac{\sum_{i=1}^{n}m_i y_{G_i}}{\sum_{i=1}^{n}m_i}
\end{aligned}
}
$$

Aquí $\mathbf r_{G_i}$ es el vector de posición del centro de masa del componente $i$ respecto al origen elegido.

Si todos los componentes son placas con la **misma densidad superficial**, el factor $\sigma$ se cancela y podemos trabajar directamente con sus áreas:

$$
x_G=\frac{\sum_i A_i x_{G_i}}{\sum_i A_i},
\qquad
y_G=\frac{\sum_i A_i y_{G_i}}{\sum_i A_i}
$$

Esta última simplificación **no debe emplearse** si los componentes tienen distintas densidades superficiales, incluso cuando estén hechos de figuras geométricas semejantes.

### 4.3. Momento de inercia respecto al centro de masa del conjunto

Una vez localizado $G$, necesitamos determinar el momento de inercia del cuerpo completo respecto al eje perpendicular al plano que pasa por ese punto.

Para cada componente conocemos $I_{G_i}$, pero el eje que pasa por $G_i$ generalmente **no coincide** con el eje que pasa por $G$. Aplicamos entonces el teorema de ejes paralelos a cada componente:

$$
I_{G}^{(i)}=I_{G_i}+m_i d_i^2
$$

donde $I_{G}^{(i)}$ es la contribución del componente $i$ respecto al eje que pasa por el centro de masa del conjunto, y

$$
d_i^2=(x_{G_i}-x_G)^2+(y_{G_i}-y_G)^2
$$

es el cuadrado de la distancia entre los centros de masa. En nuestra notación vectorial, el desplazamiento correspondiente es

$$
\mathbf r_{G_i/G}=\mathbf r_{G_i}-\mathbf r_G
$$

Al sumar las contribuciones de todos los componentes obtenemos

$$
\boxed{
I_G=\sum_{i=1}^{n}\left[
I_{G_i}+m_i\left((x_{G_i}-x_G)^2+(y_{G_i}-y_G)^2\right)
\right]
}
$$

La expresión muestra que intervienen **dos aportaciones por componente**: su momento de inercia respecto al propio centro de masa y el término asociado al desplazamiento entre $G_i$ y $G$.

> **Error frecuente.** No basta con sumar los momentos de inercia $I_{G_i}$ de los componentes. Antes de sumarlos, todos deben estar referidos a un **mismo eje**.

Si finalmente necesitamos el momento de inercia respecto a un eje paralelo que pasa por una articulación $O$, podemos trasladar el momento de inercia del cuerpo completo:

$$
\boxed{
I_O=I_G+m\left[(x_G-x_O)^2+(y_G-y_O)^2\right]
}
$$

Otra posibilidad es trasladar directamente cada contribución al eje de $O$ y sumarlas. Ambos procedimientos deben proporcionar el mismo resultado.

### 4.4. Perforaciones y regiones de material removido

Es frecuente que un eslabón contenga orificios, ranuras u otras regiones sin material. Cuando conocemos la geometría y las propiedades de la pieza original, podemos representar cada perforación como una **contribución que se resta**.

Para unificar los cálculos, asignemos a cada región un signo $s_i$:

$$
s_i=
\begin{cases}
+1,&\text{material presente},\\
-1,&\text{material removido}.
\end{cases}
$$

Conservaremos $m_i>0$ e $I_{G_i}>0$ como las propiedades que tendría la región $i$ si estuviera llena del material que se está añadiendo o retirando. El signo se aplica únicamente al sumar sus contribuciones. Así, la masa real del cuerpo es

$$
\boxed{m=\sum_{i=1}^{n}s_i m_i}
$$

y su centro de masa se calcula mediante

$$
\boxed{
x_G=\frac{\sum_i s_i m_i x_{G_i}}{m},
\qquad
y_G=\frac{\sum_i s_i m_i y_{G_i}}{m}
}
$$

Una vez calculado $G$, el momento de inercia queda

$$
\boxed{
I_G=\sum_{i=1}^{n}s_i\left[
I_{G_i}+m_i\left((x_{G_i}-x_G)^2+(y_{G_i}-y_G)^2\right)
\right]
}
$$

**Ejemplo de formulación.** Si una placa se representa mediante dos regiones con material, $1$ y $2$, y una perforación $h$, la masa total y la coordenada horizontal del centro de masa serían

$$
m=m_1+m_2-m_h,
\qquad
x_G=\frac{m_1x_{G_1}+m_2x_{G_2}-m_hx_{G_h}}{m}
$$

Su momento de inercia respecto al eje que pasa por $G$ se expresa como

$$
\begin{aligned}
I_G
={}&(I_{G_1}+m_1d_1^2)
+(I_{G_2}+m_2d_2^2)\\
&-(I_{G_h}+m_hd_h^2)
\end{aligned}
$$

El uso de un signo negativo es una **herramienta de cálculo**, no significa que exista materia con masa física negativa. Además, la perforación debe descontarse con la densidad correspondiente al material que habría ocupado esa región. Si una descomposición mezcla regiones con diferentes densidades o superposiciones, debe revisarse antes de aplicar estas expresiones.

### 4.5. Procedimiento de cálculo mediante una tabla

Una tabla resulta útil para organizar los datos, especialmente cuando el cuerpo contiene varias regiones. Recomiendo utilizar la siguiente estructura:

| Región $i$ | Signo $s_i$ | Masa $m_i$ | $x_{G_i}$ | $y_{G_i}$ | $I_{G_i}$ |
| --- | :---: | ---: | ---: | ---: | ---: |
| Componente 1 | $+1$ | $m_1$ | $x_{G_1}$ | $y_{G_1}$ | $I_{G_1}$ |
| Componente 2 | $+1$ | $m_2$ | $x_{G_2}$ | $y_{G_2}$ | $I_{G_2}$ |
| Perforación $h$ | $-1$ | $m_h$ | $x_{G_h}$ | $y_{G_h}$ | $I_{G_h}$ |

A partir de estos datos se calculan, en orden, las siguientes cantidades:

1. **Masa total:** sumar $s_i m_i$ y verificar que $m>0$.
2. **Centro de masa:** obtener $x_G$ y $y_G$ mediante los primeros momentos de masa con signo.
3. **Distancias entre centros:** calcular $d_i^2$ para cada región respecto al $G$ ya determinado.
4. **Momento de inercia total:** sumar las contribuciones $s_i(I_{G_i}+m_i d_i^2)$.
5. **Cambio de eje, si se requiere:** aplicar el teorema de ejes paralelos desde $G$ hasta el eje de interés.

Como verificación, el centro de masa calculado debe satisfacer

$$
\sum_{i=1}^{n}s_i m_i(x_{G_i}-x_G)=0,
\qquad
\sum_{i=1}^{n}s_i m_i(y_{G_i}-y_G)=0
$$

También debemos comprobar que las unidades sean consistentes: las masas se expresan en $\mathrm{kg}$, las coordenadas en $\mathrm m$ y los momentos de inercia de masa en $\mathrm{kg\,m^2}$.

**Conexión con mecanismos.** El procedimiento permite obtener las propiedades $m$, $G$ e $I_G$ de un eslabón de geometría compuesta. En la siguiente sección lo aplicaremos a un **eslabón plano**, calculando después su momento de inercia respecto al eje de una articulación. Estos datos podrán utilizarse directamente en las ecuaciones de Newton–Euler.
