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
