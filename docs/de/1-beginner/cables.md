# Kabel

> [!INFO]
> Dieses Wiki bezieht sich ausschließlich auf den
> [jrddunbr](https://github.com/age-series/ElectricalAge) Fork von Electrical Age

## Kabel-Stufen

ELN bietet verschiedene Spannungsstufen, die farblich codiert sind.

| Stufe             | Spannung | Stromstärke | Leistung | Serienwiderstand | Bild                                                             |
| ----------------- | -------- | ----------- | -------- | ---------------- | ---------------------------------------------------------------- |
| Niederspannung    | 50V      | 20A         | 1kW      | 25mΩ             | <img src="/cables/lowvoltagecable.png" class="pixelated" />      |
| Mittlere Spannung | 200V     | 10A         | 2kW      | 100mΩ            | <img src="/cables/mediumvoltagecable.png" class="pixelated" />   |
| Hochspannung      | 800V     | 6.25A       | 5kW      | 200mΩ            | <img src="/cables/highvoltagecable.png" class="pixelated" />     |
| Extreme Spannung  | 3200V    | 4.69A       | 15kW     | 133mΩ            | <img src="/cables/veryhighvoltagecable.png" class="pixelated" /> |
| Niedriger Strom   | 120kV    | 5A          | 600kW    | 20mΩ             | <img src="/cables/lowcurrentcable.png" class="pixelated" />      |
| Mittlerer Strom   | 120kV    | 20A         | 2,4MW    | 20mΩ             | <img src="/cables/mediumcurrentcable.png" class="pixelated" />   |
| Hoher Strom       | 120kV    | 100A        | 12MW     | 20mΩ             | <img src="/cables/highcurrentcable.png" class="pixelated" />     |
| Kreativ           | 51,2kV   | 15kA        | 768MW    | <0mΩ             | <img src="/cables/creativecable.png" class="pixelated" />        |

Jede Stufe hat entsprechende Relais, Schalter und Sicherungen.

## Integrität

Kabel, die mehr Last führen als vorgesehen, erhitzen sich und beginnen bei etwa 180 °C kaputt zu gehen.
[Schalter und Relais](/1-beginner/switches-and-relays.md) haben jedoch keine interne Temperatur und werden nur zerstört, wenn sie mit zu hoher Spannung versorgt werden.

## Widerstand

Wenn Strom über große Distanzen transportiert wird, geht durch den Widerstand der Kabel Spannung verloren.
Um diese Verluste zu minimieren, kann die Spannung mithilfe eines [Transformators](/1-beginner/transformers.md) vor der Übertragung erhöht werden.

## Konfiguration

Die Spannung, Stromstärke und Leistung jeder Stufe kann über einen Multiplikator in der Konfigurationsdatei angepasst werden.

Standardmäßig droppen kaputte elektrische Komponenten einfach wieder als Item.
Wer jedoch eine Herausforderung sucht, kann einstellen, dass sie [explodieren](/5-advanced/config.html#cable-explosions) und umliegende Blöcke zerstören.