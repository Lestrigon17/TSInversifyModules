import {EItemType} from "./EItemType";

export class TestItem {
    constructor(
        public readonly name: string,
        public readonly type: EItemType
    ) {
    }
}