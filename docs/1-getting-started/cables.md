<script setup>
import { usePixelatedImages } from '../.vitepress/theme/usePixelatedImages'
usePixelatedImages()
</script>

# Cables

> [!TIP]
> This wiki is exclusively for the
> [jrddunbr](https://github.com/age-series/ElectricalAge) fork of electrical age

ELN comes with different voltage tiers which are also color coded

| Tier          | Voltage       | Ampere        | Power         | Serial Resistance | Image         |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| Low Voltage | 50V | 20A | 1kW | 25mΩ | ![Low Voltage Cable](/cables/lowvoltagecable.png) |
| Medium Voltage | 200V | 10A | 2kW | 100mΩ | ![Medium Voltage Cable](/cables/mediumvoltagecable.png) |
| High Voltage | 800V | 6.25A | 5kW | 200mΩ | ![High Voltage Cable](/cables/highvoltagecable.png) |
| Extreme Voltage | 3200V | 4.69A | 15kW | 133mΩ | ![Very High Voltage Cable](/cables/veryhighvoltagecable.png) |
| Low Current | 120kV | 5A | 600kW | 20mΩ | ![Low Current Cable](/cables/lowcurrentcable.png) |
| Medium Current | 120kV | 20A | 2.4MW | 20mΩ | ![Medium Current Cable](/cables/mediumcurrentcable.png) |
| High Current | 120kV | 100A | 12MW | 20mΩ | ![High Current Cable](/cables/highcurrentcable.png)|
| Creative | 51.2kV | 15kA | 768MW | <0mΩ | ![Creative Cable](/cables/creativecable.png) |

Each tier has their corresponding relays, switches and fuses

# Integrity

Cables which carry more load than designed heat up and at 180°C start to break.
Switches and cables however dont have a internal temperature and only get destroyed when supplied to much voltage.

# Config

The voltage, ampere and power for each tier can be changed with a multiplier in the config.

By default electrical componens just break and drop, however for someone seeking a challange it can also be set to explode and destroy blocks upon breaking.