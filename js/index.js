document.addEventListener('DOMContentLoaded', async function(){

    // Adding a request interceptor

    // Adding a response interceptor
     axios.interceptors.response.use(
    function (response) {
       alert('sucessful response')
       console.log('obtaining a successful response')
       console.log('response',response)
      // Do something with the response data
      //return response;
      return response.data
      
    },
    function (error) {
      // Handle the error
      //alert('error')
      console.log('a failure error')
      console.dir(error)
      
      if (error.response.status === 401){
        alert('token is invalid')
        location.href ='.login.html'
        localStorage.removeItem('user-token')
        localStorage.removeItem('user-username')
        return
      }
      return Promise.reject(error);
    }
  );
  
    console.log('ok')
  
    const res = await axios.get('/dashboard',{
        //headers:{
            //authorization:localStorage.getItem('user-token'),
        //},

    })
    console.log('obtained data', res)
    

})

