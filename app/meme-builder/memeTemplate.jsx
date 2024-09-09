"use client";
import React, { useEffect, useState } from "react";
import { fabric } from "fabric";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "../../lib/utils";
import { Checkbox } from "@/components/ui/checkbox";

const App = () => {
  const { selectedObjects, editor, onReady } = useFabricJSEditor();
  const [draw, setDraw] = useState(false);
  const [toggle, setToggle] = useState(false);

  const [stroke, setStroke] = useState(false);
  const history = [];
  const [color, setcolor] = useState("");
  const [Bgcolor, setBgcolor] = useState("");
  const [customText, setCustomText] = useState("");
  const [img, setimg] = useState("");

  const uploadImg = (e) => {
    setimg(URL.createObjectURL(e.target.files[0]));
  };

  useEffect(() => {
    if (editor) {
      editor.canvas.setBackgroundColor(
        Bgcolor,
        editor.canvas.renderAll.bind(editor.canvas)
      );
    }
  }, [Bgcolor, editor]);

  useEffect(() => {
    if (img && editor?.canvas) {
      fabric.Image.fromURL(img, function (oImg) {
        oImg.scaleToWidth(300);
        oImg.scaleToHeight(500);
        editor.canvas.add(oImg);
      });
    }
  }, [editor?.canvas, img]);

  const deleteSelected = () => {
    const activeObject = editor.canvas.getActiveObject();
    if (activeObject) {
      // Save a copy of the current canvas state for undo
      const json = editor.canvas.toDatalessJSON();
      history.push({ json, deletedObject: activeObject.toObject() });

      // Delete the selected object
      editor.canvas.remove(activeObject);

      // Render the canvas
      editor.canvas.renderAll();
    }
  };

  const clear = () => {
    editor.canvas._objects.splice(0, editor.canvas._objects.length);
    history.splice(0, history.length);
    editor.canvas.renderAll();
  };

  useEffect(() => {
    if (editor && editor.canvas) {
      if (draw) {
        editor.canvas.isDrawingMode = true;
      } else {
        editor.canvas.isDrawingMode = false;
      }
    }
  }, [draw]);

  const undo = () => {
    if (editor.canvas._objects.length > 0) {
      history.push(editor.canvas._objects.pop());
    }
    editor.canvas.renderAll();
  };

  const redo = () => {
    if (history.length > 0) {
      editor.canvas.add(history.pop());
    }
  };

  const fullScreenSelectedImage = () => {
    const activeObject = editor.canvas.getActiveObject();
    if (activeObject && activeObject.type === "image") {
      const canvasWidth = editor.canvas.width;
      const canvasHeight = editor.canvas.height;
      activeObject.scaleX = canvasWidth / activeObject.width;
      activeObject.scaleY = canvasHeight / activeObject.height;
      editor.canvas.renderAll();
    }
  };

  const addText = (text, fontSize = 50) => {
    const newText = new fabric.Text(text || "insert text", {
      left: 50,
      top: 50,
      fontSize: fontSize,
      fill: color || "#000",
      strokeWidth: stroke ? 3 : 0,
      stroke: color,
    });

    editor.canvas.add(newText);

    // Render the canvas to apply the changes
    editor.canvas.renderAll();
  };

  const downloadCanvas = () => {
    // Create a new canvas element
    const downloadCanvas = document.createElement("canvas");
    const ctx = downloadCanvas.getContext("2d");

    // Set the dimensions of the new canvas to match the original canvas
    downloadCanvas.width = editor.canvas.width;
    downloadCanvas.height = editor.canvas.height;

    // Draw a white background rectangle covering the entire canvas
    ctx.fillStyle = "#ffffff"; // White color
    ctx.fillRect(0, 0, downloadCanvas.width, downloadCanvas.height);

    // Draw the contents of the original canvas on top of the white background
    const dataURL = editor.canvas.toDataURL();
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0);

      // Trigger the download
      const link = document.createElement("a");
      link.href = downloadCanvas.toDataURL();
      link.download = "Meme.png"; // Specify the filename here
      link.click();
    };
    img.src = dataURL;
  };

  const bringToFront = () => {
    const activeObject = editor.canvas.getActiveObject();
    if (activeObject) {
      editor.canvas.bringToFront(activeObject);
      editor.canvas.renderAll();
    }
  };

  const sendToBack = () => {
    const activeObject = editor.canvas.getActiveObject();
    if (activeObject) {
      editor.canvas.sendToBack(activeObject);
      editor.canvas.renderAll();
    }
  };

  useEffect(() => {
    if (!editor || !fabric) {
      return;
    }
    editor.canvas.freeDrawingBrush.color = color;
    editor.setStrokeColor(color);
  }, [color]);

  return (
    <div className="w-full pt-[200px] px-5 space-y-10">
      <h1 className="text-center font-extrabold font-inter text-[60px]">
        Meme Builder
      </h1>
      <div className="w-full mx-auto max-w-[1400px] pb-10">
        <div className="space-y-10 pb-5 bg-blue w-fit p-5 rounded-xl">
          <div
            className={cn(
              "w-full max-w-[1400px] mx-auto flex justify-center h-[400px bg-white",
              toggle && "max-w-[800px]"
            )}
          >
            <FabricJSCanvas className="w-full h-[500px]" onReady={onReady} />
          </div>

          <div className="gap-3 justify-around w-full max-w-[1400px] mx-auto flex flex-wrap items-center">
            <label htmlFor="file" className="relative cursor-pointer">
              <Button className="bg-black hover:bg-white hover:text-black transition hover:bg-black hover:bg-white hover:text-black transition-700 text-white font-bold py-2 px-4 rounded">
                Upload File
              </Button>
              <Input
                id="file"
                type="file"
                accept=".jpg, .jpeg, .png, .gif, .svg" // Specify accepted file types
                onChange={uploadImg}
                className="w-full capitalize absolute bottom-0 left-0 opacity-0 cursor-pointer"
                placeholder="Upload"
              />
            </label>
            <Button
              className="bg-black hover:bg-white hover:text-black transition "
              onClick={clear}
            >
              Clear All
            </Button>
            <Button
              className={cn(
                "bg-black hover:bg-white hover:text-black transition ",
                draw && "bg-red-400"
              )}
              onClick={() => {
                setDraw(!draw);
              }}
            >
              {draw ? "Stop Drawing" : "Start Drawing"}
            </Button>

            <Button
              className="bg-black hover:bg-white hover:text-black transition"
              onClick={deleteSelected}
            >
              Delete Selected
            </Button>
            <Button
              className="bg-black hover:bg-white hover:text-black transition"
              onClick={(e) => setToggle(!toggle)}
            >
              Toggle Dimension
            </Button>
            <Button
              className="bg-black hover:bg-white hover:text-black transition"
              onClick={fullScreenSelectedImage}
            >
              Selected FullScreen
            </Button>

            <Button
              className="bg-black hover:bg-white hover:text-black transition"
              onClick={bringToFront}
            >
              Bring Front
            </Button>

            <Button
              className="bg-black hover:bg-white hover:text-black transition"
              onClick={sendToBack}
            >
              Send Back
            </Button>

            <Button
              className="bg-black hover:bg-white hover:text-black transition"
              onClick={undo}
            >
              Undo
            </Button>
            <Button
              className="bg-black hover:bg-white hover:text-black transition"
              onClick={redo}
            >
              Redo
            </Button>
          </div>

          <div className="flex max-w-[1400px] mx-auto items-center justify-between gap-3 w-full">
            <div className="flex gap-3 items-center">
              <Input
                onChange={(e) => setCustomText(e.target.value)}
                className={`w-[300px]  placeholder:text-white placeholder:font-medium px-7`}
                placeholder="Enter Text"
              />
              <label htmlFor="color" className="font-semibold font-lato">
                Color
              </label>
              <Input
                onChange={(e) => {
                  setcolor(e.target.value);
                }}
                id="color"
                className="w-[50px]"
                type="color"
              />
              <label htmlFor="color" className="font-semibold font-lato">
                BG Color
              </label>
              <Input
                onChange={(e) => {
                  setBgcolor(e.target.value);
                }}
                id="color"
                className="w-[50px]"
                type="color"
              />
              <label htmlFor="stroke" className="font-semibold font-lato">
                Stroke
              </label>
              <Checkbox
                onClick={() => {
                  setStroke(!stroke);
                }}
                id="stroke"
                className="bg-white size-5"
              />

              <Button
                onClick={(e) => addText(customText)}
                className="bg-black hover:bg-white hover:text-black transition"
              >
                Add text
              </Button>
            </div>

            <div>
              <Button
                className="bg-black hover:bg-white hover:text-black transition"
                onClick={downloadCanvas}
              >
                Download
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
