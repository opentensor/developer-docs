---
title: "Logging"
---

# Logging

The `logging` module in Bittensor uses several levels to categorize log messages by their severity. Each level has a numeric value and the verbosity decreases as the level increases. See the below table.

## Logging levels

| Level name | Numeric value | Description                                                 |
| ---------- | :------------- | ----------------------------------------------------------- |
| NOTSET     | 0             | Not set level (default lowest level).                       |
| TRACE      | 5             | Fine-grained informational events (most verbose).           |
| DEBUG      | 10            | Detailed information for diagnosing problems.               |
| INFO       | 20            | Usually confirmation of events.                             |
| SUCCESS    | 21            | Indication that an operation completed successfully.        |
| WARNING    | 30            | An indication of potential issues or important events.      |
| ERROR      | 40            | Due to a more serious problem, the software might not work. |
| CRITICAL   | 50            | A serious error, indicating that the program may abort.     |

:::tip Custom levels
TRACE (`5`) and SUCCESS (`21`) are custom levels added by Bittensor for more granular control.
:::

## Changing the logging level

You can control the verbosity of log output by changing the logging level. Messages at or above the set level will be logged.

## Using state methods

The `logging` module uses a state machine to manage logging levels. You can switch between different states using the provided methods.

```python
from bittensor import logging

# Enable TRACE level logging
logging.set_trace()

# Enable DEBUG level logging
logging.set_debug()

# Enable INFO level logging
# This is the default level of logging
logging.set_info()
logging.set_default()

# Enable WARNING level logging
logging.set_warning()
```

---

## Using `prefix` and `suffix` in log messages

You can add context to your log messages using `prefix` and `suffix` parameters.


```python
from bittensor.utils.btlogging import logging

# Log a message with a prefix
logging.info("Process started.", prefix="START")

# Log a message with a suffix
logging.info("Process completed.", suffix="END")

# Log a message with both
logging.info("Step 1 executed.", prefix="STEP 1", suffix="OK")

# Log messages without explicit args
logging.info("Step 1 is", "Starting prefix", "Ending suffix")
```

---

## Logging data

You can log data along with different messages in different ways:

```python
import torch
import numpy as np
from bittensor.utils.btlogging import logging

raw_weights = torch.tensor([
    0.0000, 0.0000, 0.0092, 0.0000, 0.0092, 0.0000, 0.0000, 0.0107, 0.0052,
    0.0092, 0.0000, 0.0052, 0.0107, 0.0107, 0.0175, 0.0000, 0.0052, 0.0092,
    0.0202, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0092, 0.0184, 0.0061,
    0.0107, 0.0052, 0.0092, 0.0092, 0.0107, 0.0107, 0.0000, 0.0107, 0.0092,
    0.0092, 0.0202, 0.0075, 0.0202, 0.0092, 0.0184, 0.0052, 0.0092, 0.0107,
    0.0092, 0.0000, 0.0052, 0.0052
])
test_weights = np.array([0, 0, 0, 0])

logging.set_debug()

# Weights followed by string
logging.debug("Raw weights", raw_weights)
logging.debug("Test weights", test_weights)
logging.debug(f"{raw_weights} Raw weights")

# String followed by weights
logging.debug("Raw weights", suffix=raw_weights)
logging.debug("Test weights", test_weights)
logging.debug(f"Raw weights {raw_weights}")

# Using both prefix and suffix
# Raw weights is the prefix and test_weights is the suffix
logging.debug("Raw and test weights", raw_weights, test_weights)
```

---

## Color support

The Bittensor logging module supports colorized output in the logging level printed in the console, which helps in distinguishing log messages quickly.

|Level|Color|
|---|---|
|TRACE|Magenta|
|DEBUG|Blue|
|INFO|White|
|SUCCESS|Green|
|WARNING|Yellow|
|ERROR|Red|
|CRITICAL|Red Background|

To add colors in the logged message itself, you can enclose your message in tags. These are the colors currently supported:


|Color|Starting tag|Ending tag|
|---|:---|---|
|Red|[red]|[/red]|
|Blue|[blue]|[/blue]|
|Green|[green]|[/green]|
|Magenta|[magenta]|[/magenta]|
|Yellow|[yellow]|[/yellow]|
|Orange|[orange]|[/orange]|

### Example

```python
from bittensor.utils.btlogging import logging

logging.warning("[red]This will print red[/red] and [yellow]this will print yellow[/yellow]")
```

---

## Emoji support

Emojis can be included in log messages for better visual cues. Certain text patterns are automatically replaced with emojis.

|Text|Emoji|
|---|---|
|:white_heavy_check_mark:|✅|
|:cross_mark:|❌|
|:satellite:|🛰️|
|:warning:|⚠️|
|:arrow_right:|➡️|
|:hourglass:|⏳|
