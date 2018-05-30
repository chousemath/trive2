/* var calDistance = function(lat1, lon1, lat2, lon2, unit) {
    var radlat1 = Math.PI * lat1/180
    var radlat2 = Math.PI * lat2/180
    var theta = lon1-lon2
    var radtheta = Math.PI * theta/180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist)
    dist = dist * 180/Math.PI
    dist = dist * 60 * 1.1515
    if (unit=="K") { dist = dist * 1.609344 }
    if (unit=="N") { dist = dist * 0.8684 }
    return dist
} */

[@bs.val] external pi: float = "Math.PI";
[@bs.val] external sin: float => float = "Math.sin";
[@bs.val] external cos: float => float = "Math.cos";
[@bs.val] external acos: float => float = "Math.acos";
let calculateDistance = (latitude1:float, longitude1:float, latitude2:float, longitude2:float, unit:string): float => {
    let radianLatitude1: float = pi *. latitude1 /. 180.0;
    let radianLatitude2: float = pi *. latitude2 /. 180.0;
    let radianTheta: float = pi *. (longitude1 -. longitude2) /. 180.0;
    let distance: float = (sin(radianLatitude1) *. sin(radianLatitude2)) +. (cos(radianLatitude1) *. cos(radianLatitude2) *. cos(radianTheta));
    let distance2: float = (acos(distance) *. (180.0 /. pi)) *. 60.0 *. 1.1515;
    let multiplier: float =
        switch (unit) {
        | "K" => 1.609344
        | "N" => 0.8684
        | _ => 1.0
        };
    distance2 *. multiplier;
};

