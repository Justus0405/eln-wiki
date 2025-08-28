# Signaling

> [!INFO]
> Signal cables move control signals **from** probes, buttons, switches and trimmers **to** relays, generators, logic gates and signal processors.
> The signals range from 0V to 5V.

## About

Signal cables carry electrical signals created by different blocks in Electrical Age. They can send both digital and analog signals. These signals can directly control devices such as [Relays](/1-beginner/switches-and-relays.md), Stone Heat Furnaces, and Signal Processors. With these systems signal cables can also control generators, lighting, mob farms, traps and many other setups.

## Usage

Signal cables follow the same placement rules as electrical cables. They do not connect to electrical cables, so they can safely run next to high voltage lines. Signal cables have no resistance, so length does not matter when building circuits. Devices that connect to signal cables always use a specific side for output. If a device does not connect to a nearby signal cable after being placed, rotate it by right clicking while holding the wrench key (default C).

## Technical

The strength of a signal in a cable is shown as a percentage. At 0% the cable carries 0V, at 100% it carries 5V. Signal switches, buttons and other digital devices send either 0V or 5V depending on their state. Other devices, such as electrical probes, can send any value between 0V and 5V. A group of connected signal cables works as a network. If more than one signal source is connected to the same network the cables use the average value of all sources. For example, if two signal switches are connected and only one is on, the network value is 50% or 2.5V.