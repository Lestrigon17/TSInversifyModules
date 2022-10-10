import "reflect-metadata";
import "./Modules/Modules.Imports";

import {ModuleSystem} from "./Modules/Modules.Entry";

const currentModule = ModuleSystem.service.Get(ModuleSystem.Alias.TestModuleB);
currentModule.HelloWorld();