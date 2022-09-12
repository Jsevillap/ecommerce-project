import Categories from "../../components/Categories/Categories";
import { Outlet } from "react-router-dom";

function Home() {
  const categories = [
    {
      id: 1,
      title: "Hats",
      imgUrl:
        "https://images.unsplash.com/photo-1662738221342-8106801cee08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 2,
      title: "Jackets",
      imgUrl:
        "https://images.unsplash.com/photo-1662738221342-8106801cee08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 3,
      title: "Shirts",
      imgUrl:
        "https://images.unsplash.com/photo-1662738221342-8106801cee08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 4,
      title: "Pants",
      imgUrl:
        "https://images.unsplash.com/photo-1662738221342-8106801cee08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 5,
      title: "Shorts",
      imgUrl:
        "https://images.unsplash.com/photo-1662738221342-8106801cee08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];
  return <Categories categories={categories} />;
}

export default Home;
