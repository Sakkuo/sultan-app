import React, { useEffect, useState } from "react";
import "./AdminPage.css";
import { IProduct } from "../../models/IProduct";

const AdminPage = () => {
  const [adminLocalStorage, setAdminLocalStorage] = useState<IProduct[]>([]);

  useEffect(() => {
    renderAdminStorage();
  }, [localStorage]);

  const typeOfInput = [
    "barcode",
    "brand",
    "description",
    "image_url",
    "manufacturer",
    "name",
    "price",
    "size",
    "size_type",
    "type_of_care",
  ];


  const defaultObject: IProduct = {
    "barcode": +((Math.random() * 10000000000).toFixed()),
    "brand": "default",
    "description": "default",
    "image_url": "default",
    "manufacturer": "default",
    "name": "default", 
    "price": 1,
    "size": "default",
    "size_type": "вес",
    "type_of_care": ["default"]
  }

  const renderAdminStorage = () => {
    const tempAdminLocalStorage: IProduct[] = [];
    const localStorageCheck = (local: any) => {
      for (let i = 0; i < local.length; i++) {
        tempAdminLocalStorage.push(JSON.parse(local.getItem(local.key(i)!)!));
      }
    };

    localStorageCheck(localStorage);
    setAdminLocalStorage(tempAdminLocalStorage);
  };

  const deleteItem = (item: IProduct) => {
    localStorage.removeItem(`${item.barcode}`);
    console.log(item);
    const newAdminLocalStorage = adminLocalStorage.filter(
      (i) => i.barcode !== item.barcode
    );
    setAdminLocalStorage(newAdminLocalStorage);
  };

  const changeItem = (e: any, item: IProduct) => {
    localStorage.removeItem(`${item.barcode}`);
    let newObj: { [key: string]: string|number|string[] } = {};
    e.preventDefault();
    for (let i = 0; i < typeOfInput.length; i++) {
      if (typeOfInput[i] === "type_of_care") {
        newObj[typeOfInput[i]] = e.target[i].value.split(",");
      } else if (typeOfInput[i] === "price" || typeOfInput[i] === "barcode") {
        newObj[typeOfInput[i]] = +e.target[i].value;
      } else {
        newObj[typeOfInput[i]] = e.target[i].value;
      }
    }
    localStorage.setItem(`${newObj.barcode}`, JSON.stringify(newObj));
  };

  const addNewItem = () => {
    localStorage.setItem(`${defaultObject.barcode}`, JSON.stringify(defaultObject));
    setAdminLocalStorage([...adminLocalStorage, defaultObject]);
  };

  return (
    <div className="AdminPage">
      <div className="AdminPage__buttonContainer">
        <div className="AdminPage__addItem" onClick={() => addNewItem()}>Добавить</div>
      </div>
      <div className="AdminPage__container">
        {adminLocalStorage.map((item, i) => (
          <form
            className="AdminPage__item"
            key={item.barcode}
            onSubmit={(e) => changeItem(e, item)}
          >
            <div className="AdminPage__barcode AdminPage__div">
              Код товара:{" "}
              <input type="number" name="barcode" defaultValue={item.barcode} />
            </div>
            <div className="AdminPage__brand AdminPage__div">
              Бренд: <input type="text" name="brand" defaultValue={item.brand} />
            </div>
            <div className="AdminPage__description AdminPage__div">
              Описание:{" "}
              <input
                type="text"
                name="description"
                defaultValue={item.description}
              />
            </div>
            <div className="AdminPage__imageUrl AdminPage__div">
              Картинка:{" "}
              <input type="text" name="image_url" defaultValue={item.image_url} />
            </div>
            <div className="AdminPage__manufacturer AdminPage__div">
              Производитель:{" "}
              <input
                type="text"
                name="manufacturer"
                defaultValue={item.manufacturer}
              />
            </div>
            <div className="AdminPage__name AdminPage__div">
              Имя: <input type="text" name="name" defaultValue={item.name} />
            </div>
            <div className="AdminPage__price AdminPage__div">
              Цена: <input type="number" name="price" defaultValue={item.price} />
            </div>
            <div className="AdminPage__size AdminPage__div">
              Размер: <input type="text" name="size" defaultValue={item.size} />
            </div>
            <div className="AdminPage__sizeType AdminPage__div">
              Тип размера:{" "}
              <input type="text" name="size_type" defaultValue={item.size_type} />
            </div>
            <div className="AdminPage__typeOfCare AdminPage__div">
              Тип ухода:{" "}
              <input
                type="text"
                name="type_of_care"
                defaultValue={item.type_of_care}
              />
            </div>
            <div className="AdminPage__div AdminPage__buttons">
              <div
                className="AdminPage__delete AdminPage__button"
                onClick={() => deleteItem(item)}
              >
                Удалить
              </div>
              <button className="AdminPage__change AdminPage__button">
                Изменить
              </button>
            </div>
          </form>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
