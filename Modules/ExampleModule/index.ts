///<reference path="Declarations/Register.ModuleService.d.ts"/>
import { ModuleSystem } from "../Modules.Entry";
import * as namespace from "./namespace";
import {TestItem} from "./namespace";

@ModuleSystem.service.DefineSingleton("ExampleModule")
export class ExampleModule extends ModuleSystem.BaseModule {
    public namespace = namespace;

    public items: TestItem[] = [];

    constructor() {
        super();
    }

    public Print(): void {
        console.log("[ExampleModule]", "Hi, i'm a ExampleModule! Welcome to modular system! <3 Made through pain with love!");
    }

    public PushItem(item: TestItem): void {
        this.items.push(item);
        console.log("[ExampleModule]", "Added new item", item.name, item.type);
    }
}