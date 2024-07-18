---
title: "Errors and Troubleshooting"
---

# Errors and Troubleshooting

This document presents helpful hints to troubleshoot the errors you may get while working in the Bittensor ecosystem. 

## Priority is too low

Running a `btcli` command sometimes gives me the below error:

```bash
{'code': 1014, 'message': 'Priority is too low: (18446744073709551615 vs 18446744073709551615)', 'data': 'The transaction has too low priority to replace another transaction already in the pool.'}
```

**Likely cause and remedy**: This means that you are submitting the same, duplicate transaction that you have already submitted. For example, if you are running a script, it is trying to submit transactions too quickly, most likely. You just have to wait for a few minutes before you run the command again.


## SSLCertVerificationError

Running any `btcli` command gives the following error, on macOS:

```bash
SSLCertVerificationError: [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: unable to get local issuer
certificate (_ssl.c:1000)
```

**Likely cause and remedy:** The `certifi` version used in the `openssl` on your machine is incompatible with the Bittensor requirement. You can solve this issue by any one of the below ways:

**Remedy 1**: Follow this below exact method, as described in this StackOverflow page: [https://stackoverflow.com/a/43855394](https://stackoverflow.com/a/43855394):

```bash
Go to the folder where Python is installed, e.g., in my case (Mac OS) it is installed in the Applications folder with the folder name 'Python 3.6'. Now double click on 'Install Certificates.command'. You will no longer face this error.
```

**Remedy 2**: Run the below commands:

- On macOS when not using any Python virtual environment: 
    ```bash
    brew reinstall openssl
    ```
- On macOS when using a virtual environment:
    ```bash
    pip install urllib3 --force-reinstall
    ```

## KeyFileError

```bash
KeyFileError: Keyfile at: /path/to/.bittensor/wallets/some-coldkey/hotkeys/somehotkey does not exist
```

**Likely cause and remedy:** A key you are passing as a parameter in a `btcli` command is not registered in the network. Make sure you first register the keys in your desired network before using the keys. See [Register, Validate and Mine
](./subnets/register-validate-mine.md#register).

## Balances.transfer not found

```
ValueError: Call function 'Balances.transfer' not found
```

**Likely cause and remedy**: You are working with an older version of Bittensor. Update your Bittensor to the latest version. See [Install Bittensor](./getting-started/installation.md).
