

import { handler } from "../lambdas";


describe('Random Number Handler', () => {
  test('Should return a random number between 1 and 6', async () => {
    // Invoca la función Lambda
    const result = await handler({}, {}as any);

    // Verifica que el resultado sea un número entre 1 y 6
    expect(result.statusCode).toBe(201);
    expect(typeof result.body).toBe('number');
    expect(result.body).toBeGreaterThanOrEqual(1);
    expect(result.body).toBeLessThanOrEqual(6);
  });

})
