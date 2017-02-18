import MenuItemController from "./MenuItemController";

const MenuItemComponent: ng.IComponentOptions = {
  bindings:{
    item:"="
  },
  controller: MenuItemController,
  controllerAs:"vm",
  template: require("./MenuItemTemplate.html")
}

export default MenuItemComponent;
