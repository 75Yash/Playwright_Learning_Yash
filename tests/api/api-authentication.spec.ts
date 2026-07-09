import { test, expect } from '@playwright/test';
import { Logger } from '../../utils/logger';

test('Generate Authentication Token', async ({ request }) => {

  const response = await request.post(

    'https://restful-booker.herokuapp.com/auth',

    {

      data: {

        username: 'admin',

        password: 'password123'

      }

    }

  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.token).toBeTruthy();

  Logger.info('Token:', body.token);

});