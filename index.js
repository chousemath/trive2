"use strict";
exports.__esModule = true;
var main = require("./src/Main.bs");
/**
 * Calculates the correct distance between two longitude/latitude points.
 * @constructor
 * @param {float} latitude1 - Longitude of point 1.
 * @param {float} longitude1 - Longitude of point 1.
 * @param {float} latitude2 - Longitude of point 2.
 * @param {float} longitude2 - Longitude of point 2.
 * @param {string} unit - Desired unit of the return value ("K" - kilometers, "N" - nautical miles, or miles)
 */
exports.calculateDistance = main.calculateDistance;
