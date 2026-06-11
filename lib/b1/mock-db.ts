import { OCRD, OITM, ORDR, RDR1 } from "./types";

export const businessPartners: OCRD[] = [
  {
    CardCode: "C00001",
    CardName: "Acme Corp",
    CardType: "C",
    GroupCode: 100,
    Balance: 15400.50,
    Currency: "USD",
    Phone1: "+1-555-0101",
    E_Mail: "purchasing@acmecorp.com",
    CreateDate: "2023-01-15",
  },
  {
    CardCode: "C00002",
    CardName: "Globex Corporation",
    CardType: "C",
    GroupCode: 100,
    Balance: 0,
    Currency: "USD",
    Phone1: "+1-555-0102",
    E_Mail: "info@globex.com",
    CreateDate: "2023-03-22",
  },
  {
    CardCode: "V00001",
    CardName: "SteelSuppliers Ltd",
    CardType: "S",
    GroupCode: 101,
    Balance: -5200.00,
    Currency: "USD",
    Phone1: "+44-20-7946-0958",
    E_Mail: "sales@steelsuppliers.co.uk",
    CreateDate: "2022-11-05",
  }
];

export const items: OITM[] = [
  {
    ItemCode: "A00001",
    ItemName: "Steel Beam 10ft",
    ItemGrpCod: 105,
    OnHand: 150,
    IsCommited: 20,
    OnOrder: 50,
    MinStock: 100,
    AvgPrice: 120.00,
    VatGourpSa: "X0",
  },
  {
    ItemCode: "A00002",
    ItemName: "Steel Beam 20ft",
    ItemGrpCod: 105,
    OnHand: 45,
    IsCommited: 5,
    OnOrder: 100,
    MinStock: 50,
    AvgPrice: 230.00,
    VatGourpSa: "X0",
  },
  {
    ItemCode: "B00001",
    ItemName: "Industrial Bolts Box",
    ItemGrpCod: 106,
    OnHand: 500,
    IsCommited: 100,
    OnOrder: 0,
    MinStock: 200,
    AvgPrice: 45.50,
    VatGourpSa: "X0",
  }
];

export const salesOrders: ORDR[] = [
  {
    DocEntry: 1,
    DocNum: 10001,
    DocDate: "2024-05-10",
    DocDueDate: "2024-05-20",
    CardCode: "C00001",
    CardName: "Acme Corp",
    DocTotal: 3310.00,
    DocumentStatus: "bost_Open",
    DocumentLines: [
      {
        DocEntry: 1,
        LineNum: 0,
        ItemCode: "A00001",
        Dscription: "Steel Beam 10ft",
        Quantity: 20,
        Price: 120.00,
        LineTotal: 2400.00,
        WhsCode: "WH01",
      },
      {
        DocEntry: 1,
        LineNum: 1,
        ItemCode: "B00001",
        Dscription: "Industrial Bolts Box",
        Quantity: 20,
        Price: 45.50,
        LineTotal: 910.00,
        WhsCode: "WH01",
      }
    ]
  },
  {
    DocEntry: 2,
    DocNum: 10002,
    DocDate: "2024-05-12",
    DocDueDate: "2024-05-22",
    CardCode: "C00002",
    CardName: "Globex Corporation",
    DocTotal: 1150.00,
    DocumentStatus: "bost_Close",
    DocumentLines: [
      {
        DocEntry: 2,
        LineNum: 0,
        ItemCode: "A00002",
        Dscription: "Steel Beam 20ft",
        Quantity: 5,
        Price: 230.00,
        LineTotal: 1150.00,
        WhsCode: "WH02",
      }
    ]
  }
];
