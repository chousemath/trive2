import * as main from './src/Main.bs';

/**
 * Calculates the correct distance between two longitude/latitude points.
 * @constructor
 * @param {float} latitude1 - Longitude of point 1.
 * @param {float} longitude1 - Longitude of point 1.
 * @param {float} latitude2 - Longitude of point 2.
 * @param {float} longitude2 - Longitude of point 2.
 * @param {string} unit - Desired unit of the return value ("K" - kilometers, "N" - nautical miles, or miles)
 */
export const calculateDistance = main.calculateDistance;

export const greaterBid = main.greaterBid;
export const lesserBid = main.lesserBid;
export const maxBid = main.maxBid;
export const minBid = main.minBid;