
export interface IModel {
  id: number;
}
export interface IModelTimestamp extends IModel {
  deleted_at?: Date;
  updated_at?: Date;
  created_at?: Date;
}

export interface IReporte extends IModelTimestamp {
    Id_Usuario: string;
    Reporte: string;
    tipo: string;
}
