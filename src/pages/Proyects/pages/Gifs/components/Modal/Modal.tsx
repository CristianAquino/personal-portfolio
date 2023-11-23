import { Gif } from "@app/pages/Proyects/pages/Gifs/models";
import { getGifById } from "@app/pages/Proyects/pages/Gifs/services";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  ModalCloseButton,
  ModalContainer,
  ModalImage,
  ModalTitleImage,
} from "./style-components";

export type ModalProps = {};

const Modal = ({}: ModalProps) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [gif, setGif] = useState<Gif>({} as Gif);
  const modalRef = useRef<HTMLDialogElement>(null);

  function handleCloseModal() {
    navigate(-1);
  }
  useEffect(() => {
    const dialog = modalRef.current;
    const id = searchParams.get("img");
    if (!id) return;
    async function getById(id: string) {
      const data = await getGifById(id);
      setGif(data);
    }
    getById(id);
    dialog?.showModal();
    return () => {
      dialog?.close();
      setGif({} as Gif);
    };
  }, [searchParams]);

  if (!gif) return <p>Loading</p>;

  return (
    <ModalContainer ref={modalRef}>
      <ModalImage src={gif.url} alt={gif.title} title={gif.title} />
      <ModalTitleImage>{gif.title}</ModalTitleImage>
      <ModalCloseButton onClick={handleCloseModal}>X</ModalCloseButton>
    </ModalContainer>
  );
};

export default Modal;
