# Common Issues

> [!INFO]
> Troubleshooting issues which players
> experience on a regular basis.

## No CoFH Core - Crash

If you experience this crash message you likely dont have CoFH Core installed.

```plaintext
cpw.mods.fml.common.LoaderException: java.lang.NoClassDefFoundError: mods/eln/simplenode/energyconverter/EnergyConverterElnToOtherEntity
	at cpw.mods.fml.common.LoadController.transition(LoadController.java:163)
	at cpw.mods.fml.common.Loader.preinitializeMods(Loader.java:559)
```

## Special Instance Name - Crash

If you experience this crash message you likely have named your game instance with (), + , -. Remove these symbols to fix.

```plaintext
The game crashed: initializing game
Error: java.lang.NullPointerException: Parameter specified as non-null is null: method mods.eln.sixnode.CurrentSourceDescriptor.<init>, parameter obj
```