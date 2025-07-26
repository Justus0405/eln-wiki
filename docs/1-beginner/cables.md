# Cables

> [!INFO]
> This wiki is exclusively for the
> [jrddunbr](https://github.com/age-series/ElectricalAge) fork of electrical age

ELN comes with different voltage tiers which are also color coded.

| Tier            | Voltage | Ampere | Power | Serial Resistance | Image                                                            |
| --------------- | ------- | ------ | ----- | ----------------- | ---------------------------------------------------------------- |
| Low Voltage     | 50V     | 20A    | 1kW   | 25mΩ              | <img src="/cables/lowvoltagecable.png" class="pixelated" />      |
| Medium Voltage  | 200V    | 10A    | 2kW   | 100mΩ             | <img src="/cables/mediumvoltagecable.png" class="pixelated" />   |
| High Voltage    | 800V    | 6.25A  | 5kW   | 200mΩ             | <img src="/cables/highvoltagecable.png" class="pixelated" />     |
| Extreme Voltage | 3200V   | 4.69A  | 15kW  | 133mΩ             | <img src="/cables/veryhighvoltagecable.png" class="pixelated" /> |
| Low Current     | 120kV   | 5A     | 600kW | 20mΩ              | <img src="/cables/lowcurrentcable.png" class="pixelated" />      |
| Medium Current  | 120kV   | 20A    | 2.4MW | 20mΩ              | <img src="/cables/mediumcurrentcable.png" class="pixelated" />   |
| High Current    | 120kV   | 100A   | 12MW  | 20mΩ              | <img src="/cables/highcurrentcable.png" class="pixelated" />     |
| Creative        | 51.2kV  | 15kA   | 768MW | <0mΩ              | <img src="/cables/creativecable.png" class="pixelated" />        |

Each tier has their corresponding relays, switches and fuses.

# Integrity

Cables which carry more load than designed heat up and at ~180°C start to break.
[Switches and relays](/1-beginner/switches-and-relays.md) however dont have a internal temperature and only get destroyed when supplied to much voltage.

# Resistance

As electricity travels over long distances, some voltage is lost due to resistance in the cables. To minimize these losses, the voltage can be increased using a [transformer](/1-beginner/transformers.md) before transmission.

# Config

The voltage, ampere and power for each tier can be changed with a multiplier in the config.

By default electrical componens just break and drop, however for someone seeking a challange it can also be set to explode and destroy blocks upon breaking.
