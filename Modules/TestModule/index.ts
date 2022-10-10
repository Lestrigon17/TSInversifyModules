///<reference path="Declarations/Register.ModuleService.d.ts"/>
import { ModuleSystem } from "../Modules.Entry";

@ModuleSystem.service.Define("TestModule")
export class TestModule extends ModuleSystem.BaseModule {
    public Print(): void {
        console.log("TestPrint")
    }
}