export interface OverallItem {
  imp: number;
  click: number;
  cost: number;
  conv: number;
  convValue: number;
  ctr: number;
  cvr: number;
  cpc: number;
  cpa: number;
  roas: number;
  date: string;
}

export type OverallItems = OverallItem[];

export interface Overall {
  daily: OverallItems;
}
