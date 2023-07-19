import axios from "axios" 
import { BASE_URL } from "../services/helper";
export const getUser = () => async(dispatch)=>{
    try{
    dispatch({
        type:"GET_USER_REQUEST",
    })
    
    const {data} = await axios.get(`${BASE_URL}/api/v1/user`, {withCredentials:true});

    dispatch({
        type:"GET_USER_SUCESS",
        payload: data.user,
    })

    }
    catch(error){
        dispatch({
            type:"GET_USER_FAILURE",
            payload: error.response.data.message,
        })
    
    }
}

export const login = (email,password) => async(dispatch)=>{
    try{
    dispatch({
        type:"LOGIN_REQUEST",
    })
    
    const {data} = await axios.post(`${BASE_URL}/api/v1/login`,{
        email,password
    },{
        headers:{
            "Content-Type":"application/json",
        },
        withCredentials:true,
    })

    // const data = fetch(`${BASE_URL}/api/v1/login`,{
    //     method:"POST",
    //     headers:{
    //         "Accept":"application/json",
    //         "Content-Type":"application/json",
    //     },
    //     body:JSON.stringify({email,password})
    // }).then(res=>res.json()).then(data=>console.log(data))



    dispatch({
        type:"LOGIN_SUCESS",
        payload: data.message,
    })

    }
    catch(error){
        dispatch({
            type:"LOGIN_FAILURE",
            payload: error.response.data.message,
        })
    
    }
    
}


export const logout = () => async(dispatch)=>{
    try{
    dispatch({
        type:"LOGOUT_REQUEST",

    })
    
    const {data} = await axios.get(`${BASE_URL}/api/v1/logout`,{withCredentials:true})

    dispatch({
        type:"LOGOUT_SUCESS",
        payload: data.message,
    })

    }
    catch(error){
        dispatch({
            type:"LOGOUT_FAILURE",
            payload: error.response.data.message,
        })
    
    }
}

export const loadUser = () => async(dispatch)=>{
    try{
    dispatch({
        type:"LOAD_USER_REQUEST",

    })
    
    const {data} = await axios.get(`${BASE_URL}/api/v1/me`,{withCredentials:true})

    dispatch({
        type:"LOAD_USER_SUCESS",
        payload: data.user,
    })

    }
    catch(error){
        dispatch({
            type:"LOAD_USER_FAILURE",
            payload: error.response.data.message,
        })
    
    }
}

export const updateUser = (name,email,password,skills, about ) => async(dispatch)=>{
    try{
    dispatch({
        type:"UPDATE_USER_REQUEST",
    })
    
    const {data} = await axios.put(`${BASE_URL}/api/v1/admin/update`,{
        name,email,password,skills, about
    },{
        headers:{
            "Content-Type":"application/json",
        },
        withCredentials:true
    })

    dispatch({
        type:"UPDATE_USER_SUCESS",
        payload: data.message,
    })

    }
    catch(error){
        dispatch({
            type:"UPDATE_USER_FAILURE",
            payload: error.response.data.message,
        })
    
    }
}


export const addTimeline = (title, description, date) => async(dispatch)=>{
    try{
    dispatch({
        type:"ADD_TIMELINE_REQUEST",
    });
    
    const {data} = await axios.post(`${BASE_URL}/api/v1/admin/timeline/add`,{
        title, description, date
    },{
        headers:{
            "Content-Type":"application/json",
        },
        withCredentials:true
    })


    dispatch({
        type:"ADD_TIMELINE_SUCESS",
        payload: data.message,
    })

    }
    catch(error){
        dispatch({
            type:"ADD_TIMELINE_FAILURE",
            payload: error.response.data.message,
        });
    }
}


export const  deleteTimeline = (id) => async(dispatch)=>{
    try{
    dispatch({
        type:"DELETE_TIMELINE_REQUEST",
    });
    
const {data} = await axios.delete(`${BASE_URL}/api/v1/admin/timeline/${id}`,{withCredentials:true})


    dispatch({
        type:"DELETE_TIMELINE_SUCESS",
        payload: data.message,
    })

    }
    catch(error){
        dispatch({
            type:"DELETE_TIMELINE_FAILURE",
            payload: error.response.data.message,
        });
    }
}

export const addYoutube = (title, url, image) => async(dispatch)=>{
    try{
    dispatch({
        type:"ADD_YOUTUBE_REQUEST",
    });
    
    const {data} = await axios.post(`${BASE_URL}/api/v1/admin/youtube/add`,{
        title, url, image
    },{
        headers:{
            "Content-Type":"application/json",
        },
        withCredentials:true
    })


    dispatch({
        type:"ADD_YOUTUBE_SUCESS",
        payload: data.message,
    })

    }
    catch(error){
        dispatch({
            type:"ADD_YOUTUBE_FAILURE",
            payload: error.response.data.message,
        });
    }
}


export const  deleteYoutube = (id) => async(dispatch)=>{
    try{
    dispatch({
        type:"DELETE_YOUTUBE_REQUEST",
    });
    
    const {data} = await axios.delete(`${BASE_URL}/api/v1/admin/youtube/${id}`,{withCredentials:true})


    dispatch({
        type:"DELETE_YOUTUBE_SUCESS",
        payload: data.message,
    })

    }
    catch(error){
        dispatch({
            type:"DELETE_YOUTUBE_FAILURE",
            payload: error.response.data.message,
        });
    }
}



export const addProject = (title, url, image, description, techStack) => async(dispatch)=>{
    try{
    dispatch({
        type:"ADD_PROJECT_REQUEST",
    });
    
    const {data} = await axios.post(`${BASE_URL}/api/v1/admin/project/add`,{
        title, url, image, description, techStack
    },{
        headers:{
            "Content-Type":"application/json",
        },
        withCredentials:true
    })


    dispatch({
        type:"ADD_PROJECT_SUCESS",
        payload: data.message,
    })

    }
    catch(error){
        dispatch({
            type:"ADD_PROJECT_FAILURE",
            payload: error.response.data.message,
        });
    }
}


export const  deleteProject = (id) => async(dispatch)=>{
    try{
    dispatch({
        type:"DELETE_PROJECT_REQUEST",
    });
    
    const {data} = await axios.delete(`${BASE_URL}/api/v1/admin/project/${id}`,{withCredentials:true})


    dispatch({
        type:"DELETE_PROJECT_SUCESS",
        payload: data.message,
    })

    }
    catch(error){
        dispatch({
            type:"DELETE_PROJECT_FAILURE",
            payload: error.response.data.message,
        });
    }
}


export const ContactUs = (name, email, message) => async(dispatch)=>{
    try{
    dispatch({
        type:"CONTACT_US_REQUEST",
    });
    
    const {data} = await axios.post(`${BASE_URL}/api/v1/contact`,{
      name, email, message
    },{
        headers:{
            "Content-Type":"application/json",
        },
        withCredentials:true
    })

    dispatch({
        type:"CONTACT_US_SUCESS",
        payload: data.message,
    })

    }
    catch(error){
        dispatch({
            type:"CONTACT_US_FAILURE",
            payload: error.response.data.message,
        });
    }
}

