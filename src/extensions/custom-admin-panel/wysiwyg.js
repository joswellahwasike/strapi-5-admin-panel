import { Editor } from '@tinymce/tinymce-react';
export default function CustomEditor({ value, onChange }) {
  return (
    <Editor
      apiKey="your-tinymce-api-key"
      initialValue={value}
      init={{
        height: 400,
        menubar: false,
        plugins: 'link image code',
        toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',
      }}
      onEditorChange={onChange}
    />
  );
}