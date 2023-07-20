import { PushpinOutlined } from "@ant-design/icons";
import { Tag } from "antd";

type MapPinProps = {
  text: string;
  lat?: number;
  lng?: number;
};

export const MapPin = ({ text }: MapPinProps) => (
  <Tag
    icon={<PushpinOutlined />}
    color="#cd201f"
    style={{
      padding: 10,
      fontSize: 20,
    }}
  >
    {text}
  </Tag>
);

export default MapPin;
