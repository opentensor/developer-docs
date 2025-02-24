---
title: "Miners Guide to Coldkeys and Hotkeys"
---

# Miners Guide to Coldkeys and Hotkeys

[other stuff about keys](../keys-questions.md)

Bittensor wallets have two different kinds of keys:
- Every wallet has a unique **Coldkey**

Bittensor uses a dual-key system to balance security and operational efficiency. As a miner, understanding how to manage your **coldkeys** and **hotkeys** is crucial. This guide explains their roles, proper storage practices, and key management strategies to help you secure your TAO and keep your mining operations running smoothly.


## 1. Understanding the Dual-Key System

### Coldkey
- **Role**:  
  - Acts as your wallet’s “safe” where your TAO funds are stored.  
  - Used for high-risk operations like transferring funds, delegating tokens, and creating or registering subnets.
- **Security**:  
  - Always encrypted on your device.  
  - Decrypted only in-memory and only when needed.
- **Usage for Miners**:  
  - **Rarely used** — primarily needed to register onto a subnet.  
  - **Storage Recommendation**: Keep it on an air-gapped device or a machine with minimal network exposure. **Never** store your coldkey on a mining server, as the subnet code running on that server may present security risks.

### Hotkey
- **Role**:  
  - Used for routine operational tasks, such as signing transactions and interacting with miner software (e.g., axon serving, on-chain data commitments).  
  - When registering as a miner, the UID (unique identifier) is attached to the hotkey while the registration fee is drawn from the coldkey.
- **Security**:  
  - Typically unencrypted by default since it needs to be readily accessible for frequent use.  
  - Although it has less stringent security requirements than the coldkey, keeping it secure is still important.
- **Usage for Miners**:  
  - Required to be present on your mining server to interact with the subnet.  
  - Miners often manage multiple hotkeys linked to one coldkey, allowing flexibility across different subnets or operations.

---

## 2. Best Practices for Key Management

### Storing Your Coldkey
- **Use a Secure, Offline Environment**:  
  - Store your coldkey on an air-gapped device or on a system with limited access to external networks.
- **Avoid Exposure on Mining Servers**:  
  - Do not place your coldkey on the same server running mining operations to reduce exposure to network threats.
- **Additional Security Options**:  
  - Consider using hardware signers (e.g., Ledger or Polkadot Vault) or advanced setups like MultiSig wallets and Proxy accounts.

### Managing Your Hotkey
- **Operational Availability**:  
  - Since the hotkey is needed for day-to-day mining operations, it resides in a less secure (online) environment.
- **Encryption Option**:  
  - Although hotkeys are unencrypted by default, you have the option to encrypt them if you feel it’s necessary.
- **Subnet Considerations**:  
  - In a given subnet, each hotkey must be unique. While the same hotkey can be used for multiple UIDs in different subnets, never reuse a hotkey for multiple UIDs within the same subnet.

### Key Rotation
- **Coldkey Rotation**:  
  - Generally not recommended unless there is clear evidence or suspicion that your coldkey has been compromised. Its secure storage and infrequent use make it inherently safer.
- **Hotkey Rotation**:  
  - For miners, maintain vigilance but avoid unnecessary rotation unless you have reasons to suspect compromise.

---

## 3. Operational Workflow for Miners

1. **Initial Setup**:  

   - Create your wallet with a coldkey and one or more hotkeys.
   - Securely store the coldkey on an air-gapped device.
2. **Subnet Registration**:  
   - Use the coldkey from your secure environment to register onto the subnet. This is the only time you should use your coldkey for mining-related operations.
3. **Daily Operations**:  
   - Run your mining operations using the hotkey(s) stored on your mining server.
   - Ensure that these hotkeys are managed responsibly, keeping in mind their exposure to the operational environment.
4. **Ongoing Security Practices**:  
   - Regularly review your setup and consider additional security measures if new threats arise.
   - If you suspect any key has been compromised, act promptly to rotate or secure your keys, following best practices.

---

## Conclusion

By separating the roles of coldkeys and hotkeys, Bittensor provides a robust security framework that allows miners to participate actively in the network while minimizing risk. Keep your coldkey secure and offline, use your hotkey for operational tasks on the mining server, and only rotate keys when necessary. Following these guidelines will help ensure that your mining operations are both secure and efficient.

Happy mining!