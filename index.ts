import "reflect-metadata";
import "./Modules/Modules.Imports";

import {ModuleSystem} from "./Modules/Modules.Entry";

const testCase = ModuleSystem.service.Get(ModuleSystem.Alias.TestCase);
testCase.Run();