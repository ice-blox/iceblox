"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

import React, { useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { fabric } from "fabric";

const MemeTemplate = () => {
  const [color, setcolor] = useState("");
  const [toggle, setToggle] = useState(false);

  const canvasRef = useRef(null);

  useLayoutEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      fireRightClick: true,
      fireMiddleClick: true,
      stopContextMenu: true,
    });
    canvas.requestRenderAll();
  }, []);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
      const image = new Image();
      image.onload = function () {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // Set canvas size to match image dimensions
        canvas.width = image.width;
        canvas.height = image.height;

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw image onto canvas
        ctx.drawImage(image, 0, 0);
      };
      image.src = event.target.result;
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="w-full bg-blue max-w-[1400px] mx-auto p-5 rounded-xl space-y-5">
      <canvas
        ref={canvasRef}
        className={cn(
          "bg-matte-black max-w-[1400px] mx-auto w-full h-[400px]",
          toggle && "w-1/2"
        )}
      />
      <div className="flex justify-between w-full mx-auto">
        <label htmlFor="file" className="relative cursor-pointer">
          <Button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Upload File
          </Button>
          <Input
            id="file"
            type="file"
            accept=".jpg, .jpeg, .png, .gif" // Specify accepted file types
            onChange={handleFileInputChange}
            className="w-full capitalize absolute bottom-0 left-0 opacity-0 cursor-pointer"
            placeholder="Upload"
          />
        </label>

        <Button
          className="bg-black capitalize"
          onClick={(e) => setToggle(!toggle)}
        >
          toggle dimensions
        </Button>
        <Button className="bg-black capitalize">Delete Selected</Button>
        <Button className="bg-black capitalize">Bring to Front</Button>
        <Button className="bg-black capitalize">Send to Back</Button>
        <Button className="bg-black capitalize">Add text</Button>
        <Button className="bg-black capitalize">Clear all</Button>
        <Button className="bg-black capitalize">Download</Button>
      </div>
      <div className="flex items-center justify-start gap-3 w-full mx-auto ">
        <Input
          className={`w-[300px] border-2 placeholder:text-white placeholder:font-medium px-7 placeholder-shown:text-[${color}]`}
          placeholder="Enter Text"
        />
        <label htmlFor="color" className="font-semibold font-lato">
          Color
        </label>
        <Input
          onChange={(e) => setcolor(e.target.value)}
          id="color"
          className=" w-[50px]"
          type="color"
        />
        <label htmlFor="stroke" className="font-semibold font-lato">
          Stroke
        </label>
        <Checkbox id="stroke" />

        <Button>Add text</Button>
      </div>
    </div>
  );
};

export default MemeTemplate;
