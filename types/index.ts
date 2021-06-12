export interface Good {
  cost: number;
  dealer: number;
  help: number;
  id: string;
  image: string;
  level: number;
  name: string;
  sell_price: number;
  time: number;
  xp: number;
}

export interface Feed {
  dealer: number;
  help: number;
  level: number;
  materials: [
    {
      id: string;
      quantity: number;
    }
  ];
  name: string;
  sell_price: number;
  time: number;
  xp: number;
}
