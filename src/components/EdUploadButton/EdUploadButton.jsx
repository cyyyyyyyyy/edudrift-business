import React from "react";
import { UploadField } from "@navjobs/upload";

import EdButton from "components/EdButton";

class EdUploadButton extends React.Component {
    state = {
        imageUrl: this.props.imageUrl || ""
    };

    handleFile(file, value) {
        console.log(file);
        console.log(value);
    }

    render() {
        return (
            <div style={{ display: "inline-block", width: 400 }}>
                <EdButton style={{ width: 120 }}>View</EdButton>
                <EdButton style={{ marginLeft: 60, width: 120 }}>
                    <UploadField
                        uploadProps={{
                            accept: ".png,.jpg"
                        }}
                        onFiles={this.handleFile.bind(this)}
                    >
                        Upload New
                    </UploadField>
                </EdButton>
            </div>
        );
    }
}

export default EdUploadButton;
