export const SET_PERSON = "SET_PERSON";
export const SET_PERSON_DATA = "SET_PERSON_DATA";

const setPerson = payload => ({ type:SET_PERSON, payload});
const setDataPerson = payload => ({type:SET_PERSON_DATA,payload});

export const setSeletedPerson = payload => {
    return dispatch => {
        //Activas en el estado un indicador de busqueda de datos
        dispatch(setPerson(payload));
    }
};

export const getDataPeople = ()=>{
    const personData = [
                {
                    name:"Jose Antonio",
                    lastname:"Gonzalez",
                    perfil:"https://img2.nickiswift.com/img/gallery/celeb-reactions-to-time-person-of-the-year/ellen-degeneres-1512671685.jpg",
                    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel modi praesentium nisi eius veniam"
                },
                {
                    name:"Jesus Antonio",
                    lastname:"Gonzalez",
                    perfil:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZdaIj40vlNy5-KRzeRtBc4nQO3qohNEQdfJydorNEXmUVwVyn",
                    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel modi praesentium nisi eius veniam"
                },
                {
                    name:"Maria Jose",
                    lastname:"Gonzalez",
                    perfil:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxT450zzajZ_o5sjthQf1x1vvjZiLfTjQpfiJCtdcOGZQeAlKv3Q",
                    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel modi praesentium nisi eius veniam"
                },
                {
                    name:"Mariela Gonzalez",
                    lastname:"Gonzalez",
                    perfil:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7kP13kuc73rkTwLU0TDltBn-OTS1fj7fyKXs3ogYsHFTPJt1bBA",
                    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel modi praesentium nisi eius veniam"
                }
    ];

    return dispatch => {
        console.log("ejecutando funcion");
        //Activas en el estado un indicador de busqueda de datos
        dispatch(setDataPerson(personData));
    }
}