---
sidebar_label: event
title: prompting.validators.event
---

## EventSchema Objects

```python
@dataclass
class EventSchema()
```

#### completions

List of completions received for a given prompt

#### completion\_times

List of completion times for a given prompt

#### completion\_status\_messages

List of completion status messages for a given prompt

#### completion\_status\_codes

List of completion status codes for a given prompt

#### name

Prompt type, e.g. &#x27;followup&#x27;, &#x27;answer&#x27;

#### block

Current block at given step

#### gating\_loss

Gating model loss for given step

#### uids

Queried uids

#### prompt

Prompt text string

#### step\_length

Elapsed time between the beginning of a run step to the end of a run step

#### best

Best completion for given prompt

#### rewards

Reward vector for given step

#### dahoas\_reward\_model

Output vector of the dahoas reward model

#### blacklist\_filter

Output vector of the blacklist filter

#### nsfw\_filter

Output vector of the nsfw filter

#### reciprocate\_reward\_model

Output vector of the reciprocate reward model

#### diversity\_reward\_model

Output vector of the diversity reward model

#### dpo\_reward\_model

Output vector of the dpo reward model

#### rlhf\_reward\_model

Output vector of the rlhf reward model

#### prompt\_reward\_model

Output vector of the prompt reward model

#### relevance\_filter

Output vector of the relevance scoring reward model

#### dahoas\_reward\_model\_normalized

Output vector of the dahoas reward model

#### nsfw\_filter\_normalized

Output vector of the nsfw filter

#### reciprocate\_reward\_model\_normalized

Output vector of the reciprocate reward model

#### diversity\_reward\_model\_normalized

Output vector of the diversity reward model

#### dpo\_reward\_model\_normalized

Output vector of the dpo reward model

#### rlhf\_reward\_model\_normalized

Output vector of the rlhf reward model

#### prompt\_reward\_model\_normalized

Output vector of the prompt reward model

#### relevance\_filter\_normalized

Output vector of the relevance scoring reward model

#### from\_dict

```python
@staticmethod
def from_dict(event_dict: dict, disable_log_rewards: bool) -> "EventSchema"
```

Converts a dictionary to an EventSchema object.

