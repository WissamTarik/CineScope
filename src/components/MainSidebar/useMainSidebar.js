import { useEffect, useMemo, useState } from "react";
import {
  FaHome,
  FaRegStar,
  FaBookReader,
  FaHeart,
  FaFantasyFlightGames,
  FaGhost,
  FaHandHoldingHeart,
  FaBomb,
  FaRunning,
} from "react-icons/fa";
import {
  MdOutlineUpcoming,
  MdFamilyRestroom,
  MdOutlineHistoryEdu,
  MdMovie,
} from "react-icons/md";

import {
  FaGun,
  FaDragon,
  FaRobot,
  FaFaceLaugh,
  FaMusic,
} from "react-icons/fa6";
import { GiCrimeSceneTape, GiLoveMystery, GiWesternHat } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { actGetMoviesGenre } from "../../Libraries/Redux/GetMoviesGenres/ActGetMoviesGenres";
import { actSearchForAMovie } from "../../Libraries/Redux/SearchForAMovie/ActSearchForAMovie";

 

const useMainSidebar = () => {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const mainLinks = useMemo(
    () => [
      { text: "Home", icon: FaHome, path: "/" },
      { text: "Top Rated", icon: FaRegStar, path: "/topRated" },
      { text: "Upcoming", icon: MdOutlineUpcoming, path: "/upComing" },
    ],
    []
  );
  
const genreIcons =useMemo(()=>[

   { name: "Action", icon: FaGun },
  { name: "Adventure", icon: FaDragon },
  { name: "Animation", icon: FaRobot },
  { name: "Comedy", icon: FaFaceLaugh },
  { name: "Crime", icon: GiCrimeSceneTape },
  { name: "Documentary", icon: FaBookReader },
  { name: "Drama", icon: FaHeart },
  { name: "Family", icon: MdFamilyRestroom },
  { name: "Fantasy", icon: FaFantasyFlightGames },
  { name: "History", icon: MdOutlineHistoryEdu },
  { name: "Horror", icon: FaGhost },
  { name: "Music", icon: FaMusic },
  { name: "Mystery", icon: GiLoveMystery },
  { name: "Romance", icon: FaHandHoldingHeart },
  { name: "Science Fiction", icon: FaRobot },
  { name: "TV Movie", icon: MdMovie },
  { name: "Thriller", icon: FaBomb },
  { name: "War", icon: FaRunning },
  { name: "Western", icon: GiWesternHat },
],[])
  const { genres, isLoading, errorMessage } = useSelector(
    (store) => store.getMoviesGenresReducer
  );
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    if (!genres.length) {
      dispatch(actGetMoviesGenre());
    }
  }, [dispatch, genres.length]);

  function handleSearchSubmit(e) {
    e.preventDefault();
    if (!searchValue.trim()) {
      return;
    }
    dispatch(actSearchForAMovie(searchValue))
      .unwrap()
      .then(() => {
        console.log("Found");

        setShowModal(true);
      });
  }
  return {
    open,
    setOpen,
    mainLinks,
    genreIcons,
    genres,
    isLoading,
    errorMessage,
    handleSearchSubmit,
    setSearchValue,
    searchValue,
    setShowModal,
    showModal,
  };
};

export default useMainSidebar;
