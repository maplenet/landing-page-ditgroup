export interface Services {
  title: string;
  description: string[];
  list?: (string | string[])[];
}

export interface ServiceItem {
  title: string;
  icon: any;
  description?: string;
}