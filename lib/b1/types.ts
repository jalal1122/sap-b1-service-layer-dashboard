// Business Partner (Customer/Vendor)
export interface OCRD {
  CardCode: string; // Primary Key
  CardName: string;
  CardType: "C" | "S" | "L"; // Customer, Supplier, Lead
  GroupCode: number;
  Balance: number;
  Currency: string;
  Phone1: string | null;
  E_Mail: string | null;
  CreateDate: string;
}

// Item Master Data
export interface OITM {
  ItemCode: string; // Primary Key
  ItemName: string;
  ItemGrpCod: number;
  OnHand: number;
  IsCommited: number;
  OnOrder: number;
  MinStock: number;
  AvgPrice: number;
  VatGourpSa: string;
}

// Document Line (Sales Order Line)
export interface RDR1 {
  DocEntry: number; // Foreign Key to ORDR
  LineNum: number;
  ItemCode: string;
  Dscription: string;
  Quantity: number;
  Price: number;
  LineTotal: number;
  WhsCode: string;
}

// Document Header (Sales Order Header)
export interface ORDR {
  DocEntry: number; // Primary Key
  DocNum: number;
  DocDate: string;
  DocDueDate: string;
  CardCode: string;
  CardName: string;
  DocTotal: number;
  DocumentStatus: "bost_Open" | "bost_Close";
  DocumentLines: RDR1[];
}

export interface B1Session {
  SessionId: string;
  Version: string;
  SessionTimeout: number;
}
