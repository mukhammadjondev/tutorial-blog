'use client';

import { Editor } from '@monaco-editor/react';
import { Snippet } from '@prisma/client';
import { useState } from 'react';
import * as actions from '@/actions';

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState(snippet.code);

  function handleEditorChange(value: string = '') {
    setCode(value);
  }

  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);

  return (
    <div>
      <Editor
        height="30vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />
      <form action={editSnippetAction}>
        <button className="p-2 border rounded">Save</button>
      </form>
    </div>
  );
}
