// 上面这个代码处理过度动画（默认加上不用管）
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.body.classList.add('sidenav-pinned')
    document.body.classList.add('ready')
  }, 200)
})

function tip(msg = 'hints'){
  const toastBox =  document.querySelector('#myToast')
			//the boostrap
			const toast = new bootstrap.Toast(toastBox, {
				animation: true,
				autohide: true,
				delay: 2000,


			})
			toastBox.querySelector('.toast-body').innerHTML = msg

			toast.show()
} 

//setting request root url
axios.defaults.baseURL = 'http://ajax-api.itheima.net'

//username (many pages needed)
const username = document.querySelector('.navbar-nav .font-weight-bold')

if(username){
	username.innerHTML = localStorage.getItem('user-username')


}

const logout = document.querySelector('#logout')
if(logout){
	logout.addEventListener('click',function(){

		//remove the token 
	     localStorage.removeItem('user-token')
		 localStorage.removeItem('user-username')



		// go to login.html

		location.href= './login.html'

	})

}

//request lanjieqi
axios.interceptors.request.use(
    function (config) {
        //console.log('before request')
        //alert('sending request')
      // Do something before sending the request
      //console.log('config', config)
      config.headers.authorization
      const token = localStorage.getItem('user-token')
      if(token){
        config.headers.authorization = token
      }

     return config;
    },
    function (error) {
      // Handle the error
      return Promise.reject(error);
    }
  );

  //response

  axios.interceptors.response.use(
    function (response) {
       //alert('sucessful response')
       //console.log('obtaining a successful response')
       //console.log('response',response)
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

   