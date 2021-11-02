import React, { useState, useEffect } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Main,
  Button,
  Search,
  DriverCard,
  PageTitle,
  Loading,
} from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { driversActions } from "../../redux/actions";

const DriverManagement = () => {
  const dispatch = useDispatch();

  const page = {
    title: "Driver Management",
    subtitle: "Daftar Driver yang bekerja dengan Anda",
  };

  let [maxPage, setMaxPage] = useState(5);
  let [minPage, setMinPage] = useState(0);
  let [dataDriver, setDataDriver] = useState(
    useSelector((state) => state.data)
  );
  let [loading, setLoading] = useState(useSelector((state) => state.isLoading));

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

  const getData = () => {
    dispatch(driversActions());
    setLoading(false);
  };

  useEffect(() => {
    const checkCache = localStorage.getItem("DRIVER");
    const dataCache = checkCache ? JSON.parse(checkCache) : setLoading(true);
    if (dataCache && dataCache.length >= 30) {
      setDataDriver(dataCache);
      setLoading(false);
    } else {
      getData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeSearch = async (event) => {
    try {
      const searchText = event;
      const dataCache = JSON.parse(localStorage.getItem("DRIVER"));
      if (searchText === "" || null) {
        setDataDriver(dataCache);
        return true;
      } else {
        const dataClone = await dataCache.filter((row) => {
          return row.name.first
            .toLowerCase()
            .includes(searchText.toLowerCase());
        });
        Promise.all(dataClone).then(() => {
          setDataDriver(dataClone);
        });
      }
    } catch (error) {
      console.log(error);
    }
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
          {loading ? (
            <Loading />
          ) : dataDriver.length ? (
            JSON.parse(JSON.stringify(dataDriver))
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
              ))
          ) : (
            <Loading />
          )}
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
            disableButton={maxPage >= dataDriver.length}
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
