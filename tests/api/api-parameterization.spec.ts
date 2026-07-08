import { test, expect } from '@playwright/test';

const bookingData = [

  {
    firstname: 'John',
    lastname: 'Doe'
  },

  {
    firstname: 'Yash',
    lastname: 'Chauhan'
  },

  {
    firstname: 'Alice',
    lastname: 'Smith'
  }

];

test.describe('Parameterized Booking Creation', () => {

  bookingData.forEach((user) => {

    test(`Booking for ${user.firstname}`, async ({ request }) => {

      const response = await request.post(

        'https://restful-booker.herokuapp.com/booking',

        {

          data: {

            firstname: user.firstname,

            lastname: user.lastname,

            totalprice: 500,

            depositpaid: true,

            bookingdates: {

              checkin: '2026-07-01',

              checkout: '2026-07-02'

            }

          }

        }

      );

      expect(response.status()).toBe(200);

      const body = await response.json();

      expect(body.booking.firstname)
        .toBe(user.firstname);

    });

  });

});