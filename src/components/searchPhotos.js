import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

import Search from "../images/search.png";

const SearchPhotos = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const accessToken = "Jqoz8CP0EGIj5BBWXUKZVSb5AhQtxDmUF2ku4RJd948";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url ="https://api.unsplash.com/search/photos?page-1&query=" + query + "&per_page=50&client_id=" + accessToken;

    axios.get(url).then((res) => {
      setResult(res.data.results);
    });
  };

  return (
    <>
      <Header>
        <FormWrapper>
          <h1 className="header-title">Unsplash Image Search Gallery</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search for free photos..."
              className="input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="button">
              <img src={Search} className="search-icon" alt="search-icon" />
            </button>
          </form>
        </FormWrapper>
      </Header>
      <PhotosWrapper>
        
          {result.map((image) => (
            <div className="card" key={image.id}>
              <img
                className="card-image"
                alt={image.alt_description}
                src={image.urls.full}
                width="50%"
                height="50%"
              ></img>
            </div>
          ))}
       
      </PhotosWrapper>
    </>
  );
};

export default SearchPhotos;

const Header = styled.div`
  width: 100%;
  padding: 40px;
  background-image: url(/images/shrine.jpeg);
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  max-height: 500px;
  min-height: 380px;
`;
const FormWrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;

const PhotosWrapper = styled.div`
  padding:50px;
  width: 100%;
  position: relative;
  column-count: 4;
  max-width:1400px;
  margin:0 auto;
  @media (max-width:576px) { 
   column-count:1;
  }
`;
