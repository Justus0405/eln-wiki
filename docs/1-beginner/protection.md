# Protection

> [!INFO]
> There are different ways to protect your circuits from too much voltage or too much current.
> You can use [probes](/1-beginner/signaling.md) with [relays](/1-beginner/switches-and-relays.md) or special blocks like these.

## Electrical Breaker

The electrical breaker stops too much voltage or too little voltage.
You need to put a cable (any voltage) into the breaker. Then, you can connect other cables to the top and bottom.

There are 2 input fields:

- The top field is for the **maximum** voltage. The breaker will pop if voltage goes over this.
- The bottom field is for the **minimum** voltage. The breaker will pop if voltage goes under this.

If the breaker pops, it needs to be turned on manually again.

| Breaker Open                                                 | Breaker Closed                                               | Breaker Inventory                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ----------------------------------------- |
| <img src="/protection/breaker-opened.png" class="rounded" /> | <img src="/protection/breaker-closed.png" class="rounded" /> | <img src="/protection/breaker-inv.png" /> |

## Electrical Fuse

The electrical fuse stops too much current.
There are 4 types of fuses: low, medium, high, and very high voltage.
To see how much current each fuse allows, read the page about [cables](/1-beginner/cables.md).

- If no fuse is inside, no current can flow.
- If the fuse is blown, no current can flow.
- If the current is too high, the fuse breaks right away. You have to replace it manually to get power again.

| Fuse Open                                                 | Fuse Closed                                               | Fuse Blown                               |
| --------------------------------------------------------- | --------------------------------------------------------- | ---------------------------------------- |
| <img src="/protection/fuse-opened.png" class="rounded" /> | <img src="/protection/fuse-closed.png" class="rounded" /> | <img src="/protection/fuse-blown.png" /> |
