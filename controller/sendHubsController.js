const tradeRoutes = require("../tradeHubs.json");

const convertPeriod = (route) => {
  if (typeof route.period === "string") {
    const periodArray = route.period.split(" - ");
    route.period = periodArray;
    for (let i = 0; i < periodArray.length; i++) {
      if (periodArray[i].includes("BCE")) {
        periodArray[i] = Number(periodArray[i].replace(" BCE", "")) * -1;
      } else if (periodArray[i].includes("CE")) {
        periodArray[i] = Number(periodArray[i].replace(" CE", ""));
      }
    }
  }
  return route;
};

const sendWantedRoutes = async (req, res) => {
  let routesArray = [];
  let result = [];
  const wantedYear = req.body.year;
  for (let i = 0; i < tradeRoutes.length; i++) {
    routesArray.push(convertPeriod(tradeRoutes[i]));
  }
  for (let i = 0; i < routesArray.length; i++) {
    if (
      routesArray[i].period[0] < wantedYear &&
      routesArray[i].period[1] > wantedYear
    ) {
      result.push(routesArray[i]);
    } else if(wantedYear === 0){
      res.status(200).send([]);
    }
  }
  res.status(200).send(result);
};

module.exports = { sendWantedRoutes };
