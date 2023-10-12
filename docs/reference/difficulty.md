

<Accordion title="Difficulty">


# Difficulty Adjustment

The POW and Recycle difficulties are adaptively adjusted every 100 blocks based on the following 4 cases.


    1. Registrations exceed the target and there were more recycle registrations than pow registrations?
        `burn_cost = burn_cost * ( burn_regs_this_interval + target_regs ) / 2 * target_regs`

    2. Registrations exceed the target and there were not more recycle registrations than pow registrations?
        `pow_difficulty = pow_difficulty * ( pow_regs_this_interval + target_regs ) / 2 * target_regs`

    3. Registrations do not exceed the target and there were more recycle registrations than pow registrations?
        `burn_difficulty = pow_difficulty * ( regs_this_interval + target_regs ) / 2 * target_regs`

    4. Registrations do not exceed the target and there were not more recycle registrations than pow registrations?
        `pow_difficulty = pow_difficulty * ( regs_this_interval + target_regs ) / 2 * target_regs`


### Viewing current difficulty
Using the cli
```bash dark
btcli subnets list
NETUID  NEURONS  MAX_N   DIFFICULTY  TEMPO  CON_REQ  EMISSION  BURN(τ)
1       691    1.02 K   198.08 T    99     None     28.44%   τ4.75710
3      4096    4.10 K   320.81 T    99     None     71.56%   τ1.00000
    DIFFICULTY: Current proof of work difficulty
    BURN: Current cost to register a key via recycle registration.
```

</Accordion>
