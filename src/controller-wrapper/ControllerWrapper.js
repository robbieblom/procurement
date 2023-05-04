export class ControllerWrapper {
  constructor(pythonEnvironment) {
    this.pythonEnvironment = pythonEnvironment;
  }

  async setView(reactViewDefinition) {
    await this.pythonEnvironment.runPython(`
        from procurement_bytetheory.controllers.UIController import UIController
        
        ${reactViewDefinition}
        controller = UIController()
        controller.setView(ReactView())
    `);
  }

  async createBusiness(name, moneyAmount) {
    await this.pythonEnvironment.runPython(`
        controller.createBusiness('${name}', ${moneyAmount})
    `);
  }

  async buyCheapest(itemName = undefined) {
    await this.pythonEnvironment.runPython(`
        controller.buyCheapest(itemName=${itemName})
    `);
  }

  async buyAsManyAsPossible(itemName = undefined) {
    await this.pythonEnvironment.runPython(`
        controller.buyAsManyAsPossible(itemName=${itemName})
    `);
  }

  async sellItem(itemName = undefined) {
    await this.pythonEnvironment.runPython(`
        controller.sellItem(itemName=${itemName})
    `);
  }

  async liquidateInventory() {
    await this.pythonEnvironment.runPython(`
        controller.liquidateInventory()
    `);
  }
}
