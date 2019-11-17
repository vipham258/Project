/**
 *  @fileOverview Unit testing for sorting by cheese ID function
 *  @author       Vi Thi Phuong Pham
 */
const { sortByID } = require("./sort");

//data for testing
const testRecords = [
  {
    CheeseId: "242",
    CheeseNameEn: "",
    ManufacturerNameEn: "",
    ManufacturerProvCode: "NB",
    ManufacturingTypeEn: "Farmstead",
    WebSiteEn: "",
    FatContentPercent: "24.2",
    MoisturePercent: "47.9",
    ParticularitiesEn: "",
    FlavourEn: '"Sharp, lactic, lightly caramelized"',
    CharacteristicsEn: "Uncooked",
    RipeningEn: "",
    Organic: "0",
    CategoryTypeEn: "Semi-soft Cheese",
    MilkTypeEn: "Cow",
    MilkTreatmentTypeEn: "Raw Milk",
    RindTypeEn: "Washed Rind",
    LastUpdateDate: "2016-02-03"
  },
  {
    CheeseId: "228",
    CheeseNameEn: "",
    ManufacturerNameEn: "",
    ManufacturerProvCode: "NB",
    ManufacturingTypeEn: "Farmstead",
    WebSiteEn: "",
    FatContentPercent: "24.2",
    MoisturePercent: "47",
    ParticularitiesEn: "",
    FlavourEn: '"Sharp, lactic"',
    CharacteristicsEn: "Uncooked",
    RipeningEn: "9 Months",
    Organic: "0",
    CategoryTypeEn: "Firm Cheese",
    MilkTypeEn: "Ewe",
    MilkTreatmentTypeEn: "Raw Milk",
    RindTypeEn: "Washed Rind",
    LastUpdateDate: "2016-02-03"
  },
  {
    CheeseId: "303",
    CheeseNameEn: "",
    ManufacturerNameEn: "",
    ManufacturerProvCode: "NB",
    ManufacturingTypeEn: "Farmstead",
    WebSiteEn: "",
    FatContentPercent: "29",
    MoisturePercent: "47",
    ParticularitiesEn: "",
    FlavourEn: "Sharp with fruity notes and a hint of wild honey",
    CharacteristicsEn: "",
    RipeningEn: "3 Months",
    Organic: "0",
    CategoryTypeEn: "Veined Cheeses",
    MilkTypeEn: "Cow",
    MilkTreatmentTypeEn: "Raw Milk",
    RindTypeEn: "",
    LastUpdateDate: "2016-02-03"
  },
  {
    CheeseId: "301",
    CheeseNameEn: "Provolone Sette Fette (Tre-Stelle)",
    ManufacturerNameEn: "Tre Stelle (Arla Foods)",
    ManufacturerProvCode: "ON",
    ManufacturingTypeEn: "Industrial",
    WebSiteEn: "http://www.trestelle.ca/english/",
    FatContentPercent: "24",
    MoisturePercent: "54",
    ParticularitiesEn: "",
    FlavourEn: '"Mild, tangy, and fruity"',
    CharacteristicsEn:
      '"Pressed and cooked cheese, pasta filata, interiror ripened"',
    RipeningEn: "",
    Organic: "0",
    CategoryTypeEn: "Firm Cheese",
    MilkTypeEn: "Cow",
    MilkTreatmentTypeEn: "Pasteurized",
    RindTypeEn: "",
    LastUpdateDate: "2016-02-03"
  },
  {
    CheeseId: "319",
    CheeseNameEn: "",
    ManufacturerNameEn: "",
    ManufacturerProvCode: "NB",
    ManufacturingTypeEn: "Farmstead",
    WebSiteEn: "",
    FatContentPercent: "24.6",
    MoisturePercent: "49.4",
    ParticularitiesEn: "",
    FlavourEn: "Softer taste",
    CharacteristicsEn: "",
    RipeningEn: "2 Months",
    Organic: "1",
    CategoryTypeEn: "Semi-soft Cheese",
    MilkTypeEn: "Cow",
    MilkTreatmentTypeEn: "Raw Milk",
    RindTypeEn: "Washed Rind",
    LastUpdateDate: "2016-02-03"
  }
];

//expected data after sorting
const expectedRecords = [
  {
    CheeseId: "228",
    CheeseNameEn: "",
    ManufacturerNameEn: "",
    ManufacturerProvCode: "NB",
    ManufacturingTypeEn: "Farmstead",
    WebSiteEn: "",
    FatContentPercent: "24.2",
    MoisturePercent: "47",
    ParticularitiesEn: "",
    FlavourEn: '"Sharp, lactic"',
    CharacteristicsEn: "Uncooked",
    RipeningEn: "9 Months",
    Organic: "0",
    CategoryTypeEn: "Firm Cheese",
    MilkTypeEn: "Ewe",
    MilkTreatmentTypeEn: "Raw Milk",
    RindTypeEn: "Washed Rind",
    LastUpdateDate: "2016-02-03"
  },
  {
    CheeseId: "242",
    CheeseNameEn: "",
    ManufacturerNameEn: "",
    ManufacturerProvCode: "NB",
    ManufacturingTypeEn: "Farmstead",
    WebSiteEn: "",
    FatContentPercent: "24.2",
    MoisturePercent: "47.9",
    ParticularitiesEn: "",
    FlavourEn: '"Sharp, lactic, lightly caramelized"',
    CharacteristicsEn: "Uncooked",
    RipeningEn: "",
    Organic: "0",
    CategoryTypeEn: "Semi-soft Cheese",
    MilkTypeEn: "Cow",
    MilkTreatmentTypeEn: "Raw Milk",
    RindTypeEn: "Washed Rind",
    LastUpdateDate: "2016-02-03"
  },
  {
    CheeseId: "301",
    CheeseNameEn: "Provolone Sette Fette (Tre-Stelle)",
    ManufacturerNameEn: "Tre Stelle (Arla Foods)",
    ManufacturerProvCode: "ON",
    ManufacturingTypeEn: "Industrial",
    WebSiteEn: "http://www.trestelle.ca/english/",
    FatContentPercent: "24",
    MoisturePercent: "54",
    ParticularitiesEn: "",
    FlavourEn: '"Mild, tangy, and fruity"',
    CharacteristicsEn:
      '"Pressed and cooked cheese, pasta filata, interiror ripened"',
    RipeningEn: "",
    Organic: "0",
    CategoryTypeEn: "Firm Cheese",
    MilkTypeEn: "Cow",
    MilkTreatmentTypeEn: "Pasteurized",
    RindTypeEn: "",
    LastUpdateDate: "2016-02-03"
  },
  {
    CheeseId: "303",
    CheeseNameEn: "",
    ManufacturerNameEn: "",
    ManufacturerProvCode: "NB",
    ManufacturingTypeEn: "Farmstead",
    WebSiteEn: "",
    FatContentPercent: "29",
    MoisturePercent: "47",
    ParticularitiesEn: "",
    FlavourEn: "Sharp with fruity notes and a hint of wild honey",
    CharacteristicsEn: "",
    RipeningEn: "3 Months",
    Organic: "0",
    CategoryTypeEn: "Veined Cheeses",
    MilkTypeEn: "Cow",
    MilkTreatmentTypeEn: "Raw Milk",
    RindTypeEn: "",
    LastUpdateDate: "2016-02-03"
  },
  {
    CheeseId: "319",
    CheeseNameEn: "",
    ManufacturerNameEn: "",
    ManufacturerProvCode: "NB",
    ManufacturingTypeEn: "Farmstead",
    WebSiteEn: "",
    FatContentPercent: "24.6",
    MoisturePercent: "49.4",
    ParticularitiesEn: "",
    FlavourEn: "Softer taste",
    CharacteristicsEn: "",
    RipeningEn: "2 Months",
    Organic: "1",
    CategoryTypeEn: "Semi-soft Cheese",
    MilkTypeEn: "Cow",
    MilkTreatmentTypeEn: "Raw Milk",
    RindTypeEn: "Washed Rind",
    LastUpdateDate: "2016-02-03"
  }
];

//unit test using jest
test("Name: Vi Pham Thi Phuong 040886894 \n testing for sort by cheese ID", () => {
  const actual = sortByID(testRecords);
  actual.forEach((element, i) => expect(element).toEqual(expectedRecords[i]));
  expect(actual.length).toEqual(expectedRecords.length);
});
