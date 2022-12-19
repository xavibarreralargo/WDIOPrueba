import * as navigate from "../components/navigate/navigate.ts";

describe('My example project', () => {
    it('should change to the page language to spanish', async () => {
        await navigate.changeToSpanish();
    });
});