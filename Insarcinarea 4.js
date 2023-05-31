const services = [
  {
    name: "Dezvoltare de aplicații mobile",
    price: 15.00,
    duration: 3
  },
  {
    name: "Dezvoltarea site-ului",
    price: 6.50,
    duration: 2
  },
  {
    name: "Dezvoltare de aplicații desktop",
    price: 127.00,
    duration: 120
  }
];

const findHigherPricePerHour = (services) => {
  let highestPricePerHour = 0;
  let highestPriceService = null;

  for (const service of services) {
    const pricePerHour = service.price / service.duration;

    if (pricePerHour > highestPricePerHour) {
      highestPricePerHour = pricePerHour;
      highestPriceService = service;
    }
  }

  return {
    ...highestPriceService,
    hour_price: highestPricePerHour.toFixed(2)
  };
};

const calculateTotalCost = (services) => {
  let totalCost = 0;

  for (const service of services) {
    totalCost += service.price;
  }

  return totalCost.toFixed(2);
};

// Exemplu de utilizare:
const highestPriceService = findHigherPricePerHour(services);
console.log(highestPriceService);

const totalCost = calculateTotalCost(services);
console.log(totalCost);