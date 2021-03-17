import { ItemView, Plugin, WorkspaceLeaf } from "obsidian";
import React from "react";
import ReactDOM from "react-dom";

import DiceRoller from "./ui/DicerRoller";

class MyReactView extends ItemView {
  private reactComponent: any;

  getViewType(): string {
    return "react-view";
  }

  getDisplayText(): string {
    return "Dice Roller";
  }

  getIcon(): string {
    return "calendar-with-checkmark";
  }

  async onOpen(): Promise<void> {
    this.reactComponent = ReactDOM.render(
      React.createElement(DiceRoller),
      (this as any).contentEl
    );
  }
}

export default class ReactStarterPlugin extends Plugin {
  private view: MyReactView;

  async onload(): Promise<void> {
    this.registerView(
      "react-view",
      (leaf: WorkspaceLeaf) => (this.view = new MyReactView(leaf))
    );

    this.app.workspace.onLayoutReady(this.onLayoutReady.bind(this));
  }

  onLayoutReady(): void {
    if (this.app.workspace.getLeavesOfType("react-view").length) {
      return;
    }
    this.app.workspace.getRightLeaf(false).setViewState({
      type: "react-view",
    });
  }
}
