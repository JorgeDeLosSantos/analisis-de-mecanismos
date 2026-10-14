# Cinética del cuerpo rígido

## 1. Fundamentos de la cinética del cuerpo rígido

### 1.1. De la cinemática a la cinética

La **dinámica** es la rama de la mecánica que estudia el movimiento de los cuerpos y su relación con las fuerzas y momentos que actúan sobre ellos. Tradicionalmente, su estudio se divide en dos partes:

- **Cinemática:** describe el movimiento de los cuerpos mediante variables como posición, velocidad y aceleración, sin considerar las fuerzas que lo producen.
- **Cinética:** establece las relaciones entre el movimiento de los cuerpos y las fuerzas y momentos que actúan sobre ellos.

En el análisis cinemático de mecanismos estudiamos cómo se mueven sus eslabones a partir de la geometría del sistema y de las restricciones impuestas por las articulaciones. Sin embargo, conocer el movimiento de un mecanismo no nos indica directamente qué fuerzas se desarrollan en sus articulaciones o qué par debe proporcionar un motor para producir dicho movimiento.

Para responder estas preguntas es necesario incorporar la cinética.

### 1.2. El modelo de cuerpo rígido

Un **cuerpo rígido** es un modelo idealizado de un cuerpo cuyas partículas mantienen distancias relativas constantes, incluso cuando está sometido a fuerzas y momentos. Esta idealización permite estudiar el movimiento sin considerar las deformaciones del material.

Para el análisis cinético de un cuerpo rígido es necesario conocer, además de su movimiento, algunas de sus propiedades de masa:

- **Masa, $m$:** cuantifica la inercia traslacional del cuerpo.
- **Centro de masa, $G$:** punto cuyo movimiento permite describir la respuesta traslacional del cuerpo a las fuerzas externas.
- **Momento de inercia de masa, $I$:** caracteriza la distribución de masa respecto a un eje y su resistencia a experimentar aceleración angular alrededor de dicho eje.

Estas propiedades permiten relacionar las fuerzas y momentos externos con las aceleraciones del cuerpo.

En estos apuntes nos concentraremos en cuerpos rígidos con **movimiento plano**, es decir, aquellos cuyo movimiento ocurre en planos paralelos a uno fijo.

### 1.3. Fuerzas y momentos externos

En el análisis cinético es necesario identificar las **acciones externas** que actúan sobre el cuerpo. En un eslabón de un mecanismo pueden incluir el peso, las fuerzas de contacto, las reacciones en las articulaciones y los pares aplicados por actuadores.

Recordemos que el momento de una fuerza $\mathbf F$ respecto a un punto `O` se calcula mediante

$$
\mathbf M_O=\mathbf r_{OP}\times\mathbf F
$$

donde $\mathbf r_{OP}$ es el vector que va desde `O` hasta un punto `P` de la línea de acción de la fuerza.

Además de los momentos producidos por fuerzas, sobre un cuerpo pueden actuar **pares aplicados**, como el par que transmite un motor. En el movimiento plano, los momentos se representan mediante magnitudes escalares con signo, de acuerdo con una convención de sentidos.

Más adelante utilizaremos estas acciones para construir diagramas de cuerpo libre y formular las ecuaciones de movimiento.

### 1.4. Fundamento físico: leyes de Newton

La cinética clásica se fundamenta en las leyes del movimiento de Newton.

Para una partícula de masa constante, la segunda ley establece que la resultante de las fuerzas externas es igual al producto de su masa por su aceleración:

$$
\sum \mathbf F=m\mathbf a
$$

Esta ecuación expresa la relación entre las fuerzas aplicadas y el cambio en el movimiento de la partícula.

Sin embargo, un cuerpo rígido no puede describirse únicamente como una partícula, ya que además de trasladarse puede experimentar movimiento de rotación.

Por tanto, para estudiar su cinética necesitaremos establecer dos relaciones fundamentales:

1. Una relación entre las fuerzas externas y el movimiento del centro de masa.
2. Una relación entre los momentos externos y el movimiento de rotación del cuerpo.

Estas relaciones se obtienen aplicando los principios de Newton al sistema de partículas que constituye el cuerpo rígido. Su deducción será el objeto de la siguiente sección.

### 1.5. Dinámica directa e inversa

Al estudiar la dinámica de un sistema mecánico pueden plantearse dos tipos de problemas.

**Dinámica directa.** Se conocen las fuerzas y momentos aplicados al sistema y se busca determinar el movimiento resultante. Por ejemplo, conocer el par aplicado a un eslabón y determinar su aceleración angular.

**Dinámica inversa.** Se conoce el movimiento del sistema y se busca determinar las fuerzas y momentos necesarios para producirlo. Por ejemplo, conocer la aceleración angular de un eslabón y calcular el par que debe proporcionar un motor.

En el análisis de mecanismos, la dinámica inversa tiene especial importancia porque frecuentemente conocemos las posiciones, velocidades y aceleraciones de los eslabones mediante el análisis cinemático, y deseamos determinar las fuerzas de reacción y los pares de accionamiento correspondientes.

Así, el análisis cinético complementa al análisis cinemático y permite avanzar hacia el estudio dinámico de mecanismos completos.


## 2. Ecuaciones de movimiento del cuerpo rígido

Para establecer las ecuaciones de movimiento de un cuerpo rígido, partiremos de las leyes de Newton aplicadas a un sistema de partículas. Después, particularizaremos los resultados al **movimiento plano**, que es el de mayor interés para el análisis de mecanismos de esta asignatura.

Supondremos que la masa del cuerpo es constante y que las posiciones, velocidades y aceleraciones se describen respecto a un sistema de referencia inercial.

### 2.1. Ecuación de traslación: movimiento del centro de masa

Consideremos un cuerpo formado por $n$ partículas, cada una de masa $m_i$ y aceleración $\mathbf a_i$. La segunda ley de Newton, aplicada a la partícula $i$, establece que

$$
\mathbf F_i^{\mathrm{ext}}+\mathbf F_i^{\mathrm{int}}=m_i\mathbf a_i
$$

donde $\mathbf F_i^{\mathrm{ext}}$ y $\mathbf F_i^{\mathrm{int}}$ son las resultantes de las fuerzas externas e internas que actúan sobre dicha partícula, respectivamente.

Al sumar las ecuaciones correspondientes a todas las partículas, las fuerzas internas se cancelan por pares debido a la tercera ley de Newton. Por tanto,

$$
\sum \mathbf F_{\mathrm{ext}}=\sum_{i=1}^{n}m_i\mathbf a_i
$$

Recordemos la definición del centro de masa $G$:

$$
\mathbf r_G=\frac{1}{m}\sum_{i=1}^{n}m_i\mathbf r_i,
\qquad m=\sum_{i=1}^{n}m_i
$$

Como las masas son constantes, al derivar dos veces respecto al tiempo resulta

$$
m\mathbf a_G=\sum_{i=1}^{n}m_i\mathbf a_i
$$

Sustituyendo esta relación en la ecuación anterior obtenemos

$$
\boxed{\sum \mathbf F_{\mathrm{ext}}=m\mathbf a_G}
$$

Esta expresión indica que la resultante de las fuerzas externas determina la aceleración del centro de masa. **El resultado no depende de que el cuerpo experimente únicamente traslación:** también es válido cuando el cuerpo gira.

### 2.2. Ecuación de rotación: momentos respecto al centro de masa

La ecuación de fuerzas no describe completamente el movimiento de un cuerpo rígido, pues este también puede girar. Para estudiar la rotación empleamos la **cantidad de movimiento angular**.

Sea $\boldsymbol{\rho}_i=\mathbf r_i-\mathbf r_G$ el vector desde el centro de masa hasta la partícula $i$, y sea $\mathbf v_{i/G}=\mathbf v_i-\mathbf v_G$ su velocidad relativa al centro de masa. La cantidad de movimiento angular del cuerpo respecto a $G$ se define como

$$
\mathbf H_G=\sum_{i=1}^{n}\boldsymbol{\rho}_i
\times m_i\mathbf v_{i/G}
$$

El balance de cantidad de movimiento angular, obtenido al sumar los momentos de las ecuaciones de Newton para las partículas, conduce a

$$
\boxed{\sum \mathbf M_G^{\mathrm{ext}}=
\frac{d\mathbf H_G}{dt}}
$$

En esta suma se incluyen los momentos respecto a $G$ producidos por las fuerzas externas y los pares externos aplicados. Los efectos internos no aportan un momento resultante al balance del cuerpo completo.

**Especialización al movimiento plano.** Si el cuerpo se mueve en el plano $xy$, su velocidad angular es perpendicular a dicho plano:

$$
\boldsymbol{\omega}=\omega\mathbf k
$$

Para cada partícula de un cuerpo rígido,

$$
\mathbf v_{i/G}=\boldsymbol{\omega}\times\boldsymbol{\rho}_i
$$

Al sustituir en la definición de $\mathbf H_G$ y simplificar, se obtiene

$$
\mathbf H_G=
\left(\sum_{i=1}^{n}m_i\rho_i^2\right)\omega\mathbf k
$$

Reconocemos el **momento de inercia de masa respecto al eje que pasa por $G$ y es perpendicular al plano del movimiento**:

$$
I_G=\sum_{i=1}^{n}m_i\rho_i^2
$$

Por tratarse de un cuerpo rígido, $I_G$ permanece constante. En consecuencia,

$$
\mathbf H_G=I_G\omega\mathbf k,
\qquad
\frac{d\mathbf H_G}{dt}=I_G\alpha\mathbf k
$$

y el balance de momentos, expresado como una ecuación escalar, queda

$$
\boxed{\sum M_G=I_G\alpha}
$$

Esta ecuación muestra que el momento de inercia desempeña, para la aceleración angular, un papel análogo al de la masa para la aceleración traslacional.

> **Importante.** La expresión escalar $\sum M_G=I_G\alpha$ corresponde al movimiento plano. La relación general es el balance vectorial de cantidad de movimiento angular.

### 2.3. Ecuaciones de Newton–Euler para movimiento plano

Al expresar la ecuación de fuerzas en sus componentes cartesianas y combinarla con la ecuación de momentos respecto al centro de masa, obtenemos las tres ecuaciones fundamentales:

$$
\boxed{
\begin{aligned}
\sum F_x &= ma_{Gx}\\
\sum F_y &= ma_{Gy}\\
\sum M_G &= I_G\alpha
\end{aligned}
}
$$

Aquí $a_{Gx}$ y $a_{Gy}$ son las componentes de la aceleración del centro de masa; $I_G$ es el momento de inercia respecto al eje perpendicular al plano que pasa por $G$; y $\alpha$ es la aceleración angular del cuerpo.

Adoptaremos como convención que el eje $z$ positivo sale del plano y que los momentos y aceleraciones angulares **antihorarios son positivos**.

Las tres ecuaciones permiten relacionar las acciones externas sobre un eslabón con su aceleración traslacional y angular. Su aplicación práctica requiere identificar correctamente las fuerzas y pares que actúan sobre el cuerpo mediante un diagrama de cuerpo libre.

### 2.4. Ecuación de momentos respecto a otro punto

Aunque el centro de masa es una referencia especialmente conveniente, en ocasiones interesa calcular momentos respecto a otro punto $P$, por ejemplo, una articulación.

La relación entre los momentos de un mismo sistema de fuerzas respecto a $P$ y a $G$ es

$$
\sum \mathbf M_P
=
\sum \mathbf M_G
+
\mathbf r_{G/P}\times\sum\mathbf F_{\mathrm{ext}}
$$

donde $\mathbf r_{G/P}=\mathbf r_G-\mathbf r_P$ es el vector que va desde $P$ hasta $G$.

Para movimiento plano, al sustituir las ecuaciones de Newton–Euler y tomar la componente perpendicular al plano, resulta

$$
\boxed{
\sum M_P=I_G\alpha+
\left(\mathbf r_{G/P}\times m\mathbf a_G\right)_z
}
$$

Esta ecuación es válida aunque $P$ no sea un punto fijo; las aceleraciones deben expresarse respecto a un sistema inercial.

**Caso particular: rotación alrededor de un punto fijo $O$.** Si el cuerpo gira alrededor de una articulación fija, la aceleración del centro de masa se expresa como

$$
\mathbf a_G=
\boldsymbol{\alpha}\times\mathbf r_{G/O}
+
\boldsymbol{\omega}\times
\left(\boldsymbol{\omega}\times\mathbf r_{G/O}\right)
$$

Al calcular el momento del término $m\mathbf a_G$ respecto a $O$, la componente centrípeta no contribuye, porque es colineal con $\mathbf r_{G/O}$. Por tanto,

$$
\sum M_O=
\left(I_G+mr_{G/O}^2\right)\alpha
$$

Mediante el **teorema de ejes paralelos**, $I_O=I_G+mr_{G/O}^2$, obtenemos

$$
\boxed{\sum M_O=I_O\alpha}
$$

Esta simplificación es muy útil al estudiar eslabones que giran alrededor de pivotes fijos. **No debe aplicarse automáticamente a cualquier punto**, como el centro instantáneo de rotación de un cuerpo en movimiento plano general.

### 2.5. Interpretación física y conexión con los mecanismos

Las ecuaciones anteriores permiten distinguir dos aspectos complementarios de la respuesta dinámica de un eslabón:

- La resultante de **fuerzas externas** determina la aceleración de su centro de masa.
- El momento resultante respecto al **centro de masa** determina su aceleración angular durante el movimiento plano.

En un mecanismo, las aceleraciones pueden obtenerse previamente mediante el análisis cinemático. Si además conocemos la masa, el centro de masa y el momento de inercia de cada eslabón, las ecuaciones de Newton–Euler nos permitirán calcular fuerzas de reacción y pares de accionamiento.

En la siguiente sección examinaremos cómo se aplican estas ecuaciones a la traslación, la rotación alrededor de un eje fijo y el movimiento plano general.

## 3. Cinética del movimiento plano

Las ecuaciones de Newton–Euler obtenidas en la sección anterior son válidas para cualquier cuerpo rígido con movimiento plano. Sin embargo, **su aplicación puede simplificarse según el tipo de movimiento** que experimente el cuerpo. En esta sección examinaremos tres casos: traslación, rotación alrededor de un punto fijo y movimiento plano general.

También estableceremos un procedimiento para identificar las acciones externas y plantear las ecuaciones necesarias en un problema de análisis cinético.

### 3.1. Identificación del tipo de movimiento

La cinemática permite distinguir los siguientes tipos de movimiento plano de un cuerpo rígido:

- **Traslación:** todas las rectas ligadas al cuerpo conservan su orientación; el cuerpo no gira.
- **Rotación alrededor de un punto fijo:** existe un punto del cuerpo que permanece inmóvil respecto al sistema de referencia inercial, mientras los demás describen trayectorias circulares alrededor de él.
- **Movimiento plano general:** el cuerpo combina traslación y rotación, sin que necesariamente exista un punto fijo.

Estas categorías no representan leyes dinámicas diferentes. En todos los casos se aplican las mismas ecuaciones de Newton–Euler; lo que cambia son las **relaciones cinemáticas** y, por tanto, las simplificaciones disponibles.

### 3.2. Cinética de la traslación

En un movimiento de traslación, todos los puntos del cuerpo tienen la misma velocidad y la misma aceleración en cada instante:

$$
\mathbf v_A=\mathbf v_G,
\qquad
\mathbf a_A=\mathbf a_G
$$

Además, la orientación del cuerpo permanece constante, por lo que

$$
\omega=0,
\qquad
\alpha=0
$$

Las ecuaciones de movimiento se reducen a

$$
\boxed{
\begin{aligned}
\sum F_x&=ma_{Gx}\\
\sum F_y&=ma_{Gy}\\
\sum M_G&=0
\end{aligned}
}
$$

El hecho de que el cuerpo no tenga aceleración angular **no implica que todas las fuerzas sean nulas**: puede acelerar traslacionalmente mientras los momentos externos respecto a su centro de masa se equilibran.

Tampoco significa que la suma de momentos respecto a *cualquier* punto sea cero. Si los momentos se toman respecto a un punto $P$ distinto de $G$, en general se cumple

$$
\sum M_P=
\left(\mathbf r_{G/P}\times m\mathbf a_G\right)_z
$$

La traslación puede ser rectilínea o curvilínea. En ambos casos se conservan las relaciones anteriores; sólo cambia la dirección de la aceleración del cuerpo.

### 3.3. Cinética de la rotación alrededor de un punto fijo

Consideremos un eslabón que gira en el plano alrededor de una articulación fija $O$. Su movimiento queda descrito por la posición angular $\theta$, la velocidad angular $\omega=\dot\theta$ y la aceleración angular $\alpha=\ddot\theta$.

La aceleración del centro de masa puede escribirse como

$$
\mathbf a_G=
\boldsymbol{\alpha}\times\mathbf r_{G/O}
+
\boldsymbol{\omega}\times
\left(\boldsymbol{\omega}\times\mathbf r_{G/O}\right)
$$

Para el movimiento plano, esta expresión también puede interpretarse mediante sus componentes tangencial y normal:

$$
a_{G,t}=\alpha r_{G/O},
\qquad
a_{G,n}=\omega^2r_{G/O}
$$

La componente tangencial es perpendicular a la línea $OG$; la normal apunta hacia el pivote $O$.

Como $O$ es un punto fijo, podemos utilizar la ecuación de momentos desarrollada en la Sección 2:

$$
\boxed{\sum M_O=I_O\alpha}
$$

donde

$$
I_O=I_G+mr_{G/O}^{2}
$$

es el momento de inercia de masa respecto al eje perpendicular al plano que pasa por $O$.

**¿Por qué conviene tomar momentos respecto al pivote?** Si la articulación es ideal y no transmite un par de reacción, las fuerzas que ejerce en $O$ no producen momento respecto a ese mismo punto. De este modo, podemos determinar un par aplicado o una aceleración angular sin introducir inicialmente las componentes de la reacción del apoyo.

No obstante, las ecuaciones de fuerzas siguen siendo necesarias cuando se desean calcular dichas reacciones:

$$
\sum F_x=ma_{Gx},
\qquad
\sum F_y=ma_{Gy}
$$

Es importante observar que incluso cuando $\alpha=0$, el centro de masa puede tener aceleración normal si $\omega\ne0$. Por tanto, **una velocidad angular constante no implica que la resultante de fuerzas sea nula**.

### 3.4. Cinética del movimiento plano general

En el movimiento plano general, el cuerpo puede trasladarse y girar simultáneamente. Un ejemplo característico es el eslabón acoplador de un mecanismo de cuatro barras.

Si se conoce la aceleración de un punto $A$ del cuerpo, la aceleración del centro de masa se obtiene mediante la relación cinemática

$$
\mathbf a_G=
\mathbf a_A+
\boldsymbol{\alpha}\times\mathbf r_{G/A}
+
\boldsymbol{\omega}\times
\left(\boldsymbol{\omega}\times\mathbf r_{G/A}\right)
$$

Una vez conocidas las componentes de $\mathbf a_G$ y la aceleración angular $\alpha$, se aplican las tres ecuaciones:

$$
\boxed{
\begin{aligned}
\sum F_x&=ma_{Gx}\\
\sum F_y&=ma_{Gy}\\
\sum M_G&=I_G\alpha
\end{aligned}
}
$$

En este caso no existe, en general, un pivote fijo respecto al cual podamos simplificar automáticamente la ecuación de momentos a $\sum M=I\alpha$. El centro de masa suele ser la referencia más conveniente.

En mecanismos articulados, las acciones desconocidas pueden incluir las componentes de las fuerzas en las uniones entre eslabones y los pares transmitidos por los actuadores. Para analizar un mecanismo completo, se plantean las ecuaciones de cada eslabón y se incorporan las relaciones de acción y reacción entre sus articulaciones.

> **Precaución:** el centro instantáneo de rotación es una herramienta cinemática útil para el análisis de velocidades, pero no necesariamente es un punto fijo ni tiene aceleración nula. No debe utilizarse como pivote fijo en la ecuación $\sum M_O=I_O\alpha$ sin verificar las condiciones correspondientes.

### 3.5. Diagramas de cuerpo libre y representación del movimiento

Antes de escribir las ecuaciones de Newton–Euler es necesario **aislar el cuerpo** que se desea analizar y representar todas las acciones externas que actúan sobre él. Esta representación se denomina *diagrama de cuerpo libre* (DCL).

En un eslabón de un mecanismo plano, el DCL puede incluir:

- **Peso** $W=mg$, aplicado en el centro de masa $G$, bajo la aproximación de un campo gravitatorio uniforme.
- **Reacciones en las articulaciones**, por ejemplo, las componentes $A_x$ y $A_y$ de la fuerza ejercida por un pasador ideal ubicado en $A$.
- **Fuerzas de contacto**, según las características de los pares cinemáticos y las hipótesis sobre fricción.
- **Pares externos**, como un par motor aplicado al eslabón.

Para complementar el DCL es útil representar, por separado, la **información cinemática** del cuerpo: la aceleración del centro de masa $\mathbf a_G$, la aceleración angular $\alpha$ y, cuando sea necesaria, la velocidad angular $\omega$.

Estas aceleraciones **no son fuerzas externas** y, por tanto, no deben añadirse al DCL como si lo fueran. Aparecen en el lado derecho de las ecuaciones de Newton–Euler. Si más adelante se emplea un diagrama cinético o el principio de D'Alembert, habrá que distinguir explícitamente entre las acciones reales y los términos de inercia introducidos por esa formulación.

Para elaborar correctamente un DCL, debemos recordar que las fuerzas internas del mecanismo pueden convertirse en **fuerzas externas del eslabón aislado**. Por ejemplo, la fuerza transmitida por una articulación es interna al mecanismo completo, pero externa al eslabón individual que estamos analizando.

### 3.6. Procedimiento general de análisis cinético

Para resolver un problema de cinética de un eslabón con movimiento plano, proponemos seguir estos pasos:

1. **Identificar y aislar el cuerpo.** Determinar qué eslabón o conjunto de cuerpos se analizará y reconocer si presenta traslación, rotación alrededor de un punto fijo o movimiento plano general.
2. **Elaborar el diagrama de cuerpo libre.** Representar el peso, las acciones de las articulaciones, otras fuerzas externas y los pares aplicados. Definir sentidos positivos para las fuerzas desconocidas y los momentos.
3. **Determinar la información cinemática.** Obtener $\mathbf a_G$ y $\alpha$ mediante las relaciones estudiadas en cinemática. Incluir $\omega$ cuando intervenga en el cálculo de aceleraciones.
4. **Seleccionar las ecuaciones de movimiento.** Aplicar $\sum F_x=ma_{Gx}$, $\sum F_y=ma_{Gy}$ y una ecuación de momentos respecto a un punto conveniente. Justificar cualquier simplificación.
5. **Resolver e interpretar.** Calcular las fuerzas y los pares desconocidos; verificar unidades y signos. Un resultado negativo indica que el sentido real es opuesto al supuesto inicialmente.

Cuando se analiza un mecanismo con varios eslabones, el procedimiento se repite para cada cuerpo, teniendo en cuenta que las fuerzas de interacción entre dos eslabones aparecen con sentidos opuestos en sus respectivos diagramas de cuerpo libre.

La siguiente sección estará dedicada a aplicar este procedimiento a situaciones representativas del análisis de mecanismos planos, con énfasis en el cálculo de reacciones y pares de accionamiento.

## 4. Aplicaciones a mecanismos planos

En las secciones anteriores establecimos las ecuaciones de Newton–Euler y sus principales simplificaciones para el movimiento plano. Ahora las aplicaremos a dos situaciones representativas: un eslabón que gira alrededor de un pivote fijo y una barra con movimiento plano general.

En ambos ejemplos se considera un cuerpo rígido uniforme, con articulaciones y contactos ideales. Supondremos que las posiciones, velocidades y aceleraciones ya se conocen a partir del **análisis cinemático**, por lo que los problemas se plantean desde la perspectiva de la **dinámica inversa**.

### 4.1. Ejemplo 1. Par motor y reacciones en un eslabón con pivote fijo

**Planteamiento.** Una barra delgada, homogénea, de masa $m=3\ \mathrm{kg}$ y longitud $L=0.80\ \mathrm{m}$ gira en un plano vertical alrededor de un pasador fijo en $O$, situado en uno de sus extremos. Un motor aplica un par $M$ al eslabón.

En el instante considerado, la barra forma un ángulo $\theta=30^\circ$ con el eje horizontal positivo y tiene velocidad angular $\omega=3\ \mathrm{rad/s}$ y aceleración angular $\alpha=2\ \mathrm{rad/s^2}$, ambas positivas en sentido antihorario.

Determinar:

1. El par motor $M$ necesario para producir la aceleración angular indicada.
2. Las componentes $O_x$ y $O_y$ de la reacción en el pasador.

Utilizaremos $g=9.81\ \mathrm{m/s^2}$ y consideraremos despreciable la fricción del pivote.

**Paso 1. Propiedades de masa y acciones externas.** Por tratarse de una barra homogénea, su centro de masa se encuentra a una distancia $L/2$ del pivote. Su momento de inercia respecto a $O$ es

$$
I_O=I_G+m\left(\frac L2\right)^2
=\frac{mL^2}{12}+\frac{mL^2}{4}
=\frac{mL^2}{3}
$$

Por tanto,

$$
I_O=\frac{3(0.80)^2}{3}
=0.64\ \mathrm{kg\,m^2}
$$

En el diagrama de cuerpo libre actúan el peso $mg$ en $G$, las reacciones $O_x$ y $O_y$ en el pasador, y el par motor $M$.

**Paso 2. Ecuación de momentos respecto al pivote.** Tomamos como positivo el sentido antihorario. El peso produce un momento horario respecto a $O$, con brazo de palanca $(L/2)\cos\theta$. Como las reacciones pasan por $O$, no generan momento respecto a ese punto. Por tanto,

$$
\sum M_O=M-mg\frac L2\cos\theta=I_O\alpha
$$

Despejando el par motor,

$$
M=I_O\alpha+mg\frac L2\cos\theta
$$

y sustituyendo los datos,

$$
M=0.64(2)+3(9.81)(0.40)\cos 30^\circ
$$

De donde obtenemos

$$
\boxed{M\approx 11.47\ \mathrm{N\,m}}
$$

El signo positivo indica que el motor debe aplicar un par antihorario en el instante considerado.

**Paso 3. Aceleración del centro de masa.** Para determinar las reacciones es necesario conocer las componentes de $\mathbf a_G$. En rotación alrededor de $O$ fijo:

$$
\mathbf a_G=
\boldsymbol\alpha\times\mathbf r_{G/O}
+
\boldsymbol\omega\times
(\boldsymbol\omega\times\mathbf r_{G/O})
$$

Al proyectar sobre los ejes cartesianos,

$$
\begin{aligned}
a_{Gx}&=-\frac L2\alpha\sin\theta
-\frac L2\omega^2\cos\theta\\
a_{Gy}&=\frac L2\alpha\cos\theta
-\frac L2\omega^2\sin\theta
\end{aligned}
$$

Con los valores dados,

$$
\begin{aligned}
a_{Gx}&=-0.40(2)\sin30^\circ
-0.40(3^2)\cos30^\circ
\approx -3.52\ \mathrm{m/s^2}\\
a_{Gy}&=0.40(2)\cos30^\circ
-0.40(3^2)\sin30^\circ
\approx -1.11\ \mathrm{m/s^2}
\end{aligned}
$$

**Paso 4. Ecuaciones de fuerzas.** En la dirección horizontal sólo actúa la reacción del pasador, de modo que

$$
\sum F_x=O_x=ma_{Gx}
$$

y

$$
\boxed{O_x\approx -10.55\ \mathrm{N}}
$$

En la dirección vertical,

$$
\sum F_y=O_y-mg=ma_{Gy}
$$

Por tanto,

$$
O_y=m(a_{Gy}+g)
$$

y obtenemos

$$
\boxed{O_y\approx 26.11\ \mathrm{N}}
$$

**Interpretación.** El motor debe aplicar un par antihorario de aproximadamente $11.47\ \mathrm{N\,m}$. La reacción horizontal es negativa y, por tanto, actúa hacia la izquierda; la reacción vertical actúa hacia arriba. Nótese que para calcular el par bastó la ecuación de momentos respecto al pivote, pero las reacciones requirieron conocer también la velocidad angular, ya que esta contribuye a la aceleración normal del centro de masa.

### 4.2. Ejemplo 2. Análisis dinámico inverso de un mecanismo manivela-biela-corredera

**Planteamiento.** Consideremos un mecanismo manivela-biela-corredera que se mueve en un plano vertical, con una guía horizontal y articulaciones ideales sin fricción. La manivela $OA$ y la biela $AB$ son barras delgadas homogéneas; la corredera es un cuerpo de masa concentrada en $B$ para efectos del análisis plano.

En el instante estudiado, las coordenadas de las articulaciones, expresadas en metros, son

$$
O=(0,0),\qquad A=(0.18,0.24),\qquad B=(0.50,0)
$$

De esta forma, las longitudes de la manivela y la biela son $OA=0.30\ \mathrm m$ y $AB=0.40\ \mathrm m$, respectivamente. Las propiedades y condiciones de operación son:

| Magnitud | Valor |
| --- | --- |
| Masa de la manivela, $m_1$ | $1.0\ \mathrm{kg}$ |
| Masa de la biela, $m_2$ | $2.0\ \mathrm{kg}$ |
| Masa de la corredera, $m_3$ | $1.5\ \mathrm{kg}$ |
| Velocidad angular de la manivela, $\omega_1$ | $+2.0\ \mathrm{rad/s}$ |
| Aceleración angular de la manivela, $\alpha_1$ | $0\ \mathrm{rad/s^2}$ |
| Fuerza resistente sobre la corredera, $F_R$ | $20\ \mathrm N$ hacia $+x$ |

Tomaremos $g=9.81\ \mathrm{m/s^2}$, el eje $x$ positivo hacia la derecha, el eje $y$ positivo hacia arriba y los giros antihorarios como positivos. La fuerza resistente se opone al movimiento instantáneo de la corredera, que ocurre hacia la izquierda.

Se desea determinar las fuerzas transmitidas en las articulaciones, la reacción de la guía y el **par motor $M$** necesario para mantener el movimiento prescrito de la manivela.

**Paso 1. Recuperar los resultados del análisis cinemático.**

En un problema de dinámica inversa, la cinemática se resuelve antes de plantear las ecuaciones de fuerzas. Aquí presentamos sus resultados y recordamos brevemente las relaciones utilizadas.

Para la manivela, cuyo pivote $O$ es fijo,

$$
\begin{aligned}
\mathbf v_A&=\boldsymbol\omega_1\times\mathbf r_{A/O}
=(-0.48\,\mathbf i+0.36\,\mathbf j)\ \mathrm{m/s}\\
\mathbf a_A&=\boldsymbol\alpha_1\times\mathbf r_{A/O}
-\omega_1^2\mathbf r_{A/O}
=(-0.72\,\mathbf i-0.96\,\mathbf j)\ \mathrm{m/s^2}
\end{aligned}
$$

Para la biela, $\mathbf r_{B/A}=0.32\,\mathbf i-0.24\,\mathbf j$. Como la corredera sólo puede moverse horizontalmente, $v_{By}=a_{By}=0$. Al utilizar las ecuaciones de velocidad y aceleración relativas,

$$
\begin{aligned}
\mathbf v_B&=\mathbf v_A+
\boldsymbol\omega_2\times\mathbf r_{B/A}\\
\mathbf a_B&=\mathbf a_A+
\boldsymbol\alpha_2\times\mathbf r_{B/A}
-\omega_2^2\mathbf r_{B/A}
\end{aligned}
$$

se obtienen

$$
\begin{aligned}
\omega_2&=-1.125\ \mathrm{rad/s}\\
\alpha_2&=+2.051\ \mathrm{rad/s^2}\\
\mathbf a_B&=-0.6328\,\mathbf i\ \mathrm{m/s^2}
\end{aligned}
$$

Los centros de masa de ambas barras se encuentran en sus puntos medios. Aplicando la relación de aceleraciones a cada cuerpo:

$$
\begin{aligned}
\mathbf a_{G_1}&=(-0.360\,\mathbf i-0.480\,\mathbf j)\ \mathrm{m/s^2}\\
\mathbf a_{G_2}&=(-0.6764\,\mathbf i-0.480\,\mathbf j)\ \mathrm{m/s^2}
\end{aligned}
$$

Estos resultados cinemáticos son los datos necesarios para resolver la parte cinética.

**Paso 2. Analizar la corredera.**

Denotaremos por $\mathbf B=B_x\mathbf i+B_y\mathbf j$ la **fuerza que la corredera ejerce sobre la biela** en la articulación $B$. Por acción y reacción, la biela ejerce sobre la corredera la fuerza $-\mathbf B$. Sobre esta última actúan además la fuerza resistente $F_R$, su peso y la reacción vertical $N$ de la guía.

En la dirección horizontal,

$$
\sum F_x=-B_x+F_R=m_3a_{Bx}
$$

Por tanto,

$$
B_x=F_R-m_3a_{Bx}
=20-1.5(-0.6328)
$$

y obtenemos

$$
\boxed{B_x\approx 20.95\ \mathrm N}
$$

En la dirección vertical, $a_{By}=0$, de modo que

$$
-B_y+N-m_3g=0
\quad\Longrightarrow\quad
N=m_3g+B_y
\tag{4.1}
$$

La componente $B_y$ se determinará mediante el análisis de la biela.

**Paso 3. Analizar la biela.**

Sea $\mathbf A=A_x\mathbf i+A_y\mathbf j$ la fuerza que **la manivela ejerce sobre la biela** en $A$. Las fuerzas externas sobre la biela son $\mathbf A$, $\mathbf B$ y su peso $m_2g$, aplicado en $G_2$.

Las ecuaciones de fuerzas son

$$
\begin{aligned}
A_x+B_x&=m_2a_{G_2x}\\
A_y+B_y-m_2g&=m_2a_{G_2y}
\end{aligned}
$$

De la primera ecuación,

$$
A_x=2(-0.6764)-20.9492
$$

de donde

$$
\boxed{A_x\approx -22.30\ \mathrm N}
$$

La segunda ecuación proporciona

$$
A_y+B_y=2(-0.480)+2(9.81)=18.66\ \mathrm N
\tag{4.2}
$$

Para completar el sistema, aplicamos la ecuación de momentos respecto a $G_2$. Los vectores de posición de las articulaciones respecto al centro de masa son

$$
\mathbf r_{A/G_2}=-0.16\,\mathbf i+0.12\,\mathbf j,
\qquad
\mathbf r_{B/G_2}=0.16\,\mathbf i-0.12\,\mathbf j
$$

El peso no produce momento respecto a $G_2$. Como la biela es una barra delgada homogénea,

$$
I_{G_2}=\frac{m_2(AB)^2}{12}
=\frac{2(0.40)^2}{12}
=0.02667\ \mathrm{kg\,m^2}
$$

Por tanto,

$$
\sum M_{G_2}
=0.16(B_y-A_y)+0.12(B_x-A_x)
=I_{G_2}\alpha_2
$$

Sustituyendo los valores conocidos,

$$
0.16(B_y-A_y)+0.12(20.9492+22.3020)
=0.02667(2.0508)
\tag{4.3}
$$

La solución simultánea de las ecuaciones (4.2) y (4.3) es

$$
\boxed{
A_y\approx 25.38\ \mathrm N,
\qquad
B_y\approx-6.72\ \mathrm N
}
$$

Finalmente, al regresar a la corredera y utilizar la ecuación (4.1),

$$
N=1.5(9.81)-6.7183
$$

obtenemos la reacción de la guía:

$$
\boxed{N\approx 8.00\ \mathrm N}
$$

El resultado positivo es compatible con la dirección supuesta para la reacción normal.

**Paso 4. Analizar la manivela y calcular el par motor.**

Sobre la manivela actúan su peso, la reacción del pivote fijo $O$, el par motor $M$ y la fuerza $-\mathbf A$ ejercida por la biela en $A$.

Para calcular $M$ conviene sumar momentos respecto a $O$, ya que las reacciones del pivote no producen momento alrededor de ese punto:

$$
\sum M_O=
M-0.18A_y+0.24A_x
-m_1g(0.09)
=I_O\alpha_1
$$

Como la manivela gira con velocidad angular constante, $\alpha_1=0$. Despejando,

$$
M=0.18A_y-0.24A_x+m_1g(0.09)
$$

y sustituyendo los valores calculados,

$$
M=0.18(25.3783)-0.24(-22.3020)+1(9.81)(0.09)
$$

Por tanto,

$$
\boxed{M\approx 10.80\ \mathrm{N\,m}}
$$

El par motor es **antihorario**, según la convención adoptada. Observemos que, aunque $\alpha_1=0$, el par necesario **no es nulo**: debe compensar los momentos producidos por las fuerzas transmitidas a través de la biela y por el peso de la manivela.

Si además se desean las reacciones en el pivote $O$, las ecuaciones de fuerzas de la manivela proporcionan

$$
\begin{aligned}
O_x-A_x&=m_1a_{G_1x}\\
O_y-A_y-m_1g&=m_1a_{G_1y}
\end{aligned}
$$

de donde

$$
\boxed{
O_x\approx-22.66\ \mathrm N,
\qquad
O_y\approx34.71\ \mathrm N
}
$$

**Interpretación del resultado.** El análisis se resolvió siguiendo la transmisión de fuerzas desde la corredera hacia la biela y, finalmente, hacia la manivela. Cada eslabón se aisló mediante su propio diagrama de cuerpo libre, y las fuerzas comunes a dos cuerpos aparecieron con sentidos opuestos. Este procedimiento enlaza directamente los resultados del análisis cinemático con el cálculo del par que debe proporcionar el accionamiento.

### 4.3. Del análisis de un eslabón al mecanismo completo

El ejemplo anterior muestra que la cinética de un mecanismo plano puede abordarse mediante **ecuaciones de Newton–Euler para cada eslabón**, complementadas con las relaciones de acción y reacción entre cuerpos conectados.

En nuestro mecanismo, las condiciones de la guía y el orden elegido permitieron resolver las incógnitas de forma progresiva: primero la corredera, después la biela y finalmente la manivela. En otros mecanismos, como el de cuatro barras, puede resultar más conveniente plantear y resolver simultáneamente el sistema de ecuaciones de todos los eslabones móviles.

En ambos casos, la idea fundamental es la misma: **la cinemática proporciona las aceleraciones; la cinética relaciona esas aceleraciones con las fuerzas y los pares que producen el movimiento**.
