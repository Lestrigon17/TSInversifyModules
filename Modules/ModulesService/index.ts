///<reference path="Declarations/Register.ModuleService.d.ts"/>
///<reference path="Declarations/Symbol.d.ts"/>

import {injectable, decorate, Container} from "inversify";
import {RegisterInversifyJS} from "./Declarations/Register.Inversify";

type TAliasType = keyof typeof Register.ModuleService;
export const Alias = {} as {[id in TAliasType]: id};

export class ModulesService {
    public container: Container = new Container();

    Define(moduleName: keyof typeof Register.ModuleService) {
        // @ts-ignore
        Alias[moduleName] = moduleName;
        console.log("[MODULES] Define ::", moduleName);

        return <TF extends new (...args: never[]) => unknown>(constructor: TF) => {
            RegisterInversifyJS[moduleName] = Symbol(constructor);
            decorate(injectable(), constructor);
            this.container.bind(RegisterInversifyJS[moduleName]).to(constructor).inSingletonScope();
        }
    }

    Get<K extends keyof typeof Alias>(moduleName: K): typeof Register.ModuleService[K] {
        const symbol = RegisterInversifyJS[moduleName];
        console.log("[MODULES] Get ::", moduleName);
        return this.container.get(symbol);
    }
}

export * from "./BaseModule"
export {RegisterInversifyJS as Type} from "./Declarations/Register.Inversify";
export const service = new ModulesService();