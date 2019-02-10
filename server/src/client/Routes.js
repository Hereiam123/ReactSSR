import HomePage from "./pages/HomePage";
import UsersListPage, { loadData } from "./pages/UsersListPage";

export default [
  {
    path: "/",
    component: HomePage,
    exact: true
  },
  {
    path: "/users",
    component: UsersListPage,
    loadData
  }
];
