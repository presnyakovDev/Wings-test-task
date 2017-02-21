import * as angular from "angular";
import MenuComponent from "./components/Menu/MenuComponent";
import MenuItemComponent from "./components/MenuItem/MenuItemComponent";
import FakedataService from "./services/FakeData/FakeDataService";
import RootComponent from "./components/Root/RootComponent";

let app = angular.module("app", []);

app.component("root", RootComponent);
app.component("menuComp", MenuComponent);
app.component("menuItem", MenuItemComponent);
app.service("FakedataService", FakedataService);
