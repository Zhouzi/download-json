# save-json-file

Save a JSON object to a file in a browser environment.

## Installation

```
yarn add save-json-file
```

## Usage

This package exports a function accepting two parameters:

1. **json**: the json object to save
2. **filename** (optional, defaults to "untitled"): the file name

**Example:**

```
import saveJSON from 'save-json-file';

saveJSON([
    {
        label: 'Publish npm package',
        isDone: false
    },
    {
        label: 'Write some documentation',
        isDone: false
    }
], 'todos');
```
