<h1 align="center">
  <a href="https://www.docs.learnbittensor.org">
    <img alt="Tao Logo" src="./static/img/tao-logo.png" />
  </a>
</h1>
<h2 align="center">Writing Style Guide</h2>

-----------------------------------------------------------------------------

When you write a developer document for the Bittensor documentation, your audience should find your documentation readable, informative, and concise. To accomplish these goals, here below are a few helpful writing style recommendations. We encourage you to stick to the writing style described on this page.

# General principles

This section describes the general principles for writing docs. 

## Style and tone

- Avoid colloquialisms and jargon.

- Address the user directly. Use "you" instead of "user" or "they".

- Use the active voice. Use present tense.

- Avoid writing the way you speak. That is, avoid using contractions (aren’t, don’t, isn’t), jokes or using colloquial content.

## Readability

- Break up walls of text (long passages of text) into smaller chunks to aid readability. Use lists.

- Provide context. Your readers can be beginner developers or experts in specialized fields. They may not know what you are talking about without a context.

- Use shorter sentences (**26 words or less**). They are easier to understand (and easier to translate).

- Define acronyms and abbreviations on the first usage in every topic.

- Our documentation is written in US English, but the audience will include people for whom English is not their primary language. 

- Avoid culturally specific references, humor, names.

- Avoid compound verbs. Try to substitute a simpler verb.

- Write dates and times in unambiguous and clear ways. Write "27 November 2020" instead of either "11/27/2020" or "27/11/2020" or "November 27, 2020".

- Avoid negative sentence construction. Try not to say "it is not uncommon" but instead say "it is common". Yes there is a subtle difference between the two but for technical writing this simplification works better.

- Avoid directional language (below, left) in procedural documentation (like a step by step instruction section), wherever possible. Instead refer to the actual step number.

- Be consistent in capitalization and punctuation.

- Avoid hypothetical future "would". Instead, write in the present tense. 
  - **For example**: Avoid saying "The compiler would then send" but instead say, "The compiler sends".

- Avoid the`&` character in the descriptive text. Use the word "and".

## Avoid foreshadowing

- Do not refer to future features or products. 

- Avoid making excessive or unsupported claims about future enhancements.

## Titles and headings

Document titles and section headings should either:

- Explicitly state the purpose of the section.

- Be a call to action, or intention.

This approach makes it easier for the reader to get her specific development task done.

### Examples

- **Preferred**: Sharding your data (section heading)
  **Avoid**: Data sharding fundamentals (title is not purpose-driven)

- **Preferred**: Creating input pipelines
  **Avoid**: Input pipelines

## Rules

- Document titles (**h1**): Use title case. 
  - **For example**: "Running a Model".

- Section headings within a document (**h2, h3, h4, h5**): Use sentence case. 
  - **For example**: "Running a model".

- A document title is the main title of a document page. A document has only one document title. 
  - **Example**: "Writing Style Guide" at the beginning of this page is a document title. The document title also appears at the top level in the navigation bar, so it must be short, preferably four to five words or less.

- A section heading is the title for an individual section within a document page. 
  - **Example**: "Titles and headings" up above this section. A document page can have multiple sections, and hence multiple section headings.

- Use a heading hierarchy. Do not skip levels of the heading hierarchy. 
  - **For example**, put h3 only under h2.

- To change the visual formatting of a heading, use CSS instead of using a heading level that does not fit the hierarchy.

- Do not write empty headings or headings with no associated content.

- Avoid using question marks in document titles and section headings.
  - **Example**:
    - **Avoid**: How it works?
    - **Preferred**: How it works

- Avoid using emphasis or italics in document titles or section headings.

- Avoid joining words using a slash.
  - **Example:**
    - **Avoid**: Execute on your CPU/GPU system
    - **Preferred**: Execute on your CPU or GPU system

## Python docstrings

We use the [Napoleon extension](https://sphinxcontrib-napoleon.readthedocs.io/en/latest/) with Sphinx for generating API docs.

### Recommendation

- Use the [Google style](https://sphinxcontrib-napoleon.readthedocs.io/en/latest/example_google.html#example-google) docstrings for Python.

### Example

**Follow**:

```
Args:

    path (str): The path of the file to wrap
    field_storage (FileStorage): The :class:\`FileStorage\` instance to wrap
    temporary (bool): Whether or not to delete the file when the File instance is destructed

Returns:

    BufferedFileStorage: A buffered writable file descriptor

```

**Avoid**:

```
:param path: The path of the file to wrap
:type path: str
:param field_storage: The :class:\`FileStorage\` instance to wrap
:type field_storage: FileStorage
:param temporary: Whether or not to delete the file when the File instance is destructed
:type temporary: bool
:returns: A buffered writable file descriptor
:rtype: BufferedFileStorage

```

---
