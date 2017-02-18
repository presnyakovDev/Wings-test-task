class MenuItemController {
  isSubmenuOpen: boolean = false;

  showSubMenu(){
    this.isSubmenuOpen = true;
  }
  hideSubMenu(){
    this.isSubmenuOpen = false;
    console.log("hide");
  }
}

export default MenuItemController;
