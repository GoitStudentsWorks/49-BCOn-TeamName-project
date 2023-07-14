import React, { useState, useEffect } from 'react';
import RecipeDescriptionFields from '../../components/RecipeDescriptionFields/RecipeDescriptionFields';
import { useSelector } from 'react-redux';
import { selectCategory, selectGlass } from '../../redux/selectors';

import { useDispatch } from 'react-redux';
import { getCategoriesListThunk } from 'redux/Cocktails/cocktailsOperations';

const AddRecipePage = () => {
  const drinksCategory = useSelector(selectCategory);
  const drinksGlass = useSelector(selectGlass);
  const [imgURL, setImageURL] = useState('');
  const [imgData, setImageData] = useState(null);
  const [itemTitleRecipe, setItemTitleRecipe] = useState('');
  const [aboutRecipe, setAboutRecipe] = useState('');
  const [category, setCategory] = useState(null);
  const [glass, setGlass] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoriesListThunk());
  }, [dispatch]);

  const handleOnImgSelect = async e => {
    const localFile = e.target.files[0];
    setImageData(e.target.files[0]);
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      setImageURL(reader.result);
    });
    reader.readAsDataURL(localFile);
  };

  return (
    <div>
      <RecipeDescriptionFields
        dataField={{
          imgURL,
          itemTitleRecipe,
          aboutRecipe,
          category,
          glass,
        }}
        handleOnImgSelect={handleOnImgSelect}
        handleOnTitleRecipe={setItemTitleRecipe}
        handleOnAboutRecipe={setAboutRecipe}
        handleOnCategory={setCategory}
        handleOnGlassRecipe={setGlass}
        categoryList={drinksCategory}
        glassList={drinksGlass}
      />
    </div>
  );
};

export default AddRecipePage;
