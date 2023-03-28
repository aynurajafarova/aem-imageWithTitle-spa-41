import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";

export const TextOverAnImageEditConfig = {
  emptyLabel: "TextOverAnImage",

  isEmpty: (props) => {
    return !props || !props.src;
  },
};

export default function TextOverAnImage(props) {
  const textOverAnImageWrapper = {
    position: "relative",
    width: "90%",
    margin: "0 auto",
  };
  const textOverAnImageWrapperBody = {
    position: "absolute",
    left: "0",
    right: "0",
    bottom: "30px",
  };

  const getImage = () => {
    return (
      <img
        className="Image-src"
        src={props.src}
        alt={props.alt}
        title={props.title ? props.title : props.alt}
        style={{ width: "100%" }}
      />
    );
  };

  const getHeadline = () => {
    return props.headline ? <p>{props.headline}</p> : null;
  };

  const getContent = () => {
    return props.content ? <p>{props.content}</p> : null;
  };

  if (TextOverAnImageEditConfig.isEmpty(props)) {
    return null;
  }

  return (
    <div style={textOverAnImageWrapper}>
      <div style={textOverAnImageWrapperBody}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textTransform: "uppercase",
            fontFamily: "sans-serif",
            fontWeight: "600",
          }}
        >
          {getHeadline()} {getContent()}
        </div>
      </div>
      {getImage()}
    </div>
  );
}

MapTo("imageWithTitle-spa-41/components/text-over-an-image")(
  TextOverAnImage,
  TextOverAnImageEditConfig
);
