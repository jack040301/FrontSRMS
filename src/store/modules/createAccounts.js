import axios from "axios"


const state = {
 

}
const getters = {

 
      
}
const actions = {
     createProfessor({commit},formData) {
        axios.post('/api/createaccprof', formData).then((response)=>{
        

            console.log('create professor accounts' , response.data);

            
             }).catch((errors)=>{
  
             this.error =  errors.response.data;
   
             })
     },


     //update acccount

     //student

     //staff

    


                    //Manager

                    updateAccountManager({commit},route,formData){
                        axios.put('/api/updateManager/'+route, formData).then((response)=>{
                        
                
                            console.log('create professor accounts' , response.data);
                
                            
                             }).catch((errors)=>{
                  
                             this.error =  errors.response.data;
                   
                             })
                
                            },
        



   

}


const mutations = {
 
}


export default {
    namespace:true,
    state,
    getters,
    actions,
    mutations
}