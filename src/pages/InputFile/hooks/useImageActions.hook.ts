import { ChangeEvent, useContext, useRef } from "react";
import { ImageContext } from "../contexts";
import { ImageModel } from "../models";
import { TYPES } from "../services";

export function useImageActions() {
  const refFile = useRef<HTMLInputElement>(null);
  const { state, dispatch } = useContext(ImageContext);

  function onAdd(e: ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;

    if (!files) return;

    const new_files = Array.from(files)
      .map((file) => {
        let url = URL.createObjectURL(file);
        return {
          id: crypto.randomUUID(),
          url,
          name: file.name.split(".")[0],
          file: file,
        };
      })
      .filter((file) =>
        state.every((image: ImageModel) => image.name != file.name)
      );

    dispatch({ type: TYPES.add_files, payload: new_files });
  }

  function onChange(e: ChangeEvent<HTMLInputElement>, id: string) {
    const files = e.target.files;
    if (!files) return;

    // const update = state.map((file) => {
    //   if (file.id == id) {
    //     let url = URL.createObjectURL(files[0]);
    //     return {
    //       ...file,
    //       url,
    //       name: files[0].name.split(".")[0],
    //       file: files[0],
    //     };
    //   }
    //   return file;
    // });
    dispatch({ type: TYPES.update_file, payload: { image: files[0], id: id } });
  }

  function onDelete(id: string) {
    // const filter = state.filter((file: ImageModel) => file.id != id);
    refFile.current!.value = "";
    dispatch({ type: TYPES.remove_file, payload: { id } });
  }

  function onReset() {
    refFile.current!.value = "";
    dispatch({ type: TYPES.remove_all_files });
  }

  return { state, onAdd, onReset, onDelete, onChange, refFile };
}
