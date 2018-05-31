[@bs.val] external pi: float = "Math.PI";
[@bs.val] external sin: float => float = "Math.sin";
[@bs.val] external cos: float => float = "Math.cos";
[@bs.val] external acos: float => float = "Math.acos";
let calculateDistance = (latitude1: float, longitude1: float, latitude2: float, longitude2: float, unit: string): float => {
    let radianLatitude1: float = pi *. latitude1 /. 180.0;
    let radianLatitude2: float = pi *. latitude2 /. 180.0;
    let radianTheta: float = pi *. (longitude1 -. longitude2) /. 180.0;
    let distance: float = (sin(radianLatitude1) *. sin(radianLatitude2)) +. (cos(radianLatitude1) *. cos(radianLatitude2) *. cos(radianTheta));
    let distance2: float = (acos(distance) *. (180.0 /. pi)) *. 60.0 *. 1.1515;
    let multiplier: float =
        switch (unit) {
        | "K" => 1.609344 /* Kilometers */
        | "N" => 0.8684 /* Nautical miles */
        | _ => 1.0 /* Miles */
        };
    distance2 *. multiplier;
};

/* const maxBid: Bid = allBids.reduce((max, value) => max.amount > value.amount ? max : value, { dealer: '', amount: -1, updatedAt: 0 }); */
let greaterBid = (b1, b2) => (b1##amount > b2##amount) ? b1 : b2;
let lesserBid = (b1, b2) => (b1##amount < b2##amount) ? b1 : b2;
let maxBid = (bids) => Array.fold_left(greaterBid, bids[0], bids);
let minBid = (bids) => Array.fold_left(lesserBid, bids[0], bids);

