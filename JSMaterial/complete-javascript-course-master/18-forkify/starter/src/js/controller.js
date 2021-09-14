import * as model from './model.js';
import 'babel-polyfill';
import 'regenerator-runtime/runtime';
import recipeView from './views/recipeView.js';
const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
//
// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
//loader

const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    //if no id found from url
    if (!id) return;

    recipeContainer.renderSpinner(); //loder render

    //loading recipe
    await model.loadRecipe('5ed6604591c37cdc054bc886');
    const recipe = model.state.recipe;
    //render view
    recipeView.render(recipe);
  } catch (e) {
    console.error(e);
  }
};
controlRecipe();

//url having has# ,on change of thae page should relode
['hashchange', 'load'].forEach(ev => {
  window.addEventListener(ev, showSingleRecipe);
});
// window.addEventListener('hashchange', showSingleRecipe);
// window.addEventListener('load', showSingleRecipe);
