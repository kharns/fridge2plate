import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="checkbox"
export default class extends Controller {
  static targets = ["all", "item"]

  connect() {
    this.updateLabel()
  }

  toggleAll() {
    const checked = this.allTarget.checked
    this.itemTargets.forEach(checkbox => checkbox.checked = checked)
    this.updateLabel()
  }

  toggleItem() {
    this.allTarget.checked = this.itemTargets.every(checkbox => checkbox.checked)
  }

  updateAllCheckbox() {
    this.allTarget.checked = this.itemTargets.every(checkbox => checkbox.checked)
  }
}
