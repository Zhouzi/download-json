# download-json

Download a JSON object to a file.

## Installation

```
yarn add download-json
```

## Usage

download-json exports a function accepting two parameters:

1. **json**: the json object to download
2. **filename** (optional, defaults to "untitled"): the file name

**Example:**

```
import downloadJSON from 'download-json';

downloadJSON([
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
