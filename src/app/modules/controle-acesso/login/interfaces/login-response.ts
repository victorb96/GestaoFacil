import { Usuario } from "../../../../utils/interfaces/usuario"

export interface LoginResponse {
    usuario: Usuario,
    token: string,
    menu: Menu[]
}

export interface Menu{
    id: number,
    nome: string,
    icone: string,
    expanded: boolean,
    menus: SubMenu[]
}

export interface SubMenu{
    id: number,
    nome: string,
    icone: string,
    rota: string,
    idPai: number
}
