import { SessionFactory } from "../../x/storage.utils";

export class ListComponent {
    userInfo = SessionFactory.getInfo()
    p = 1
    pageConfig = { itemsPerPage: 2, currentPage: this.p }
}
