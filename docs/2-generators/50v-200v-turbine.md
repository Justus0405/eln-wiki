# 50V to 200V Turbine

> [!INFO]
> Energy can neither be created nor destroyed, only altered in form.

## About

The heat turbine moves heat energy from the hot red side to the cool blue side. This process generates electricity, which can be drawn from either side.

To produce energy, place a Stone Heat Furnace on the red side and a Thermal Dissipator on the blue side.

The bigger the temperature difference, the more energy is produced. You can even hear this in the higher pitch of the engine sound.

Be careful not to run it too fast or the machine will fail violently.

## Usage

To draw power, simply connect an electrical load. The turbine will pass heat through and generate electricity to meet the demand. A heat dissipator should be on the other side to keep the temperature balanced, but you can also connect another turbine to pull out even more energy. This is tricky and requires careful setup.

Every machine and generator has only one terminal because the other terminal is already grounded. This reduces the need for extra wiring.

## Efficiency

When converting heat into electricity, up to 28.16% of the energy is usable while the rest is lost. For example, a basic heat furnace produces 1000W of heat, which can give up to 281.6W of electrical power.

- Heat furnace (no upgrades): 281.6W
- Heat furnace (one upgrade): 422.4W
- Heat furnace (two upgrades): 563.2W
- Liquid heat furnace with small engine: 1,408W
- Liquid heat furnace with medium engine: 2,816W
- Liquid heat furnace with large engine: 7,040W

Higher heat values require more turbines and more cooling. Make sure you have enough active heat dissipators to keep things efficient.

## Example Setup

<img src="/50v-200v-turbine/200v-turbine.png" class="rounded" />

Three 200V turbines are connected and controlled by an electrical probe.

The turbines receive heat from stone furnaces set to external mode and are cooled by 200V active thermal dissipators powered from a manually controlled source.
This setup prevents the turbines from overheating by keeping main grid and cooling grid seperate in case too much power is drawn from the main grid the turbines still get cooled.

| Stone Heat Furnace                                       | Electrical probe                                       |
| -------------------------------------------------------- | ------------------------------------------------------ |
| <img src="/50v-200v-turbine/200v-turbine-furnace.png" /> | <img src="/50v-200v-turbine/200v-turbine-probe.png" /> |

## Progression

Your 50V heat turbine works well early on, and the 200V upgrade gets you through the mid game. But eventually that is not enough. You could chain multiple turbines, but that quickly becomes unrealistic. At some point you will need to move on from turbines and start generating power with Generators.
