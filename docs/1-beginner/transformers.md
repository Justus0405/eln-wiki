# Transformers

> [!INFO]
> Transformers, also known as DC-DC Converters, can either step up or step down voltage statically.
> The green side is the input and the yellow side is the output, though the inputs are not restricted to a fixed side.

## How to use

To adjust the voltage, open the inventory of the transformer. You will see four slots:

- **Middle Slot**: For a ferromagnetic core, which comes in three variants, each has a different efficiency rating that affects voltage loss:

  - **Cheap**, loss factor: 100
  - **Average**, loss factor: 50
  - **Optimal**, loss factor: 1

- **Slot 1 and Slot 3**: For copper cables, which control how much the voltage is stepped down or up.

  - Each cable in **Slot 1** divides the input voltage.
  - Each cable in **Slot 3** multiplies the voltage.
  - There must be **at least one cable in each slot** for the transformer to function.
  - If you put the **same amount** of cable in each slot there is not difference and the voltage stays the same.

## Example

<img src="/transformers/dc-dcconverter-inv.png" class="rounded" /><br>

Imagine you input **50V** and want to output **200V**.
You would place **1 copper cable** in Slot 1 and **4 copper cables** in Slot 3, because:

> [!TIP] Formular
> 200 ÷ 50 = 4

## Customization

**Slot 4** allows you to add a case to the transformer to hide its internal components.

| Case Opened                                                                | Case Closed                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| <img src="/transformers/dc-dcconverter-case-opened.png" class="rounded" /> | <img src="/transformers/dc-dcconverter-case-closed.png" class="rounded" /> |
