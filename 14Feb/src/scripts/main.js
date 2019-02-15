// ONE
// Copy and paste the following data into your JS file:
const businesses = [
    {
        purchasingAgent: { nameLast: "Kirlin", nameFirst: "Kristy" },
        phoneWork: "089.129.2290 x9400",
        orders: [7826.96, 8323.11, 5756.28, 6308.42, 5622.28],
        companyName: "Care-media",
        companyIndustry: "Education",
        addressZipCode: "56839",
        addressStateCode: "WI",
        addressFullStreet: "8417 Franklin Court Tunnel",
        addressCity: "Mouthcard"
    },
    {
        purchasingAgent: { nameLast: "Steuber", nameFirst: "Kamron" },
        phoneWork: "(833) 222-7579 x5874",
        orders: [6252.5, 9769.02, 9521.17, 7994.05, 7945.93],
        companyName: "Stanholding",
        companyIndustry: "Hospitality",
        addressZipCode: "09705",
        addressStateCode: "NY",
        addressFullStreet: "2889 Fawn Court Garden",
        addressCity: "Fellsmere"
    },
    {
        purchasingAgent: { nameLast: "Gutkowski", nameFirst: "Kaylee" },
        phoneWork: "235.266.6278",
        orders: [7634.43, 9766.72, 9953.45, 6559.8, 5054.9],
        companyName: "Highnix",
        companyIndustry: "Agriculture",
        addressZipCode: "49376",
        addressStateCode: "ME",
        addressFullStreet: "5734 Maple Avenue Throughway",
        addressCity: "Little Genesee"
    },
    {
        purchasingAgent: { nameLast: "Crona", nameFirst: "Lauren" },
        phoneWork: "1-449-987-3083 x23263",
        orders: [7384.52, 9252.72, 7272.65, 5251.84, 9680.08],
        companyName: "Conit",
        companyIndustry: "Defense",
        addressZipCode: "53326",
        addressStateCode: "IL",
        addressFullStreet: "5755 Hillside Drive Crossroad",
        addressCity: "Norval"
    },
    {
        purchasingAgent: { nameLast: "Krajcik", nameFirst: "Elvera" },
        phoneWork: "1-730-411-8580",
        orders: [6069.05, 8535.38, 5782.7, 7838.91, 7578.36],
        companyName: "Dong-tom",
        companyIndustry: "Energy",
        addressZipCode: "67071",
        addressStateCode: "KS",
        addressFullStreet: "4826 Arch Street Lights",
        addressCity: "Newburyport"
    },
    {
        purchasingAgent: { nameLast: "Kling", nameFirst: "Ellie" },
        phoneWork: "(868) 043-0950",
        orders: [6726.2, 8393.21, 8087.13, 6393.13, 8646.35],
        companyName: "Dan-dox",
        companyIndustry: "Manufacturing",
        addressZipCode: "98842",
        addressStateCode: "WV",
        addressFullStreet: "9767 Cedar Court Corner",
        addressCity: "Prince George"
    },
    {
        purchasingAgent: { nameLast: "Robel", nameFirst: "Otilia" },
        phoneWork: "(298) 305-1942 x53653",
        orders: [8676.05, 7430.69, 9379.81, 8074.29, 5998.75],
        companyName: "J-base",
        companyIndustry: "Health care",
        addressZipCode: "72993",
        addressStateCode: "FL",
        addressFullStreet: "9954 Buckingham Drive Mountains",
        addressCity: "Vesper"
    },
    {
        purchasingAgent: { nameLast: "Gusikowski", nameFirst: "Karolann" },
        phoneWork: "(743) 934-8981 x692",
        orders: [8650.08, 8042.69, 5555.72, 7467.86, 8851.43],
        companyName: "Span-fix",
        companyIndustry: "Construction",
        addressZipCode: "59860",
        addressStateCode: "MT",
        addressFullStreet: "4151 Orange Street Extension",
        addressCity: "Little Rock Air Force Base"
    },
    {
        purchasingAgent: { nameLast: "Hartmann", nameFirst: "Zena" },
        phoneWork: "727.635.6610 x6483",
        orders: [9415.89, 8935.45, 7413.91, 6830.96, 9746.57],
        companyName: "Sanaplane",
        companyIndustry: "Information",
        addressZipCode: "85156",
        addressStateCode: "NY",
        addressFullStreet: "4765 Fairview Avenue Locks",
        addressCity: "Dennisville"
    },
    {
        purchasingAgent: { nameLast: "Torphy", nameFirst: "Celia" },
        phoneWork: "(992) 079-1670 x71569",
        orders: [7431.21, 5911.85, 7954.86, 7141.52, 8416.79],
        companyName: "Ran-taxon",
        companyIndustry: "Manufacturing",
        addressZipCode: "96673",
        addressStateCode: "MD",
        addressFullStreet: "7157 Hudson Street Ford",
        addressCity: "Watrous"
    }
];
// ONE: Loop through all of the customer objects using a .forEach loop. Inside that .forEach loop, write another .forEach loop through each customer's order array. Print the price of each order to the console.

businesses.forEach(business => {

    business.orders.forEach(order => {
        console.log("this is the price", order)
    })
})

// TWO: Lightning Exercise: Use filter() to create another array named manufacturingBusinesses that will contain all businesses in the manufacturing industry.Display those to the DOM.

//string together filter, map and forEach to filter, map name, and print

const manufacturingBusinesses = businesses.filter(business =>
    business.companyIndustry === "Manufacturing"
).map(business => business.companyName).forEach(business => {
    document.querySelector("#business-name").innerHTML += `<h2>${business}</h2>`

})

// THREE: Use .map to return a new object that has the full name of the purchasing agent, the company name, and the phone number.The data structure is shown below.Use that new data structure to display the agent with their company and phone number
// {
//   "fullName": "Kaylee Gutkowski",
//     "company": "Highnix",
//       "phoneNumber": "235.266.6278"
// }

const businessArrayCond = businesses.map(business => {
    const firstName = business.purchasingAgent.nameFirst
    const lastName = business.purchasingAgent.nameLast
    const company = business.companyName
    const phoneNumber = business.phoneWork

    return businessObject = {

        "fullName": `${firstName} ${lastName}`,
        "company": company,
        "phoneNumber": phoneNumber
    }
})

console.log(businessArrayCond)

businessArrayCond.forEach(business => {

    document.querySelector("#cond-business").innerHTML += `<h2>${business.fullName}</h2><h3>${business.company}</h3><p>${business.phoneNumber}</p>`
})

// Lightning Exercise 1: Use the reduce method on the following array to determine how much total rain fell last month.

const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10]

const totalRainfall = monthlyRainfall.reduce((runningTotal, currentValue) => {
    return runningTotal + currentValue;

})

console.log(totalRainfall)

// Lightning Exercise 2: Use the reduce method on the following array to build a sentence.

const words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]

const sentence = words.reduce((buildup, currentWord) => {

    return buildup + ` ${currentWord}`;
})

console.log(sentence)

// ---- SET ONE --//
// Create an object that represents a bill from your doctor's office. It should have the following properties: officeName, streetAddress, doctorName, patientName, visitDate, amountBilled, dueDate.

const officeBill = {
    "officeName": "Harris",
    "streetAddress": "Chateau Grove Ln",
    "doctorName": "Dr. Harris",
    "patientName": "Sydney",
    "visitDate": "June 26",
    "amountBilled": "$200",
    "dueDate": "now"

}

// Copy the code below and paste it above your object.

const dateVisited = officeBill["visitDate"]
const owed = officeBill["amountBilled"]
const patient = officeBill["patientName"]


// Use square bracket notation to output the value of those three properties to the console in Chrome.
console.log(dateVisited, owed, patient)


// Use Object.values() to output all the property values to the console in Chrome.
console.log(Object.values(officeBill))

// ---- SET TWO ----//
// Use Object.keys() to output all of the key names from your doctor's office bill to the console in Chrome.

console.log(Object.keys(officeBill))

// Next, output all of the key names from your doctor's office bill to the DOM inside a parent <section> element. Wrap each one in a <span> element.

let keyString = ""
const officeKeys = Object.keys(officeBill)
officeKeys.forEach(key => {
    keyString = `<span>${key} </span>`
    document.querySelector("#object-keys").innerHTML += keyString
})


// -- SET THREE -- //

// Create an object to represent your favorite dinner item(e.g.meatloaf, spaghetti, fried fish, gumbo).Each object should have a name property, but you can add any other properties that you like, such as size, weight, ethnicity, vegetarian boolean.

const foodObject = {
    name: "taco",
    size: "Ginormous",
    weight: "will cause gains",
    vegetarian: false

}

// Output all of the key / value pairs into the DOM inside an < article > element with a class of food.

//

const objectKeys = Object.keys(foodObject)
const objectValues = Object.values(foodObject)
const foodEntries = Object.entries(foodObject)
console.log(objectKeys)
console.log(objectValues)
console.log(foodEntries)

foodEntries.forEach(entry => {
    document.querySelector(".food").innerHTML += `<p>${entry[0]} - ${entry[1]}`

})

