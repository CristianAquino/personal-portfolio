import { ImageModel, ReducerModel } from "../../models";

export const TYPES = {
  add_files: "add-files",
  update_file: "update-file",
  remove_file: "remove-file",
  remove_all_files: "remove-all-files",
};

export function imageReducer(
  state: ImageModel[],
  action: ReducerModel
): ImageModel[] {
  switch (action.type) {
    case TYPES.add_files: {
      const add = [...state, ...action.payload].sort((a, b) => {
        if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
          return 1;
        }
        if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
          return -1;
        }
        return 0;
      });
      return add;
    }
    case TYPES.remove_file: {
      const { id } = action.payload;
      return state.filter((file: ImageModel) => file.id != id);
    }
    case TYPES.remove_all_files: {
      return [];
    }
    case TYPES.update_file: {
      const { image, id } = action.payload;
      return state.map((file) => {
        if (file.id == id) {
          let url = URL.createObjectURL(image);
          return {
            ...file,
            url,
            name: image.name.split(".")[0],
            file: image,
          };
        }
        return file;
      });
    }
    default:
      return state;
  }
}
