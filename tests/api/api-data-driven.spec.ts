import { test, expect } from '@playwright/test';
import bookings from '../../test-data/booking-data.json';

test.describe('Data Driven Booking Creation', () => {

  bookings.forEach((booking) => {

    test(`Create Booking - ${booking.firstname}`, async ({ request }) => {

      const response = await request.post(

        'https://restful-booker.herokuapp.com/booking',

        {

          data: {

            firstname: booking.firstname,

            lastname: booking.lastname,

            totalprice: booking.price,

            depositpaid: booking.depositpaid,

            bookingdates: {

              checkin: booking.checkin,

              checkout: booking.checkout

            },

            additionalneeds: booking.additionalneeds

          }

        }

      );

      expect(response.status()).toBe(200);

      const body = await response.json();

      expect(body.booking.firstname)
        .toBe(booking.firstname);

    });

  });

});