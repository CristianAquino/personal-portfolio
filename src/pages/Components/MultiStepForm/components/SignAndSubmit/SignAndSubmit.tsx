import { useEffect, useRef, useState } from "react";
import { Container, Drawing, Left, Righ } from "./styled-components";

export type SignAndSubmitProps = {};

const SignAndSubmit = ({}: SignAndSubmitProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const context = canvas.getContext("2d");
    if (!context) return;
    context.lineWidth = 3;
    context.strokeStyle = "black";
    context.fillStyle = "white";
    contextRef.current = context;
  }, []);

  function drawing({ nativeEvent }: { nativeEvent: any }) {
    if (!isDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current?.lineTo(offsetX, offsetY);
    contextRef.current?.stroke();
  }

  function startDrawing() {
    setIsDrawing(true);
    contextRef.current?.beginPath();
  }

  function finishDrawing() {
    contextRef.current?.drawImage(
      canvasRef.current as HTMLCanvasElement,
      -canvasRef.current?.width / 2,
      -canvasRef.current?.height / 2,
      -canvasRef.current?.width,
      -canvasRef.current?.height
    );
    console.log(canvasRef.current?.toDataURL());
    contextRef.current?.closePath();
    setIsDrawing(false);
  }

  function clearCanvas() {
    contextRef.current?.clearRect(
      0,
      0,
      canvasRef.current?.width as number,
      canvasRef.current?.height as number
    );
  }

  return (
    <Container>
      <Left>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
          numquam similique est ipsa pariatur doloribus. Laborum quisquam cumque
          reiciendis sed id, vero minima porro nisi recusandae maxime nobis eum
          illum iste nulla, ipsa eos tempore veritatis ad. Eveniet, dolores
          quasi.
        </p>
      </Left>
      <Righ>
        <h3>signature</h3>
        <section>
          <Drawing
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseUp={finishDrawing}
            onMouseMove={drawing}
          ></Drawing>
        </section>
        <button type="button" onClick={clearCanvas}>
          clear
        </button>
      </Righ>
    </Container>
  );
};

export default SignAndSubmit;
