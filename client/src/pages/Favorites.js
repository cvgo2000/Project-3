import React, { useEffect } from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import Results from "../components/SearchResults/SearchTrailResult";
import { ListItem, List } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";
import { Link } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import { REMOVE_FAVORITE, LOADING, UPDATE_FAVORITES } from "../utils/actions";

const Favorites = () => {
  const [trails, setTrails] = useStoreContext();

  const getFavorites = () => {
    setTrails({ type: LOADING });
    setTrails({ type: UPDATE_FAVORITES });
  };

  const removeFromFavorites = (id) => {
    setTrails({
      type: REMOVE_FAVORITE,
      _id: id,
    });
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <div className="container mb-5 mt-5">
      <h1 className="text-center">Here's All of Your Favorite Trails</h1>
      {trails.favorites.length ? (
        <List>
          <h3 className="mb-5 mt-5">Click on a trail to view in detail</h3>
          {trails.favorites.map((post) => (
            <ListItem key={post._id}>
              <Link to={"/trails/" + post._id}>
                <strong>
                  {post.title} by {post.author}
                </strong>
              </Link>
              <DeleteBtn onClick={() => removeFromFavorites(post._id)} />
            </ListItem>
          ))}
        </List>
      ) : (
        <h3>You haven't added any favorites yet!</h3>
      )}
      <div className="mt-5">
        <Link to="home">Back to home</Link>
      </div>
    </div>
  );
};

export default Favorites;
