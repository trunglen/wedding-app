import { environment } from "../../environments/environment";

export const apiURL = {
    //category api
    getCategories: getUrl('admin/category/list'),
    createCategory: getUrl('admin/category/create'),
    updateCategory: getUrl('admin/category/update'),
    deleteCategory: getUrl('admin/category/delete'),
    //post api
    getPosts: getUrl('admin/post/list'),
    createPost: getUrl('admin/post/create'),
    updatePost: getUrl('admin/post/update'),
    uploadThumb: getUrl('admin/post/upload/thumb'),
    deletePost: getUrl('admin/post/delete'),
    approvePost: getUrl('admin/post/approve'),
    notifyPost: getUrl('admin/post/notify'),
    //user api
    getUsers: getUrl('admin/user/list'),
    getUser: getUrl('admin/user/get'),
    createUser: getUrl('admin/user/create'),
    deleteUser: getUrl('admin/user/delete'),
    changePassword: getUrl('admin/user/password/change'),
    //auth api
    login: getUrl('auth/login'),
    //report
    // getGeneralReport: getUrl('admin/report/general'),
    //manager api
    getWarningMissingWedding: getUrl('admin/manager/wedding/warning_missing/list'),
    getWarningMoveWedding: getUrl('admin/manager/wedding/warning_move/list'),
    getManagers: getUrl('admin/manager/list'),
    createWedding: getUrl('manager/wedding/create'),
    getWeddings: getUrl('manager/wedding/list'),
    getWedding: getUrl('manager/wedding/detail'),
    deleteWedding: getUrl('manager/wedding/delete'),
    updateWedding: getUrl('manager/wedding/update'),

    //supervisor
    getSupervisor: getUrl('admin/supervisor/list'),
    updateSupervisor: getUrl('admin/user/supervisor/update'),
    //report
    getRestaurantReport: getUrl('admin/report/restaurant'),
    getWeddingReport: getUrl('admin/report/wedding'),
    getGeneralReport: getUrl('supervisor/report/general'),



}
function getUrl(endPoint: string) {
    return environment.baseURL + endPoint;
}