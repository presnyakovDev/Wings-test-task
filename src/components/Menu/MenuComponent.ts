import MenuController from "./MenuController";

const MenuComponent: ng.IComponentOptions = {
  bindings:{
    items:"<"
  },
  controllerAs: "menuVm",
  template: require("./MenuTemplate.html")
}

export default MenuComponent;
