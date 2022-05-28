import 'codemirror/lib/codemirror.css'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import {  useRef, useState } from 'react';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax'
import 'tui-color-picker/dist/tui-color-picker.css'
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css'
import '@toast-ui/editor/dist/i18n/ko-kr'
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css'
import { gql, useMutation } from '@apollo/client';

type HookCallback = (url: string, text?: string) => void;

type HookMap = {
  addImageBlobHook?: (blob: Blob | File, callback: HookCallback) => void;
};

export default function PostEditor(props:any):JSX.Element{
  // const [description, setDescription] = useState("")  

  // const onChangeDescription = () => {
  //   if(props.editorRef.current){
  //     setDescription(props.editorRef.current.getInstance().getMarkdown())

  //     console.log(description)
  //   }
  // }

//   const onChangeDescription = (event:any) => {
//     setDescription(event.target.value)
// }


  return(
    <>
        <Editor
        initialValue={props.data?.fetchProduct.description || ""}
        onChange={props.onChangeDescription}
        previewStyle='vertical'
        height='600px'
        initialEditType='wysiwyg'
        useCommandShortcut={true}
        hideModeSwitch={false}
        ref={props.editorRef}
        plugins={[colorSyntax]}
        toolbarItems={ [
          ['heading', 'bold', 'italic', 'strike'],
          ['hr', 'quote'],
          ['ul', 'ol', 'task', 'indent', 'outdent'],
          ['image'],
          ['link', 'table'],
          ['scrollSync'],
        ]}
        language='ko-KR'
        theme='dark'
        hooks={{
          addImageBlobHook: async(blob:Blob | File, callback) => {
            console.log('blob', blob)
            // const files = URL.createObjectURL(blob);
            const uploadedImageURL = await props.uploadFile({variables:{files:blob}});
            console.log('uploadedImageURL', uploadedImageURL?.data.uploadFile)

            callback(`https://storage.googleapis.com/${uploadedImageURL?.data.uploadFile}`, "product image");
            props.onChangeFileUrl(uploadedImageURL?.data.uploadFile)
            return false;
          }
        }}
        // placeholder= 'Please enter text.'
        />
    </>

    

  )
}


