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

Consideremos un sistema de $n$ partículas. Sea $r_{\perp,i}$ la distancia **perpendicular** desde la partícula $i$ hasta un eje especificado. El momento de inercia de masa del sistema respecto a ese eje se define mediante

$$
\boxed{I=\sum_{i=1}^{n}m_i r_{\perp,i}^{\,2}}
$$

Para una distribución continua de masa, esta expresión se convierte en

$$
\boxed{I=\int_m r_\perp^{\,2}\,dm}
$$

donde $dm$ representa un elemento diferencial de masa y $r_\perp$ es su distancia perpendicular al eje considerado.

En el Sistema Internacional, el momento de inercia de masa se expresa en $\mathrm{kg\,m^2}$.

**Momentos de inercia respecto a ejes cartesianos.** Si los ejes $x$, $y$ y $z$ de un sistema cartesiano son los ejes respecto a los que deseamos calcular el momento de inercia, entonces

$$
\begin{aligned}
I_x&=\int_m(y^2+z^2)\,dm\\
I_y&=\int_m(x^2+z^2)\,dm\\
I_z&=\int_m(x^2+y^2)\,dm
\end{aligned}
$$

Cada expresión utiliza la distancia perpendicular al eje correspondiente. Así, para el eje $z$, esa distancia satisface $r_\perp^2=x^2+y^2$.

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

**Paso 2. Expresar la distancia al eje.** Para el elemento situado en la coordenada $x$, la distancia perpendicular al eje que pasa por $G$ es $r_\perp=|x|$, de modo que $r_\perp^2=x^2$.

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
