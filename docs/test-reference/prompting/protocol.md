---
sidebar_label: protocol
title: prompting.protocol
---

## Prompting Objects

```python
class Prompting(bt.Synapse)
```

The Prompting subclass of the Synapse class encapsulates the functionalities related to prompting scenarios.

It specifies three fields - `roles`, `messages` and `completion` - that define the state of the Prompting object.
The `roles` and `messages` are read-only fields defined during object initialization, and `completion` is a mutable
field that can be updated as the prompting scenario progresses.

The Config inner class specifies that assignment validation should occur on this class (validate_assignment = True),
meaning value assignments to the instance fields are checked against their defined types for correctness.

**Attributes**:

- `roles` _List[str]_ - A list of roles in the prompting scenario. This field is both mandatory and immutable.
- `messages` _List[str]_ - A list of messages in the prompting scenario. This field is both mandatory and immutable.
- `completion` _str_ - A string that captures completion of the prompt. This field is mutable.
  required_hash_fields List[str]: A list of fields that are required for the hash.
  

**Methods**:

  deserialize() -&gt; &quot;Prompting&quot;: Returns the instance of the current object.
  
  
  The `Prompting` class also overrides the `messages`0 method, returning the
  instance itself when this method is invoked. Additionally, it provides a `messages`1
  inner class that enforces the validation of assignments (`messages`2).
  
  Here is an example of how the `Prompting` class can be used:
  
`messages`4
  
  This will output:
`messages`5
  
  This example demonstrates how to create an instance of the `Prompting` class, access the
  `roles` and `messages` fields, and update the `completion` field.

## Config Objects

```python
class Config()
```

Pydantic model configuration class for Prompting. This class sets validation of attribute assignment as True.
validate_assignment set to True means the pydantic model will validate attribute assignments on the class.

#### deserialize

```python
def deserialize() -> "Prompting"
```

Returns the instance of the current Prompting object.

This method is intended to be potentially overridden by subclasses for custom deserialization logic.
In the context of the Prompting class, it simply returns the instance itself. However, for subclasses
inheriting from this class, it might give a custom implementation for deserialization if need be.

**Returns**:

- `Prompting` - The current instance of the Prompting class.

## StreamPrompting Objects

```python
class StreamPrompting(bt.StreamingSynapse)
```

StreamPrompting is a specialized implementation of the `StreamingSynapse` tailored for prompting functionalities within
the Bittensor network. This class is intended to interact with a streaming response that contains a sequence of tokens,
which represent prompts or messages in a certain scenario.

As a developer, when using or extending the `StreamPrompting` class, you should be primarily focused on the structure
and behavior of the prompts you are working with. The class has been designed to seamlessly handle the streaming,
decoding, and accumulation of tokens that represent these prompts.

**Attributes**:

  - `roles` (List[str]): A list of roles involved in the prompting scenario. This could represent different entities
  or agents involved in the conversation or use-case. They are immutable to ensure consistent
  interaction throughout the lifetime of the object.
  
  - `messages` (List[str]): These represent the actual prompts or messages in the prompting scenario. They are also
  immutable to ensure consistent behavior during processing.
  
  - `completion` (str): Stores the processed result of the streaming tokens. As tokens are streamed, decoded, and
  processed, they are accumulated in the completion attribute. This represents the &quot;final&quot;
  product or result of the streaming process.
  - `required_hash_fields` (List[str]): A list of fields that are required for the hash.
  

**Methods**:

  - `process_streaming_response`: This method asynchronously processes the incoming streaming response by decoding
  the tokens and accumulating them in the `completion` attribute.
  
  - `deserialize`: Converts the `completion` attribute into its desired data format, in this case, a string.
  
  - `StreamPrompting`0: Extracts relevant JSON data from the response, useful for gaining insights on the response&#x27;s
  metadata or for debugging purposes.
  
  Example usage:
`StreamPrompting`1
  
- `StreamPrompting`2 - While you can directly use the `StreamPrompting` class, it&#x27;s designed to be extensible. Thus, you can create
  subclasses to further customize behavior for specific prompting scenarios or requirements.

#### process\_streaming\_response

```python
async def process_streaming_response(response: StreamingResponse)
```

`process_streaming_response` is an asynchronous method designed to process the incoming streaming response from the
Bittensor network. It&#x27;s the heart of the StreamPrompting class, ensuring that streaming tokens, which represent
prompts or messages, are decoded and appropriately managed.

As the streaming response is consumed, the tokens are decoded from their &#x27;utf-8&#x27; encoded format, split based on
newline characters, and concatenated into the `completion` attribute. This accumulation of decoded tokens in the
`completion` attribute allows for a continuous and coherent accumulation of the streaming content.

**Arguments**:

- `response` - The streaming response object containing the content chunks to be processed. Each chunk in this
  response is expected to be a set of tokens that can be decoded and split into individual messages or prompts.
  
  Usage:
  Generally, this method is called when there&#x27;s an incoming streaming response to be processed.
  
    ```python
    stream_prompter = StreamPrompting(roles=["role1", "role2"], messages=["message1", "message2"])
    await stream_prompter.process_streaming_response(response)
    ```
  

**Notes**:

  It&#x27;s important to remember that this method is asynchronous. Ensure it&#x27;s called within an appropriate
  asynchronous context.

#### deserialize

```python
def deserialize() -> str
```

Deserializes the response by returning the completion attribute.

**Returns**:

- `str` - The completion result.

#### extract\_response\_json

```python
def extract_response_json(response: StreamingResponse) -> dict
```

`extract_response_json` is a method that performs the crucial task of extracting pertinent JSON data from the given
response. The method is especially useful when you need a detailed insight into the streaming response&#x27;s metadata
or when debugging response-related issues.

Beyond just extracting the JSON data, the method also processes and structures the data for easier consumption
and understanding. For instance, it extracts specific headers related to dendrite and axon, offering insights
about the Bittensor network&#x27;s internal processes. The method ultimately returns a dictionary with a structured
view of the extracted data.

**Arguments**:

- `response` - The response object from which to extract the JSON data. This object typically includes headers and
  content which can be used to glean insights about the response.
  

**Returns**:

- `dict` - A structured dictionary containing:
  - Basic response metadata such as name, timeout, total_size, and header_size.
  - Dendrite and Axon related information extracted from headers.
  - Roles and Messages pertaining to the current StreamPrompting instance.
  - The accumulated completion.
  
  Usage:
  This method can be used after processing a response to gather detailed metadata:
  
    ```python
    stream_prompter = StreamPrompting(roles=["role1", "role2"], messages=["message1", "message2"])
    # After processing the response...
    json_info = stream_prompter.extract_response_json(response)
    ```
  

**Notes**:

  While the primary output is the structured dictionary, understanding this output can be instrumental in
  troubleshooting or in extracting specific insights about the interaction with the Bittensor network.

