---
sidebar_label: forward
title: prompting.validators.forward
---

#### get\_random\_uids

```python
def get_random_uids(self,
                    k: int,
                    exclude: List[int] = None) -> torch.LongTensor
```

Returns k available random uids from the metagraph.

**Arguments**:

- `k` _int_ - Number of uids to return.
- `exclude` _List[int]_ - List of uids to exclude from the random sampling.

**Returns**:

- `uids` _torch.LongTensor_ - Randomly sampled available uids.

**Notes**:

  If `k` is larger than the number of available `uids`, set `k` to the number of available `uids`.

