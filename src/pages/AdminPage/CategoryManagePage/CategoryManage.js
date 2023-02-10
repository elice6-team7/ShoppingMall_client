import React, { useEffect, useRef, useState } from 'react';
import * as API from "../../../utils/api";
import { CategoryWrapper } from "./styled";

const CategoryManage = () => {
  const [categoryList, setCategoryList] = useState([]);
  const addInput = useRef();
  
  useEffect(() => {
    (async () => {
      try {
        const response = await API.get("/categories");
        const category = response.data;
        setCategoryList(category.map(c => c[0]));
      } catch(err) {
        console.log(err);
      }
    })();
  }, []);

  const categoryAddHandler = async (e) => {
    e.preventDefault();
    let addValue = addInput.current.value;
    try {
      const response = await API.post("/categories",
        {title: addValue}
      );
      const category = response.data;
      setCategoryList(current => [...current, category]);
      addInput.current.value = '';
    } catch(err) {
      console.log(err);
      alert("해당 카테고리가 존재합니다.");
    }
  }
  const categoryUpdateHandler = async (id, idx) => {
    const inputTitle = categoryList.find((item, index) => idx === index);
      try {
        await API.patch(`/categories/${id}`,
          {title: inputTitle.title},
        );
      } catch(err) {
        console.log(err);
      }
  }
  const categoryDeleteHandler = async (id) => {
    try {
      await API.delete(`/categories/${id}`);
      setCategoryList(current => current.filter(category => category._id !== id));
    } catch(err) {
      console.log(err);
      alert("해당 카테고리에 상품이 존재합니다.");
    }
  }

  const onChange = (e, idx) => {
    setCategoryList(current => current.map((item, index) => 
      index === idx ? ({...item, title: e.target.value}) : item ));
  }

  return (
    <>
      <CategoryWrapper>
        <form>
          <div>
            <p>CATEGORY MANAGE</p>
            <div>
              <label htmlFor="create">CATEGORY</label>
              <div>
                <input 
                  type="text"
                  id="create"
                  placeholder="CATEGORY NAME"
                  ref={addInput} />
                <button onClick={categoryAddHandler}>ADD</button>
              </div>
            </div>
          </div>
          <div>
            <ul>
              {
                categoryList.map((category, idx) => {
                  return (
                    <li key={idx}>
                      <input
                        type="text"
                        name={category.title}
                        value={category.title}
                        onChange={(e) => onChange(e, idx)} />
                      <button onClick={(e) => {
                        e.preventDefault();
                        categoryUpdateHandler(category._id, idx);
                      }}>UPDATE</button>
                      <button onClick={(e) => {
                        e.preventDefault();
                        categoryDeleteHandler(category._id);
                      }}>DELETE</button>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </form>
      </CategoryWrapper>
    </>
  );
};

export default CategoryManage;
