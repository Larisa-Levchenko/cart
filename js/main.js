'use strict';

const cart = function (sum, number, promo) {

    if (number >= 10) {
        sum -= sum * 0.1;

    } else {
        if (number >= 5) {
            sum -= sum * 0.05;
        }
    }
    if (sum > 100000) {
        sum -= (sum - 100000) * 0.2;
    }
    if (promo === 15 && sum >= 25000) {
        sum -= sum * 0.15;
    }
    if (promo === 100) {
        if (sum <= 100) {
            sum = 0;
        } else {
            sum = sum - 100;
        }
    }
    return sum;

};

