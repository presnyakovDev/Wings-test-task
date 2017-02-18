class RootController{

  static $inject = ["FakedataService"];

  data:any[];

  constructor(public fakedataService){
    this.data = fakedataService.getData();
  }
}

export default RootController;
