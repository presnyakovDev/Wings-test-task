import RootController from "./RootController";

const RootComponent = {
  controller: RootController,
  controllerAs: "rootVm",
  template:'<menu-comp items="rootVm.data"></menu-comp>'
}

export default RootComponent;
