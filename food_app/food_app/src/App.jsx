import { useEffect, useState } from "react";
import TopSection from "./components/TopSection";
import BottomSection from "./components/BottomSection";
import Footer from "./components/Footer";

export const BASE_URL = "http://localhost:9000";

function App() {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const response = await fetch(BASE_URL);
        const jsonData = await response.json();
        setData(jsonData);
        setFilteredData(jsonData);
        setLoading(false);
      } catch (error) {
        setError("something went wrong");
      }
    };
    fetchFoodData();
  }, []);

  const searchFood = (e) => {
    const serachValue = e.target.value;

    if (searchFood === "") {
      setFilteredData(null);
    }

    const filter = data?.filter((food) => food.name.toLowerCase().includes(serachValue.toLowerCase()));
    setFilteredData(filter);

  };

  const filterFoodBtn = (type) => {
    if(type === "all"){
      setFilteredData(data);
      setSelectedType("all");
      return;
    }else{
      const filter = data?.filter((food) => food.type.toLowerCase().includes(type.toLowerCase()));
      setFilteredData(filter);
      setSelectedType(type);
    }
  };

  const filterBtns = [
    {
      name: "All",
      type: "all"
    },
    {
      name: "Breakfast",
      type: "breakfast"
    },
    {
      name: "Lunch",
      type: "lunch"
    },
    {
      name: "Dinner",
      type: "dinner"
    },
  ];


  if (error) return <div>something went wrong unable to fetch data</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <>
      <TopSection searchFood={searchFood} filterFoodBtn={filterFoodBtn} filterBtns={filterBtns} selectedType={selectedType}/>
      <BottomSection foodData={filteredData} />
      <Footer />
    </>
  );
}

export default App;
