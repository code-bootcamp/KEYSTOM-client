import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";

type HookCallback = (url: string, text?: string) => void;


export default function PostEditorNoEdit(props: any){
  return (
    <>
      <Editor
        initialValue={props.data?.fetchProduct.description || ""}
        // onChange={props.onChangeDescription}
        previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
        hideModeSwitch={false}
        ref={props.editorRef}
        plugins={[colorSyntax]}
        toolbarItems={[
          ["heading", "bold", "italic", "strike"],
          ["hr", "quote"],
          ["ul", "ol", "task", "indent", "outdent"],
          ["image"],
          ["link", "table"],
          ["scrollSync"],
        ]}
        theme="dark"
        hooks={{
          addImageBlobHook: async (
            blob: Blob | File,
            callback: HookCallback
          ) => {
            // const files = URL.createObjectURL(blob);
            const uploadedImageURL = await props.uploadFile({
              variables: { files: blob },
            });
            callback(
              `https://storage.googleapis.com/${uploadedImageURL?.data?.uploadFile}`
            )
            props.onChangeFileUrl(uploadedImageURL?.data.uploadFile);
          },
        }}
      />
    </>
  );
}
