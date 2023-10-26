---
sidebar_label: prompts
title: prompting.validators.prompts
---

## BasePrompt Objects

```python
class BasePrompt()
```

Base class for prompts expecting an extractable response.

#### text

```python
def text(*args) -> str
```

Sanitize input strings and format prompt template.

#### extract

```python
def extract(response: str)
```

Search for the extract pattern in the text using regex.

#### matches\_template

```python
def matches_template(input_text) -> bool
```

Checks if the input_text matches the first unformatted part of the prompt template.

## ScoringPrompt Objects

```python
class ScoringPrompt(BasePrompt)
```

#### extract\_score

```python
def extract_score(response: str) -> float
```

Extract numeric score (range 0-10) from prompt response.

#### mock\_response

```python
@staticmethod
def mock_response()
```

Mock responses to a followup prompt, for use in MockDendritePool.

## AugmentPrompt Objects

```python
class AugmentPrompt(ScoringPrompt)
```

Scores a summary on a scale from 0 to 10, given a context.

## FollowupPrompt Objects

```python
class FollowupPrompt(ScoringPrompt)
```

Scores a question on a scale from 0 to 10, given a context.

## AnswerPrompt Objects

```python
class AnswerPrompt(ScoringPrompt)
```

Scores an answer on a scale from 0 to 10, given a question.

## FirewallPrompt Objects

```python
class FirewallPrompt(BasePrompt)
```

Detects jailbreaks or prompt injections that influence prompt-based scoring in answers.

#### detected

```python
def detected(response) -> bool
```

Extract detection bool from prompt response.

#### mock\_response

```python
@staticmethod
def mock_response()
```

Mock responses to a firewall prompt, for use in MockDendritePool.

#### find\_unique\_tags

```python
def find_unique_tags(input_text: str)
```

Find all substrings that match the pattern &#x27;&lt;...&gt;&#x27;.

