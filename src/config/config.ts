
// Variables enviroments
let config: any = {
    apiUrl: process.env.REACT_APP_API_URL,
    apiGeneralHost: process.env.REACT_APP_SERVICE_GENERAL_HOST,


    pathListCountry: process.env.REACT_APP_PATH_LIST_COUNTRY,
    pathListDepartament: process.env.REACT_APP_PATH_LIST_DEPARTAMENT,
    pathListCities: process.env.REACT_APP_PATH_LIST_CITIES,

    pathListTypeProcedure: process.env.REACT_APP_PATH_LIST_TYPE_PROCEDURE,
    pathListDependency: process.env.REACT_APP_PATH_LIST_DEPENDENCIES,
    pathListDistricts: process.env.REACT_APP_PATH_LIST_DISTR_JUDICIALES,

    //
    pathListCategoryGeneral: process.env.REACT_APP_PATH_LIST_CATEGORY_GENERAL_FONSET,
    pathListCategorySpecify: process.env.REACT_APP_PATH_LIST_CATEGORY_ESP_FONSET,
    pathListGoods: process.env.REACT_APP_PATH_LIST_BIEN_FONSET,
    pathListUnities: process.env.REACT_APP_PATH_LIST_UNI_MEDIDA,
    pathListSubUnities: process.env.REACT_APP_PATH_LIST_SUB_UNI_MEDIDA

};

export default config;
