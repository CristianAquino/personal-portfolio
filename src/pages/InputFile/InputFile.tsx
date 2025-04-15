"use client";

import { ChangeEvent, useRef, useState } from "react";

export type InputFileProps = {
  // types...
};

const InputFile = ({}: InputFileProps) => {
  const [fileState, setFiles] = useState<any>([]);
  const refFile = useRef<HTMLInputElement>(null);
  const text = fileState.length == 0 ? "upload files" : "more files";
  const [open, setOpen] = useState(false);

  function handleClose() {
    setOpen(false);
  }
  function handleOpen() {
    setOpen(true);
  }

  function handleClick() {
    const files = refFile.current;
    files?.click();
  }

  function handleDelete(name: string) {
    const filter = fileState.filter((file: any) => file.name != name);
    setFiles(filter);
    refFile.current!.value = "";
    setOpen(false);
  }

  function handleAdd(e: ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;

    if (!files) return;

    const new_files = Array.from(files).map((file) => {
      let url = URL.createObjectURL(file);
      return {
        id: crypto.randomUUID(),
        url,
        name: file.name.split(".")[0],
        extension: file.name.split(".").pop(),
      };
    });

    if (files.length > 0) {
      const filter = new_files.filter((file) =>
        fileState.every((ele: any) => ele.name != file.name)
      );
      setFiles((prev: any) => [...prev, ...filter]);
    }
  }

  function handleReset() {
    refFile.current!.value = "";
    setFiles([]);
    setOpen(false);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>, name: string) {
    const files = e.target.files;
    if (!files) return;
    setFiles(
      fileState.map((file: any) => {
        if (file.name == name) {
          let url = URL.createObjectURL(files[0]);
          return {
            ...file,
            url,
            name: files[0].name.split(".")[0],
            extension: files[0].name.split(".").pop(),
          };
        }
        return;
      })
    );
  }

  return (
    <div>
      <button onClick={handleClick}>{text}</button>
      <input
        ref={refFile}
        type="file"
        // multiple
        style={{ display: "none" }}
        onChange={handleAdd}
      />
      {fileState.length > 0 &&
        fileState.map((file: any) => (
          <Imagene
            key={file?.id}
            url={file.url}
            name={file.name}
            onDelete={handleDelete}
            onChange={handleChange}
            onView={handleOpen}
          />
        ))}
      {fileState.length > 0 && <button onClick={handleReset}>reset</button>}
      {open && <Modal onClose={handleClose} />}
    </div>
  );
};

export default InputFile;

const Imagene = ({
  url,
  name,
  onDelete,
  onChange,
  onView,
}: {
  url: string;
  name: string;
  onDelete: (id: string) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>, name: string) => void;
  onView: () => void;
}) => {
  const refImage = useRef<HTMLInputElement>(null);

  function handleClick() {
    const files = refImage.current;
    files?.click();
  }

  return (
    <>
      <img src={url} alt={name} style={{ inlineSize: "200px" }} />
      <input
        ref={refImage}
        type="file"
        style={{ display: "none" }}
        onChange={(e) => onChange(e, name)}
      />
      <span>{name}</span>
      <button onClick={handleClick}>change</button>
      <button onClick={() => onDelete(name)}>delete</button>
      <button onClick={onView}>view</button>
    </>
  );
};

const Modal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div>
      <button onClick={onClose}>close</button>
    </div>
  );
};
