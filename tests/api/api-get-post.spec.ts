import { test, expect } from '@playwright/test';
import { Logger } from '../../utils/logger';

test.describe('GET & POST API Testing', () => {

  test('GET Booking IDs', async ({ request }) => {

    const response = await request.get('https://restful-booker.herokuapp.com/booking');

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.length).toBeGreaterThan(0);

    Logger.info(body);

  });

  test('Create Booking', async ({ request }) => {

    const response = await request.post('https://restful-booker.herokuapp.com/booking',
      {
        headers: {
          'Content-Type': 'application/json'
        },

        data: {
          firstname: 'Yash',
          lastname: 'Chauhan',
          totalprice: 1000,
          depositpaid: true,
          bookingdates: {
            checkin: '2026-07-01',
            checkout: '2026-07-10'
          },
          additionalneeds: 'Breakfast'
        }

      }
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.booking.firstname).toBe('Yash');

    Logger.info(body);

  });

});