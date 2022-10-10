type registerModuleService = keyof typeof Register.ModuleService;

export const RegisterInversifyJS = {} as {[id in registerModuleService]: symbol};