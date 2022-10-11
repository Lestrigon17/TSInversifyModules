import "reflect-metadata";
import "./Modules/Modules.Imports";

import {ModuleSystem} from "./Modules/Modules.Entry";

const testCase = ModuleSystem.service.Get(ModuleSystem.Alias.ExampleModule);
let a = new testCase.namespace.TestItem("iasdia", testCase.namespace.EItemType.PRIVATE);


// InstanceType
let b!: InstanceType<typeof testCase.namespace.TestItem>

// Static type
let c: typeof testCase.namespace.TestItem;