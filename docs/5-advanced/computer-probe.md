# Eln Computer Probe

> [!INFO]
> The Eln Computer Probe is a block that lets a computer read and control signals passing through it, including wireless signals within range.

## Functions

The probe does not have an internal API. Its functions are listed below:

- `signalSetDir("side","in" or "out")`
  Sets the direction a signal flows on the chosen side. Both arguments must be strings and are case sensitive. Always returns nil. This lets you set or disable a value without losing it. You cannot read and write voltage on the same port at once. Switch modes as needed or dedicate ports for input and output.

- `signalGetDir("side")`
  Tells you if the chosen side is in "in" or "out" mode.

- `signalGetIn("side")`
  Reads the signal strength as a percentage. Multiply by 5 to get the voltage in volts.

- `signalSetOut("side", number)`
  If the side is set to "out" you can set the signal strength as a percentage. If it is set to "in" the voltage will not change until switched to "out". Divide by 5 to set the exact voltage.

- `wirelessGet("channel name")`
  Gets the wireless signal strength as a percentage, using the channel name instead of a side.

- `wirelessSet("channel name", number)`
  Sets the wireless signal strength for the chosen channel. Uses the same percentage system. Divide by 5 to set the exact voltage.

- `wirelessRemove("channel name")`
  Removes the chosen wireless channel.

- `wirelessRemoveAll()`
  Clears all wireless channels in the block. This stops all wireless interaction with one command.

## Directions

When you place a probe, six sides are labeled on the block. These labels do not change no matter how you place it. They are used in functions to pick which side to use. The naming follows transistor conventions, with P-type as positive and N-type as negative. The letters x, y, and z mark the axis.

- XN faces West
- XP faces East
- YN faces Down
- YP faces Up
- ZN faces North
- ZP faces South

## Sample Code

Here are some ways to use the probe. At the end you will see a full working script.

### Configuring I/O

Each of the 6 sides can be set for input or output.

```lua
-- South side outputs voltage
probe.signalSetDir("ZP","out")
-- North side reads voltage
probe.signalSetDir("ZN","in")
```

### Reading voltage

`signalGetIn()` returns a number from 0 to 1. Multiply by 5 to convert it to volts.

```lua
-- North side voltage
local voltage = probe.signalGetIn("ZN") * 5
-- Half of the input value
local output = voltage / 2
```

### Writing voltage

`signalSetOut()` takes a side and a number between 0 and 1. This represents 0 to 5 volts.

```lua
-- South side outputs half the North side value
probe.signalSetOut("ZP", output/5)
```

### Full example

You can save this in a `.lua` file using the edit command. It will run once. To keep halving the voltage, you would need to add a loop.

```lua
-- Load the component library and get the probe object
local component = require("component")
local probe = component.ElnProbe

-- Configure the probe sides
-- Set the South side (ZP) to output voltage
probe.signalSetDir("ZP", "out")
-- Set the North side (ZN) to input voltage
probe.signalSetDir("ZN", "in")

-- Read the voltage from the North side
-- signalGetIn() returns a value between 0 and 1
-- Multiply by 5 to convert it to volts
local voltage = probe.signalGetIn("ZN") * 5

-- Process the voltage
-- Here we just take half of the input voltage
local output = voltage / 2

-- Write the processed voltage to the South side
-- signalSetOut() expects a value between 0 and 1
-- Divide by 5 to convert volts back to the 0-1 range
probe.signalSetOut("ZP", output / 5)

```

## ComputerCraft

In ComputerCraft the code is the same, except the probe proxy is created differently.

```lua
local probe = peripheral.find("ElnProbe")
```

So the full script looks like this:

```lua
-- Find the probe peripheral
local probe = peripheral.find("ElnProbe")

-- Configure sides
probe.signalSetDir("ZP", "out")
probe.signalSetDir("ZN", "in")

-- Read voltage from North side
local voltage = probe.signalGetIn("ZN") * 5

-- Process the voltage
local output = voltage / 2

-- Output processed voltage to South side
probe.signalSetOut("ZP", output / 5)

```
