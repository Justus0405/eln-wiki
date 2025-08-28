# Signal Processor

> [!INFO]
> Beep Boop.

## About

The signal processor can run many different calculations on signals. It has three inputs, called A, B, and C, shown with colored spots on its sides. Its single output is on the black side.

It works with floating point numbers. Each input is mapped to the range \[0,1], and the output is capped in the same way. For example, a 10V signal is read as 0.2. A function like `1 + A` would output 50V for any value of A. This is because 0V is read as 0, and negative inputs are not possible. The processor can handle very large values inside, but to export values without being capped you should divide them by a large number.

You can rotate the signal processor with a wrench.

To work, it needs a minimum amount of redstone placed in its interface.

## Example

Exact code is not shown, since figuring it out is part of the fun. Using data loggers will make the process easier.

Things you can do with the signal processor include:

- Controlling a set of generators, microwave receivers, or similar devices to keep voltage stable
- Calculating the open circuit voltage of a battery from its closed circuit voltage and power use
- Keeping batteries charged without damaging them
- Tracking power use
- Many more tasks

## Functions

### Arithmetic

The Signal Processor can do addition (+), subtraction (-), multiplication (\*), division (/), and modulus (%). It can also use unary minus (-) to flip the sign of a value.

Math functions run internally without limits, but results are clamped at the output. Inputs are always read as a value from 0 to 1, where 25V appears as 0.5 (50%).

Example:
A = 25V (0.5)

`((A*50) * 2) / 50`

1. Multiply input by 50 to convert it into volts (0.5 becomes 25)
2. Double the result (25 becomes 50)
3. Divide by 50 to return it to percent form

The final output is 1 (50V). Converting to volts and back may feel like extra work, but it makes the processor easier to use.

### Relational operators

The operators > and < return 1 if true and 0 if false.

The = operator compares arguments as boolean values (see below).

### Boolean operators

The operators &, |, = and ^ exist. Values below 0.5 are read as false. Values of 0.5 or more are read as true.

For example:

- 0.3 | 0.7 = 1
- 0.3 & 0.7 = 0

### Examples

- `if(a, b, c)`: If a >= 0.5, returns b. Otherwise, returns c
- `min(x, y), max(x, y)`: The smaller or larger of x and y
- `sin(x), cos(x), asin(x), acos(x)`: Trigonometry functions (radians)
- `abs(x)`: Makes any negative number positive
- `pow(x, y)`: Calculates x to the power of y. Example: `pow(x, 0.5)` is the square root
- `scale(x, in0, in1, out0, out1)`: Scales x from input range to output range in a linear way
- `batteryCharge(x)`: Returns battery charge given the open circuit voltage divided by nominal voltage. For example, batteryCharge(1) can mean a 50V battery at 50V, a 200V battery at 200V, or a bank at 800V nominal voltage at 800V. Since voltage can rise above nominal, the input to this function must also be able to go above 1. You can do this by rescaling with a probe that measures beyond nominal. For example, a 0–60V probe on a 50V battery must be multiplied by 1.2 so that 50V reads as 1 instead of 0.83.

### Examples With Memory

- `ramp(period)`: Makes a sawtooth wave with the given period
- `rs(reset, set)`: Holds a Boolean value. Set pulse makes output 1. Reset pulse makes output 0
- `integrate(value, resetTrigger)`: Adds value over time and resets if resetTrigger is pulsed
- `integrate(value, min, max)`: Adds value over time but stays within min and max bounds
- `derivate(value)`: Outputs the difference between current and previous tick
- `rc(tao, value)`: Outputs the moving average of value across the last tao seconds
- `pid(target, actual, p, i, d, minV, maxV)`: PID controller with bounds
- `pid(target, actual, p, i, d)`: Standard PID controller (see below)

## PID Controller Procedure

The PID controller is a standard Proportional-Integral-Derivative controller, as described on Wikipedia. It tries to change its output so that target and actual values become equal.

The p, i, and d parameters control the contribution of each part.

The controller assumes input is a monotonic function of output. It may not work correctly otherwise, but it is fairly robust even with complex functions and delays.

Process:

1. Compute error = target - actual
2. Compute each of P, I, and D
3. Add them together and return the sum

**P**: Returns error \* P. Works for proportional systems but is rarely enough on its own.

**I**: Adds error \* I over time. It can overshoot but avoids long term offsets. The sum is capped between -1 and 1 to reduce windup.

**D**: Returns the rate of change of error \* D. Helps reduce overshoot.

You can also build your own PID controller with integrate and derivate if you want more control.

For more detail, see [PID controllers on Wikipedia](https://en.wikipedia.org/wiki/PID_controller).

## Redstone Cost

The amount of redstone needed is the sum of the costs of each operation.

| Operation                                | Redstone cost |
| ---------------------------------------- | ------------- |
| Constants, Inputs                        | 0             |
| Brackets                                 | 0             |
| Arithmetic (+ - \* / %)                  | 1             |
| Boolean operators                        | 1             |
| abs()                                    | 1             |
| if()                                     | 2             |
| min(), max()                             | 2             |
| sin(), cos()                             | 2             |
| ramp()                                   | 3             |
| rs()                                     | 3             |
| derivate()                               | 3             |
| rc()                                     | 3             |
| integrate()                              | 4             |
| scale()                                  | 5             |
| batteryCharge()                          | 8             |
| pid(target, actual, p, i, d)             | 12            |
| pid(target, actual, p, i, d, minV, maxV) | 14            |
