import React, { useState } from "react";
import Main from "../../components/layout/main";
import { PlusOutlined } from "@ant-design/icons";
import Button from "../../components/button";
import Search from "../../components/search";
import { DriverCard } from "../../components/card";
import PageTitle from "../../components/section-title";

const DriverManagement = () => {
  const page = {
    title: "Driver Management",
    subtitle: "Daftar Driver yang bekerja dengan Anda",
  };

  const driverList = [
    {
      id: "1",
      name: "Doe",
      phone: "08225232530",
      photo: "",
      email: "abcdd@abcd.com",
      birth: "July, 01 1972",
    },
    {
      id: "2",
      name: "John",
      phone: "08225232530",
      photo: "",
      email: "abcdd@abcd.com",
      birth: "July, 01 1972",
    },
    {
      id: "3",
      name: "Smith",
      phone: "08225232530",
      photo: "",
      email: "abcdd@abcd.com",
      birth: "July, 01 1972",
    },
    {
      id: "4",
      name: "Smith",
      phone: "08225232530",
      photo: "",
      email: "abcdd@abcd.com",
      birth: "July, 01 1972",
    },
    {
      id: "5",
      name: "Smith",
      phone: "08225232530",
      photo: "",
      email: "abcdd@abcd.com",
      birth: "July, 01 1972",
    },
  ];

  const [driverSource] = useState(driverList);
  const [drivers, setDriver] = useState(driverList);

  const handleChangeSearch = (value) => {
    if (value === "") setDriver(driverSource);
    setDriver(
      driverSource.filter((v) =>
        v.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <Main>
      <div className="main-content">
        <div className="main-content__header">
          <div className="main-content__header__left">
            <PageTitle {...page} />
          </div>
          <div className="main-content__header__right">
            <Search placeholder="Cari Driver" onChange={handleChangeSearch} />
            <Button type="primary" suffix={<PlusOutlined />}>
              Tambah Driver
            </Button>
          </div>
        </div>
        <div className="main-content__body" data-testid="driver-list">
          {drivers.map((v) => (
            <DriverCard key={v.id} {...v} />
          ))}
        </div>
      </div>
    </Main>
  );
};

export default DriverManagement;
