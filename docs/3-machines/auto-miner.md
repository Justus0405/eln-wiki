# Auto Miner

> [!INFO]
> Don't mine at night!
> We have machinery for this!

## About

The Auto Miner is a multiblock machine. When powered with 800V and supplied with a drill head and mining pipes, it digs a shaft beneath itself and collects only ore blocks from a wide radius. This prevents landscape damage and makes the shaft easy to cover.

## Usage

Prepare a drill head, mining pipes, and a chest. Connect 800V to one of the marked legs. The miner will light up when active. Place a chest or other storage between the two rear legs. Open the GUI and insert the drill head and pipes into their slots. The miner will then start digging. The screen shows the shaft shape and progress. If the chest is missing or pipes run out, the miner shows an error.

## Operations

The miner first digs a 1x1 shaft for eight levels, then a cross for four levels, then a 3x3 shaft. It also mines ores from a cone expanding out to a radius of 10, then continues downward as a cylinder.

If the drill is removed, the machine retracts its pipes. If pipes or the miner are broken while deployed, the pipes drop into the shaft as items.

## Power Usage

- 2kW with fast drill
- 1kW with average drill
- 500W with cheap drill
- 50W when extending or retracting pipes
- Mining power use is tripled with silk touch

## Silk Touch Mode

This mode costs three times more energy and takes twice as long but drops blocks as if mined with a silk touch pickaxe.
