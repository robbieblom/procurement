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

  async seedMarket() {
    await this.pythonEnvironment.runPython(`
      controller.seedMarket()
    `);
  }

  async buyItemById(id) {
    await this.pythonEnvironment.runPython(`
      controller.buyItemById(${id})
    `);
  }

  async buyCheapest(itemName = undefined) {
    if (itemName) {
      await this.pythonEnvironment.runPython(`
        controller.buyCheapest(itemName=${itemName})
    `);
    } else {
      await this.pythonEnvironment.runPython(`
        controller.buyCheapest()
    `);
    }
  }

  async buyAsManyAsPossible(itemName = undefined) {
    if (itemName) {
      await this.pythonEnvironment.runPython(`
        controller.buyAsManyAsPossible(${itemName})
    `);
    } else {
      await this.pythonEnvironment.runPython(`
        controller.buyAsManyAsPossible()
    `);
    }
  }

  async sellItemById(id) {
    await this.pythonEnvironment.runPython(`
      controller.sellItemById(${id})
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

  async getNetWorth() {
    const netWorth = await this.pythonEnvironment.runPython(`
        controller.getNetWorth()
    `);
    return netWorth;
  }
}
