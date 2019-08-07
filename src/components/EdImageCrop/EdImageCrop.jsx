import React, { useState, useRef } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Cropper from "react-cropper";
import { UploadField } from "@navjobs/upload";
import EdButton from "components/EdButton";

import style from "./style.module.scss";

import "cropperjs/dist/cropper.css";

const EdImageCrop = () => {
    const [imageUrl, setImageUrl] = useState("");
    const [visible, setVisible] = useState(false);
    const [cropImage, setCropImage] = useState("");
    const [image, setImage] = useState("");

    const copper = useRef();

    const handleFile = val => {
        const file = val[0];
        if (file) {
            const reader = new FileReader(); // FormData 对象
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setImageUrl(reader.result);
                setVisible(true);
            };
        }
    };

    const closeModal = () => {
        setVisible(false);
    };

    const handleCrop = () => {
        setCropImage(copper.current.getCroppedCanvas().toDataURL());
    };

    const updateImage = () => {
        setImage(cropImage);
        closeModal();
    };

    return (
        <UploadField
            uploadProps={{
                accept: ".png,.jpg"
            }}
            onFiles={handleFile}
        >
            <div className={style.box}>
                {cropImage ? (
                    <img src={image} className={style.crop_image} alt="" />
                ) : (
                    <a />
                )}
            </div>
            <Dialog
                open={visible}
                maxWidth="sm"
                fullWidth={true}
                onClose={closeModal}
            >
                <DialogContent style={{ height: 400 }}>
                    <Cropper
                        ref={copper}
                        src={imageUrl}
                        guides={false}
                        crop={handleCrop}
                        cropBoxResizable={false}
                        style={{ height: "100%", width: "100%" }}
                    />
                </DialogContent>
                <DialogActions>
                    <EdButton onClick={closeModal}>Disagree</EdButton>
                    <EdButton onClick={updateImage} color="primary" autoFocus>
                        Agree
                    </EdButton>
                </DialogActions>
            </Dialog>
        </UploadField>
    );
};

function getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement("canvas");
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(image);

    return canvas.toDataURL("image/png");
}

export default EdImageCrop;
