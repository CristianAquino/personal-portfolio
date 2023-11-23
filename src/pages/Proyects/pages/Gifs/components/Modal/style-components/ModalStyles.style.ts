import styled from "styled-components";

const ModalContainer = styled.dialog`
  border: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  overflow: hidden;
  border-radius: 0.5rem;

  &::backdrop {
    background-color: rgba(0, 0, 0, 0.75);
  }
`;

const ModalImage = styled.img`
  width: 100%;
  height: 100%;
`;

const ModalTitleImage = styled.p`
  position: absolute;
  font-size: 1.25rem;
  font-weight: bold;
  bottom: 1.25rem;
  left: 1rem;
`;

const ModalCloseButton = styled.p`
  position: absolute;
  font-size: 1.25rem;
  font-weight: bold;
  top: 0;
  right: 0;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  background-color: #03b19f;
`;

export { ModalContainer, ModalImage, ModalTitleImage, ModalCloseButton };
