import bootloader  from '../../src/http/bootloader';
import request from "supertest";
import "./__setup__";

describe('Hello APIs', () => {
    it('get@/', async () => {
        const res = await request(bootloader.app).get("")
        .set("Accept", "application/json")
        .send().expect(200);
        expect(res.body.message).toBe("hello you.");
    })

    it('get@/error', async () => {
        const res = await request(bootloader.app).get("/error")
        .set("Accept", "application/json")
        .send().expect(511);
        expect(res.body.message).toBe("Hello Error");
        expect(res.body.status).toBe(511);
    })
})