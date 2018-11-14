export const SET_PERSON = "SET_PERSON";
export const SET_PERSON_DATA = "SET_PERSON_DATA";
export const setPerson = payload => ({ type:SET_PERSON, payload});
const setDataPerson = payload => ({type:SET_PERSON_DATA,payload});
export const setSeletedPerson = payload => {
    return dispatch => {
        //Activas en el estado un indicador de busqueda de datos
        dispatch(setPerson(payload));

        const personData = ["Jose Antonio","Jesus Antonio","Maria Jose","Mariela Gonzalez"];
        //modificas el estado con el resultado de tu promise(fetch)
        dispatch(setDataPerson({person:payload, personData}))
    }
};