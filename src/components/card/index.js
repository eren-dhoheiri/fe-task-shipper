import React from "react";
import FieldName from "../field-name";
import ImgHolder from "../photo";
import { EllipsisOutlined } from "@ant-design/icons";
import { ImageHolder } from "../../assets";
import moment from "moment";

export const Card = ({ title, children }) => {
  return (
    <div className={`card`}>
      <div className="card__head">
        <h4 className="card__head__title">{title}</h4>
        <div className="card__head__options">
          <EllipsisOutlined />
        </div>
      </div>
      <div className="card__body">{children}</div>
    </div>
  );
};

export const DriverCard = ({
  id,
  photo = { ImageHolder },
  name,
  phone,
  birth,
  email,
}) => {
  let title = (
    <span>
      ID Driver <b>{id}</b>
    </span>
  );
  let props = {
    title,
  };
  return (
    <Card {...props}>
      <div className="container">
        <div className="container__left">
          <ImgHolder url={photo} alt={name} />
          <FieldName label="Nama Driver" value={name} />
          <FieldName label="Telepon" value={phone} />
          <FieldName label="Email" value={email} />
          <FieldName
            label="Tanggal Lahir"
            value={moment(birth).format("DD-MM-yyyy")}
          />
        </div>
      </div>
    </Card>
  );
};
