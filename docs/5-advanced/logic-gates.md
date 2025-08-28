# Logic Gates

> [!INFO]
> I don't even know myself.

## NOT Chip

- Output is always the opposite of the input
- Input low → Output high
- Input high → Output low

## AND Chip

- Output is 1 only if **all inputs are 1**
- Any 0 input makes the output 0

## NAND Chip

- Opposite of AND
- Output is 0 only if **all inputs are 1**
- Otherwise output is 1

## OR Chip

- Output is 1 if **at least one input is 1**
- Output is 0 only if **all inputs are 0**

## NOR Chip

- Opposite of OR
- Output is 1 only if **all inputs are 0**
- Any 1 input makes the output 0

## XOR Chip

- Output is 1 if the number of 1 inputs is **odd**
- With 3 inputs → Output is 1 for 1 or 3 highs

## XNOR Chip

- Opposite of XOR
- Output is 1 if the number of 1 inputs is **even**
- With 3 inputs → Output is 1 for 0 or 2 highs

## PAL Chip

- Programmable logic device
- Can perform many logic functions in one chip
- Uses a Karnaugh map: inputs select a square, and the square’s value sets the output

## Schmitt Trigger Chip

- Cleans up noisy signals
- Output = 0 if input < 1V
- Output = 1 if input ≥ 3V
- Between 1V and 3V → output stays the same
- Prevents oscillation in undefined voltage ranges

## D Flip-Flop Chip

- Stores the D input value on the rising edge of the clock
- Output keeps the stored value until the next clock edge
- Works like a 1-bit memory cell

## Oscillator Chip

- Outputs a square wave signal
- Frequency depends on input voltage
- Higher voltage → higher frequency

## JK Flip-Flop Chip

- Stores or changes output based on inputs J and K when clock rises
- J=1 K=0 → Output = 1
- J=0 K=1 → Output = 0
- J=0 K=0 → Output stays the same
- J=1 K=1 → Output toggles each clock pulse

## OpAmp Chip

- High-gain amplifier, used here as a comparator
- Compares + input vs – input
- If + > – → Output = 5V (1)
- If – > + → Output = 0V (0)

## PID Regulator Chip

- Controller for managing processes
- Adjustable constants: Kp, Ki, Kd
- Start with only Kp and set Ki and Kd to 0 if unsure

## Amplifier Chip

- Boosts signal voltage by a set factor
- Output range: 0 to 5V max
