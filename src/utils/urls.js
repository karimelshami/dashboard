const BaseUrls = {
    apiStaticAdminBaseUrl: `${process.env.REACT_APP_STATIC_ADMIN_URL}/api`,
};

const Urls = {
    portalCommon: {
        getCountries: BaseUrls ? `${BaseUrls.apiStaticAdminBaseUrl}/Country/GetSupportedCountries` : ''
    },
    portalDashboard: {
        addAreaByCityId: BaseUrls ? `${BaseUrls.apiStaticAdminBaseUrl}/area/create` : '',
        addCityByCountryId: BaseUrls ? `${BaseUrls.apiStaticAdminBaseUrl}/city/create` : '',
        addInsuranceByCountryId: BaseUrls ? `${BaseUrls.apiStaticAdminBaseUrl}/insurance/create` : '',
        addSpecialityByCountryId: BaseUrls ? `${BaseUrls.apiStaticAdminBaseUrl}/specialty/create` : '',
        addAreaNeighbour : BaseUrls ? `${BaseUrls.apiStaticAdminBaseUrl}/area/CreateNeighbour` : '',

        editAreaByCityId: BaseUrls ? `${BaseUrls.apiStaticAdminBaseUrl}/area/update` : '',
        editCityByCountryId: BaseUrls ? `${BaseUrls.apiStaticAdminBaseUrl}/city/update` : '',
        editInsuranceByCountryId: BaseUrls ? `${BaseUrls.apiStaticAdminBaseUrl}/insurance/update` : '',
        editSpecialityByCountryId: BaseUrls ? `${BaseUrls.apiStaticAdminBaseUrl}/specialty/update` : '',

        getCitiesByCountryId: BaseUrls ? `${BaseUrls.apiStaticAdminBaseUrl}/city/GetCitiesByCountryId` : '',
        getAreaNeighbours :BaseUrls ? `${BaseUrls.apiStaticAdminBaseUrl}/area/GetNeighboursByAreaId` : '',
        getInsurancesByCountryId: BaseUrls ? `${BaseUrls.apiStaticAdminBaseUrl}/insurance/GetInsuranceProvidersByCountryId` : '',
        getMainSpecialtiesByCountryId: BaseUrls ? `${BaseUrls.apiStaticAdminBaseUrl}/specialty/getMainCountrySpecialties` : '',
        getSubSpecialtiesByCountryId: BaseUrls ? `${BaseUrls.apiStaticAdminBaseUrl}/specialty/getSubCountrySpecialties` : '',
        getAreasByCityId: BaseUrls ? `${BaseUrls.apiStaticAdminBaseUrl}/area/GetAreasByCityId` : '',
        
        getRelatedSpecialtiesForMain: BaseUrls ? `${BaseUrls.apiStaticAdminBaseUrl}/specialty/getMainSpecialties` : '',
        getRelatedSpecialtiesForSub: BaseUrls ? `${BaseUrls.apiStaticAdminBaseUrl}/specialty/getSubSpecialties` : '',

        deleteAreaNeigbour : BaseUrls ? `${BaseUrls.apiStaticAdminBaseUrl}/area/DeleteNeighbour` : '',
    },
    portalLogin: {
        authUser: BaseUrls ? `${BaseUrls.apiStaticAdminBaseUrl}/user/login` : '',
    }
}

export { Urls };