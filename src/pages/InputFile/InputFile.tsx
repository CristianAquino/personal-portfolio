"use client";

import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import { ImageContext } from "./contexts";
import { useImageActions, useModal } from "./hooks";
import { ImageModel } from "./models";
import { sharinInformationNameImage, TYPES } from "./services";

export type InputFileProps = {
  // types...
};

const InputFile = ({}: InputFileProps) => {
  const { state, onAdd, onReset, onDelete, onChange, refFile } =
    useImageActions();
  const { isOpen, openModal, closeModal } = useModal();
  const text = state.length == 0 ? "upload files" : "more files";

  function handleClick() {
    const files = refFile.current;
    files?.click();
  }

  return (
    <div>
      <button onClick={handleClick}>{text}</button>
      <input
        ref={refFile}
        type="file"
        multiple
        style={{ display: "none" }}
        onChange={onAdd}
      />
      {state.length > 0 &&
        state.map((file: any) => (
          <Image
            key={file?.id}
            data={file}
            onDelete={onDelete}
            onChange={onChange}
            onView={openModal}
          />
        ))}
      {state.length > 0 && <button onClick={onReset}>reset</button>}
      {isOpen && <Modal onClose={closeModal} />}
    </div>
  );
};

export default InputFile;

const Image = ({
  data,
  onDelete,
  onChange,
  onView,
}: {
  data: ImageModel;
  onDelete: (id: string) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>, id: string) => void;
  onView: () => void;
}) => {
  const refImage = useRef<HTMLInputElement>(null);

  function handleClick() {
    const files = refImage.current;
    files?.click();
  }
  const handleSharedNameImage = (id: string) => {
    onView();
    sharinInformationNameImage.setObservable = id;
  };

  return (
    <>
      <img src={data.url} alt={data.name} style={{ inlineSize: "200px" }} />
      <input
        ref={refImage}
        type="file"
        style={{ display: "none" }}
        onChange={(e) => onChange(e, data.id)}
      />
      <span>{data.name}</span>
      <button onClick={handleClick}>change</button>
      <button onClick={() => onDelete(data.id)}>delete</button>
      <button onClick={() => handleSharedNameImage(data.id)}>view</button>
    </>
  );
};

const Modal = ({ onClose }: { onClose: () => void }) => {
  const { state, dispatch } = useContext(ImageContext);
  const subscription = sharinInformationNameImage.getObservable;
  const [index, setIndex] = useState(0);
  const image = state[index];

  const selectNewIndexImage = (index: number, next = true) => {
    const nextIndex = next
      ? (index + 1) % state.length
      : (index - 1 + state.length) % state.length;
    setIndex(nextIndex);
  };

  useEffect(() => {
    subscription.subscribe((data: string) => {
      if (data) {
        const idx = state.findIndex((ele: ImageModel) => ele.id == data);
        setIndex(idx);
      }
    });
  }, []);

  return (
    <div>
      {image && (
        <img src={image.url} alt={image.name} style={{ inlineSize: "200px" }} />
      )}
      <button onClick={onClose}>close</button>
      <button onClick={() => selectNewIndexImage(index, false)}>left</button>
      <button onClick={() => selectNewIndexImage(index)}>right</button>
      <button
        onClick={() => {
          dispatch({ type: TYPES.remove_file, payload: { id: image.id } });
        }}
      >
        delete
      </button>
    </div>
  );
};
