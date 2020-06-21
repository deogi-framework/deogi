import bootloader  from '../../src/http/bootloader';
import request from "supertest";
import "./__setup__";

describe('Default APIs', () => {
    it('post@add', async () => {
        const res = await request(bootloader.app).post("/add?a=1&b=2")
        .set("Accept", "application/json")
        .send().expect(200);
        expect(res.body.answer).toBe(3);
    })
})