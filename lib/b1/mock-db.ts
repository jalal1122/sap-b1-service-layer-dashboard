import { OCRD, OITM, ORDR } from "./types";

export const businessPartners: OCRD[] = [
  { CardCode: "C00001", CardName: "Acme Corp", CardType: "C", GroupCode: 100, Balance: 15400.50, Currency: "USD", Phone1: "+1-555-0101", E_Mail: "purchasing@acmecorp.com", CreateDate: "2023-01-15" },
  { CardCode: "C00002", CardName: "Globex Corporation", CardType: "C", GroupCode: 100, Balance: 0, Currency: "USD", Phone1: "+1-555-0102", E_Mail: "info@globex.com", CreateDate: "2023-03-22" },
  { CardCode: "C00003", CardName: "Initech", CardType: "C", GroupCode: 100, Balance: 45000.00, Currency: "USD", Phone1: "+1-555-0103", E_Mail: "billing@initech.com", CreateDate: "2023-05-11" },
  { CardCode: "C00004", CardName: "Umbrella Corp", CardType: "C", GroupCode: 100, Balance: -1200.00, Currency: "USD", Phone1: "+1-555-0104", E_Mail: "accounts@umbrella.com", CreateDate: "2023-06-05" },
  { CardCode: "C00005", CardName: "Massive Dynamic", CardType: "C", GroupCode: 100, Balance: 120500.25, Currency: "USD", Phone1: "+1-555-0105", E_Mail: "finance@massive.com", CreateDate: "2023-08-19" },
  { CardCode: "C00006", CardName: "Stark Industries", CardType: "C", GroupCode: 100, Balance: 8900.00, Currency: "USD", Phone1: "+1-555-0106", E_Mail: "procurement@stark.com", CreateDate: "2023-09-01" },
  { CardCode: "C00007", CardName: "Wayne Enterprises", CardType: "C", GroupCode: 100, Balance: 55000.00, Currency: "USD", Phone1: "+1-555-0107", E_Mail: "purchasing@wayne.com", CreateDate: "2023-10-15" },
  { CardCode: "V00001", CardName: "SteelSuppliers Ltd", CardType: "S", GroupCode: 101, Balance: -5200.00, Currency: "USD", Phone1: "+44-20-7946-0958", E_Mail: "sales@steelsuppliers.co.uk", CreateDate: "2022-11-05" },
  { CardCode: "V00002", CardName: "Industrial Metals Co", CardType: "S", GroupCode: 101, Balance: -12500.00, Currency: "USD", Phone1: "+44-20-7946-0959", E_Mail: "orders@industrialmetals.com", CreateDate: "2023-01-10" },
  { CardCode: "V00003", CardName: "Fasteners Direct", CardType: "S", GroupCode: 101, Balance: 0, Currency: "USD", Phone1: "+44-20-7946-0960", E_Mail: "sales@fasteners.com", CreateDate: "2023-04-22" }
];

export const items: OITM[] = [
  { ItemCode: "A00001", ItemName: "Steel Beam 10ft", ItemGrpCod: 105, OnHand: 150, IsCommited: 20, OnOrder: 50, MinStock: 100, AvgPrice: 120.00, VatGourpSa: "X0" },
  { ItemCode: "A00002", ItemName: "Steel Beam 20ft", ItemGrpCod: 105, OnHand: 45, IsCommited: 5, OnOrder: 100, MinStock: 50, AvgPrice: 230.00, VatGourpSa: "X0" },
  { ItemCode: "A00003", ItemName: "Steel Beam 30ft", ItemGrpCod: 105, OnHand: 20, IsCommited: 15, OnOrder: 0, MinStock: 30, AvgPrice: 345.00, VatGourpSa: "X0" },
  { ItemCode: "B00001", ItemName: "Industrial Bolts Box", ItemGrpCod: 106, OnHand: 500, IsCommited: 100, OnOrder: 0, MinStock: 200, AvgPrice: 45.50, VatGourpSa: "X0" },
  { ItemCode: "B00002", ItemName: "Hex Nuts Box", ItemGrpCod: 106, OnHand: 1200, IsCommited: 300, OnOrder: 500, MinStock: 500, AvgPrice: 25.00, VatGourpSa: "X0" },
  { ItemCode: "B00003", ItemName: "Washers Box", ItemGrpCod: 106, OnHand: 800, IsCommited: 50, OnOrder: 200, MinStock: 400, AvgPrice: 15.00, VatGourpSa: "X0" },
  { ItemCode: "C00001", ItemName: "Welding Wire 5kg", ItemGrpCod: 107, OnHand: 40, IsCommited: 45, OnOrder: 100, MinStock: 50, AvgPrice: 65.00, VatGourpSa: "X0" },
  { ItemCode: "C00002", ItemName: "Welding Gas Cylinder", ItemGrpCod: 107, OnHand: 15, IsCommited: 5, OnOrder: 10, MinStock: 20, AvgPrice: 150.00, VatGourpSa: "X0" },
  { ItemCode: "D00001", ItemName: "Safety Helmet", ItemGrpCod: 108, OnHand: 120, IsCommited: 0, OnOrder: 0, MinStock: 50, AvgPrice: 35.00, VatGourpSa: "X0" },
  { ItemCode: "D00002", ItemName: "Safety Gloves Pair", ItemGrpCod: 108, OnHand: 350, IsCommited: 20, OnOrder: 100, MinStock: 100, AvgPrice: 12.50, VatGourpSa: "X0" }
];

export const salesOrders: ORDR[] = [
  {
    DocEntry: 1, DocNum: 10001, DocDate: "2024-05-10", DocDueDate: "2024-05-20", CardCode: "C00001", CardName: "Acme Corp", DocTotal: 3310.00, DocumentStatus: "bost_Open",
    DocumentLines: [
      { DocEntry: 1, LineNum: 0, ItemCode: "A00001", Dscription: "Steel Beam 10ft", Quantity: 20, Price: 120.00, LineTotal: 2400.00, WhsCode: "WH01" },
      { DocEntry: 1, LineNum: 1, ItemCode: "B00001", Dscription: "Industrial Bolts Box", Quantity: 20, Price: 45.50, LineTotal: 910.00, WhsCode: "WH01" }
    ]
  },
  {
    DocEntry: 2, DocNum: 10002, DocDate: "2024-05-12", DocDueDate: "2024-05-22", CardCode: "C00002", CardName: "Globex Corporation", DocTotal: 1150.00, DocumentStatus: "bost_Close",
    DocumentLines: [
      { DocEntry: 2, LineNum: 0, ItemCode: "A00002", Dscription: "Steel Beam 20ft", Quantity: 5, Price: 230.00, LineTotal: 1150.00, WhsCode: "WH02" }
    ]
  },
  {
    DocEntry: 3, DocNum: 10003, DocDate: "2024-05-15", DocDueDate: "2024-05-25", CardCode: "C00003", CardName: "Initech", DocTotal: 8450.00, DocumentStatus: "bost_Open",
    DocumentLines: [
      { DocEntry: 3, LineNum: 0, ItemCode: "A00003", Dscription: "Steel Beam 30ft", Quantity: 20, Price: 345.00, LineTotal: 6900.00, WhsCode: "WH01" },
      { DocEntry: 3, LineNum: 1, ItemCode: "C00002", Dscription: "Welding Gas Cylinder", Quantity: 10, Price: 150.00, LineTotal: 1500.00, WhsCode: "WH01" },
      { DocEntry: 3, LineNum: 2, ItemCode: "D00002", Dscription: "Safety Gloves Pair", Quantity: 4, Price: 12.50, LineTotal: 50.00, WhsCode: "WH01" }
    ]
  },
  {
    DocEntry: 4, DocNum: 10004, DocDate: "2024-05-18", DocDueDate: "2024-05-28", CardCode: "C00005", CardName: "Massive Dynamic", DocTotal: 15000.00, DocumentStatus: "bost_Open",
    DocumentLines: [
      { DocEntry: 4, LineNum: 0, ItemCode: "A00002", Dscription: "Steel Beam 20ft", Quantity: 50, Price: 230.00, LineTotal: 11500.00, WhsCode: "WH02" },
      { DocEntry: 4, LineNum: 1, ItemCode: "D00001", Dscription: "Safety Helmet", Quantity: 100, Price: 35.00, LineTotal: 3500.00, WhsCode: "WH02" }
    ]
  },
  {
    DocEntry: 5, DocNum: 10005, DocDate: "2024-05-19", DocDueDate: "2024-05-29", CardCode: "C00006", CardName: "Stark Industries", DocTotal: 4600.00, DocumentStatus: "bost_Close",
    DocumentLines: [
      { DocEntry: 5, LineNum: 0, ItemCode: "A00001", Dscription: "Steel Beam 10ft", Quantity: 30, Price: 120.00, LineTotal: 3600.00, WhsCode: "WH01" },
      { DocEntry: 5, LineNum: 1, ItemCode: "B00002", Dscription: "Hex Nuts Box", Quantity: 40, Price: 25.00, LineTotal: 1000.00, WhsCode: "WH01" }
    ]
  },
  {
    DocEntry: 6, DocNum: 10006, DocDate: "2024-05-20", DocDueDate: "2024-05-30", CardCode: "C00007", CardName: "Wayne Enterprises", DocTotal: 6725.00, DocumentStatus: "bost_Open",
    DocumentLines: [
      { DocEntry: 6, LineNum: 0, ItemCode: "C00001", Dscription: "Welding Wire 5kg", Quantity: 100, Price: 65.00, LineTotal: 6500.00, WhsCode: "WH01" },
      { DocEntry: 6, LineNum: 1, ItemCode: "B00003", Dscription: "Washers Box", Quantity: 15, Price: 15.00, LineTotal: 225.00, WhsCode: "WH01" }
    ]
  },
  {
    DocEntry: 7, DocNum: 10007, DocDate: "2024-05-21", DocDueDate: "2024-05-31", CardCode: "C00001", CardName: "Acme Corp", DocTotal: 1250.00, DocumentStatus: "bost_Open",
    DocumentLines: [
      { DocEntry: 7, LineNum: 0, ItemCode: "B00002", Dscription: "Hex Nuts Box", Quantity: 50, Price: 25.00, LineTotal: 1250.00, WhsCode: "WH01" }
    ]
  },
  {
    DocEntry: 8, DocNum: 10008, DocDate: "2024-05-22", DocDueDate: "2024-06-01", CardCode: "C00004", CardName: "Umbrella Corp", DocTotal: 840.00, DocumentStatus: "bost_Close",
    DocumentLines: [
      { DocEntry: 8, LineNum: 0, ItemCode: "A00001", Dscription: "Steel Beam 10ft", Quantity: 7, Price: 120.00, LineTotal: 840.00, WhsCode: "WH02" }
    ]
  }
];
