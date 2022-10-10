interface SymbolConstructor {
    /**
     * Returns a new unique Symbol value.
     * @param  description Description of the new Symbol object.
     */
    (description?: string | number | object): symbol;
}