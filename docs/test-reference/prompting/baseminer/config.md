---
sidebar_label: config
title: prompting.baseminer.config
---

#### check\_config

```python
def check_config(cls, config: "bt.Config")
```

Validates the given configuration for the Miner by ensuring all necessary settings
and directories are correctly set up. It checks the config for axon, wallet, logging,
and subtensor. Additionally, it ensures that the logging directory exists or creates one.

**Arguments**:

- `cls` - The class reference, typically referring to the Miner class.
- `config` _bt.Config_ - The configuration object holding various settings for the miner.
  

**Raises**:

  Various exceptions can be raised by the check_config methods of axon, wallet, logging,
  and subtensor if the configurations are not valid.

#### get\_config

```python
def get_config() -> "bt.Config"
```

Initializes and retrieves a configuration object for the Miner. This function sets up
and reads the command-line arguments to customize various miner settings. The function
also sets up the logging directory for the miner.

**Returns**:

- `bt.Config` - A configuration object populated with settings from command-line arguments
  and defaults where necessary.
  

**Notes**:

  Running this function with the `--help` argument will print a help message detailing
  all the available command-line arguments for customization.

