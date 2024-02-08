function calculateMoney(totalTicketSale) {
  if (totalTicketSale < 0 || totalTicketSale === undefined) {
    return "Invalid Number";
  } else {
    const eachTicketPrice = 120;
    const staffLuchBill = 50;
    const totalStaff = 8;
    const darowanBill = 500;
    const profit =
      totalTicketSale * eachTicketPrice -
      (darowanBill + staffLuchBill * totalStaff);
    return profit;
  }
}

function checkName(name) {
  if (typeof name !== "string") {
    return "invalid";
  }
  const nameLoweCase = name.toLowerCase();
  const lastLetterOfName = nameLoweCase[nameLoweCase.length - 1];
  if (
    lastLetterOfName === "a" ||
    lastLetterOfName === "e" ||
    lastLetterOfName === "i" ||
    lastLetterOfName === "o" ||
    lastLetterOfName === "u"
  ) {
    return "Good Name";
  }
  return "Bad Name";
}

function deleteInvalids(arr) {
  if (!Array.isArray(arr)) {
    return "Invalid Array";
  }
  const filterData = [];
  for (const el of arr) {
    if (typeof el === "number" && !isNaN(el)) {
      filterData.push(el);
    }
  }
  return filterData;
}

function password(obj) {
  const name = obj.name,
    year = obj.birthYear,
    site = obj.siteName;
  if (
    name === undefined ||
    year === undefined ||
    site === undefined ||
    year.toString().length !== 4
  ) {
    return "invalid";
  }
  const captalizeSite =
    site.charAt(0).toUpperCase() + site.slice(1).toLowerCase();
  const password = `${captalizeSite}#${name}@${year}`;
  return password;
}

function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) || typeof livingCost !== "number") {
    return "invalid input";
  }
  let totalEarnings = 0;
  for (let eachPayment of arr) {
    if (eachPayment >= 3000) {
      eachPayment = eachPayment - eachPayment * (20 / 100);
    }
    totalEarnings += eachPayment;
  }
  const savings = totalEarnings - livingCost;
  if (savings >= 0) {
    return savings;
  } else {
    return "earn more";
  }
}
