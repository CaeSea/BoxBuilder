export interface IProducts {
  accordionMaxProducts: IAccordionMaxProducts[];
  productId: number;
  name: string;
  price: number;
  image: string;
  accordion: number;
  package: string[];
  stock: number;
  quantityOrdered?: number;
  max: number;
}

export interface IAccordionMaxProducts {
  accordion1: number;
  accordion2: number;
  accordion3: number;
  accordion4: number;
  accordion5: number;
}
