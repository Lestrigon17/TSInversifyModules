///<reference path="Declarations/Register.ModuleService.d.ts"/>
import { ModuleSystem } from "../Modules.Entry";
import { inject } from "inversify";

@ModuleSystem.service.Define("TestModuleB")
export class TestModuleB extends ModuleSystem.BaseModule {
    constructor(
        @inject(ModuleSystem.Type.TestModule)
            private testModule: typeof Register.ModuleService.TestModule
    ) {
        super();

        testModule.Print();
    }

    public HelloWorld(): void {
        console.log("Hello world!");
    }
}