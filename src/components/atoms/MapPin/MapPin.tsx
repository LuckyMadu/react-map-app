import { PushpinOutlined } from "@ant-design/icons";
import { Tag } from "antd";
import "./MapPin.styles.css";

type MapPinProps = {
  text: string;
  lat?: number;
  lng?: number;
};

export const MapPin = ({ text }: MapPinProps) => (
  <div className="map-pin">
    <Tag icon={<PushpinOutlined />} color="#cd201f">
      {text}
    </Tag>
  </div>
);

export default MapPin;
