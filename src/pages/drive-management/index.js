import React, { useState, useEffect } from "react";
import Main from "../../components/layout/main";
import { PlusOutlined } from "@ant-design/icons";
import Button from "../../components/button";
import Search from "../../components/search";
import { DriverCard } from "../../components/card";
import PageTitle from "../../components/section-title";
import { useDispatch, useSelector } from "react-redux";
import { driversActions } from "../../redux/actions";

const DriverManagement = () => {
  const page = {
    title: "Driver Management",
    subtitle: "Daftar Driver yang bekerja dengan Anda",
  };

  const dispatch = useDispatch();

  let [maxPage, setMaxPage] = useState(5);
  let [minPage, setMinPage] = useState(0);
  let [dataDriver, setDataDriver] = useState(
    useSelector((state) => state.data)
  );

  const prevButton = () => {
    setMaxPage(maxPage - 5);
    setMinPage(minPage - 5);
    setDataDriver(dataDriver);
    return 0;
  };
  const nextButton = () => {
    setMaxPage(maxPage + 5);
    setMinPage(minPage + 5);
    setDataDriver(dataDriver);
    return 0;
  };

  function getData() {
    const dataCache = JSON.parse(localStorage.getItem("DRIVER"));
    if (dataCache.length >= 30) {
      setDataDriver(dataCache);
    } else {
      dispatch(driversActions());
    }
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeSearch = (value) => {
    setDataDriver(
      dataDriver.filter((v) =>
        v.name.first.toLowerCase().includes(value.toLowerCase())
      )
    );
    if (value === "") setDataDriver(dataDriver);
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
          {JSON.parse(JSON.stringify(dataDriver))
            .slice(minPage, maxPage)
            .map((e, k) => (
              <DriverCard
                key={k}
                id={e.login.username}
                name={`${e.name.first}, ${e.name.last}`}
                phone={e.cell}
                email={e.email}
                photo={e.picture.medium}
                birth={e.dob.date}
              />
            ))}
        </div>
        <div className="main-content__pagination">
          <Button
            type="pagination"
            disableButton={minPage === 0}
            onClick={prevButton}
          >
            {" < Prevoius page"}
          </Button>
          <Button
            type="pagination"
            disableButton={maxPage === dataDriver.length}
            onClick={nextButton}
          >
            {" Next page >"}
          </Button>
        </div>
      </div>
    </Main>
  );
};

export default DriverManagement;
