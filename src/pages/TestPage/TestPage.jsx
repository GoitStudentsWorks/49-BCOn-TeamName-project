// import React, { useEffect } from 'react';
// import { FollowUs, Nav, Logo } from 'components';
// import { useDispatch, useSelector } from 'react-redux';
// import { getCocktailsByFourCategoryThunk } from 'redux/Cocktails/cocktailsOperations';

// import PreviewDrinks from '../../components/PreviewDrinks/PreviewDrinks'; // by Igor
// import { mockData } from '../../assets/mockData/mockDataCocktails'; // by Igor - delete after add backend
// import { selectCocktails } from 'redux/selectors';

// const TestPage = () => {
//   const dispatch = useDispatch();
//   // const category = encodeURIComponent('Cocktail');
//   const category = useSelector(selectCocktails);
//   const ordinaryDrink = category.filter(item => {
//     return item.category === 'Ordinary Drink';
//   });
//   const abc = ordinaryDrink[0];

//   console.log(abc);

//   useEffect(() => {
//     dispatch(getCocktailsByFourCategoryThunk());
//   }, []);

//   return (
//     <>
//       <ThemeButton {...props} />
//       <Nav />

//       <Container>
//         <Logo />
//         <FollowUs />
//         <div style={{ height: '300vh' }}></div>

//         <PreviewDrinks title="Ordinary Drink" ordinaryDrink={ordinaryDrink} />
//         <PreviewDrinks title="Cocktail" mockData={mockData} />
//         <PreviewDrinks title="Shake" mockData={mockData} />
//         <PreviewDrinks title="Other/Unknow" mockData={mockData} />
//       </Container>
//     </>
//   );
// };

// export default TestPage;
