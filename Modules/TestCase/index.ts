///<reference path="Declarations/Register.ModuleService.d.ts"/>
import { ModuleSystem } from "../Modules.Entry";
import * as namespace from "./namespace";
import {inject} from "inversify";

@ModuleSystem.service.DefineSingleton("TestCase")
export class TestCase extends ModuleSystem.BaseModule {
    public namespace = namespace;

    constructor(
        @inject(ModuleSystem.Inject.ExampleModule)
        protected readonly exampleModule: typeof Register.ModuleService.ExampleModule
    ) {
        super();
    }

    public Run(): void {
        console.log("[TestCase] Hello to modular system!");

        const itemCtor = this.exampleModule.namespace.TestItem;
        const itemType = this.exampleModule.namespace.EItemType;

        console.log("[TestCase]", "Creating `item 1`")
        const item1 = new itemCtor("item 1", itemType.PRIVATE);
        console.log("[TestCase]", "Creating `item 2`")
        const item2 = new itemCtor("item 2", itemType.PROTECTED);

        console.log("[TestCase]", "Push `item 1`")
        this.exampleModule.PushItem(item1);
        console.log("[TestCase]", "Push `item 1`")
        this.exampleModule.PushItem(item2);

        console.log("[TestCase]", "Total items list:")
        console.dir(this.exampleModule.items);

        console.log("[TestCase]", "End testing!")
    }
}