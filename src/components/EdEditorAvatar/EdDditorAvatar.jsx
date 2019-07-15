import React from "react";
import AvatarEditor from "react-avatar-editor";
import { UploadField } from "@navjobs/upload";

import style from "./style.module.scss";

class EdEditorAvatar extends React.Component {
    state = {
        image: "",
        save: false
    };

    onImageChange() {
        if (this.editor) {
            const canvasScaled = this.editor.getImageScaledToCanvas();
        }
    }

    setEditorRef(editor) {
        this.editor = editor;
    }

    handleChange(val) {
        const file = val[0];
        const reader = new FileReader(); // FormData 对象
        reader.readAsDataURL(file);
        reader.onload = () => {
            this.setState({
                image: reader.result
            });
        };
    }

    render() {
        const { image, save } = this.state;
        return (
            <div>
                {!save ? (
                    <AvatarEditor
                        ref={this.setEditorRef.bind(this)}
                        crossOrigin="anonymous"
                        image={image}
                        height={120}
                        width={120}
                        border={1}
                        scale={1}
                        onImageChange={this.onImageChange.bind(this)}
                        borderRadius={4}
                        style={{ borderRadius: 4 }}
                    />
                ) : (
                    <img src={image} />
                )}
                <ul className={style.btn}>
                    <li>
                        <UploadField
                            uploadProps={{
                                accept: ".png,.jpg"
                            }}
                            onFiles={this.handleChange.bind(this)}
                        >
                            upload
                        </UploadField>
                    </li>
                </ul>
            </div>
        );
    }
}

export default EdEditorAvatar;
