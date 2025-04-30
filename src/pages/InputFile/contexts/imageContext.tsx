import { createContext, useReducer } from "react";
import { ImageModel, ReducerModel } from "../models";
import { imageReducer } from "../services";

export const ImageContext = createContext({
  state: [] as ImageModel[],
  dispatch: ({}: ReducerModel) => {},
});

export const ImageProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer<
    (state: ImageModel[], action: ReducerModel) => ImageModel[]
  >(imageReducer, []);
  return (
    <ImageContext.Provider value={{ state, dispatch }}>
      {children}
    </ImageContext.Provider>
  );
};
