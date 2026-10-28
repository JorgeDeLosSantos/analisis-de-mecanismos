# Problemas Unidad II

Los problemas están organizados utilizando la siguiente nomenclatura:

- **PI-NN**: cálculo de la ubicación del centro de masa y del momento de inercia de cuerpos rígidos.
- **NE-NN**: análisis dinámico de mecanismos usando las ecuaciones de Newton-Euler.

---

## Centro de masa y momentos de inercia

### PI-00 

En la figura se muestra una placa triangular de espesor delgado y homogénea. Utilice integración para determinar el centro de masa y los momentos de inercia $I_{xx}$, $I_{yy}$, $I_{zz}$.

<img src="/figures/u2/PI-00.svg">

### PI-01

En la figura se muestra una placa semicircular de espesor delgado y homogénea. Utilice integración para determinar el centro de masa y los momentos de inercia $I_{xx}$, $I_{yy}$, $I_{zz}$.

<img src="/figures/u2/PI-01.svg">

### PI-10

Calcule $I_{xx}$, $I_{yy}$ e $I_{zz}$ para el componente mostrado en la figura, el cual está fabricado con una lámina de acero ($\rho = 7 850 \text{ kg/m}^3$) de espesor delgado (3 mm) y uniforme. Las unidades de longitud están dadas en metros.

<img src="/figures/u2/PI-10.svg">

### PI-11

Calcule $I_{xx}$, $I_{yy}$ e $I_{zz}$ para el componente mostrado en la figura, el cual está fabricado con una lámina de aluminio ($\rho = 2 700 \text{ kg/m}^3$) de espesor delgado (4 mm) y uniforme. Las unidades de longitud están dadas en metros.

<img src="/figures/u2/PI-11.svg">

### PI-12

El cuerpo mostrado en la figura está compuesto por una barra delgada y una placa circular anular. Determine los momentos de inercia de masa del cuerpo compuesto respecto a dos ejes perpendiculares al plano de la figura: uno que pasa por el punto $O$ y otro que pasa por el centro de masa $G$ del conjunto. La barra tiene una densidad lineal de masa de $\rho_L = 0.154\ \text{kg/m}$, mientras que la placa circular anular tiene una densidad superficial de masa de $\rho_A = 39\ \text{kg/m}^2$. La longitud de la barra es de $0.15\ \text{m}$, el diámetro exterior de la placa es de $0.05\ \text{m}$ y su diámetro interior es de $0.04\ \text{m}$.

<img src="/figures/u2/PI-12.svg">

## Ecuaciones de Newton-Euler

:::{note} Importante
Para los siguientes ejercicios, salvo que se especifique lo contrario, considere que todas las uniones son ideales, sin fricción, y que la gravedad actúa verticalmente hacia abajo. 
:::


### NE-00

En el instante mostrado la placa rectangular ($0.25 \text{m}\times0.15 \text{m}$) está rotando con una velocidad angular constante $\omega = 30 \text{ rad/s}$ en sentido antihorario. Determine las reacciones en el soporte de pasador y la fuerza $F$ necesaria para producir dicho movimiento. Considere que la placa tiene un espesor de $3 \text{ mm}$ y está fabricada con un acero cuya densidad es de $7 850 \text{ kg/m}^3$.

<img src="/figures/u2/rectangular_plate.svg">

### NE-10

En el instante mostrado, la barra $OA$ tiene una velocidad angular $\omega_2 = 10 \text{ rad/s}$ y una aceleración angular $\alpha_2 = 5 \text{ rad/s}^2$, ambas en sentido antihorario. Determine las componentes de la reacción en $O$ y el torque $\tau$ que debe aplicarse a la barra $OA$ para producir dicho movimiento.

Los centros de masa de las barras $OA$ y $AB$ se encuentran en sus respectivos puntos medios, mientras que el del bloque deslizante coincide con $B$. La tabla siguiente proporciona las masas y los momentos de inercia de masa de cada eslabón con respecto a un eje perpendicular al plano del movimiento que pasa por su centro de masa. Considere que $h=0.2 \text{ m}$.

| Eslabón | Longitud $(m)$ |  Masa $(\text{kg})$ |  $I_{G_i} (\text{ kg}\cdot\text{m}^2)$  | 
|:-----:|:------:|:--------:|:----:|
| $2$ | $0.15$ | $0.123$  | $2.563\times 10^{-4}$ |
| $3$ | $0.4$  | $0.318$  | $4.409\times 10^{-3}$ |
| $4$ | -      | $0.261$  | $4.183\times 10^{-5}$ |


<img src="/figures/u2/slider_crank_with_offset.svg">


### NE-11

En el instante mostrado, cuando $\theta_2 = 60°$, la barra $OA$ tiene una velocidad angular $\omega_2 = 60 \text{ rad/s}$ y una aceleración angular $\alpha_2 = 20 \text{ rad/s}^2$, ambas en sentido antihorario. Determine las componentes de la reacción en $O$ y el torque $\tau$ que debe aplicarse a la barra $OA$ para producir dicho movimiento.

Los centros de masa de las barras $OA$ y $AB$ se encuentran en sus respectivos puntos medios, mientras que el del bloque deslizante coincide con $B$. La tabla siguiente proporciona las masas y los momentos de inercia de masa de cada eslabón con respecto a un eje perpendicular al plano del movimiento que pasa por su centro de masa. Considere que $h=0.15 \text{ m}$.

| Eslabón | Longitud $(m)$ |  Masa $(\text{kg})$ |  $I_{G_i} (\text{ kg}\cdot\text{m}^2)$  | 
|:-----:|:------:|:--------:|:----:|
| $2$ | $0.1$ | $0.084$  | $8.207\times 10^{-5}$ |
| $3$ | $0.3$ | $0.240$  | $1.897\times 10^{-3}$ |
| $4$ | -     | $0.110$  | $9.926\times 10^{-6}$ |

<img src="/figures/u2/slider_crank_with_offset_general_torque.svg">

### NE-12

En el instante mostrado, la barra $OA$ gira con una velocidad angular $\omega_2 = 24\,\text{rad/s}$ y una aceleración angular $\alpha_2 = 7 \,\text{rad/s}^2$, ambas en sentido antihorario. Determine las componentes de las reacciones en las uniones de pasador, así como el torque $\tau$ que debe aplicarse a la barra $OA$ para producir dicho movimiento.

Considere que los eslabones son barras delgadas y homogéneas, cuyos centros de masa se encuentran en sus respectivos puntos medios. La tabla siguiente proporciona las masas de cada eslabón.

| Eslabón | Masa (kg) |
|:--------:|:------:|
| $2$ | $0.672$ |
| $3$ | $1.608$ |
| $4$ | $1.608$ |

<img src="/figures/u2/four_bar.svg">