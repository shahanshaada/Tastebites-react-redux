import Banner from "./banner/Banner";
import CuratedCollection from "./CuratedCollection/CuratedCollection";
import RatingRecipe from "./RatingRecipes/RatingRecipe";
import Recipe from "./Recipes/Recipe";

export default function Home() {
    return (
        <>
            <RatingRecipe/>
            <Banner/>
            <CuratedCollection/>
            <Recipe/>
        </>
    )
}